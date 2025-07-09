@@ .. @@
 import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
+import { Toaster } from 'react-hot-toast';
+import { AuthProvider } from './contexts/AuthContext';
 import Layout from './components/Layout';
+import AdminLayout from './components/admin/AdminLayout';
+import ProtectedRoute from './components/admin/ProtectedRoute';
 import Home from './pages/Home';
 import Projects from './pages/Projects';
 import ProjectDetail from './pages/ProjectDetail';
+import Login from './pages/admin/Login';
+import Dashboard from './pages/admin/Dashboard';
+import ProjectList from './pages/admin/ProjectList';
+import ProjectForm from './pages/admin/ProjectForm';

 function App() {
   return (
-    <Router>
-      <Routes>
-        <Route path="/" element={<Layout><Home /></Layout>} />
-        <Route path="/projects" element={<Layout><Projects /></Layout>} />
-        <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
-      </Routes>
-    </Router>
+    <AuthProvider>
+      <Router>
+        <Routes>
+          {/* Public Routes */}
+          <Route path="/" element={<Layout><Home /></Layout>} />
+          <Route path="/projects" element={<Layout><Projects /></Layout>} />
+          <Route path="/projects/:id" element={<Layout><ProjectDetail /></Layout>} />
+          
+          {/* Admin Routes */}
+          <Route path="/admin/login" element={<Login />} />
+          <Route path="/admin" element={
+            <ProtectedRoute>
+              <AdminLayout>
+                <Dashboard />
+              </AdminLayout>
+            </ProtectedRoute>
+          } />
+          <Route path="/admin/projects" element={
+            <ProtectedRoute>
+              <AdminLayout>
+                <ProjectList />
+              </AdminLayout>
+            </ProtectedRoute>
+          } />
+          <Route path="/admin/projects/new" element={
+            <ProtectedRoute>
+              <AdminLayout>
+                <ProjectForm />
+              </AdminLayout>
+            </ProtectedRoute>
+          } />
+          <Route path="/admin/projects/edit/:id" element={
+            <ProtectedRoute>
+              <AdminLayout>
+                <ProjectForm />
+              </AdminLayout>
+            </ProtectedRoute>
+          } />
+        </Routes>
+        <Toaster 
+          position="top-right"
+          toastOptions={{
+            duration: 4000,
+            style: {
+              background: '#363636',
+              color: '#fff',
+            },
+          }}
+        />
+      </Router>
+    </AuthProvider>
   );
 }