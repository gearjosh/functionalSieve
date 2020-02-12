const primeSifter = (num) => {
  if (isNaN(num)) {
    return 'Try a number, please!'
  } else {
    const recursor = (a, p = 2) => {
      if (p >= num) {
        return a
      } else {
        const filterOutMultiples = n => n === p || n % p !== 0
        const newPrimes = a.filter(filterOutMultiples)
        return recursor(newPrimes, p + 1)
      }
    }
    let primes = [...Array(num+1).keys()].slice(2)
    return recursor(primes)
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
// const recursor = (p, a) => {
//   if (p >= num) {
//     // console.log(`in the home stretch! primes are ${a}`)
//     return [...a]
//   } else {
//     newPrimes = a.filter(n => n !== p && n % p !== 0)
//     // console.log(`in the else at ${p}. newPrimes are: ${newPrimes}`)
//     return recursor(p + 1, newPrimes)
//   }
// }
// let primes = [...Array(num+1).keys()].slice(2)
// return recursor(2, primes)
// }