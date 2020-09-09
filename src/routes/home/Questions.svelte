<script>
  const questions = [
    {
      q: '为何要编写该实践?',
      a: ['之所以编写该实践，是因为我相信我可以凭借该项目成为一个更好的开发者，并且可以帮助其他人']
    },
    {
      q: '我该如何使用它?',
      a: ['之所以编写该实践，是因为我相信我可以凭借该项目成为一个更好的开发者，并且可以帮助其他人']
    },
  ]
</script>

<article>
    <h2>问题</h2>
    {#each questions as question}
        <details>
            <summary>{question.q}</summary>
            {#each question.a as answer}
                <p>{answer}</p>
            {/each}
        </details>
    {/each}
</article>