<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="page-layout">
      <aside class="side-panel" aria-hidden="true"></aside>
      <RouterView />
      <aside class="side-panel side-panel-right" aria-hidden="true"></aside>
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: { SiteHeader, SiteFooter },
};
</script>
