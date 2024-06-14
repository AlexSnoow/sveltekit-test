// src\routes\shop\[slug]\+page.js
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    const { slug } = params;

    try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
            throw error(404, 'Not found');
        }

        const products = await response.json();
        const product = products.find(p => p.slug === slug);

        if (!product) {
            throw error(404, 'Not found');
        }

        return { product };
    } catch (err) {
        console.error('Ошибка загрузки данных:', err);
        throw error(500, 'Internal Server Error');
    }
};