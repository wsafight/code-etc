<script>
  import HookList from '../../components/HookList/HookList.svelte';
  import BlogTeaser from '../../components/BlogTeaser/BlogTeaser.svelte';

  export let data, link;

  let blogs = [{
    title: '2020年 我要这样写代码',
    desc: '讲解"好代码"的用处以及如何编写"好代码""',
    url: 'https://github.com/wsafight/personBlog/issues/14'
  }, {
    title: '玩转 CSS 变量',
    desc: '通过 css 变量来使用另一种写法构建自适应的代码以及 ui 展示库',
    url: 'https://github.com/wsafight/personBlog/issues/25'
  }]

  const hooks = data.hookInterface.map((hook) => ({...hook, link: link.hooks({slug: hook.hook})}));
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

  <p>
    该指北是为了个人在编写代码时能够回避错误、减少纠结和使用反模式。我相信该文档对于某些团队和个人应该是份不错的参考。不过个人也确信当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

  <p>该指北也是"强观点，弱立场"，如果你拥有与当前结论相悖的信息，我就会修正该规范。</p>
</div>

<div class="blog">
  <div class="entries">
    {#each blogs as blog}
      <BlogTeaser {blog} />
    {/each}
  </div>
</div>

<h2> HTML </h2>

<HookList {hooks}/>

<h2> CSS </h2>

<h2> JavaScript </h2>

<h2> 组件开发 </h2>
