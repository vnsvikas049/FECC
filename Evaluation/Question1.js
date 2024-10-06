function countVowelsAndConsonants(str){
    let vowel = 0;
    let consonants = 0;
    let vowels = 'aeiouAEIOU';
    for(let char of str ){
      
      if(/[a-zA-Z]/.test(char)){
        if(vowels.includes(char)){
          vowel ++;
        }
        else{
        consonants ++;
        }
        
      }
      
    } 
      
    
    return {vowels:vowel,consonants:consonants}
  }
  let result = countVowelsAndConsonants("Hello,World")
  console.log(result)