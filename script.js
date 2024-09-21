let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".Reset");
let newgamebtn =document.querySelector(".newbtn");
let msgcont =document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let playerturn = document.querySelector(".playerturn")

let turno=true;
let count =0;

const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// adding event listner


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        
        if(turno){
            box.innerText="O"
            turno=false;
            turno1="X";
            
            player();
           
        }
       
            else{
                box.innerText="X";
                turno=true;
                turno1="O";
                player();
               
            }
            box.disabled =true;
            count++;
           let iswinner= checkwinner();
           if(count===9 && !iswinner){
            draw();
           }
        
    });
});
// to show which player turn
const player =() =>{
    playerturn.innerHTML=` Player : ${turno1}`
}

// disabling function

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
// enabling fuction
const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
    box.innerText=" ";
    }
}
// reset function
const Reset =() =>{
    turno=true
    count=0;
    enableboxes();
    msgcont.classList.add("hide");
    playerturn.innerHTML=`PLAYER :0`;

};
const draw =()=> {
    msg.innerText=`Match is Draw`;
    msgcont.classList.remove("hide");
    disableboxes();

}

const showwinner =(winner) =>{
        msg.innerText=`Congratualtion , Winner is ${winner}`;
        msgcont.classList.remove("hide");
        disableboxes();
}

const checkwinner =() =>{
    for(pattern of winpattern) {
        let pos1val =boxes[pattern[0]].innerText;
        let pos2val =boxes[pattern[1]].innerText;
        let pos3val =boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val!=""){
            if(pos1val===pos2val &&pos2val===pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
            }
           
        }
    }
};


newgamebtn.addEventListener("click",Reset);
rstbtn.addEventListener("click",Reset);












