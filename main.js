var nbm_of_coins = 100; 

var heads = 0;
var tails = 0;


var i = 0;
while(i<nbm_of_coins){
  if(Math.floor(Math.random() * 2) + 1==1) {
    heads+=1;
  } else {
    tails+=1;
  }
  i++;
console.log("heads " + heads + "\n tails " + tails);
}
