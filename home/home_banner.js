// 轮播图功能——————————————————————————————————————————————
// 全局变量
var banner = document.querySelector(".banner"),
    step = 0,
    maxStep = document.querySelectorAll(".banner_item").length - 2,
    minStep = -1,
    bannerContiner = document.querySelector(".banner_continer"),
    timer = null,
    indicators = document.querySelectorAll(".indicators>span"),
    lock = false;
// 轮播图辅助函数———————————————————————————————————————————
// 移动函数
function move(nextStep) {
    if(lock) return;
    lock = true;
    var currentIndex = (step + maxStep) % maxStep;
    var nextIndex = (nextStep + maxStep) % maxStep;
    indicators[currentIndex].className = `deactive-${nextIndex > currentIndex ? "ltr" : "rtl"}`;
    indicators[nextIndex].className = `active active-${nextIndex > currentIndex ? "ltr" : "rtl"}`;
    // 更新全局变量
    step = nextStep;
    // 切换
    banner.style.transition = "all 1s";
    banner.style.transform = `translate(${-2 * step}00%)`;
}
// 自动轮播函数
function autoPlay() {
    timer = setInterval(function() {move(step + 1)}, 6000);
}
// 鼠标滑入停止轮播，并且小耳朵出现
bannerContiner.onmouseenter = function() {
    clearInterval(timer);
    document.querySelectorAll(".banner_button-box>span").forEach(function(item) {
        item.classList.add("active");
    });
}
// 鼠标滑出继续轮播
bannerContiner.onmouseleave = function() {
    autoPlay();
    document.querySelectorAll(".banner_button-box>span.active").forEach(function(item) {
        item.classList.remove("active");
    });
};
// 前进与后退绑定点击事件
// 前进
document.querySelector("span.next").onclick = function() {
    move(step + 1);
};
// 后退
document.querySelector("span.prev").onclick = function() {
    move(step - 1);
};
// 指示器绑定点击事件
indicators.forEach(function(item, i) {
    item.index = i;
    item.onclick = function() {move(this.index);};
});
// 监听最后一张图片，实现无缝轮播s
banner.ontransitionend = function() {
    lock = false;
    if(step !== maxStep && step !== minStep) return;
    if(step === minStep) step = maxStep - 1;
    if(step === maxStep) step = 0;
    banner.style.transition = "all 0s";
    banner.style.transform = `translate(${-2 * step}00%)`;
};
autoPlay();