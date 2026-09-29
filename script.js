const SIZE = 8;

const grid = document.getElementById("grid");
const binary = document.getElementById("binary");

const FRAME_COUNT = 4;

let currentFrame = 0;

// 4枚分の画像
let frames = [];

for (let i = 0; i < FRAME_COUNT; i++) {

    frames[i] = [];

    for (let y = 0; y < SIZE; y++) {

        frames[i][y] = [];

        for (let x = 0; x < SIZE; x++) {

            frames[i][y][x] = 0;

        }
    }
}

let pixels = frames[currentFrame];

for(let y=0;y<SIZE;y++){

    pixels[y]=[];

    for(let x=0;x<SIZE;x++){

        pixels[y][x]=0;

        const cell=document.createElement("div");

        cell.className="pixel";

        cell.onclick=()=>{

            pixels[y][x]=pixels[y][x]?0:1;

            cell.classList.toggle("on");

            updateBinary();

        };

        grid.appendChild(cell);

    }

}

function updateBinary(){

    let text="";

    for(let y=0;y<SIZE;y++){

        text+=pixels[y].join("")+"\n";

    }

    binary.textContent=text;

}

updateBinary();

function redraw(){

    const cells=document.querySelectorAll(".pixel");

    let i=0;

    for(let y=0;y<SIZE;y++){

        for(let x=0;x<SIZE;x++){

            if(pixels[y][x]){

                cells[i].classList.add("on");

            }else{

                cells[i].classList.remove("on");

            }

            i++;

        }

    }

    updateBinary();

}

function changeFrame(n){

    currentFrame=n;

    pixels=frames[currentFrame];

    redraw();

}