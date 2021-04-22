var div;
var rank =["a","b","c","d","e","f","g","h"];
var row = [1,2,3,4,5,6,7,8];
var squarePrompt = rank[Math.floor(Math.random() * 8)] + row[Math.floor(Math.random() * 8)];
document.querySelector("#squarePrompt").innerHTML = squarePrompt;
var correctAttempts = 0;
var attempts = 0;
for(let i = 0; i < 8; i++)
{
	for(let j = 0; j < 8; j++)
	{
		div = document.querySelector("#"+rank[i]+row[j]);
		console.log(div.id);
		//div.innerHTML = div.id;
		div.addEventListener('click', function()
		{
			attempts++;
			console.log("HTML => ID")
			this.innerHTML = this.id;
			
		//	setTimeout(this.innerHTML = "", 1000);	

			console.log("HTML => ", this.innerHTML);

			if(squarePrompt == this.id)
			{
				console.log("prompt: ", squarePrompt);
				console.log("div id: ", this.id);
				console.log("Correct");
				document.querySelector("#status").innerHTML = "Correct!";
				document.querySelector("#status").style.color = "green";
				correctAttempts++;
			}
			else
			{
				console.log("prompt: ", squarePrompt);
				console.log("div id: ", this.id);
				console.log("Incorrect");
				document.querySelector("#status").innerHTML = "Incorrect";
				document.querySelector("#status").style.color = "red";
			}
			squarePrompt = rank[Math.floor(Math.random() * 8)] + row[Math.floor(Math.random() * 8)]
			document.querySelector("#squarePrompt").innerHTML = squarePrompt;
			document.querySelector("#accuracyDisplay").innerHTML = "Accuracy: " +  Math.round(correctAttempts/attempts * 100) / 100 ;
		});
	}
}
