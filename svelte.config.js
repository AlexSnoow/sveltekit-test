// файл svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    // Использование static адаптера для генерации статических файлов
    adapter: adapter({
      // Важные опции для адаптера-статик
      pages: 'build',    // Укажите директорию для сгенерированных html-файлов
      assets: 'build',   // Укажите директорию для сгенерированных ассетов
	    fallback: undefined,
	    precompress: false,
	    strict: true,
      tralilingSlash: 'ignore'
	//   fallback: 'index.html' // Укажите файл fallback, например 'index.html'
	  
    
    }),
    prerender: {
      // Укажите маршруты для предварительного рендеринга
      	entries: ['*']
    }
  }
};

export default config;