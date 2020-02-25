//rolls a dice with X sides and displays it in the results.
function rollX(sides, times){
  moveLog();
  //first roll
  let roll = Math.floor(Math.random()*sides + 1);
  //if it is multiple rolls
  if (times > 1){
    let total = 0;
    //cycle through all times to roll and add the roll text to the log
    for(let i = 0; i < times; i++){
      let temp = Math.floor(Math.random()*sides + 1);
      if(i ==0){
        document.getElementById("log1").innerHTML = ' (D' + sides + ': ' + temp + ') '
      }
      else{
        document.getElementById("log1").innerHTML = document.getElementById("log1").innerHTML + ' (D' + sides + ': ' + temp + ') '
      }
      total += temp;
    }
    document.getElementById("log1").innerHTML = document.getElementById("log1").innerHTML + ' = ' + total;
  }
  //one roll
  else{
    document.getElementById("log1").innerHTML = ' (D' + sides + ': ' + roll + ') = ' + roll;
  }
}

//------------------------------------------------------------------------------------------------------------------------------
  //move the last rolled number down on the log list.
  function moveLog(){
    document.getElementById("log3").innerHTML = document.getElementById("log2").innerHTML;
    document.getElementById("log2").innerHTML = document.getElementById("log1").innerHTML;
    
  }