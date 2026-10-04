function likePost(button) {

    let likes = button.querySelector("span");
    likes.textContent = Number(likes.textContent) + 1;

}