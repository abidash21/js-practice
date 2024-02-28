
  const randomColor = function () {
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i=0;i<6;i++){
      color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
  }
  
  
  const changeBackground=function(){
    document.body.style.backgroundColor=randomColor()
  }
  
  let intervalId;
  const changeColor=function(){
    if (!intervalId)
    intervalId=setInterval(changeBackground,1000)
  }
  const stopColor=function(){
    clearInterval(intervalId)
    intervalId=null
  }
  
  
  document.querySelector('#start').addEventListener('click', changeColor )
  
  document.querySelector('#stop').addEventListener('click', stopColor)