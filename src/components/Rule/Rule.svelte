<script>
  export let i;
  export let rule;

  let hover = false;

  let x, y;
</script>


<style>
  .list {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 13px;
  }

  .list .code {
    cursor: help;
  }

  .hook {
    max-width: 100%;
    text-overflow: wrap;
    padding: 1rem;
    border: 1px solid #ddd;
    border-collapse: collapse;
    margin-bottom: 1rem;
    border-radius: 1rem;
    position: relative;
    background: white;
  }

  .hook-number {
    position: absolute;
    top: 0;
    right: 0px;
    width: 2rem;
    height: 1.75rem;
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    text-align: center;
    padding-top: 3px;
    background: #ddd;
    font-size: 14px;
  }

  .overview {
    margin-right: 1rem;
  }

  .use {
    font-size: 14px;
  }

  :global(.use ul) {
    padding-left: 1rem;
  }

  .overview {
    margin-bottom: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #ddd;
  }
</style>

<div class="hook">

  {#if i || i === 0}
    <span class="hook-number">{i + 1}.</span>
  {/if}

  <div class="overview">
    <span class="hook-name">
     {rule.hook}
    </span>
    : {rule.context}
  </div>
  <div class="use">
    {@html rule.use}
  </div>

  <div class="list">
    <strong>Props</strong>
    :
    {#each rule.props as prop}
      <div
        class="code"
        data-balloon-length="medium"
        data-balloon-pos="up"
        aria-label=""
      >
        {prop}
      </div>
    {/each}
  </div>
  <div class="list">
    <strong>Mutable</strong>
    :
    {#each rule.mutable as mutable}
      <div
        class="code"
        data-balloon-length="medium"
        data-balloon-pos="up"
      >
        {mutable}
      </div>
    {/each}
  </div>

  {#if rule.advanced}
    <div>
      <small>This hook is an 'advanced' hook meaning it geared towards advanced users or plugins.</small>
    </div>
  {/if}

  <small>{rule.expiremental ? 'Expiremental' : 'Stable'} &middot; Location: {rule.location}</small>
</div>
