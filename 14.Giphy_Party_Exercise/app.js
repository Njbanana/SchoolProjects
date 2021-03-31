const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const remove = document.getElementById('remove')
const divImg = document.getElementById('images')
const searchTerm = input.value
// axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'ca5EnaY9YiJxnYi0Xa4NkBPXXbVnKvAm',q:}})


function gif(result){
    let dataLength = result.data.length
    if(dataLength){
        let random = Math.floor(Math.random() * dataLength)
        const newCol = document.createElement('div')
        newCol.setAttribute('id','newCol')
        newCol.classList.add('col-sm')
        divImg.appendChild(newCol)

        const img = document.createElement('img')
        img.classList.add('w-100')
        img.setAttribute('src', result.data[random].images.original.url)
        newCol.appendChild(img)   
    }     
}


form.addEventListener('submit',async function(event){
    event.preventDefault()
    let searchTerm = input.value
    input.value = ''
    const result = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {api_key: 'ca5EnaY9YiJxnYi0Xa4NkBPXXbVnKvAm',q: searchTerm}})
    gif(result.data)
})

remove.addEventListener('click', function(){
    const columns = document.querySelectorAll('#newCol')
    for(let divs of columns){
        divs.remove()
    }
})
