// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);

}

const gifts = ['teddy bear', 'drone', 'doll' ]
function wrapGifts(gifts){
for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
}

  return gifts;
}

wrapGifts(gifts);


function writeCards(names, string){
  let array = []
  for (let i = 0; i < names.length; i++) { 
     array.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`);
    }
debugger
  return array;
  
     }
     console.log(writeCards(['Eddie', 'John', 'Mike'], 'birthday'));
  function countDown(countDown = 10) { 
    while (countDown >= 0)  
    console.log(countDown--)
    
    }
    countDown(10);
  
  
