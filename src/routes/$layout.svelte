<script>
  import Header from "$lib/Header/index.svelte";
  import "../app.css";
</script>

<Header />

<main class="[ post ] [ flow ]">
  <slot />
</main>

<footer>
  <p>
    Find out how: <a href="docs">Read the docs</a><br />
    and <a href="https://st.art.build">start a build</a>
  </p>
</footer>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  footer p {
    text-align: center;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    main {
      width: 90%;
    }
    footer {
      padding: 40px 0;
    }
  }
</style>
