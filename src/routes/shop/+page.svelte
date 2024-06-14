<!-- src\routes\shop\+page.svelte -->
<script>
    export let data = {};
    const { products } = data;
    // console.log('Полученные продукты в Svelte:', products); // Логирование переданных данных
</script>

<h1>Это страница Магазина</h1>

<section>
    {#if products && products.length > 0}
        {#each products as product (product.sku)}
            <div class="product">
                <h2><a href={`/shop/${product.slug}`}>{product.name}</a></h2>
                <p>{product.description}</p>
                <p>Цена: {product.price} руб.</p>
            </div>
        {/each}
    {:else}
        <p>Продукты не найдены.</p>
    {/if}
</section>