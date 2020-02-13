const primeSifter = (num) => {
  if (isNaN(num)) {
    return 'ERROR!!! BEEP BOOP BEEP BOOP!!!'
  } else if (num < 2) {
    return 'non existent. You should pick a bigger number, homey'
  } else if (num > 6245) {
    return 'uncomputable! Your number is so big the computer can\'t handle it!'
  } else {
    const recursor = num => {
      return ary => {
        return (pValue = 2) => {
          if (pValue >= num) {
            return ary
          } else {
            const newAry = ary.filter(n => n === pValue || n % pValue !== 0)
            return recursor(num)(newAry)(pValue + 1)
          }
        }
      }
    }
    return recursor(num)([...Array(num+1).keys()].slice(2))()
  }
}

const spaceAdder = (a) => {
  if (typeof a === 'string') {
    return a
  } else {
    return a.map((int, i) => {
      if (i === 0) {
        return int.toString()
      } else if (i + 1 === a.length) {
        return ` and ${int.toString()}.`
      } else {
        return ` ${int.toString()}`
      }
    })
  }
}

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const n = parseInt($('#number').val())
    $('#result').text(spaceAdder(primeSifter(n)))
    $('.showIt').show()
  })
})
