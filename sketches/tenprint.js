let x = 0
    y = 0
    oW = window.innerWidth
    oH = window.innerHeight
    nW = 1
    nH = 1

let space = 10
    cycles = 1
    cyclecount = 0
    vals = []
    defaults = {
      'background': (localStorage['backgroundColor'] == null) ? '#FFFFFF' : localStorage['backgroundColor'],
      'foreground': (localStorage['foregroundColor'] == null) ? '#C3C3C3' : localStorage['foregroundColor']
    }

let backgroundElement, foregroundElement;

function setup() {
  createCanvas(oW, oH)

  console.log(nW, nH)

  backgroundElement = document.createElement('input')
  backgroundElement.setAttribute('type', 'color')
  backgroundElement.setAttribute('id', 'bg')
  backgroundElement.setAttribute('value', defaults['background'])
  backgroundElement.addEventListener('change', function(){
    doThings()
  }, false)
  foregroundElement = document.createElement('input')
  foregroundElement.setAttribute('type', 'color')
  foregroundElement.setAttribute('id', 'fg')
  foregroundElement.setAttribute('value', defaults['foreground'])
  foregroundElement.addEventListener('change', function(){
    doThings()
  }, false)

  document.getElementById('floatie').appendChild(backgroundElement)
  document.getElementById('floatie').appendChild(foregroundElement)

  for (let i = 0; i < ((((height/(space))+1)*((width/(space)))+1)+8)*cycles; i++) {
    vals.push(random(1))
  }

  doThings()
}

function doThings() {
  cyclecount = 0
  x = 0
  y = 0

  background(document.getElementById('bg').value)
  stroke(document.getElementById('fg').value)

  for (let num of vals) {

    num < 0.5                           ?
      line(x, y, x + space, y + space)  :
      line(x, y + space, x + space, y) // I ❤️ ternaries

    // Ternaries don't work with multiline results 😔
    if (x < width) {
      x += space
    } else {
      if (y < height) {
        x = 0
        y += space
      } else {
        x = 0
        y = 0
        cyclecount++
      }
    }

  }
}

window.addEventListener('resize', function(e){
  console.log('Kill me please')
  nW = window.innerWidth / oW
}, false)

window.addEventListener('beforeunload', function(e){
  localStorage['backgroundColor'] = document.getElementById('bg').value
  localStorage['foregroundColor'] = document.getElementById('fg').value
}, false)
