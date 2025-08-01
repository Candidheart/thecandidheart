import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(), 
    tailwindcss(),
    // Add bundle analyzer in analyze mode
    mode === 'analyze' && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize chunk size
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kb
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: (id) => {
          // React and core dependencies
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'react-vendor';
          }
          
          // Radix UI components
          if (id.includes('@radix-ui')) {
            return 'ui-vendor';
          }
          
          // Form handling libraries
          if (id.includes('react-hook-form') || id.includes('@hookform') || id.includes('zod') || 
              id.includes('react-day-picker') || id.includes('date-fns') || id.includes('input-otp')) {
            return 'form-vendor';
          }
          
          // Animation libraries
          if (id.includes('framer-motion')) {
            return 'animation-vendor';
          }
          
          // Icons
          if (id.includes('lucide-react')) {
            return 'icon-vendor';
          }
          
          // Payment processing
          if (id.includes('@stripe')) {
            return 'stripe-vendor';
          }
          
          // Charts
          if (id.includes('recharts')) {
            return 'chart-vendor';
          }
          
          // Utility libraries
          if (id.includes('class-variance-authority') || id.includes('clsx') || 
              id.includes('tailwind-merge') || id.includes('cmdk') || 
              id.includes('embla-carousel-react') || id.includes('next-themes') ||
              id.includes('react-resizable-panels') || id.includes('sonner') || 
              id.includes('vaul')) {
            return 'utils-vendor';
          }
          
          // Tailwind CSS
          if (id.includes('tailwindcss') || id.includes('@tailwindcss')) {
            return 'tailwind-vendor';
          }
        },
        // Optimize chunk naming
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${ext}`;
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return `images/[name]-[hash].${ext}`;
          }
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    // Enable source maps for debugging (disable in production for smaller bundles)
    sourcemap: mode === 'analyze',
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode !== 'analyze', // Keep console.log in analyze mode
        drop_debugger: true,
        pure_funcs: mode !== 'analyze' ? ['console.log', 'console.info', 'console.debug'] : [],
      },
    },
    // Target modern browsers for smaller bundles
    target: 'esnext',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
    ],
    exclude: [
      // Exclude large dependencies from pre-bundling
      'recharts',
      '@stripe/react-stripe-js',
      '@stripe/stripe-js',
    ],
  },
  // Performance optimizations
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
}))
