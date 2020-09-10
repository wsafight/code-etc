<script>
  export let blog;
</script>

<aside class="entry">
  <h3>{blog.title}</h3>
  <p>{blog.desc}</p>
  <p>
    <a href={blog.url} target="_blank" >
      <em>查看 ↗</em>
    </a>
  </p>

</aside>
