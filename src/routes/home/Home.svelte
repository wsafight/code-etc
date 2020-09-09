<script>
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

</script>


<svelte:head>
    <title>前端代码规范指北</title>
</svelte:head>

<header class="banner">
    <h1>jump-jump 的<u>前端代码规范<u>指北!</h1>

    <p>通过开发和实践结合其他开源项目整理出得书写规范和经验之谈，包括 HTML CSS JavaScript 与 组件开发等。</p>

    <p>
        该指北是为了个人在编写代码时能够回避错误、减少纠结和使用反模式。我相信该文档对于某些团队和个人应该是份不错的参考。不过个人也确信当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

    <p>该指北也是"强观点，弱立场"，如果你拥有与当前结论相悖的信息，我就会修正该规范。</p>
</header>

<hr>

<section>
    <header>
        <h2>相关博客</h2>
        <p>和代码风格有关的博客</p>
    </header>
    <div>
        <div>
            {#each blogs as blog}
                <BlogTeaser {blog}/>
            {/each}
        </div>
    </div>

</section>


<h2> 组件开发 </h2>

<h2> HTML </h2>

<h2> CSS </h2>

<h2> JavaScript </h2>


