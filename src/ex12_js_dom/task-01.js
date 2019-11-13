const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
const image = document.createElement("img");
image.setAttribute("src", "asset/" + images[0]);
const photos = document.getElementById("photos");
photos.appendChild(image);
let currenrElementIndex = 0;

function leftButton() {
    if (currenrElementIndex === 0) {
        currenrElementIndex = images.length - 1;      
    } 
    else {
        currenrElementIndex --;
    }
    image.setAttribute("src", "asset/" + images[currenrElementIndex]);
    photos.appendChild(image);
}
function rigthButton() {
    if (currenrElementIndex === images.length - 1) {
        currenrElementIndex = 0;      
    } 
    else {
        currenrElementIndex ++;
    }
    image.setAttribute("src", "asset/" + images[currenrElementIndex]);
    photos.appendChild(image);
}