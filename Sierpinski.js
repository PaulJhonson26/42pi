var Height;
var Tessel;
var elemTri_Size;
var wholeTri_Stars;
var curScale = 1;
var newScale
console.log("Need to find a better way to completly zoom Out. It's weird the way it works.")
Triangulate();
function zoomIn()
{

	console.log("old zoom", curScale);
	if(curScale	< 0.1)
	{		
			newScale = curScale*5;
	}
	else
	{
		newScale = curScale*2;
	}
	document.querySelector("#triDiv").style.transform = "scale(" + newScale + ")";
	curScale = newScale;
	

	console.log("new zoom" + document.querySelector("#triDiv").style.transform + "curScale: " + curScale);
}
function zoomOut()
{
	
	console.log("old zoom", curScale);
	if(curScale	> 0.1)
	{
		newScale = curScale*0.5;
	}
	else
	{
		newScale = curScale*0.2;
	}
	
	
	document.querySelector("#triDiv").style.transform = "scale(" + newScale + ")";
	curScale = newScale;
	

	console.log("new zoom" + document.querySelector("#triDiv").style.transform + "curScale: " + curScale);
}
function Triangulate()
{	
	document.getElementById("triDiv").innerHTML = "";
	Height = document.getElementById("Height").value;
	Tessel = document.getElementById("Tessel").value;
	elemTri_Size = Height / (Math.pow(2, Tessel));
	wholeTri_Stars = [];	
	if( Height % Math.pow(2, Tessel	) == 0)
	{
		console.log("elementary triangle size ", elemTri_Size);
		for(var i = 0 ; i < elemTri_Size; i++)
		{
			wholeTri_Stars.push("");
			for(let n = elemTri_Size-2-i; n >= 0; n--)
			{
				wholeTri_Stars[i] = (wholeTri_Stars[i] + '&#8194');		
			}
			for(let n = 0; n < 2*i+1; n++)
			{
				wholeTri_Stars[i] =  (wholeTri_Stars[i] + "*");
			}
			for(let n = elemTri_Size-2-i; n >= 0; n--)
			{
				wholeTri_Stars[i] = (wholeTri_Stars[i] + '&#8194');
			} 

			
		}

		for(var j = 0; j < Tessel; j++)
		{
			for(var k = 0; k < Height/(Math.pow(2, Tessel-j)); k++) //loops through values to double and append
			{
				wholeTri_Stars.push(wholeTri_Stars[k] + '&#8194' + wholeTri_Stars[k])
			}
			console.log(wholeTri_Stars);
			
			for(let i = 0; i < elemTri_Size	* (Math.pow(2, j)); i++)
			{
				for(let k = 0; k < elemTri_Size	* (Math.pow(2, j)); k++)
				{
					wholeTri_Stars[k] = "&#8194" + wholeTri_Stars[k] + "&#8194";
				}
				
			}
			
		}

		for(let n = 0; n < Height; n++)
		{
			document.getElementById("triDiv").insertAdjacentHTML( 'beforeend', wholeTri_Stars[n] + "<br>");

		}
		if(document.getElementById("checkBox").checked)
		{
			for(let k= Height-2; k >= 0; k--)
			{
				document.getElementById("triDiv").insertAdjacentHTML( 'beforeend', wholeTri_Stars[k]+ "<br>");
			}
		}
	}	
	else
	{
		console.log("invalid input");
		document.getElementById("triDiv").insertAdjacentHTML( 'beforeend',"invalid input");
	}
}
