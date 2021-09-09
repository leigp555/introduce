let first = document.querySelector('#first')
let third=document.querySelector('#third')



// for (let i = 0; i < 100; i++){
//     setTimeout(() => {
//         first.innerHTML=i
//         console.log(i)

//    },1000)
    
// }
let string = `
/*dagdlj;SJFUIHGDJGIUGHAEDOIFJSDJ
dnjgfnz.dgklddfknh
jxdfnghkg/;lgfX;h
auiyhaegurdlg
jdshuiefklgm*/
  *{
      margin:0;
      padding:0;
      box-sizing；border-box;
  }
  #sec{
      width:200px;
      height:200px;
      
      position:fixed;
      top:20px;
      right:20%;
      border-radius:50%;
      box-shadow:0px 0px 3px rgba(0,0,0,0.5);
      background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
  }
  #sec::before{
      content:'';
     
      display:block;
      width:100px;
      height:100px;
      transform:translateX(50%);
      border-radius:50%;
      background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 26%, rgba(0,0,0,1) 100%);
  }
  #sec::after{
    content:'';
   
    display:block;
    width:100px;
    height:100px;
    transform:translateX(50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
  
`
let n = 0
let string2 = ''

let step = () => {
    if (n+1 < string.length) {
        setTimeout(() => {
            console.log(string[n])
            n = n + 1
            
            if (string[n] === '\n') {
                string2=string2+'<br>'
                
            } else if (string[n] === ' ') {
                string2+='&nbsp'
            }else {
                string2 = string2 + string[n]
            
            }
            first.innerHTML = string2
            third.innerHTML = string.substring(0, n)
            window.scrollTo(0,888)
            
            step()
        }, 0)
    }
    
}
step()

