const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const hasKey = sampleObject.hasOwnProperty(key);
  
  if(hasKey) console.log(true);
  else console.log(false);
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
