<template>
  <header class="site-header">
    <RouterLink class="brand" :to="{ name: 'home' }" aria-label="PostIt home">
      <span class="brand-mark" aria-hidden="true">p</span>
      <span>postit<span class="brand-period">.</span></span>
    </RouterLink>

    <nav class="main-nav" aria-label="Main navigation">
      <RouterLink :to="{ name: 'home' }" class="nav-link">Home</RouterLink>
      <RouterLink :to="{ name: 'signup' }" class="nav-link nav-signup">Sign up</RouterLink>
    </nav>
  </header>
</template>

<script>
export default { name: "SiteHeader" };
</script>
