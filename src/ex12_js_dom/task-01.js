const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
const image = document.createElement("img");
image.setAttribute("src", "asset/" + images[0]);
const photos = document.getElementsByClassName("photos")[0];
photos.appendChild(image);
let currentElementIndex = 0;
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", button);
}

function button() {
    if (Array.from(this.parentElement.children).indexOf(this) === 0){
        if (currentElementIndex === 0) {
            currentElementIndex = images.length - 1;   
        } 
        else {
            currentElementIndex --;
        }
    } else {
        if (currentElementIndex === images.length - 1) {
            currentElementIndex = 0;      
        } 
        else {
            currentElementIndex ++;
        }
    }   
    image.setAttribute("src", "asset/" + images[currentElementIndex]);
    photos.appendChild(image);
}