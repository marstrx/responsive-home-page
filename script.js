const follow_me = document.getElementById("follow_me");
const images =[
    "images/image1.jpg",
    "images/image2.jpg",
    "images/marstr.jpg"
];
console.log(images);
let currentIndex=0;

function changeImage() {
    currentIndex =(currentIndex + 1) %images.length;
    document.getElementById("randomImage").src=images[currentIndex];
    // const randomIndex = Math.floor(Math.random()*images.length);
    // document.getElementById("randomImage").src=images[randomIndex];
}
setInterval(changeImage ,3000);

follow_me.addEventListener("click",()=>{
    window.location.href="https://www.facebook.com"
})