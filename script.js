// complete the given function

function palindrome(str){
	for(let i=0; i<Math.floor(str.length()/2); i++;){
		if(str.charAt(i)!==str.charAt(str.length-i-i)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
