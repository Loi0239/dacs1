const wrapperChild = document.querySelectorAll(".wrapper-child");
const box = document.querySelectorAll(".box");

for (let i = 0; i < wrapperChild.length; ++i) {
    ScrollReveal().reveal(wrapperChild, { delay: 700, scale: 1.5 });
}
for (let i = 0; i < box.length; ++i) {
    ScrollReveal().reveal(box, { delay: 500, distance: "60px", origin: "left" });
}

const btnSidebar = document.querySelector(".sidebar");
const nav = document.querySelector("#nav");
var flagCheck = false;
btnSidebar.addEventListener("click", () => {
    if(flagCheck == true){
        nav.classList.remove("open");
        nav.classList.add("close");
        flagCheck = false;
    }else{
        nav.classList.remove("close");
        nav.classList.add("open");
        flagCheck = true;
    }
})
