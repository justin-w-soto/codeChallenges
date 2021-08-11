

export function doubleNumbers(arr) {
    arr.map((num)=> num * 2)
    
}

export function stringItUp(arr){
  arr.map((num) => num.toString())
  
}

export function capitalizeNames(arr){
    const lowerCase = arr.map((string) => {
         return string.toLowerCase();
     })
     return lowerCase.map((firstLetterCap) => {
         return firstLetterCap[0].toUpperCase()+ firstLetterCap.slice(1);
     });
   }


export function namesOnly(arr){
  return arr.map(names => names.name);
}


export function makeStrings(arr){
  return arr.map(names => {
    if (names.age >= 18)
    return `${names.name} can go to the Matrix`;
    else
    return `${names.name} is under age!!`;
  });
}

export function readyToPutInTheDOM(arr) {
  return arr.map(names => `<h1>${names.name}</h1>`
  `<h2>${names.age}</h2>`);
}