
const hard = [
  "-1-5-----",
  "--97-42--",
  "--5----7-",
  "5---3---7",
  "-6--2-41-",
  "--8--5---",
  "1-4------",
  "2-3-----9",
  "-7----8--"
];
const hardsol=[
  "712583694",
  "639714258",
  "845269173",
  "521436987",
  "367928415",
  "498175326",
  "184697532",
  "253841769",
  "976352841"
];

var timer;
var selected_num = null;
var selectedtile = null;



  document.getElementById("button2").addEventListener("click",startGame);



function startGame() {
  id("button2").disabled=true;
  console.log("start!!!");
  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.classList.add("number");
    number.addEventListener("click", select_number);
    document.getElementById("digits").appendChild(number);
  }


  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let tile = document.createElement("div");
      tile.addEventListener("click", selected_tile);
      tile.id = i.toString() + "-" + j.toString();


      if (hard[i][j] != "-") {
        tile.innerText = hard[i][j];
        tile.classList.add("tile-start");
      }
      if (i == 2 || i == 5) {
        tile.classList.add("horizontal-line");
      }
      if (j == 2 || j == 5) {
        tile.classList.add("vertical-line");
      }

      tile.classList.add("tile");
      document.getElementById("grid").append(tile);
    }
  }
}

function select_number() {
  if (selected_num != null) {
    selected_num.classList.remove("number-selected");
  }
  selected_num = this;

  selected_num.classList.add("number-selected");

}

function selected_tile() {
  if (selected_num) {
    if (this.innerText != "") {
      return;
    }

    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    selectedtile=this;
    if (hardsol[r][c] == selected_num.id) {
      this.innerText = selected_num.id;
      selectedtile.classList.remove("incorrect-selected");
    }
    else{
     
      selectedtile.classList.add("incorrect-selected");
    }

  }
}


function id(idi) {
  return document.getElementById(idi);
}
