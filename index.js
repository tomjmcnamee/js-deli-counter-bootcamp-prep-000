
var line = []
var i = 1
function takeANumber() {
  line.push(i)
  return `Now calling number ${i}.`
  i++
}


function nowServing(katzDeliLine) {
  var nextUp = katzDeliLine.shift()
  if ( nextUp === undefined ) {
    return "There is nobody waiting to be served!"}
  else { return `Currently serving ${nextUp}.`}
  
}


 
function currentLine(line) {
  
  if ( line.length === 0 ) { return "The line is currently empty."}
  else {
  var i = 0
  
  var output = ""
 
  while ( i < line.length - 1 ){
    output = output + `${i + 1}. ${line[i]}, ` 
    i++
  }
  output = output + `${i + 1}. ${line[i]}`
  return `The line is currently: ${output}`
}
}

console.log(currentLine(["Alex", "Iris"]))
console.log(currentLine(["Jay", "Ophelia"]))

