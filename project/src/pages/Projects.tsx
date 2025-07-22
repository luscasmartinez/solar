import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // Adicione outros campos conforme necessário
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectsQuery = query(projectsCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(projectsQuery);
        
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        
        setProjects(projectsData);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 inline-block"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-800 mb-4">
            Nossos Projetos
          </h1>
          <p className="text-xl text-primary-600">
            Conheça algumas das nossas instalações solares mais impactantes.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-primary-600">Nenhum projeto encontrado</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300"
              >
                <Link to={`/projects/${project.id}`} className="block">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <Link to={`/projects/${project.id}`} className="block">
                    <h3 className="text-xl font-display font-semibold text-primary-800 mb-2 hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-primary-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      Ver detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;