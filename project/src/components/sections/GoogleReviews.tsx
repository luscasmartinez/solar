import React, { useState, useEffect, useRef } from 'react';

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
  time?: number;
};

const GoogleReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  // Configurações da API do Google (em produção, use variáveis de ambiente)
  const apiKey = 'AIzaSyB4IZ8faXDOJGJP5uJz-QK8e9WsgYbwbkA';
  const placeId = 'ChIJ5Ryi_lm5qpURBALBq-6EOOM';

  // Alternar estado expandido/recolhido
  const toggleExpand = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Buscar avaliações do Google
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`
        );
        
        if (!response.ok) {
          throw new Error('Falha ao buscar avaliações');
        }
        
        const data = await response.json();
        
        if (data.result?.reviews) {
          setReviews(data.result.reviews);
        } else {
          setError('Nenhuma avaliação encontrada');
        }
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
        setError('Não foi possível carregar as avaliações');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  // Ajustar número de slides visíveis conforme tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Mobile
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setSlidesToShow(2);
      } else { // Desktop
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcular largura do slide
  const slideWidth = containerRef.current ? containerRef.current.offsetWidth / slidesToShow : 0;

  // Auto-rotate slides
  useEffect(() => {
    if (reviews.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, reviews.length - slidesToShow + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length, slidesToShow]);

  // Função para formatar a data
  const formatDate = (timestamp?: number) => {
    if (!timestamp) return '';
    return new Date(timestamp * 1000).toLocaleDateString('pt-BR');
  };

  // Função para limitar texto
  const truncateText = (text: string, maxLength: number, index: number) => {
    if (expandedReviews[index] || text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p>Carregando avaliações...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center text-red-500">
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Avaliações no Google</h2>
        <p className="text-center text-gray-600 mb-8">Veja o que nossos clientes estão dizendo</p>

        {reviews.length > 0 ? (
          <>
            <div className="relative overflow-hidden" ref={containerRef}>
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentSlide * slideWidth}px)`,
                  width: `${reviews.length * slideWidth}px`
                }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${slideWidth}px` }}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <img 
                          src={review.profile_photo_url || '/default-avatar.png'} 
                          alt={review.author_name} 
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 truncate">{review.author_name}</h4>
                          <p className="text-gray-500 text-sm">
                            {review.relative_time_description || formatDate(review.time)}
                          </p>
                        </div>
                        <img 
                          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                          alt="Google" 
                          className="h-5 ml-2"
                        />
                      </div>
                      
                      <div className="flex mb-3 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">
                            {i < review.rating ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-700 flex-grow mb-2">
                        "{truncateText(review.text, 150, index)}"
                      </p>
                      
                      {review.text.length > 150 && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-blue-600 text-sm font-medium self-start mt-auto"
                        >
                          {expandedReviews[index] ? 'Ler menos' : 'Ler mais'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              {[...Array(Math.max(1, reviews.length - slidesToShow + 1))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-colors ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Ir para avaliação ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-6">
              <a 
                href={`https://search.google.com/local/writereview?placeid=${placeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Deixe sua avaliação no Google
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </>
        ) : (
          <div className="text-center">
            <p>Nenhuma avaliação disponível no momento.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;