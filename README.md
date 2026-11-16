# PostIt — WAD Homework 3

PostIt is a small Vue single-page app based on the Homework 2 feed. It uses Vue Router for its Home and Sign up views and Vuex as the shared source of truth for posts and like counts.

## Run locally

Install Node.js, then from this folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/WAD/`. To make a production build, run `npm run build`; the output is written to `dist/`.

## Homework requirements

- The Home and Sign up routes use one shared header and footer.
- The Home view renders ten posts from the existing `posts.json` file.
- Each `PostCard` looks up its post from the Vuex getter using its ID. Its Like button commits `incrementLikes` to the store.
- Reset likes commits `resetLikes`, which sets every post count to zero.
- The Sign up view contains Email and Password fields. Password feedback updates as the user types and names every unmet rule: 8–14 characters, uppercase letter, at least two lowercase letters, number, uppercase first letter, and underscore.
- Account creation is not connected to a backend; the form demonstrates validation only.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/App.vue` | Shared app shell and routed view outlet |
| `src/components/SiteHeader.vue` | Shared route navigation |
| `src/components/SiteFooter.vue` | Shared footer |
| `src/components/PostCard.vue` | Post display and Vuex-backed like action |
| `src/views/HomeView.vue` | Ten-post feed and reset button |
| `src/views/SignupView.vue` | Signup form and password validation |
| `src/store/index.js` | Vuex posts state, getter, and mutations |
| `src/router/index.js` | Home and signup routes |
| `posts.json` | Ten post records carried forward from Homework 2 |
| `public/assets/` | Images and avatar used by the posts |

## GitHub Pages

The Vite base path is configured for the existing repository name, `WAD`. The built `dist/` contents can be published through the repository's GitHub Pages workflow or deployment branch.
