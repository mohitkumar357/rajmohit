//birthday game
function Birthday_Game(arr,D ,M) {
    let counter = 0;
       for(let i = 0; i < arr.length - 1; i++){
            let subArray = arr.slice(i, i+M);
            if (subArray.length === M) {
               let sum = subArray.reduce((a,b) => a + b, 0);
               if(sum === D){
                    counter += 1;
                }
             }
       }
       return counter;

}

//find the product
const Find_Prod = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc*curr,1);
return result;
};

//find the sum
const Find_Sum = (array, N) => 
{
let result=[];
result=array.reduce((acc,curr) => acc = acc+curr);
return result;
};
// Count Occurrences
const findCount = (N, K, Arr) => 
{
   let count=0;
   for (const i of Arr){
     if (K===i){
       count++;
     }
   }
   return count;
};

//even & odd

const findEvenOdd = (N, Arr) => 
{
    let B=[0,0];
    for(let i=0; i<N ;i++){
      if(Arr[i]%2===0){
          B[0]+=Arr[i];
      }
      else{
          B[1]+=Arr[i]
      }
    }
    return B;
};

// Find whether the number is present or not
const Find_Num = (array,N,M) => 
{
  for(let i = 0; i<N; i++){
    if(array[i] == M){
      return "YES"
    }
  } 
  return "NO";
};




//higher age
const highAge = (N, Arr) => 
{
  let age=[];
  for(let i=0;i<N;i++){
    if(Arr[i]>=18){
      age.push(Arr[i]);
    }
    
  }
  return age;
};

//Increment the Array Elements

const Inc_Arr = (array,N) => 
{
  
 array=array.map(item => item+1);
 let a=array.join(' ');
 console.log(a)

};

//pass or fail

const isAllPass = (N, Arr) => 
{
     for(let i=0;i<N;i++){
    if(Arr[i]<32){
      
    return "NO";
   }
      
  }
    return "YES";
};

//Unique Color Shirt

function Unique_Shirts (arr,N) {

    let unique_color=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
    return (unique_color.length)
   }

   //min & max

   function arrayMin(arr) {
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
      }
    }
    
    return min;
  
  }
  
  function arrayMax(arr) {
  
  let max = arr[0];
  for(let i = 1; i < arr.length; i++){
    if(max < arr[i]){
      max = arr[i];
    }
  }
  return max;
     
  
  }