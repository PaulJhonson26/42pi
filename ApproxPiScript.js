	var pi = 3.14159265358979323846264338327950288419716939937510582097494459230;
	var iterations = 0; //DON'T EXCEED 10 Billion you IDIOT!
	var calcPi = 0;
	var numerator = 22;
	var denominator = 7;
	var prevRemainder = numerator/denominator - pi;

function approximate()
{
	
	console.log(prevRemainder);
	iterations = document.getElementById("iterations").value;
	console.log("number of iterations",iterations);

	for(var i = 0; i < iterations; i++)
	{

		if(prevRemainder > 0)
		{
			denominator++;
			calcPi = calculatePi(numerator, denominator);
		}
		
		else if(prevRemainder < 0)
		{
			
			
			numerator++;
			calcPi = calculatePi(numerator, denominator);

		}
		else
		{	
			break;
		}
		prevRemainder = numerator/denominator - pi;
		console.log(numerator + " / " + denominator);
		console.log(calcPi);
	}
	console.log("The closest Approximation is : " + numerator + " / " + denominator + " = ", calcPi);

	function calculatePi(num, den)
	{
			var result = num/den;
			return result;
	}
	document.getElementById("22/7Content").innerText = "The closest Approximation is : " + numerator + " / " + denominator + " = " + calcPi + " with " + iterations + " iterations";
	document.getElementById("22/7Content").textContent = "The closest Approximation is : " + numerator + " / " + denominator + " = " + calcPi+ " with " + iterations + " iterations";

	var GLSpi = 0;
	for(var j = 0; j < iterations; j++)
	{
		GLSpi += Math.pow(-1, j)/((2*(j))+1);
		console.log(GLSpi)
	}
	GLSpi *= 4;
	console.log("final approximation", GLSpi);
	document.getElementById("GLSContent").innerText = "The closest Approximation is : " + GLSpi + " with " + iterations + " iterations";
	document.getElementById("GLSContent").textContent = "The closest Approximation is : " + GLSpi + " with " + iterations + " iterations";
}