# PostIt — WAD Homework 2

A static social feed for the Web Application Development course. The home page loads ten post objects from JSON and builds the feed with JavaScript. The project uses plain HTML, CSS, and JavaScript; it has no framework or package dependencies.

## Run locally

Run a small web server from this folder so the browser can fetch `posts.json`:

```bash
python -m http.server 8000
```

Open http://localhost:8000. Fetch requests may be blocked when opening `index.html` directly with a `file://` URL.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Home page and dynamically populated post feed |
| `posts.json` | Local data source with ten post objects |
| `script.js` | Profile dropdown, JSON fetch, feed rendering, and like buttons |
| `styles.css` | Shared layout, feed, profile dropdown, and responsive styles |
| `addPost.html` | Static add-post form from Homework 1 |
| `login.html` | Static login form and profile page header |
| `assets/` | Generated river, café, and study photos, plus the existing profile avatar and illustrations |

## Homework 2 data and fetch

Each object in `posts.json` has an `id`, `author`, `body`, `createdAt`, `image`, `imageAlt`, and `likes` field. `image` can be a local relative path or `null` for a text-only post. The renderer creates each article using DOM methods and assigns user-visible text with `textContent`.

The active `loadPostsFromLocalFile()` function fetches `./posts.json` and renders the response. In `script.js`, the commented `loadPostsFromOnlineEndpoint()` function demonstrates fetching the hosted JSON for the online-fetch task. The public endpoint is:

`https://api.npoint.io/c271491a708e953668cf`

To demonstrate that version, uncomment the function and change the final call from `loadPostsFromLocalFile()` to `loadPostsFromOnlineEndpoint()`. Restore the local call for the submitted version, as required by the brief. Both paths expect the same `{ "posts": [...] }` response shape. The hosted sample data is fictional coursework content.

## Interface

Click the avatar in the top-right corner to open the profile menu with the demo username, email, and Log out link. Click outside the menu or press Escape to close it. Like counts update for the current page visit only. The login and add-post forms remain static demonstrations and do not authenticate users, save posts, or upload files.

## Submission notes

The course brief asks the team to validate the JSON with an online validator, commit work from each team member, push the changes, and deploy the site with GitHub Pages. Keep the local JSON fetch active in the final version. The GitHub Pages source should be the repository root.
