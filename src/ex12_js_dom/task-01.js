const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
const image = document.createElement("img");
image.setAttribute("src", "asset/" + images[0]);
const photos = document.getElementsByClassName("photos")[0];
photos.appendChild(image);
let currentElementIndex = 0;
let buttons = document.getElementsByClassName("button");
buttons[0].addEventListener("click", changePhoto);
buttons[1].addEventListener("click", changePhoto);


function changePhoto() {
    if (buttons[0] === this){
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