module.exports = function (){
    return {
      add: function(num1, num2) { 
        console.log("the sum is:", num1 + num2);
      },
      multiply: function(num1, num2) {
        console.log("the answer is:", num1 * num2);
      },
      square: function(num) {
        console.log("the answer is:", num * num);
      },
      random: function(num1, num2) {
           
        if(num2 > num1){
            console.log(Math.floor(Math.random() (num2 - num1 + 1)) + num1);
        } else{
          console.log(Math.floor(Math.random() (num1 - num2 + 1)) + num2);
        }
        }
      }
    }
  
  