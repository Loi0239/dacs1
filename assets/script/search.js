const searchInput = document.querySelector(".input");
const boxList = document.querySelectorAll(".wrapper-child");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;

    for(let i=0; i < boxList.length; i++){
        const title = boxList[i].querySelector(".title-content").textContent;
        const Visible = title.replace( /\[ . * ? \]/g, "").includes(searchTerm);
        
        if(Visible){
            boxList[i].style.display = 'block';
        } else {
            boxList[i].style.display = 'none';
        }
    }
})