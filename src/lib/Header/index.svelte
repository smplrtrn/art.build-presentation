<script>
  import { page } from "$app/stores";
  import logo from "./st.art.build-logo.svg";
</script>

<header>
  <div class="corner">
    <a href="https://st.art.build">
      <svg id="trngl" viewBox="0 0 248 248">
        <path
          fill-opacity=".94"
          fill="#ee1313"
          d="M0 248V0h248z"
          id="lefttrngl"
        />
      </svg>
    </a>
  </div>
  <nav>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
    </svg>
    <ul>
      <li class:active={$page.path === "/"}>
        <a sveltekit:prefetch href="/">art</a>
      </li>
      <li class:active={$page.path === "/about"}>
        <a sveltekit:prefetch href="/about">about</a>
      </li>
      <li class:active={$page.path === "/start"}>
        <a sveltekit:prefetch href="/start">start</a>
      </li>
      <li class:active={$page.path === "/docs"}>
        <a sveltekit:prefetch href="/docs">docs</a>
      </li>
    </ul>
    <svg viewBox="0 0 2 3" aria-hidden="true">
      <path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
    </svg>
  </nav>
  <div class="corner">
    <a href="https://st.art.build">
      <svg id="trngl" viewBox="0 0 248 248">
        <path
          transform="matrix(-1 0 0 1 248 0)"
          fill-opacity=".94"
          fill="#ee1313"
          d="M0 248V0h248z"
          id="righttrngl"
        />
      </svg>
    </a>
  </div>
</header>

<style>
  header {
    z-index: 1000;
    display: flex;
    justify-content: space-between;
  }

  .corner {
    position: sticky;
    top: 0;
    display: flex;
    align-items: start;
    justify-content: start;
    height: 3em;
  }

  .corner a {
    width: 100%;
    height: 100%;
  }

  .corner svg {
    width: 3em;
    height: 3em;
    object-fit: contain;
  }

  path#lefttrngl {
    fill: var(--accent-color);
  }

  path#righttrngl {
    fill: var(--scrollbarBG);
  }

  nav {
    display: flex;
    justify-content: center;
    --background: rgb(230 220 188 / 90%);
  }

  svg {
    width: 2em;
    height: 3em;
    display: block;
  }

  path {
    fill: var(--background);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--accent-color);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--heading-color);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 10%;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
