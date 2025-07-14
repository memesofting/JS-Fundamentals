function add(a, b)
{
    if (process.argv.length < 3)
    {
        print("NaN")
    }
    else
        a = process.argv[2];
        b = process.argv[3];

    let result = a + b;
    console.log(result);
}