<!-- src/routes/shop/+layout.svelte -->
<script>
    // export let data;
  </script>
  
  <section>
    <header>
      <h1>Welcome to the Shop</h1>
    </header>
  
    <aside>
      <nav>
        <ul>
          <li><a href="/shop/">Shop Main</a></li>
          <li><a href="/shop/">Categories</a></li>
          <li><a href="/shop/">Cart</a></li>
        </ul>
      </nav>
    </aside>
  
    <main>
      <slot /> <!-- Это используется для отображения вложенного контента -->
    </main>
  </section>