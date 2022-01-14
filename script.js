const mainContainer = document.querySelector("#main-container");
const sketchContainer = document.querySelector("#sketch-container");
const settingsContainer = document.querySelector("#settings-container");

drawSketchZone(16);
function drawSketchZone(res){
    for (let i = 0; i<(res*res); i++)
    {
        let divHeight = sketchContainer.clientHeight/res;
        let divWidth = sketchContainer.clientWidth/res;
        let newDiv = document.createElement('div');
        newDiv.setAttribute("id","sketch-pixel");
        newDiv.style.height = divHeight + "px";
        newDiv.style.width = divWidth + "px";
        sketchContainer.appendChild(newDiv);
    }
    let divArray = document.querySelectorAll("#sketch-pixel");
    divArray.forEach(function(elem){
        elem.addEventListener("mouseenter", function(){
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        });
    });
}

document.getElementById("clear").addEventListener("click", function(){
    let arr = document.querySelectorAll("#sketch-pixel");
    arr.forEach(function(elem){
        elem.style.backgroundColor = "white";
    });
});

document.getElementById("update").addEventListener("click", function(){
    let slider = document.getElementById("res");
    let sketchDivs = document.getElementById("sketch-container");
    sketchDivs.innerHTML = "";
    drawSketchZone(slider.value);
});


