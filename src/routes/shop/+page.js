// src\routes\shop\+page.js
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
            throw error(404, 'Not found');
        }

        const products = await response.json();
        console.log('Загруженные продукты:', products); // Логирование загруженных данных
        return { products }; // возвращаем данные напрямую
    } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        return { products: [] };
    }
}