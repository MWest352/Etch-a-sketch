
//Grid Construction
const container = document.getElementById("container");

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "item";
    };
};

makeRows(16, 16);



//Function to execute background color change
const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16) }`;

const colorChange = (event) =>{
    const currentEl = event.target;
    currentEl.style.backgroundColor = randomColor(); 
};
function mouse(){
document.querySelectorAll(".item").forEach(element =>{
    element.addEventListener("mouseenter", colorChange);
  });
}
mouse();


//Clear button
const colorReset = () => `black`;
const clearGrid = (button) => {
    document.querySelectorAll(".item").forEach(element =>{
        element.style.backgroundColor = colorReset();
      });  
    console.log("Clear Clicked");


//Prompt for sides
    var sides = prompt("How many squares per side? ", );
    
    container.innerHTML = "";

    if (sides == null || sides == "") {
        sides = 16;
        } else { 
        makeRows(sides, sides);
       }
    mouse();
};



document.getElementById("clrBtn").addEventListener("click", clearGrid);


