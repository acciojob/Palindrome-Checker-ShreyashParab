// complete the given function

function palindrome(str){
   var strRev=''
  for(let i = str.length-1 ; i>=0;i--)
  {
    strRev += str[i]
  }

 if(str.toUpperCase() == strRev.toUpperCase())
   {
      return true
   }
 else{
      return false
   }
}
  
module.exports = palindrome
