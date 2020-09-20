<script>
  import BlogTeaser from '../../components/BlogTeaser/BlogTeaser.svelte';
  import Questions from './Questions.svelte'
  import Projects from './Projects.svelte'
  import Components from './Components.svelte'
  import Html from './Html.svelte'
  import Css from './Css.svelte'
  import Javascript from './Javascript.svelte'


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
    <h1>jump-jump 的 &nbsp; <u> ETC </u> &nbsp;实践!</h1>

 </header>
<article>

   <p>在实际开发项目的过程中，ETC 原则，即 Easier To Change，易于变更是非常重要的。为什么解耦很好？ 为什么单一职责很有用？ 为什么好的命名很重要？</p>

   <p>因为这些设计原则让你的代码更容易发生变更。ETC 甚至可以说是其他原则的基石，可以说，我们现在所作的一切都是为了更容易变更！！</p>

   <p>在软件开发中，我们有需要做很多决策。而好的决策会更易于将来的变更。</p>

   <p>在项目的初期，经验丰富的开发者往往会推迟决策的时机，等到有更多的经验后再进行决策。但是我们还是要基于现有的知识把产品做出来，但是我们还是想要当前的产品可以进行少量的修改就可以适用于后续的开发，而不是有更多的经验后直接进行重写。</p>

   <p>有时候，我们的经验不足以做出足够正确的决策，这种情况下，要么试着把写的代码都可替换，这样无论发生什么，这块代码不会成为路障。第二件事，不断记录在工程中面临的决策，有哪些选择以及选择之后的一些猜测。</p>

   <p>ETC 原则来自《程序员修炼之道 第二版》，个人希望通过开发和实践结合其他开源项目整理出前端中 ETC(易于修改)的代码实践，包括 HTML CSS JavaScript 与 组件开发等。</p>

   <p>该指北是为了个人在编写代码时易于修改，编写可维护的前端代码。同时该结合文档可以回避错误、减少纠结和使用反模式。当前内容对于任何团队和个人来说都不是绝对理想的。所以根据团队，个人价值观做出合适的改动是正确的。</p>

   <p>该风格也是<b>强观点，弱立场<b>，如果你拥有与当前结论相悖的信息，我就会立刻对该实践进行修正。</p>

</article>


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
        <h2>系统设计</h2>
    </header>
    <Projects/>
</section>

<hr>

<section>
    <header>
        <h2>组件开发</h2>
        <p>与组件开发有关的经验和细节</p>
    </header>
    <Components />
    <aside class="w-100">
       <h3>MIT License</h3>
       <p>MVP is released under the permissive MIT license so you can freely use it however you'd like.</p>
       <p>That means personal projects, commercial ventures, remixes and more are all welcome.</p>
       <code>
           import fs from 'fs'
       </code>
    </aside>
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
     <Html />
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
    <Javascript />
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
    <Css />
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



