let n;
theMoment();
setInterval(() => {
  makeLeave(getImage(n)).one("transitionend", e => {
    makeEnter($(e.currentTarget));
  });
  makeCurrent(getImage(n + 1));
  n += 1;
}, 1000);
/*
setInterval(()=>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},2000)
*/
function getImage(n) {
  return $(`.images > img:nth-child(${x(n)})`);
}

function x(n) {
  if (n > 4) {
    n = n % 4;
    if (n === 0) {
      n = 4;
    }
  } // n = 1 2 3
  return n;
}

function theMoment() {
  n = 1;
  $(`.images > img:nth-child(${n})`)
    .addClass("current")
    .siblings()
    .addClass("enter");
}

function makeCurrent($node) {
  return $node.removeClass("enter leave").addClass("current");
}
function makeLeave($node) {
  return $node.removeClass("enter current").addClass("leave");
}
function makeEnter($node) {
  return $node.removeClass("leave current").addClass("enter");
}
