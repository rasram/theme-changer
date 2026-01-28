import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path for deployment
  base: './',
  
  // Build configuration
  build: {
    // Output directory (can be overridden via CLI)
    outDir: 'dist',
    
    // Generate source maps for debugging
    sourcemap: true,
    
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    
    // Rollup options
    rollupOptions: {
      output: {
        // Naming patterns for chunks
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  
  // Dev server configuration
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Preview server configuration  
  preview: {
    port: 4173,
    open: true
  }
});
