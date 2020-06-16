var levels = 4
var rows = [1];
addLevel.apply(this, rows);
for(var i = 0; i < levels-1; i++)
{
	rows = addLevel(rows);
}

function addLevel(rows)
{
	for(var i = 0; i < rows.length; i++)
	rows.push(rows[i]*2);
	return(rows)
}
console.log(rows);