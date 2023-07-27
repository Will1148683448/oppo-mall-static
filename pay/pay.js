// 支付方式切换
var mode = document.querySelectorAll(".pay_body>ul.mode>li");
var payBox = document.querySelectorAll(".pay_footer>div");
var huabeifenqi = document.querySelector(".pay_body>ul.huabeifenqi");
mode.forEach(function(item,i) {
    item.index = i;
    item.onclick = function() {
        document.querySelector(".pay_body>ul.mode>li.active").classList.remove("active");
        document.querySelector(".pay_footer>div.show").classList.remove("show");
        this.classList.add("active");
        payBox[this.index].classList.add("show")
        // 花呗分期显示
        if(this.index === 1) {
            huabeifenqi.classList.add("checked");
        }
        if(!(this.index === 1)) {
            huabeifenqi.classList.remove("checked");
        }
    }
});
// 花呗分期选择
var huabei = document.querySelectorAll(".pay_body>ul.huabeifenqi>li");
huabei.forEach(function(item,i) {
    item.index = i;
    item.onclick = function() {
        document.querySelector(".pay_body>ul.huabeifenqi>li.active").classList.remove("active");
        this.classList.add("active");
    }
});
// 倒计时
// 创建标签存储倒计时信息
var countDown = null;
// 保存最终时间的时间戳
var target = 0;
var timer = null;
var text = 0;
target = Date.now() +  1000 * 60 * 30;
timer = setInterval(function() {
    // 获取当前时间戳与目标时间戳的差
    var diff = target - Date.now();
    diff = parseInt(diff / 1000);
    text = parseInt(diff / 60);
        countDown = document.querySelector(".order_tips>div:nth-child(2)>span");
        countDown.innerHTML = `${text}分钟`;
        if(diff <= 0) {
            countDown.innerHTML = `已超时`;
            clearInterval(timer);
        } 
}, 1000);
