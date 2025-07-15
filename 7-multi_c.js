const x = Number(process.argv[2]);

// if(isNaN(arg) || arg < 0 || !Number.isInteger(arg))
// {
// 	console.log("Missing number of occurrences");
// }
// else
// {
//     for(let i = 0; i < arg; i++)
//     {
//         console.log("C is fun");
//     }
// }

if(isNaN(x))
{
    console.log("Missing number of occurrences");
}
else
{
    const result = Array(x).fill("C is fun").join('\n');
    console.log(result);
}
