import { createField } from "./createField.js";

export const createMenu=()=>{

    const model=document.querySelector(".model");
    if (model) model.remove();

    const main = document.querySelector("main");
    main.classList.remove("none");

    const game = document.querySelector(".game");
    game.style.display = 'none';

    const menu =document.querySelector(".menu");
    menu.style.display="block";
    const btn = menu.querySelectorAll(".btn");
    btn.forEach(el => {
        el.addEventListener('click',() => {
            console.log(el.textContent);
            switch(el.textContent) {
                case "пацефист":
                    menu.style.display="none";
                    createField(8)
                    break;
                case "нейтрал":
                    menu.style.display="none";
                    createField(12)
                    break;
                case "геноцид":
                    menu.style.display="none";
                    createField(16)
                    break;
            }
        })

    });
    


} 