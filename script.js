const mainContainer = document.querySelector("#main-container");
const sketchContainer = document.querySelector("#sketch-container");
const settingsContainer = document.querySelector("#settings-container");

console.log(mainContainer);
console.log(sketchContainer);
console.log(settingsContainer);

for (let i = 0; i<(16*16); i++)
{
    let divHeight = sketchContainer.clientHeight/16;
    let divWidth = sketchContainer.clientWidth/16
    let newDiv = document.createElement('div');
    newDiv.setAttribute("id","sketch-pixel");
    newDiv.style.height = divHeight + "px";
    newDiv.style.width = divWidth + "px";
    sketchContainer.appendChild(newDiv);

    
}
