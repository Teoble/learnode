var dblSum;
dblSum = 0;
for(intI = 2; intI < process.argv.length; intI++){
  dblSum = dblSum + Number(process.argv[intI]);
}
console.log(dblSum);
