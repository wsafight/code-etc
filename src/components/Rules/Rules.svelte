<script>
  export let rules;
  import HookDetail from "../HookDetail/HookDetail.svelte";
</script>

<style>
  .rules {
    display: grid;
    grid-template-columns: 100%;
  }
</style>

<main class="rules">
  {#each rules as hook, i}
    <HookDetail {hook} {i} />
  {/each}
</main>
