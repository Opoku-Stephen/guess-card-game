

function dice(){
    const diceNum = document.getElementById("diceNum").value;
    const diceResults = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values =[];
   const images = [];
  for(let  i = 0; i < diceNum; i++){
    const value = Math.floor(Math.random() * 6) + 1;
values.push(value);

images.push(`<img src ="images/${value}.png">`);
  }


  diceResults.textContent = `dice: ${values.join(", ")}`;

  diceImages.innerHTML = images.join(' ');
}

 