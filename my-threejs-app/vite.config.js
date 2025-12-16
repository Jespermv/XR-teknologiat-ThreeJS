export default {
  root: '',
  build: {
    outDir: '../dist',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: '/~jespermv/XR-teknologiat-ThreeJS_Vk45/',
  worker: {
    format: 'es',
  },
};
