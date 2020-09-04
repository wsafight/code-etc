<script>
  export let rules;
  import RuleDetail from "../Rule/Rule.svelte";
</script>

<style>
  .rules {
    display: grid;
    grid-template-columns: 100%;
  }
</style>

<main class="rules">
  {#each rules as hook, i}
    <RuleDetail {hook} {i} />
  {/each}
</main>
