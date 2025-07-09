@@ .. @@
 import React from 'react';
+import { useState, useEffect } from 'react';
 import { useParams, Link } from 'react-router-dom';
+import { projectService } from '../services/projectService';
+import { Project } from '../types/project';
 import { ArrowLeft, ExternalLink, Github, Calendar, Users, Tag, Sun, Battery, Leaf } from 'lucide-react';
+import toast from 'react-hot-toast';

-const projects = {
-  'residential-solar': {
-    title: 'Condomínio Solar',
-    description: 'Sistema fotovoltaico para condomínio residencial.',
-    fullDescription: `Projeto completo de energia solar para condomínio com 32 unidades residenciais, 
-    proporcionando economia significativa na conta de energia dos moradores. O sistema foi dimensionado 
-    para atender 100% do consumo das áreas comuns e gerar créditos para os apartamentos.`,
-    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    gallery: [
-      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
-    ],
-    tags: ['160kWp', 'On-Grid', 'Monitoramento', 'Residencial'],
-    team: ['Engenheiro Solar', 'Técnicos Instaladores', 'Gestor de Projetos'],
-    duration: '3 meses',
-    liveUrl: '#',
-    githubUrl: '#',
-    features: [
-      '160kWp de potência instalada',
-      'Economia de 95% na conta de energia',
-      'Sistema de monitoramento remoto',
-      'Garantia de 25 anos nos painéis',
-      'Manutenção preventiva trimestral',
-      'Payback em 4 anos'
-    ]
-  },
-  'commercial-installation': {
-    title: 'Centro Empresarial Verde',
-    description: 'Projeto comercial de grande porte com sistema inteligente.',
-    fullDescription: `Implementação de sistema fotovoltaico de alta performance para centro empresarial, 
-    incluindo monitoramento inteligente e gestão de energia em tempo real. O projeto foi desenvolvido 
-    para maximizar a eficiência energética e reduzir custos operacionais.`,
-    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    gallery: [
-      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
-    ],
-    tags: ['500kWp', 'Comercial', 'Monitoramento Avançado'],
-    team: ['Engenheiro Chefe', 'Equipe Técnica', 'Analista de Performance'],
-    duration: '5 meses',
-    liveUrl: '#',
-    githubUrl: '#',
-    features: [
-      '500kWp de potência instalada',
-      'Monitoramento em tempo real',
-      'Economia mensal de R$ 75.000',
-      'Sistema anti-sombreamento',
-      'Manutenção preditiva',
-      'ROI em 3,5 anos'
-    ]
-  },
-  'rural-solar': {
-    title: 'Fazenda Sustentável',
-    description: 'Sistema híbrido com armazenamento em baterias.',
-    fullDescription: `Solução completa de energia solar para propriedade rural, combinando sistema 
-    fotovoltaico com armazenamento em baterias. O projeto garante autonomia energética e operação 
-    contínua dos equipamentos críticos, mesmo em casos de interrupção da rede.`,
-    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    gallery: [
-      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
-    ],
-    tags: ['200kWp', 'Híbrido', 'Baterias', 'Rural'],
-    team: ['Especialista em Sistemas Híbridos', 'Instaladores', 'Consultor Técnico'],
-    duration: '4 meses',
-    liveUrl: '#',
-    githubUrl: '#',
-    features: [
-      '200kWp de geração solar',
-      'Banco de baterias de 300kWh',
-      'Backup automático',
-      'Monitoramento remoto',
-      'Sistema híbrido inteligente',
-      'Autonomia de 48 horas'
-    ]
-  }
+const getCategoryLabel = (category: string) => {
+  switch (category) {
+    case 'residential':
+      return 'Residencial';
+    case 'commercial':
+      return 'Comercial';
+    case 'rural':
+      return 'Rural';
+    case 'industrial':
+      return 'Industrial';
+    default:
+      return category;
+  }
 };

 function ProjectDetail() {
   const { id } = useParams<{ id: string }>();
-  const project = id ? projects[id as keyof typeof projects] : null;
+  const [project, setProject] = useState<Project | null>(null);
+  const [loading, setLoading] = useState(true);
+
+  useEffect(() => {
+    if (id) {
+      loadProject(id);
+    }
+  }, [id]);
+
+  const loadProject = async (projectId: string) => {
+    try {
+      const projectData = await projectService.getProjectById(projectId);
+      setProject(projectData);
+    } catch (error) {
+      toast.error('Erro ao carregar projeto');
+    } finally {
+      setLoading(false);
+    }
+  };
+
+  if (loading) {
+    return (
+      <div className="py-20 bg-secondary-50">
+        <div className="container mx-auto px-4 md:px-6">
+          <div className="flex items-center justify-center h-64">
+            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
+          </div>
+        </div>
+      </div>
+    );
+  }

   if (!project) {
     return (
@@ .. @@
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
-                    {project.tags.map((tag, index) => (
-                      <span 
-                        key={index}
-                        className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
-                      >
-                        {tag}
-                      </span>
-                    ))}
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {getCategoryLabel(project.category)}
+                    </span>
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {project.power}
+                    </span>
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {project.systemType}
+                    </span>
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {project.location}
+                    </span>
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