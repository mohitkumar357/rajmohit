// Find the number of digits

const Find_Digits = (N) => 
{
	 {
  var num=0;
  while(N>0)
  {
    N=parseInt(N/10);
      num++
  }
  return num
};
};

// Find the Fives

const Find_Five = (N) => 
{
  let count=0;
	 while(N > 0)
	 {
	   if(N % 10===5)
	   {
	     ++count;
	   }
	   N=parseInt(N/10);
	 }
	 return count;
};

// find sum

const findSum = (n) => {
    let sum = 0;
    let i = 0;
    for (i = n; i > 0; i--) {
      if (i % 2 === 0) {
        sum = sum+ i;
      }
    }
    return(sum)
  };

//   find the sum of digit of a given number

const Number_Sum = (N) => 
{
	var sum=0,num;
	while(N>0)
	{
	  num = N%10
	  sum=sum+num
	  N=parseInt(N/10)
	}
	
	return sum;
};

// prints the odds

const Print_Odd = (N) => 
{
	 for(let i=2; i<=N; i++)
	 {
      if(i === 2 || i % 2 ===1)
      {
        console.log(i);
      }
	 }
};

// print the pattern

const Print_pattern = (N) => 
{
  let n = ""
 for(let i=1; i<=N; i++)
 {
   for(let j=1; j<=i; j++)
   {
     n = n + "*";
   }
    n = n + "\n";
 }
 console.log(n);
};

// Check whether a Number is a prime or not.

const Prime_Check = (N) => 
{
  var count = 0
   if(N === 1){
  return "NO"
}
else if(N === 2){
    return "YES"

}
else{
  for(i=2; i<N/2; i++){
    if(N%i === 0){
      count++;
      break;
    }
    
  }
  if(count>0)
    return "NO"
  else
    return "YES"
}
	
};


// print the number

const printNumbers = (n) => {
  
    for (let i = 1; i <= n; i++) {
      
        console.log(i);
    }
};


// print the table

const Print_Table = (N) => 
{
		for(let i=1;i<=10;i++)
	{
	  console.log(N+" * "+i+" = "+N*i)
	  
	}
};