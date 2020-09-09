<script>
  import BlogTeaser from '../../components/BlogTeaser/BlogTeaser.svelte';
  import Questions from './Questions.svelte'

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
    <h1>jump-jump 的<u>代码风格<u>指北!</h1>

    <p>通过开发和实践结合其他开源项目整理出得书写规范和经验之谈，包括组件开发 以及 HTML CSS JavaScript 等。</p>

    <p>该规范是为了个人在编写代码时能够 参照该文档回避错误、减少纠结和使用反模式。</p>

    <p>当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

    <p>该风格也是<b>强观点，弱立场<b>，如果你拥有与当前结论相悖的信息，我就会修正该规范。</p>
</header>

<hr>

<section>
    <header>
        <h2>相关博客</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
    {#each blogs as blog}
        <BlogTeaser {blog}/>
    {/each}
</section>

<section>
    <header>
        <h2>组件开发</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
</section>

<section>
    <header>
        <h2>HTML</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
</section>

<section>
    <header>
        <h2>JavaScript</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
</section>
<section>
    <header>
        <h2>CSS</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
</section>

<Questions/>



