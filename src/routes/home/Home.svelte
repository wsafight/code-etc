<script>
  import HookList from '../../components/HookList/HookList.svelte';
  import BlogTeaser from '../../components/BlogTeaser/BlogTeaser.svelte';
  export let data, link;

  const hooks = data.hookInterface.map((hook) => ({ ...hook, link: link.hooks({ slug: hook.hook }) }));
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }
</style>

<svelte:head>
  <title>前端代码规范指北</title>
</svelte:head>

<div class="banner">
  <h1>jump-jump 的前端代码规范指北!</h1>

  <p>通过开发和实践结合其他开源项目整理出得书写规范和经验之谈，包括 HTML CSS JavaScript 与 组件开发等。</p>

  <p>该指北是为了个人在编写代码时能够回避错误、减少纠结和使用反模式。我相信该文档对于某些团队和个人应该是份不错的参考。不过个人也确信当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

  <p>该指北也是"强观点，弱立场"，如果你拥有与当前结论相悖的信息，我就会修正立刻该规范。</p>
</div>

<div class="blog">
  <div class="entries">
    {#each data.markdown as blog}
      <BlogTeaser {blog} {link} />
    {/each}
  </div>
</div>

<!--<div class="about">-->

<!--  <h2>About This Template</h2>-->
<!--  <p>-->
<!--    This example project is made up of 3 routes, you can find them by looking within the-->
<!--    <span class="code">./src/routes/</span>-->
<!--    folder. They are:-->
<!--  </p>-->

<!--  <ul>-->
<!--    <li>Home - The page you are on.</li>-->
<!--    <li>-->
<!--      Blog - Linked from above, but you can also see a blog post by checking out:-->
<!--      <a href={link.blog({ slug: 'getting-started' })}>'Getting Started'</a>-->
<!--      .-->
<!--    </li>-->
<!--    <li>Below we've also built a dedicated page for each one of the hooks Elder.js offers under the hood.</li>-->
<!--  </ul>-->

<!--  <p>-->
<!--    The goal in showing off these 3 routes is to give you enough of an example to see how a site is built with Elder.js-->
<!--    but one that isn't too complex to overwhelm you.-->
<!--  </p>-->

<!--  <p>-->
<!--    <strong>Note:</strong>-->
<!--    Chances are you are using-->
<!--    <code>npm run dev:server</code>-->
<!--    to preview this. If so, make sure you also check out-->
<!--    <code>npm run build</code>-->
<!--    which will statically generate this same site.-->
<!--  </p>-->

<!--</div>-->

<!--<div class="hydrate">-->
<!--  <div class="left">-->
<!--    <h2>Partial Hydration:</h2>-->
<!--    <p>Svelte.js shines at bringing interactivity to otherwise static websites.</p>-->
<!--    <p>-->
<!--      By default, Elder.js statically renders Svelte components only mounting them in the browser when it encounters a-->
<!--      Svelte component which includes the-->
<!--      &lt;!&ndash; Note: the actual prop is 'hydrate-client={}' but Svelte doesn't render empty objects&ndash;&gt;-->
<!--      <code>hydrate-client={JSON.stringify({})}</code>-->
<!--      prop.-->
<!--    </p>-->
<!--    <p>-->
<!--      The-->
<!--      <a href="https://svelte.dev/examples#clock">clock</a>-->
<!--      on the this page is an example of a component that has been hydrated on the client.-->
<!--    </p>-->
<!--    <p>This approach makes it easy to build SEO friendly websites with Svelte for interactivity when needed.</p>-->
<!--    <p>By default all hydrated components are lazy loaded with an intersection observer.</p>-->
<!--  </div>-->
<!--  <div class="right">-->
<!--    <Clock hydrate-client={{}} />-->
<!--  </div>-->
<!--</div>-->

<!--<h2>The Hook Interface</h2>-->

<!--<p>-->
<!--  Once you've digested the guides above and understand how to handle client hydration, we encourage you to explore the-->
<!--  hook interface below.-->
<!--</p>-->
<!--<p>-->
<!--  Hooks are the primary way to customize Elder.js and the list below outlines exactly what each hook can be used for.-->
<!--</p>-->

<!--<img-->
<!--  src="https://elderguide.com/images/elderjs-hook-lifescyle-v3.png"-->
<!--  alt="Elder.js hook Lifecycle"-->
<!--  style="max-width:100%; margin:1rem 0;" />-->

<h2> HTML </h2>

<HookList {hooks} />

<h2> CSS </h2>

<h2> JavaScript </h2>

<h2> 组件开发 </h2>