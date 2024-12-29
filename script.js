document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.likes button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likesSpan = button.previousElementSibling;
            let likesCount = parseInt(likesSpan.textContent);
            likesCount++;
            likesSpan.textContent = likesCount + " likes";
        })
    })
})