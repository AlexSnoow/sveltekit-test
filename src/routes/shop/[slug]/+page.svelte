<!-- src\routes\shop\[slug]\+page.svelte -->
<script>
  export let data = {};
  const { product } = data;
  // console.log('Полученный продукт:', product); // Логирование переданных данных
</script>

<h1>{product.name}</h1>

<section>
  <p>{product.description}</p>
  <p>Цена: {product.price} руб.</p>
</section>