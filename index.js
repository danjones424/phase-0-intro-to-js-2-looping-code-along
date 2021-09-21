function writeCards (array, event){
    const newArray = []
    let i = "";
    for(i = 0; i < array.length; i++){
      let x = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
       newArray.push(x);
    }
    return newArray;
}

function countDown (number){
    let a = number;
    while (a >= 0){
         console.log(a);
         a--;
    }
}
