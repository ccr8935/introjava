function myConditional(myArgument){
	if (myArgument > 0){
		return "Positive Number"
	} else if (myArgument < 0){
		return "Negative Number"
	} else {
		return "ZERO"
	}
}

console.log(myConditional(3))