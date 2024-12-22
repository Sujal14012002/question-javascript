//palindrome question 

//input x:121----->>>>   output :true;

const ispalindrome=function(val){
    return val===+val.toString().split("").reverse().join("");

}

const res=ispalindrome(121);
console.log(res);


// 121=>"121"=