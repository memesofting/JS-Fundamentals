let number = Number(process.argv[2]);

if(!isNaN(number))
{
	console.log(`MyNumber: ${number}`);
}
else
	console.log("Not a Number");
