let string = "hello world world hello";
lowerString = string.toLowerCase();
let arrayString = lowerString.split(" ");
let result = {};
for(let i = 0; i < arrayString.length; i++){
    if(result[arrayString[i]]==null){
        result[arrayString[i]] = 1;
    }
    else
    {
        result[arrayString[i]]+=1;
    }
}
console.log(result);
