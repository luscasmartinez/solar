@@ .. @@
         <div className="border-t border-primary-700 mt-8 pt-6 text-center text-white text-sm">
           <p>&copy; {new Date().getFullYear()} Ground. Todos os direitos reservados.</p>
+          <div className="mt-2">
+            <Link 
+              to="/admin/login" 
+              className="text-primary-300 hover:text-white transition-colors text-xs opacity-60 hover:opacity-100"
+            >
+              Admin
+            </Link>
+          </div>
         </div>
       </div>
     </footer>