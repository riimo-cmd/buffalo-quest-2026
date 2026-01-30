

//variables for making the squares
let main = document.getElementById("main");
let squareHTML = ``;

//making the squares. I could only do one loop but the nesting makes the css easier
for (let i = 1; i <= (10); i++){
    for (let j = 1; j <= 11; j++){
        squareHTML += `
            <div id="square-${i}" class="square col-${j%2}"></div>
        `;
    }
}

main.insertAdjacentHTML("afterbegin", squareHTML);  

//variables for changing the reds
let red = 0;
let color = document.getElementById("color");

//function that actually changes the red. if statements are used to keep it from being too bright or dim.
function randomRed(){
    red = Math.floor(Math.random() * 255);
    if (225 > red && red > 128){
        return red;
    }
    else{
        randomRed();
    }
}

//changes the reds
main.addEventListener("click", () => {

    randomRed();

    color.innerText = red.toString(16);

    let newStyle = ` <style>
    
    .square {
  background: rgb(${red}, 0, 0);
}
  .col-0{
    background: black;
}

.square:nth-child(2n) {
  background: rgb(${red - 50}, 0, 0); //red will never be below 50, so this should be fine. should.
} </style>`
    

    main.insertAdjacentHTML("beforeend", newStyle);
    
});


