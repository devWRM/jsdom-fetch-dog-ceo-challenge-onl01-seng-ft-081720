console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
})

function fetchImages() {

    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(json => renderImages(json));
  
}


// REFERENCE:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

function renderImages(images) {
    debugger;
    let dogImageContainer = document.querySelector('#dog-image-container');
    images.message.forEach(imageURL => {
        let imgElement = document.createElement('img');
        imgElement.src = imageURL;
        dogImageContainer.appendChild(imgElement);
    })
      
}



