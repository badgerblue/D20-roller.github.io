//rolls a D20 and displays it under the dice and in the log. functions below do the same for other numbers
//-----------------------------------D20----------------------------------------------------------------------------------------
function d201() {
    moveLog();
    let roll = Math.floor(Math.random()*20 + 1);
    document.getElementById("log1").innerHTML = ' (D20: ' + roll + ') = ' + roll;
  }

  function d202() {
    moveLog();
    let roll1 = Math.floor(Math.random()*20 + 1);
    let roll2 = Math.floor(Math.random()*20 + 1);
    document.getElementById("log1").innerHTML = '(D20: ' + roll1 + ') (D20: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d203() {
    moveLog();
    let roll1 = Math.floor(Math.random()*20 + 1);
    let roll2 = Math.floor(Math.random()*20 + 1);
    let roll3 = Math.floor(Math.random()*20 + 1);
    document.getElementById("log1").innerHTML = '(D20: ' + roll1 + ') (D20: ' + roll2 + ') (D20: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }
//-----------------------------------D12----------------------------------------------------------------------------------------
  function d121() {
    moveLog();
    let roll = Math.floor(Math.random()*12 + 1);
    document.getElementById("log1").innerHTML = ' (D12: ' + roll + ') = ' + roll;
  }
  function d122() {
    moveLog();
    let roll1 = Math.floor(Math.random()*12 + 1);
    let roll2 = Math.floor(Math.random()*12 + 1);
    document.getElementById("log1").innerHTML = '(D12: ' + roll1 + ') (D12: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d123() {
    moveLog();
    let roll1 = Math.floor(Math.random()*12 + 1);
    let roll2 = Math.floor(Math.random()*12 + 1);
    let roll3 = Math.floor(Math.random()*12 + 1);
    document.getElementById("log1").innerHTML = '(D12: ' + roll1 + ') (D12: ' + roll2 + ') (D12: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }
//-----------------------------------D10----------------------------------------------------------------------------------------
  function d101() {
    moveLog();
    let roll = Math.floor(Math.random()*10 + 1);
    document.getElementById("log1").innerHTML = ' (D10: ' + roll + ') = ' + roll;
  }
  function d102() {
    moveLog();
    let roll1 = Math.floor(Math.random()*10 + 1);
    let roll2 = Math.floor(Math.random()*10 + 1);
    document.getElementById("log1").innerHTML = '(D10: ' + roll1 + ') (D10: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d103() {
    moveLog();
    let roll1 = Math.floor(Math.random()*10 + 1);
    let roll2 = Math.floor(Math.random()*10 + 1);
    let roll3 = Math.floor(Math.random()*10 + 1);
    document.getElementById("log1").innerHTML = '(D10: ' + roll1 + ') (D10: ' + roll2 + ') (D10: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }
//-----------------------------------D8-----------------------------------------------------------------------------------------
  function d81() {
    moveLog();
    let roll = Math.floor(Math.random()*8 + 1);
    document.getElementById("log1").innerHTML = ' (D8: ' + roll + ') = ' + roll;
  }
  function d82() {
    moveLog();
    let roll1 = Math.floor(Math.random()*8 + 1);
    let roll2 = Math.floor(Math.random()*8 + 1);
    document.getElementById("log1").innerHTML = '(D8: ' + roll1 + ') (D8: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d83() {
    moveLog();
    let roll1 = Math.floor(Math.random()*8 + 1);
    let roll2 = Math.floor(Math.random()*8 + 1);
    let roll3 = Math.floor(Math.random()*8 + 1);
    document.getElementById("log1").innerHTML = '(D8: ' + roll1 + ') (D8: ' + roll2 + ') (D8: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }
//-----------------------------------D6-----------------------------------------------------------------------------------------
  function d61() {
    moveLog();
    let roll = Math.floor(Math.random()*6 + 1);
    document.getElementById("log1").innerHTML = ' (D6: ' + roll + ') = ' + roll;
  }
  function d62() {
    moveLog();
    let roll1 = Math.floor(Math.random()*6 + 1);
    let roll2 = Math.floor(Math.random()*6 + 1);
    document.getElementById("log1").innerHTML = '(D6: ' + roll1 + ') (D6: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d63() {
    moveLog();
    let roll1 = Math.floor(Math.random()*6 + 1);
    let roll2 = Math.floor(Math.random()*6 + 1);
    let roll3 = Math.floor(Math.random()*6 + 1);
    document.getElementById("log1").innerHTML = '(D6: ' + roll1 + ') (D6: ' + roll2 + ') (D6: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }
//-----------------------------------D4-----------------------------------------------------------------------------------------
  function d41() {
    moveLog();
    let roll = Math.floor(Math.random()*4 + 1);
    document.getElementById("log1").innerHTML = ' (D4: ' + roll + ') = ' + roll;
  }
  function d42() {
    moveLog();
    let roll1 = Math.floor(Math.random()*4 + 1);
    let roll2 = Math.floor(Math.random()*4 + 1);
    document.getElementById("log1").innerHTML = '(D4: ' + roll1 + ') (D4: ' + roll2 + ') = ' +  (roll1 + roll2);
  }

  function d43() {
    moveLog();
    let roll1 = Math.floor(Math.random()*4 + 1);
    let roll2 = Math.floor(Math.random()*4 + 1);
    let roll3 = Math.floor(Math.random()*4 + 1);
    document.getElementById("log1").innerHTML = '(D4: ' + roll1 + ') (D4: ' + roll2 + ') (D4: ' + roll3 + ') = ' +  (roll1 + roll2 + roll3);
  }


//------------------------------------------------------------------------------------------------------------------------------
  //move the last rolled number down on the log list.
  function moveLog(){
    document.getElementById("log3").innerHTML = document.getElementById("log2").innerHTML;
    document.getElementById("log2").innerHTML = document.getElementById("log1").innerHTML;
    
  }