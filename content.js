window.addEventListener('mouseup', () => {
    let word = window.getSelection().toString();
        chrome.runtime.sendMessage({
            txt: word
        })
})