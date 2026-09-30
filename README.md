# PostIt — WAD Homework 1

A responsive three-page website built with HTML5 and CSS for the Web Application Development course at the University of Tartu.

## Run locally

Open `index.html` in a browser, or run the following command from the project folder:

```bash
python -m http.server 8000
```

Then open http://localhost:8000. No additional packages or build step are required.

## Project structure

| File | Purpose |
| --- | --- |
| `index.html` | Home page with five posts, including image and text-only posts |
| `addPost.html` | Form with a post body, image file picker, and Create post button |
| `login.html` | Login form with required email and password fields |
| `styles.css` | Shared styles, CSS selectors, and responsive Flexbox layouts |
| `assets/` | Local illustrations used in the posts |

## Features

- Home and Add Post navigation links with background changes on hover.
- Five different posts, each containing text, an author icon, a date, and a decorative like icon.
- Login form validation using `required` and `type="email"`.
- Login and Create post buttons that navigate to `index.html` after submission.
- Semantic HTML elements, including `header`, `nav`, `main`, `article`, and `footer`.
- Flexbox layouts and a media query for smaller screens.

This is a static website. Login does not authenticate users, and submitting a post does not save its text or upload a file. The like icons are decorative. Account creation and password recovery links display explanatory notes.

## Required CSS selectors

| Selector type | Example | Use |
| --- | --- | --- |
| Pseudo-class | `.site-header nav a:hover` | Changes the navigation link background on hover |
| Descendant | `.site-header nav a` | Styles navigation links inside the header |
| Child | `.post > p` | Styles paragraphs directly inside a post |
| Adjacent sibling | `.post-image + p` | Sets spacing for text immediately after a post image |
| General sibling | `.post p ~ .like-icon` | Styles a like icon following a paragraph with the same parent |

## Manual checks

- Follow navigation links between all three pages.
- Check the hover effect on Home and Add Post.
- Confirm that the home page contains five posts and all images load.
- Confirm that login submission is blocked when either field is empty or the email is invalid.
- Confirm that a valid login form and the Create post form navigate to Home.
- Inspect the layout at desktop and mobile widths using browser developer tools.
- Validate each HTML file with the [W3C HTML Validator](https://validator.w3.org/).
- Repeat navigation and image checks after deployment.

## Deployment

The website can be hosted on GitHub Pages directly from the repository root. All page and asset links use relative paths.
