const primeSifter = (num) => {
  if (isNaN(num)) {
    return
  } else {
    const recursor = (pValue, ary) => {
      if (pValue >= num) {
        // console.log(`in the home stretch! primes are ${ary}`)
        return [...ary]
      } else {
        newPrimes = ary.filter(n => n !== pValue && n % pValue !== 0)
        // console.log(`in the else at ${pValue}. newPrimes are: ${newPrimes}`)
        return recursor(pValue + 1, newPrimes)
      }
    }
    let primes = [...Array(num+1).keys()].slice(2)
    return recursor(2, primes)
  }
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const num = $('#number').val()
    $('#result').text(num)
  })
})

// BELOW is my scratch pad for currying this function: the next step
// const recursor = (pValue, ary) => {
//   if (pValue >= num) {
//     // console.log(`in the home stretch! primes are ${ary}`)
//     return [...ary]
//   } else {
//     newPrimes = ary.filter(n => n !== pValue && n % pValue !== 0)
//     // console.log(`in the else at ${pValue}. newPrimes are: ${newPrimes}`)
//     return recursor(pValue + 1, newPrimes)
//   }
// }
// let primes = [...Array(num+1).keys()].slice(2)
// return recursor(2, primes)
// }