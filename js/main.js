//  FOR PADDLE GAME
//  ALL CREDITS GOES TO Kit Jenson https://codepen.io/kitjenson/pen/dypvgad
console.clear()
const hits = document.querySelector('#hits span')
const high_score = document.getElementById('high_score')
const hit_start = document.getElementById('hits')
const blur_bg = document.getElementById('blur_bg')
var hs = 0
const ball = document.getElementById('ball')
const pad = document.getElementById('paddle')
var bgs = ['skulls','cubes','foggy-birds','food','gplay','inspiration-geometry','light-wool','robots','swirl','tree-bark','white-diamond','xv']

setTimeout(function(){
  var block = hit_start.getBoundingClientRect()
  blur_bg.style.clipPath = 'polygon('+block.left+'px '+block.top+'px, '+block.right+'px '+block.top+'px, '+block.right+'px '+block.bottom+'px, '+block.left+'px '+block.bottom+'px)'  
},250)

function changeColor() {
  var root = document.documentElement;
  var color = Math.floor(Math.random()*360)  
  root.style.setProperty('--color', "hsl("+color+"deg,75%,25%)"); 
}

function changeBG() {
  var root = document.documentElement;
  var image = bgs[Math.floor(Math.random()*bgs.length)]
  root.style.setProperty('--bg', "url(https://www.transparenttextures.com/patterns/"+image+".png)"); 
}

function playTheGame() {  
  document.getElementById('how_to').style.opacity = '0'
  hit_start.style.pointerEvents = 'none'
  var hitz = 0
  const iw = window.innerWidth
  const ih = window.innerHeight
  var d = {}
  var ml = (iw*.5)-(iw*.05)
  var pad_width = iw*.1
  var pad_speed = 15
  var ball_speed = 3
  var ball_t = -1
  var ball_l = 1

  ball.style.left = (iw*.5) - 7.5 + 'px'
  ball.style.top = (ih*.8) + 'px'

  function moveGame(e) {       
    // key tracking and pad moving    
    window.addEventListener('keydown', function(e) { d[e.which] = true; });
    window.addEventListener('keyup', function(e) { d[e.which] = false; });

    if((d[37] || d[65]) && ml - pad_speed > -15) {
      ml = ml - pad_speed
    } 
    if((d[39] || d[68]) && ml + pad_speed < iw - pad_width) {
      ml = ml + pad_speed    
    } 
    pad.style.marginLeft = ml+'px'

    // moving the ball and collision detection
    var ball_loc = ball.getBoundingClientRect()
    var pad_loc = pad.getBoundingClientRect()
    var left_h = document.getElementById('left_hitbox').getBoundingClientRect()
    var top_h = document.getElementById('top_hitbox').getBoundingClientRect()
    var right_h = document.getElementById('right_hitbox').getBoundingClientRect()
    var bottom_h = document.getElementById('bottom_hitbox').getBoundingClientRect()

    // top/bottom
    if(ball_loc.top + 15 >= (ih - 40) && pad_loc.left < ball_loc.right && pad_loc.right > ball_loc.left) {
      ball_t = -1
      hitz++
      hits.innerHTML = hitz      
      if(ball_speed < 12) {
        ball_speed++  
      }      
      hits.classList.toggle('new_hit')
      pad.classList.toggle('new_hit')
      setTimeout(function(){ 
        hits.classList.toggle('new_hit')
        pad.classList.toggle('new_hit')
      },250)
      changeColor()
    }

    if(ball_loc.top <= 0) {
      ball_t = 1          
    }    

    // left/right
    if(ball_loc.left + 15 >= iw) {
      ball_l = -1
    }
    if(ball_loc.left <= 0) {
      ball_l = 1
    }

    if(ball_loc.top >= ih - 25) {
      ball.style.left = (iw*.5) - 7.5 + 'px'
      ball.style.top = (ih*.8) + 'px'
      ball_t = -1
      ball_speed = 3
      if(hs < hitz) { hs = hitz }
      high_score.innerHTML = hs
      hitz = 0
      hits.innerHTML = hitz  
      changeBG()
    } else {
      var ll = ball_loc.left + (ball_speed*ball_l)
      var tt = ball_loc.top + (ball_speed*ball_t)
      // console.log(ll + ' / ' + tt)
      ball.style.left = ll + 'px'
      ball.style.top = tt + 'px'
    } 

    // center hitboxes
    var left_hit = !(left_h.right < ball_loc.left || 
                     left_h.left > ball_loc.right || 
                     left_h.bottom < ball_loc.top || 
                     left_h.top > ball_loc.bottom) 
    if(left_hit) { ball_l = -1 }
    var top_hit = !(top_h.right < ball_loc.left || 
                    top_h.left > ball_loc.right || 
                    top_h.bottom < ball_loc.top || 
                    top_h.top > ball_loc.bottom) 
    if(top_hit) { ball_t = -1 }
    var right_hit = !(right_h.right < ball_loc.left || 
                      right_h.left > ball_loc.right || 
                      right_h.bottom < ball_loc.top || 
                      right_h.top > ball_loc.bottom) 
    if(right_hit) { ball_l = 1 }
    var bottom_hit = !(bottom_h.right < ball_loc.left || 
                       bottom_h.left > ball_loc.right || 
                       bottom_h.bottom < ball_loc.top || 
                       bottom_h.top > ball_loc.bottom) 
    if(bottom_hit) { ball_t = 1 }
    if(left_hit || right_hit || top_hit || bottom_hit){     }

    var block = hit_start.getBoundingClientRect()
    blur_bg.style.clipPath = 'polygon('+block.left+'px '+block.top+'px, '+block.right+'px '+block.top+'px, '+block.right+'px '+block.bottom+'px, '+block.left+'px '+block.bottom+'px)'
  }

  const hitss = document.getElementById('hits')
  function moveScore() {
    var x = Math.random() < .5 ? Math.random()*100 : -(Math.random()*100)
    var y = Math.random() < .5 ? Math.random()*25 : -(Math.random()*100)
    hitss.style.transform = 'translate('+x+'%,'+y+'%)'
    setTimeout(function(){ moveScore() }, 3000)
  }

  moveScore()
  var playGame = setInterval(moveGame,1000/60)
  }

hit_start.addEventListener('click', playTheGame)