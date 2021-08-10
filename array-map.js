

export function doubleNumbers(arr) {
    arr.map((num)=> num * 2)
    
}

export function stringItUp(arr){
  arr.map((num) => toString)
}

export function capitalizeNames(arr){
    const loArr = arr.map((string) => {
         return string.toLowerCase();
     })
     return loArr.map((firtCap) => {
         return firtCap[0].toUpperCase()+ firtCap.slice(1);
     })
   }

export function namesOnly(arr){
  
}

export function makeStrings(arr){
  
}

export function readyToPutInTheDOM(arr){
  
}