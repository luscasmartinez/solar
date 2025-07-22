import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectService } from '../services/projectService';
import { Project } from '../types/project';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag, Sun, Battery, Leaf } from 'lucide-react';
import toast from 'react-hot-toast';

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'residential':
      return 'Residencial';
    case 'commercial':
      return 'Comercial';
    case 'rural':
      return 'Rural';
    case 'industrial':
      return 'Industrial';
    default:
      return category;
  }
};

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProject(id);
    }
  }, [id]);

  const loadProject = async (projectId: string) => {
    try {
      const projectData = await projectService.getProjectById(projectId);
      setProject(projectData);
    } catch (error) {
      toast.error('Erro ao carregar projeto');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-800 mb-4">
              Projeto não encontrado
            </h2>
            <Link 
              to="/projects"
              className="inline-flex items-center text-primary-500 hover:text-primary-600"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar para projetos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/projects"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar para projetos
          </Link>

          <div>
            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-primary-800 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-primary-600">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="flex items-start space-x-3">
                <Calendar className="text-primary-500" size={24} />
                <div>
                  <h3 className="font-semibold text-primary-800">Duração</h3>
                  <p className="text-primary-600">{project.duration}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="text-primary-500" size={24} />
                <div>
                  <h3 className="font-semibold text-primary-800">Equipe</h3>
                  <ul className="text-primary-600">
                    {project.team.map((member, index) => (
                      <li key={index}>{member}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Tag className="text-primary-500" size={24} />
                <div>
                  <h3 className="font-semibold text-primary-800">Especificações</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {getCategoryLabel(project.category)}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {project.power}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {project.systemType}
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {project.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-primary-800 mb-4">
                Características do Projeto
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center space-x-2 text-primary-600"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-display font-semibold text-primary-800 mb-4">
                  Galeria
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div 
                      key={index}
                      className="aspect-video rounded-xl overflow-hidden"
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Imagem ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
              >
                <Sun size={20} className="mr-2" />
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;