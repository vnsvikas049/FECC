function reverseWords(str){
    return str.split(' ')
      .map(word => word.split('').reverse().join(''))
  }
  let result= reverseWords('JavaScript is a fun')
  console.log(result)