prompt("Hi My name is Aadil Mugal\nLet's Enjoy Game");
const name = prompt("π·π·π·π·\nEnter your name");
alert(`Nice to meet you ${name}`);
var card = 5;
while(true){
	let guess = prompt(`${card} π  Cards left\nπ‘Can you guess my name : `);

	let name = "Aadil";

	if(guess==name){
		alert("you are too geniusππππππ");
		break;
	}
	else{
		alert("you are wrongπΎπΎπΎπΎπΎπΎ");
		card--;
		if(card==0){
			alert("You are not a good guesser π»π»π»π»π»")
			break;
		}
	}

}

