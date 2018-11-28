function makeArray() {
  const array = [];
  const t = 10;

  for (let i = 0; i < t; i++) {
    array.push("I am a strange loop.");
  }

  return [array, t];
}

for(let i = 0;i<25; i++){
  console.log(`I am ${i} strange loopes`);
}

const n = Math.floor(Math.random()*100);
while(n>0){
  console.log('done');
}

function incrementVariable(){
    const [array, t] = makeArray();
    const l = array.length;
}
do{
   incrementVariable();
}while(array);