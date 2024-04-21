const click = document.querySelectorAll('.box');

click.forEach((MainClick) => {
    MainClick.addEventListener('click' , () =>{
        click.forEach((SecondClick) => {
        SecondClick.style.backgroundColor = 'rgba(53, 44, 131, 0.842)';
        });
        MainClick.style.backgroundColor = 'rgba(39, 231, 13, 0.685';
    
    });
});