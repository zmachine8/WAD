<template>
  <article v-if="post" class="post-card">
    <div class="post-meta">
      <div class="post-author">
        <img class="author-avatar" :src="assetUrl('assets/profile.svg')" alt="" />
        <span>{{ post.author }}</span>
      </div>
      <time :datetime="post.createdAt">{{ formattedDate }}</time>
    </div>

    <img
      v-if="post.image"
      class="post-image"
      :src="assetUrl(post.image)"
      :alt="post.imageAlt || 'Photo attached to the post'"
    />
    <p class="post-body">{{ post.body }}</p>

    <div class="post-actions">
      <button class="like-button" type="button" :aria-label="`Like ${post.author}'s post`" @click="likePost">
        <span class="like-icon" aria-hidden="true">♡</span>
        <span>Like</span>
      </button>
      <span class="like-count"><strong>{{ post.likes }}</strong> {{ post.likes === 1 ? 'like' : 'likes' }}</span>
    </div>
  </article>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    postId: { type: Number, required: true },
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
    formattedDate() {
      if (!this.post) return "";
      return new Date(this.post.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    },
  },
  methods: {
    likePost() {
      this.$store.commit("incrementLikes", this.postId);
    },
    assetUrl(path) {
      return `${import.meta.env.BASE_URL}${path}`;
    },
  },
};
</script>
