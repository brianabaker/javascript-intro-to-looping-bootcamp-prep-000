//count from 0
//add a string to the array 25 times
// i am 1 strange loop.
//i am ${i} string loops.
function forLoop(array){
  for(i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am 1 strange loop`)
    } else {
      array.push(`I am ${i} strange loops`)
    }
  }
  return array;
}

function whileLoop(n){
  while (n > 0){
  console.log(--n);
}
return "done"
}

function doWhileLoop(array){
  do{ Math.random() >= 0.5
}
  } while (array.length > 0 && maybeTrue());
  return array;
}
