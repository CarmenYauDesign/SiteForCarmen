function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector('.item-button');
        btn.classList.add('copied');

        // Remove "copied" text after 2 seconds (optional)
        setTimeout(() => {
            btn.classList.remove('copied');
        }, 1500);
    });
}