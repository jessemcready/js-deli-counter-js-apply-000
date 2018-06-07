const customerCounter = 0;

function takeANumber(line){
  customerCounter++;
  line.push(customerCounter);
  return `You are number ${customerCounter}.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  var nowServingString = "Currently serving " + line[0] + ".";
  line.shift();
  return nowServingString;
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  var currentLineString = "The line is currently: ";
  for(var i = 0; i < line.length; i++){
    if(i == line.length - 1){
      currentLineString += `${i + 1}. ${line[i]}`;
    } else{
      currentLineString += `${i + 1}. ${line[i]}, `;
    }
  }
  return currentLineString;
}
