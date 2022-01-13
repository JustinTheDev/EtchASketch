const mainContainer = document.querySelector("#main-container");
const sketchContainer = document.querySelector("#sketch-container");
const settingsContainer = document.querySelector("#settings-container");

console.log(mainContainer);
console.log(sketchContainer);
console.log(settingsContainer);

for (let i = 0; i<16; i++)
{
    let newDiv = document.createElement('div');
    newDiv.setAttribute("id","sketch-pixel");
    sketchContainer.appendChild(newDiv);

    
}
