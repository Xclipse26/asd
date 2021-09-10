//
const human = document.querySelector(".human");
let press;
let x = 0;
let y =0;


window.addEventListener("keydown", (event) => {
    press = String.fromCharCode(event.which).toLowerCase();
    console.log(press);
    switch (press) {
        /*case " ":
            human.style.bottom = "60px";
            setTimeout(() => {
                human.style.bottom = "0px";
            }, 400)
            break;*/
        case "d":
            if (human.style.left != "730px") {
                x = x + 2;
                console.log(x + "go");
                human.style.left = x + "px";
            }
            break;
        case "a":
            // window.alert(press);
            if (human.style.left > "0px") {
                x = x - 2;
                console.log(x + "back");
                human.style.left = x + "px";
            }
            break;
        case "w":
        if(human.style.bottom != "270px") y = y + 2;
            console.log(y + "top");
            human.style.bottom = y + "px";
            
            break;
        case "s":
            if(human.style.bottom > "0px")   y = y - 2;
            console.log(y + "down");
            human.style.bottom = y + "px";
        
            break;
    }

})

