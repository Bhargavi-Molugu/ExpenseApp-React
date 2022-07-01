// To check whether thw given input is an array

toString.call(input) === "[object Array]"
// function to check an array..
const is_array=(input)=> {
    if (toString.call(input) === "[object Array]") {
      return true;
  
    } else {
      return false;
    }
};
console.log(is_array([4, 5, 8, 0]));
// Array.isArray(input)

// Function to clone an array
const array_Clone = function(arr1){
    return arr1.slice(0);
    }
    console.log(array_Clone([1,16,55])); 