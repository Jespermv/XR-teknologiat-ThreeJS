export default {
  root: '',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: 'index-modelviewer.html',
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/~jespermv/XR-teknologiat-ThreeJS_Vk6/',
  worker: {
    format: 'es',
  },
};
