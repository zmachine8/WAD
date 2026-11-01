const LOCAL_POSTS_URL = "./posts.json";
const ONLINE_POSTS_URL = "https://api.npoint.io/c271491a708e953668cf";

function setupProfileMenu() {
    const profileMenu = document.querySelector(".profile-menu");
    const toggle = document.querySelector(".profile-toggle");
    const dropdown = document.querySelector(".profile-dropdown");

    if (!profileMenu || !toggle || !dropdown) {
        return;
    }

    function closeMenu() {
        dropdown.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open profile menu");
    }

    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        dropdown.hidden = isOpen;
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Open profile menu" : "Close profile menu");
    });

    document.addEventListener("click", (event) => {
        if (!profileMenu.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            toggle.focus();
        }
    });
}

function createPostElement(post) {
    const article = document.createElement("article");
    article.className = "post";

    const header = document.createElement("header");
    header.className = "post-header";

    const author = document.createElement("span");
    author.setAttribute("aria-label", "Author");
    author.textContent = `👤 ${post.author}`;
    header.append(author);
    article.append(header);

    if (post.image) {
        const image = document.createElement("img");
        image.className = "post-image";
        image.src = post.image;
        image.alt = post.imageAlt || "Photo attached to the post";
        article.append(image);
    }

    const body = document.createElement("p");
    body.textContent = post.body;
    article.append(body);

    const date = new Date(post.createdAt);
    const time = document.createElement("time");
    time.dateTime = post.createdAt;
    time.textContent = Number.isNaN(date.getTime())
        ? post.createdAt
        : date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
          });
    article.append(time);

    const likeButton = document.createElement("button");
    likeButton.type = "button";
    likeButton.className = "like-icon";
    likeButton.setAttribute("aria-label", "Like this post");
    likeButton.append(document.createTextNode("👍 "));

    const likeCount = document.createElement("span");
    likeCount.textContent = String(post.likes);
    likeButton.append(likeCount);
    likeButton.addEventListener("click", () => likePost(likeButton));
    article.append(likeButton);

    return article;
}

function renderPosts(posts) {
    const container = document.querySelector("#posts-container");
    const errorMessage = document.querySelector("#posts-error");
    container.replaceChildren(...posts.map(createPostElement));
    errorMessage.hidden = true;
}

function showPostsError(message) {
    const errorMessage = document.querySelector("#posts-error");
    errorMessage.textContent = message;
    errorMessage.hidden = false;
}

async function fetchPostData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`The posts request failed (${response.status}).`);
    }

    const data = await response.json();
    if (!data || !Array.isArray(data.posts)) {
        throw new Error("The posts data has an unexpected format.");
    }

    return data.posts;
}

/*
 * Task 4: fetch the hosted JSON from n:point.
 * To demonstrate Task 4, uncomment this function and call
 * fetchPostData(ONLINE_POSTS_URL).then(renderPosts).
 * Keep this online-fetch version commented out for Task 5.
 * The public endpoint contains fictional coursework posts.
 */
/*
async function loadPostsFromOnlineEndpoint() {
    try {
        const posts = await fetchPostData(ONLINE_POSTS_URL);
        renderPosts(posts);
    } catch (error) {
        showPostsError(`Could not load the online posts: ${error.message}`);
    }
}
*/

async function loadPostsFromLocalFile() {
    try {
        const posts = await fetchPostData(LOCAL_POSTS_URL);
        renderPosts(posts);
    } catch (error) {
        showPostsError(`Could not load the posts: ${error.message}`);
    }
}

// Counts change for this page visit only, as in Homework 1.
function likePost(button) {
    const likes = button.querySelector("span");
    likes.textContent = String(Number(likes.textContent) + 1);
}

setupProfileMenu();

if (document.querySelector("#posts-container")) {
    loadPostsFromLocalFile();
}
