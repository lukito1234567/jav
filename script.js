let box = document.querySelectorAll(".car");
box.forEach((grid)=>{
    grid.addEventListener("click",()=>{
        let parent = grid.parentElement;
        parent.remove();
    })
})










