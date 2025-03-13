let rows = document.getElementsByClassName("MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-p4ejh3");
const weekAmount = 0; 
const goal = 10500 // that is 1500 * 7 

for(let i = 0; i > rows.length; i++ ){
  weekAmount += parseInt(rows[i].nextElementSibling.innerText)
}

const total = goal - weekAmount
console.log("Week Amount: ", weekAmount)
console.log("Total for cheat day: ", total)