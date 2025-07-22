import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm, useFieldArray } from 'react-hook-form';
import { projectService } from '../../services/projectService';
import { ProjectFormData } from '../../types/project';
import { Save, ArrowLeft, Plus, X } from 'lucide-react';
import toast from 'react-hot-toast';

const ProjectForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(isEditing);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ProjectFormData>({
    defaultValues: {
      title: '',
      description: '',
      fullDescription: '',
      image: '',
      gallery: [],
      tags: [],
      team: [],
      duration: '',
      features: [],
      category: 'residential',
      power: '',
      systemType: 'on-grid',
      location: '',
      completedAt: new Date().toISOString().split('T')[0]
    }
  });

  const { fields: galleryFields, append: appendGallery, remove: removeGallery } = useFieldArray({
    control,
    name: 'gallery'
  });

  const { fields: tagFields, append: appendTag, remove: removeTag } = useFieldArray({
    control,
    name: 'tags'
  });

  const { fields: teamFields, append: appendTeam, remove: removeTeam } = useFieldArray({
    control,
    name: 'team'
  });

  const { fields: featureFields, append: appendFeature, remove: removeFeature } = useFieldArray({
    control,
    name: 'features'
  });

  useEffect(() => {
    if (isEditing && id) {
      loadProject(id);
    }
  }, [id, isEditing]);

  const loadProject = async (projectId: string) => {
    try {
      const project = await projectService.getProjectById(projectId);
      if (project) {
        setValue('title', project.title);
        setValue('description', project.description);
        setValue('fullDescription', project.fullDescription);
        setValue('image', project.image);
        setValue('gallery', project.gallery);
        setValue('tags', project.tags);
        setValue('team', project.team);
        setValue('duration', project.duration);
        setValue('features', project.features);
        setValue('category', project.category);
        setValue('power', project.power);
        setValue('systemType', project.systemType);
        setValue('location', project.location);
        setValue('completedAt', new Date(project.completedAt).toISOString().split('T')[0]);
      }
    } catch (error) {
      toast.error('Erro ao carregar projeto');
      navigate('/admin/projects');
    } finally {
      setInitialLoading(false);
    }
  };

  const onSubmit = async (data: ProjectFormData) => {
    setLoading(true);
    
    try {
      if (isEditing && id) {
        await projectService.updateProject(id, data);
        toast.success('Projeto atualizado com sucesso!');
      } else {
        await projectService.createProject(data);
        toast.success('Projeto criado com sucesso!');
      }
      navigate('/admin/projects');
    } catch (error) {
      toast.error(isEditing ? 'Erro ao atualizar projeto' : 'Erro ao criar projeto');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate('/admin/projects')}
          className="mr-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Editar Projeto' : 'Novo Projeto'}
          </h1>
          <p className="text-gray-600 mt-1">
            {isEditing ? 'Atualize as informações do projeto' : 'Preencha os dados do novo projeto'}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Informações Básicas */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações Básicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título do Projeto *
              </label>
              <input
                {...register('title', { required: 'Título é obrigatório' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ex: Sistema Solar Residencial"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria *
              </label>
              <select
                {...register('category', { required: 'Categoria é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="residential">Residencial</option>
                <option value="commercial">Comercial</option>
                <option value="rural">Rural</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Potência *
              </label>
              <input
                {...register('power', { required: 'Potência é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ex: 10kWp"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Sistema *
              </label>
              <select
                {...register('systemType', { required: 'Tipo de sistema é obrigatório' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="on-grid">On-Grid</option>
                <option value="off-grid">Off-Grid</option>
                <option value="hybrid">Híbrido</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Localização *
              </label>
              <input
                {...register('location', { required: 'Localização é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ex: São Paulo, SP"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duração *
              </label>
              <input
                {...register('duration', { required: 'Duração é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Ex: 3 meses"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data de Conclusão *
              </label>
              <input
                type="date"
                {...register('completedAt', { required: 'Data de conclusão é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição Curta *
              </label>
              <textarea
                {...register('description', { required: 'Descrição é obrigatória' })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Descrição resumida do projeto"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição Completa *
              </label>
              <textarea
                {...register('fullDescription', { required: 'Descrição completa é obrigatória' })}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="Descrição detalhada do projeto"
              />
            </div>
          </div>
        </div>

        {/* Imagens */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Imagens</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Imagem Principal *
              </label>
              <input
                {...register('image', { required: 'Imagem principal é obrigatória' })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder="URL da imagem principal"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Galeria de Imagens
                </label>
                <button
                  type="button"
                  onClick={() => appendGallery('')}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm flex items-center transition-colors"
                >
                  <Plus size={16} className="mr-1" />
                  Adicionar
                </button>
              </div>
              
              <div className="space-y-3">
                {galleryFields.map((field, index) => (
                  <div key={field.id} className="flex gap-3">
                    <input
                      {...register(`gallery.${index}` as const)}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="URL da imagem"
                    />
                    <button
                      type="button"
                      onClick={() => removeGallery(index)}
                      className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tags e Equipe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tags */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Tags</h2>
              <button
                type="button"
                onClick={() => appendTag('')}
                className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm flex items-center transition-colors"
              >
                <Plus size={16} className="mr-1" />
                Adicionar
              </button>
            </div>
            
            <div className="space-y-3">
              {tagFields.map((field, index) => (
                <div key={field.id} className="flex gap-3">
                  <input
                    {...register(`tags.${index}` as const)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Residencial"
                  />
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Equipe */}
          <div className="bg-white rounded-xl shadow-soft p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Equipe</h2>
              <button
                type="button"
                onClick={() => appendTeam('')}
                className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm flex items-center transition-colors"
              >
                <Plus size={16} className="mr-1" />
                Adicionar
              </button>
            </div>
            
            <div className="space-y-3">
              {teamFields.map((field, index) => (
                <div key={field.id} className="flex gap-3">
                  <input
                    {...register(`team.${index}` as const)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Engenheiro Solar"
                  />
                  <button
                    type="button"
                    onClick={() => removeTeam(index)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="bg-white rounded-xl shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Características do Projeto</h2>
            <button
              type="button"
              onClick={() => appendFeature('')}
              className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1 rounded-lg text-sm flex items-center transition-colors"
            >
              <Plus size={16} className="mr-1" />
              Adicionar
            </button>
          </div>
          
          <div className="space-y-3">
            {featureFields.map((field, index) => (
              <div key={field.id} className="flex gap-3">
                <input
                  {...register(`features.${index}` as const)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Ex: Economia de 95% na conta de energia"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/projects')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-300 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            ) : (
              <Save size={20} className="mr-2" />
            )}
            {isEditing ? 'Atualizar Projeto' : 'Criar Projeto'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;