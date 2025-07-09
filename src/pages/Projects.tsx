@@ .. @@
 import React from 'react';
-import { ExternalLink, Github } from 'lucide-react';
+import { useState, useEffect } from 'react';
 import { Link } from 'react-router-dom';
+import { projectService } from '../services/projectService';
+import { Project } from '../types/project';
+import toast from 'react-hot-toast';

-const projects = [
-  {
-    id: 'residential-solar',
-    title: 'Condomínio Solar',
-    description: 'Instalação de sistema fotovoltaico completo para condomínio residencial com 32 unidades.',
-    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    tags: ['Residencial', '160kWp', 'On-Grid'],
-    
-  },
-  {
-    id: 'commercial-installation',
-    title: 'Centro Empresarial Verde',
-    description: 'Projeto comercial de grande porte com monitoramento inteligente de energia.',
-    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    tags: ['Comercial', '500kWp', 'Monitoramento'],
-    
-  },
-  {
-    id: 'rural-solar',
-    title: 'Fazenda Sustentável',
-    description: 'Sistema híbrido para propriedade rural com armazenamento em baterias.',
-    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
-    tags: ['Rural', '200kWp', 'Híbrido'],
-    
-  }
-];
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
+};

 function Projects() {
+  const [projects, setProjects] = useState<Project[]>([]);
+  const [loading, setLoading] = useState(true);
+
+  useEffect(() => {
+    loadProjects();
+  }, []);
+
+  const loadProjects = async () => {
+    try {
+      const projectsData = await projectService.getAllProjects();
+      setProjects(projectsData);
+    } catch (error) {
+      toast.error('Erro ao carregar projetos');
+    } finally {
+      setLoading(false);
+    }
+  };
+
+  if (loading) {
+    return (
+      <section className="py-20 bg-primary-50">
+        <div className="container mx-auto px-4 md:px-6">
+          <div className="flex items-center justify-center h-64">
+            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500"></div>
+          </div>
+        </div>
+      </section>
+    );
+  }
+
   return (
     <section className="py-20 bg-primary-50">
       <div className="container mx-auto px-4 md:px-6">
@@ .. @@
         </div>

-        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
-          {projects.map((project, index) => (
-            <div 
-              key={index}
-              className={`bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 animate-fade-in`}
-              style={{ animationDelay: `${(index + 2) * 100}ms` }}
-            >
-              <Link to={`/projects/${project.id}`} className="block">
-                <div className="relative aspect-video overflow-hidden">
-                  <img 
-                    src={project.image} 
-                    alt={project.title}
-                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
-                  />
-                </div>
-              </Link>
-              <div className="p-6">
+        {projects.length > 0 ? (
+          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
+            {projects.map((project, index) => (
+              <div 
+                key={project.id}
+                className={`bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 animate-fade-in`}
+                style={{ animationDelay: `${(index + 2) * 100}ms` }}
+              >
                 <Link to={`/projects/${project.id}`} className="block">
-                  <h3 className="text-xl font-display font-semibold text-primary-800 mb-2 hover:text-primary-600 transition-colors">
-                    {project.title}
-                  </h3>
+                  <div className="relative aspect-video overflow-hidden">
+                    <img 
+                      src={project.image} 
+                      alt={project.title}
+                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
+                    />
+                  </div>
                 </Link>
-                <p className="text-primary-600 mb-4">
-                  {project.description}
-                </p>
-                <div className="flex flex-wrap gap-2 mb-4">
-                  {project.tags.map((tag, tagIndex) => (
-                    <span 
-                      key={tagIndex}
-                      className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
-                    >
-                      {tag}
-                    </span>
-                  ))}
-                </div>
-                <div className="flex justify-between items-center">
-                  <Link 
-                    to={`/projects/${project.id}`}
-                    className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
-                  >
-                    Ver detalhes
-                  </Link>
-                  
+                <div className="p-6">
+                  <Link to={`/projects/${project.id}`} className="block">
+                    <h3 className="text-xl font-display font-semibold text-primary-800 mb-2 hover:text-primary-600 transition-colors">
+                      {project.title}
+                    </h3>
+                  </Link>
+                  <p className="text-primary-600 mb-4">
+                    {project.description}
+                  </p>
+                  <div className="flex flex-wrap gap-2 mb-4">
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {getCategoryLabel(project.category)}
+                    </span>
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {project.power}
+                    </span>
+                    <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
+                      {project.systemType}
+                    </span>
+                  </div>
+                  <div className="flex justify-between items-center">
+                    <Link 
+                      to={`/projects/${project.id}`}
+                      className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors"
+                    >
+                      Ver detalhes
+                    </Link>
+                    <span className="text-sm text-gray-500">
+                      {project.location}
+                    </span>
+                  </div>
                 </div>
               </div>
-            </div>
-          ))}
-        </div>
+            ))}
+          </div>
+        ) : (
+          <div className="text-center py-12">
+            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nenhum projeto encontrado</h3>
+            <p className="text-gray-600">Os projetos serão exibidos aqui quando estiverem disponíveis.</p>
+          </div>
+        )}
       </div>
     </section>
   );