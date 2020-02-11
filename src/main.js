import sieve from "./sieve";

$(document).ready(function() {
  $('#numberSelector').submit(function(e){
    e.preventDefault()
    const num = $('#number').val()
    $('#result').text(num)
  })
})