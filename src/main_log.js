let demo = document.querySelector("#demo");
let string = `
你好,我是一名前端新人
接下来,我要开始加样式了
我要加的样式是
body{
    color: red;
}
`;
let string2 = "";
// string = string.replace(/\n/g, "<br>");
let n = 0; // string[n]下标
// demo.innerHTML = ""; //string[n]; //string.substring(0, n); // 初始 // 把`string[n]`换为`string.substring(0,n)` 显示完整字符串，即显示从`0`个到`n`个字符串
// console.log(string.length);
// console.log(demo.innerHTML)
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
        demo.innerHTML = string2;
        // console.log(string2);
        // demo.innerHTML = string.substring(0, n);
        if (n < string.length - 1) {
            // n不是最后一个
            n += 1;
            step();
        } else {
            // n是最后一个
        }
    }, 100);
};
step();

let style = document.querySelector("#style");
style.innerHTML = `
body{
    color: red;
}
`;