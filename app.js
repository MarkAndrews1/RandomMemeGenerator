let btn = document.getElementById('genBtn')
btn.addEventListener('click', fetchAndMakeMeme);

function createMemeDiv(memeUrl) {
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('memeDiv');

    const memeImg = createMemeImg(memeUrl);
    const deleteBtn = createDeleteBtn(memeDiv);

    memeDiv.appendChild(memeImg);
    memeDiv.appendChild(deleteBtn);
    return memeDiv;
}

function createMemeImg(memeUrl) {
    const memeImg = document.createElement('img');
    memeImg.setAttribute('src', memeUrl);
    memeImg.classList.add('memeStyle')
    return memeImg;
}

function createDeleteBtn(memeDiv) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Delete Meme";
    deleteButton.classList.add('deleteBtn');
    deleteButton.addEventListener('click', function () {
        memeDiv.remove();
    });
    return deleteButton
}

function fetchAndMakeMeme() {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            let memeImgUrl = data.url;
            const memeDiv = createMemeDiv(memeImgUrl);
            let memeContainer = document.getElementById('memeContainer');
            memeContainer.appendChild(memeDiv)
        })
        // .catch(err => console.log(err))
}