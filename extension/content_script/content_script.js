let reload = false;
let internal = 1000 * 60 * 10;
const starArr = [
  new Date(2018, 9, 8, 19, 30, 0),
  new Date(2018, 9, 9, 8, 45, 0),
];

if(location.href.indexOf('erp.jd.com') !== -1 || location.href.indexOf('ssa.jd.com/sso/login') !== -1) {
  console.log('start process');
  setInterval(() => {
    if (check()) {
      daka();
    }
  }, internal);

  if (check()) {
    daka();
  }
}

function isok(time) {
  const now = new Date();
  if(now  - time > 0 && now  - time <= internal * 1.1){
    return true
  }
  return false
}
function check() {
  let result = starArr.some(isok);
  console.log(result)
  return result;
}

function daka() {
  if(location.href.indexOf('erp.jd.com') !== -1){
    let reloadFlag= localStorage.getItem('reloadFlag')
    if(new Date() - new Date(reloadFlag) > internal || !reloadFlag){
      window.location.reload();
      localStorage.setItem('reloadFlag', new Date());
    }
  }
  // 登录
  const logt = getRandomNum(5, 30)
  setTimeout(function() {
    if (location.href.indexOf('ssa.jd.com/sso/login') !== -1) {

      if (document.getElementById('username')) {
        document.getElementById('username').value = 'sunzhiyong7'
      }
      if (document.getElementById('password')) {
        document.getElementById('password').value = '!Szy785037725'
      }
      if (document.querySelector('.formsubmit_btn')) {
        document.querySelector('.formsubmit_btn').click()
      }
    }
  }, logt * 1000)

  // 打开
  setTimeout(function() {
    if (location.href.indexOf('erp.jd.com') !== -1) {
      var buttons = document.querySelectorAll('button')
      if (buttons) {
        if (buttons[1].textContent === '打卡') {
          buttons[1].click();
          localStorage.setItem(new Date(), new Date());
        }
      }
    }
  }, (logt + 20) * 1000)
}


function getRandomNum(begin, end) {
  var span = end - begin
  var randomNum = Math.floor(Math.random() * 1000)
  return (randomNum % span) + begin
}
