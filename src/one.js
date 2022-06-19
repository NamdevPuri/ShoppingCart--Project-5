//[4,3,5,1,2] => find min number





//let array= [10,590,342,84,100,34,87]

// function findmin (array){
// if(!array.length){
//     return Error ('array should not be empty')  
// }else if(array.length == 1){
//     return array[0];
// }else{
//     let currentMinNu = array[0];
//     for (let i=1; i<array.length; i++){
//         if(array[i] < currentMinNu){ //4<3
//             currentMinNu = array[i]
//         }
//     }
//     return currentMinNu
// }
// }

// const re = findmin([34])
// console.log(re)

// let array=[34,45,67,1,6,90, 2,10]
// array.sort(function(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
    
// });
// console.log(array)

 function findminNum(arr){
    if(arr.length == 0){
        throw Error("please enters value in the array")
    }else if(arr.length == 1){
        return arr[0]
    }else{
        let currentNum = arr[0];
        for(let i=1; i<arr.length; i++){
            if(arr[i]< currentNum){
                currentNum= arr[i]
            }
        }return currentNum;
        
    }
    
}

const l=findminNum([232,67,89])
console.log(l)
