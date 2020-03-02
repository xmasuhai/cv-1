let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*
** 你好,我是一名前端
** 接下来,我要演示我的前端功底
** 我要加的样式,如下
*/

/* 白色背景太单调了，我们来点背景 */
html {
    background: rgba(200,200,200,0.8);
}

/* 准备一个div */

#div1{
    border: 1px solid whitesmoke;
    width: 400px;
    height: 400px;
}

/* 
** 接下来我把 div 变成一个八卦图
** 注意看好了
** 首先，把 div 变成一个圆
**/

#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 八卦是阴阳形成的
** 一黑一白
** 用个背景渐变吧 gradient background generator https://cssgradient.io/
**/

#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 
** 加两个神秘的小球
**/

#div1::before,#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid whitesmoke;
    border-radius: 50%;
    border:none;
}
#div1::before{
    top: 0;
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    bottom: 0;
    left: 50%;
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

/*加点阴影效果吧*/
#div1{
    box-shadow: 0 0 18px 18px #666666;
}

/*让太极图转起来吧*/
#div1{
    animation: 5s linear infinite  taiJi;
}
@keyframes taiJi{
    from{
        left: 50%;
        transform : translateX(-50%) rotate(0deg);
    }
    to{
        left: 50%;
        transform : translateX(-50%) rotate(360deg);
    }
}

/* 
** 一个八卦终于完成了
** 源码：https://github.com/FrankFang/cv-1
** 效果：http://fangyinghang.com/cv-1/dist/index.html
** 谢谢耐心看完
** 这是我的:联系 主页 简历 XXX
*/






`;
let string2 = "";
// string = string.replace(/\n/g, "<br>");
let n = 0; // string[n]下标
// html.innerHTML = ""; //string[n]; //string.substring(0, n); // 初始 // 把`string[n]`换为`string.substring(0,n)` 显示完整字符串，即显示从`0`个到`n`个字符串
// console.log(string.length);
// console.log(html.innerHTML)
/* 用递归的setTimeout实现 封装进一个函数 */
let step = () => {
    // console.log("1s后把" + n + "加1并显示" + string[n]);
    setTimeout(() => {
        // console.log(n);
        // n = n + 1; //放到下一次循环前
        // console.log(string[n]);
        if (string[n] === "\n") {
            //是回车就改成<br> 累加赋值给string2
            string2 += "<br>";
        } else if (string[n] === " ") {
            // 转义缩进
            string2 += "&nbsp;";
        } else {
            //如果不是回车就照搬
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 9999);
        // console.log(string2);
        // html.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            // n不是最后一个
            n += 1;
            step();
        } else {
            // n是最后一个
        }
    }, 0);
};
step();