const bg = chrome.extension.getBackgroundPage()
Object.keys(bg.textBox).forEach(function (elt){
    var divs = document.getElementsByTagName('div')
    for(var i = 0; i < divs.length; i++){
        divs[i].innerHTML = '';
    }
    const div = document.createElement('div')
    div.textContent = `${elt}: ${bg.textBox[elt]}`
    document.body.appendChild(div)
})
