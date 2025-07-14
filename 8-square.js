let arg = Number(process.argv[2]);

if(isNaN(arg) || arg <= 0 || !Number.isInteger(arg))
{
	console.log("Missing size");
}
else
{
    for(let i = 0; i < arg; i++)
    {
        for(let j = 0; j < arg; j++)
        {
            process.stdout.write('X');
        }
        console.log();
    }
}