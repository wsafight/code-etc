<script>
  import BlogTeaser from '../../components/BlogTeaser/BlogTeaser.svelte';
  import Questions from './Questions.svelte'

  let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

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

<style>
    .w-100 {
        width: 100%;
    }
</style>


<svelte:head>
    <title>前端 ETC(易于修改) 实践</title>
</svelte:head>

<header class="banner">
    <h1>jump-jump 的<u> ETC <u>实践!</h1>

    <p>通过开发和实践结合其他开源项目整理出前端中 ETC(易于修改)的代码实践，包括 HTML CSS JavaScript 与 组件开发等。</p>

    <p>该指北是为了个人在编写代码时易于修改，编写可维护的前端代码。</p>

    <p>同时该结合文档可以回避错误、减少纠结和使用反模式。</p>

    <p>当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

    <p>该风格也是<b>强观点，弱立场<b>，如果你拥有与当前结论相悖的信息，我就会立刻对该实践进行修正。</p>
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

<hr>

<section>
    <header>
        <h2>组件开发</h2>
        <p>与组件开发有关的经验和细节</p>
    </header>
    {#each items as item}
        <aside class="w-100">
            <h3>MIT License</h3>
            <p>MVP is released under the permissive MIT license so you can freely use it however you'd like.</p>
            <p>That means personal projects, commercial ventures, remixes and more are all welcome.</p>
            <code>
                import fs from 'fs'
            </code>
        </aside>
    {/each}
</section>

<hr>


<section>
    <header>
        <h2>HTML</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
    {#each items as item}
        <aside class="w-100">
            <h3>MIT License</h3>
            <p>MVP is released under the permissive MIT license so you can freely use it however you'd like.</p>
            <p>That means personal projects, commercial ventures, remixes and more are all welcome.</p>
            <code>
                import fs from 'fs'
            </code>
        </aside>
    {/each}
</section>

<hr>

<section>
    <header>
        <h2>JavaScript</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>
    {#each items as item}
        <aside class="w-100">
            <h3>MIT License</h3>
            <p>MVP is released under the permissive MIT license so you can freely use it however you'd like.</p>
            <p>That means personal projects, commercial ventures, remixes and more are all welcome.</p>
            <code>
                import fs from 'fs'
            </code>
        </aside>
    {/each}
</section>
<section>
    <header>
        <h2>CSS</h2>
        <p>和代码风格，代码规范有关的博客</p>
    </header>

    {#each items as item}
        <aside class="w-100">
            <h3>MIT License</h3>
            <p>MVP is released under the permissive MIT license so you can freely use it however you'd like.</p>
            <p>That means personal projects, commercial ventures, remixes and more are all welcome.</p>
            <code>
                import fs from 'fs'
            </code>
        </aside>
    {/each}
</section>

<Questions/>



