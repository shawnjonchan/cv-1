let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/*你好，我叫Shawn
*接下来我演示一下我的前端功底
*首先我要准备一个div
**/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/* 接下来跟我把 div 变成一个乾坤八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
 background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加上一颗灵珠和一颗魔丸 */
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;"; //空格用&nbsp；表示
      // 如果不是回车就照搬
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    // length=83
    if (n < string.length - 1) {
      //如果 n 不是最后一个，就继续
      n += 1;
      step();
    } else {
      //n 是最后一个
    }
  }, 50);
};

step();
