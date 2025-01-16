const myGallary = document.getElementById('myGallary')

let imageIndex = 1
let totalImages = 100;
let imagesPerLoad = 9;

const loadTenImages = () => {
    for (let img = 0; img < imagesPerLoad; img++) {

        if (imageIndex > totalImages) return;

        const image = document.createElement('img')

        image.src = `images/${imageIndex}.jpg`;
        image.className = "image"
        

        myGallary.appendChild(image);
        imageIndex++;

    }

}
loadTenImages()

window.addEventListener("scroll", ()=>{   
if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    setTimeout(loadTenImages(), 2000)
  }
})


