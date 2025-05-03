let boxes = document.querySelectorAll(".box");
let res = document.getElementsByClassName("result");
let resetBtn = document.querySelectorAll(".reset-btn");

/* boxes.forEach((box)=>{box.addEventListener("click",()=>{
    console.log("Button was clicked");
})}); */

//1 for player X and 0 for player O.
let temp = 1;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(temp) {
            box.innerText = "X";
            temp = 0;
        }
        else {
            box.innerText = "O";
            temp = 1;
        }
        box.disabled = true;
        patternCheck();
    });
});

let correctPatterns = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

function patternCheck() {
    correctPatterns.forEach((pattern)=>{
        let pat1 = boxes[pattern[0]].innerText;
        let pat2 = boxes[pattern[1]].innerText;
        let pat3 = boxes[pattern[2]].innerText;
        if(pat1!="" && pat2!="" && pat3!="") {
            if(pat1 == pat2 && pat2 == pat3) {
                console.log("WINNER: player ",pat1);
                res[0].innerText = "WINNER: Player " + pat1;
                boxes.forEach((box)=>{
                    box.disabled = true;
                });
            }
        }
    });
}

resetBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.innerText = "";
            box.disabled = false;
            temp = 1;
            res[0].innerText = "";
        });
    });
});


