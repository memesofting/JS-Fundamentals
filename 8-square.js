// const size = Number(process.argv[2]);

// if(isNaN(size)){
// 	console.log("Missing size");
// }
// else
// {
//     for(let i = 0; i < size; i++){
//         for(let j = 0; j < size; j++){
//             process.stdout.write('X');
//         }
//         console.log();
//     }
// }

const size = Number(process.argv[2]);

if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}