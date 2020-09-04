<script>
  export let routeHTML, settings;
  import Footer from '../components/Footer/Footer.svelte'
</script>

<style>
  :global(h1) {
    font-style: italic;
  }

  .main {
    display: flex;
    flex-direction: column;
    height: 100%; /* 1, 3 */
    min-height: 100vh;
    position: relative;
  }

  .indicator {
    position: absolute;
    top: 0; right: 0; left: 0; bottom: 0;
    background: linear-gradient(to right top, teal 50%, transparent 50%) no-repeat;
    background-size: 100% calc(100% - 100vh);
    z-index: 1;
    pointer-events: none;
    mix-blend-mode: darken;
  }

  .indicator::after {
    content: '';
    position: fixed;
    top: 5px; bottom: 0; right: 0; left: 0;
    background: #fff;
    z-index: 1;
  }

  .container {
    flex: 1 0 auto; /* 2 */
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  }

  .footer {
    padding: 1.5rem;
    background: #404040;
    color: #999;
    font-size: .85em;
    overflow-x: hidden;
    text-align: center;
  }
</style>

<svelte:head>
  <link
    rel="stylesheet"
    href="{settings.locations.assets.replace('./public', '')}style.css"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/balloon-css/balloon.min.css"
  />
</svelte:head>

<div class="main">
  <div class="indicator"></div>
  <main class="container" style="height: 2000px">
    {@html routeHTML}
  </main>
  <footer class="footer">
    <Footer />
  </footer>
</div>

