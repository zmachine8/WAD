<template>
  <footer class="site-footer">
    <span class="footer-brand">postit<span class="brand-period">.</span></span>
    <span>A little space for the things worth sharing.</span>
    <span>© {{ year }} PostIt</span>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>
