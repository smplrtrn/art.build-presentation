<script context="module">
  import Reader from "/static/images/reader.png?width=400;800;1200&format=png;webp&srcset";
  export const prerender = true;
</script>

<svelte:head>
  <title>Art Build - Home</title>
</svelte:head>

<section>
  <div class="reader">
    <picture>
      <img srcset={Reader} alt="Sablage, Reader" />
    </picture>
  </div>
  <h1>Try to Build This</h1>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
    color: var(--accent-color);
    font-weight: 800;
  }

  .reader {
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 0 calc(100% * 300 / 400) 0;
  }

  .reader img {
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    display: block;
    filter: sepia(0.8);
  }
</style>
