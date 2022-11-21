// complete the given function

function palindrome(str){
  function isPalindrome(str){
  var strRev=''
for(let i = str.length-1 ; i>=0;i--)
{
 strRev += str[i]
}

 if(str.toUpperCase() == strRev.toUpperCase())
   {
      document.write('true')
   }
 else{
      document.write('false')
   }
}
  
Palindrome('raceCAR')
module.exports = palindrome
