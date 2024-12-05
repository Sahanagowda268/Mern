const alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let oddalphabets="";
for(let i=0;i<26;i++){
  if((i+1)%2!=0){
    oddalphabets+=alphabets[i];
  }
}
console.log("odd:",oddalphabets);