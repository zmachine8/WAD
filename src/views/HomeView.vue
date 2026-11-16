<template>
  <section class="feed-column" aria-labelledby="feed-title">
    <div class="feed-heading">
      <div>
        <p class="eyebrow">YOUR COMMUNITY, IN ONE PLACE</p>
        <h1 id="feed-title">The latest</h1>
        <p class="feed-subtitle">A few good things from around Tartu.</p>
      </div>
      <button class="reset-button" type="button" @click="resetLikes">
        <span aria-hidden="true">↺</span> Reset likes
      </button>
    </div>

    <div class="posts-list">
      <PostCard v-for="postId in postIds" :key="postId" :post-id="postId" />
    </div>
  </section>
</template>

<script>
import PostCard from "../components/PostCard.vue";

export default {
  name: "HomeView",
  components: { PostCard },
  computed: {
    postIds() {
      return this.$store.getters.postIds;
    },
  },
  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
};
</script>
