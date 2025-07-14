function add(a, b)
{
    let num1 = Number(a);
    let num2 = Number(b);
    if (isNaN(num1) || isNaN(num2))
    {
        return (NaN);
    }
    else
        return (num1 + num2);
}

console.log(add(process.argv[2], process.argv[3]));