prompt("Hi My name is Aadil Mugal\nLet's Enjoy Game");
const name = prompt("🎷🎷🎷🎷\nEnter your name");
alert(`Nice to meet you ${name}`);
var card = 5;
while(true){
	let guess = prompt(`${card} 🃏  Cards left\n💡Can you guess my name : `);

	let name = "Aadil";

	if(guess==name){
		alert("you are too genius🎉🎉🎉🎉🎉🎉");
		break;
	}
	else{
		alert("you are wrong👾👾👾👾👾👾");
		card--;
		if(card==0){
			alert("You are not a good guesser 👻👻👻👻👻")
			break;
		}
	}

}

