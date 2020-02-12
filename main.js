const primeSifter = (num) => {
  if (isNaN(num)) {
    return 'Try a number, please!'
  } else {
    const recursor = (ary, pValue = 2) => {
      if (pValue >= num) {
        return ary
      } else {
        const filterOutMultiples = n => n === pValue || n % pValue !== 0
        const newAry = ary.filter(filterOutMultiples)
        return recursor(newAry, pValue + 1)
      }
    }
    return recursor([...Array(num+1).keys()].slice(2))
  }
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const num = $('#number').val()
    $('#result').text(num)
  })
})

// BELOW is my scratch pad for currying this: the next step

//     const recursor = (ary, pValue = 2) => {
//       if (pValue >= num) {
//         return ary
//       } else {
//         const filterOutMultiples = n => n === pValue || n % pValue !== 0
//         const newAry = ary.filter(filterOutMultiples)
//         return recursor(newAry, pValue + 1)
//       }
//     }
