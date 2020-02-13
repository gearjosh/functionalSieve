const primeSifter = (num) => {
  if (isNaN(num)) {
    return 'Number, please! :D'
  } else {
    const recursor = num => {
      return ary => {
        return (pValue = 2) => {
          if (pValue >= num) {
            return ary
          } else {
            const filterOutMultiples = n => n === pValue || n % pValue !== 0
            const newAry = ary.filter(filterOutMultiples)
            return recursor(num)(newAry)(pValue + 1)
          }
        }
      }
    }
    return recursor(num)([...Array(num+1).keys()].slice(2))()
  }
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const n = parseInt($('#number').val())
    console.log(primeSifter(n))
    
    $('#result').text(primeSifter(n))
  })
})