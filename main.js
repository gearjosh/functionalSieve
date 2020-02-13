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

const spaceAdder = (a) => {
  return a.map((int, i) => {
    if (i === 0) {
      return int.toString()
    } else if (i + 1 === a.length) {
      return ` and ${int.toString()}`
    } else {
      return ` ${int.toString()}`
    }
  })
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const n = parseInt($('#number').val())
    $('#result').text(spaceAdder(primeSifter(n)))
  })
})