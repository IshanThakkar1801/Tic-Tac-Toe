let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-game");
let winnermsg = document.querySelector(".winnermsg");
let turn0 = true;
let count = 0;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
];

const checkwinner = () => {
    for (let patt of winpattern) {
        const [a, b, c] = patt;
        if (
            boxes[a].innerText !== "" &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[b].innerText === boxes[c].innerText
        ) {
            disableall();
            winnermsg.innerText = `🎉 Congratulations, Winner is '${boxes[a].innerText}'`;
            winnermsg.style.display = "flex";
            return;
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerText = turn0 ? "O" : "X";
        turn0 = !turn0;
        box.disabled = true;
        checkwinner();
    });
});

const disableall = () => {
    boxes.forEach(box => box.disabled = true);
};

const reset = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
    turn0 = true;
    winnermsg.innerText = "";
    winnermsg.style.display = "none";
};

resetbtn.addEventListener("click", reset);



