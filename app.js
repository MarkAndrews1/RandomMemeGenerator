let btn = document.getElementById('btnClick')
let image = document.getElementById('image')
btn.addEventListener('click', function() {
    fetch("https://meme-api.com/gimme/wholesomememes")
       .then(res => res.json())
       .then(result => {
        console.log(result)
        image.src = result.message;
       })
       .catch(err=>console.log(err))
})