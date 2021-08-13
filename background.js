var apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
window.textBox = {}

chrome.runtime.onMessage.addListener(function (request, sender, sendRequest){
    // Fix the promises in this code.
    fetch(apiURL+request.txt).then((res) => {return res.json()}).then((data) => {console.log(data[0].meanings[0].definitions[0].definition)}).catch((err) =>{
        console.log('Error')
    })
    fetch(apiURL+request.txt).then((res) => {return res.json()}).then((data) => {window.textBox[request.txt] = data[0].meanings[0].definitions[0].definition}).catch((err) =>{
        console.log('Error')
    })
})