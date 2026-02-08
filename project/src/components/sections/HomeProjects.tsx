import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectService } from '../../services/projectService';
import type { Project } from '../../types/project';

const MAX_PROJECTS = 12;

function useSlidesPerView() {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setSlidesPerView(1);
      else if (w < 1024) setSlidesPerView(2);
      else setSlidesPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return slidesPerView;
}

const HomeProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = useSlidesPerView();

  useEffect(() => {
    const load = async () => {
      try {
        const all = await projectService.getAllProjects();
        setProjects(all.slice(0, MAX_PROJECTS));
      } catch (e) {
        console.error('Erro ao carregar projetos:', e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const maxIndex = Math.max(0, projects.length - slidesPerView);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  if (loading) {
    return (
      <section id="home-projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 inline-block" />
        </div>
      </section>
    );
  }

  if (projects.length === 0) return null;

  const translatePercent = slidesPerView > 0 ? (currentIndex * 100) / slidesPerView : 0;

  return (
    <section id="home-projects" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-800 mb-4">
            Projetos em destaque
          </h2>
          <p className="text-lg text-primary-600">
            Conheça alguns dos nossos clientes e instalações na região. Qualidade e confiança em cada projeto.
          </p>
        </div>

        <div className="relative">
          {/* Botões prev/next */}
          {projects.length > slidesPerView && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Projetos anteriores"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-12 h-12 rounded-full bg-white shadow-medium border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximos projetos"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-12 h-12 rounded-full bg-white shadow-medium border border-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-50 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Carrossel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full min-w-0 px-2 md:px-3"
                  style={{
                    width: `${100 / slidesPerView}%`,
                  }}
                >
                  <div className="bg-primary-50 rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                    <Link to={`/projects/${project.id}`} className="block flex-shrink-0">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <Link to={`/projects/${project.id}`} className="block flex-shrink-0">
                        <h3 className="text-lg font-display font-semibold text-primary-800 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                      </Link>
                      <p className="text-primary-600 text-sm mb-3 line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      {project.location && (
                        <p className="text-xs text-primary-500 mb-2">{project.location}</p>
                      )}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags?.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-primary-100 text-primary-600 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors"
                      >
                        Ver detalhes →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 ${
                    i === currentIndex
                      ? 'bg-primary-500 scale-125'
                      : 'bg-primary-200 hover:bg-primary-300'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-all duration-300 hover:scale-105 active:scale-[0.98]"
            >
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
