const primeSifter = (num) => {
  if (isNaN(num)) {
    return
  } else {
    const primes = new Array(num)

    // refactor this into a recursive function
    for (let index = 0; index < num; index++) {
      primes[index] = index
    }
    let p = 2

    // refactor to filter
    primes.forEach((number) => {
      if (number % p === 0) {
        primes.slice(p, p+1)
      }
    })
    p++
    // return a function that contains:
    // - the new array
    // - incremented p
  }
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const num = $('#number').val()
    $('#result').text(num)
  })
})