import { createStore } from "vuex";
import postData from "../../posts.json";

export default createStore({
  strict: import.meta.env.DEV,
  state: {
    posts: postData.posts.map((post) => ({ ...post })),
  },
  getters: {
    postById: (state) => (id) => state.posts.find((post) => post.id === id),
    postIds: (state) => state.posts.map((post) => post.id),
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((item) => item.id === postId);
      if (post) post.likes += 1;
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
});
