
var randomWord
var guesses = []
var result
var chances = 6
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z']
// This array holds the alphabet we will pull from.
var words = ['spaceballs', 'cat videos', 'rick and morty', 'birdman']
// This function will pick our word from the random list
function chooseWord () {
  randomWord = words[Math.floor(Math.random() * words.length)]
  randomWord = randomWord.split('')
  return randomWord
}
// This will create an underscore for each letter in the word and assign them to a variable
function blanksFromAnswer (answerWord) {
  result = ''
  for (var i = 0; i < answerWord.length; i++) {
    if (answerWord[i] === ' ') {
      result += '  '
    } else {
      result += ' _ '
    }
  }
  return result
}
function play () {
  chooseWord()
  blanksFromAnswer(randomWord)
  $('.hangLetters').text(result)
}

play()

$('.submit').click(function () {
  var letter = $('.letterGuess').val()
  console.log(letter)
  guesses.push(letter)
  $('.guessedLetters').text(guesses)
  if (randomWord.includes(letter)) {
    console.log('correct')
    guesses.push(letter)
    var phWord = buildPartiallyHiddenWord()
    console.log(phWord)
    $('.hangLetters').text(phWord)
    updateLettersShown()
  } else {
    console.log('wrong')		 
    chances -= 1
    $('#chances').text(`you have ${chances} chances remaining`)








  // .querySelector('selector')
  }
  function updateLettersShown () {
    if (randomWord.includes('letterGuess')) {
      document.write.hangLetters(updateLettersShown)
    }
  }
  function buildPartiallyHiddenWord () {

    var phWord = randomWord.map(function (letter) {
      if (guesses.includes(letter) || letter === ' ') {
        return letter
      } else {
        return '_'
      }
    }).join(' ')
    return phWord
  }
})
$('#start').on('click', replay)
function replay() {
  window.open('index.html', '_self')
}

  // var deathPic = new Array();

  // deathPic[0] = "http://smg.photobucket.com/user/PandoraSD/media/Hangman/G4.gif"
  // deathPic[1] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H1.gif"
  // deathPic[2] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H2.gif"
  // deathPic[3] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H3.gif"
  // deathPic[4] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H4.gif"
  // deathPic[5] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H5.gif"
  // deathPic[6] = "http://img.photobucket.com/albums/v60/PandoraSD/Hangman/H6.gif"
