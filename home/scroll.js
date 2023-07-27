// 滚动到一定距离时显示侧边栏,并且当滚动到一定的位置的时候，消除激活的LOGO
window.onscroll = function() {
    // console.log(document.documentElement.scrollTop || document.body.scrollTop);
    if((document.documentElement.scrollTop || document.body.scrollTop) > 600)
    document.querySelector(".side_button_box>ul.side_indicators").classList.add("active");
    if((document.documentElement.scrollTop || document.body.scrollTop) < 600) 
    document.querySelector(".side_button_box>ul.side_indicators").classList.remove("active");
    var activeIndicators = document.querySelector("ul.side_indicators>li.active");
    if(((document.documentElement.scrollTop || document.body.scrollTop) < 1300 || (document.documentElement.scrollTop || document.body.scrollTop) > 3700) && activeIndicators)
    document.querySelector("ul.side_indicators>li.active").classList.remove("active");
// 点击时显示样式功能
};
var sideIndicators = document.querySelectorAll("ul.side_indicators>li");
for(var i = 1, len = sideIndicators.length;i < len;i++) {
    sideIndicators[i].onclick = function() {
        if(this.classList.contains("active")) return;
        var activeIndicators = document.querySelector("ul.side_indicators>li.active");
        if(activeIndicators) activeIndicators.classList.remove("active");
        this.classList.add("active");
    };
}
// 监听切换样式功能
var ob = new IntersectionObserver(
    function(entrys) {
        if(!entrys[0].isIntersecting) return;
        var activeIndicators = document.querySelector("ul.side_indicators>li.active");
        if(activeIndicators) activeIndicators.classList.remove("active");
        sideIndicators[entrys[0].target.index].classList.add("active");
    },
    {root:null, rootMargin:"0px 0px -50% 0px", threshold: [0]}
);
var zhuanQu = document.querySelectorAll(".zhuanqu");
zhuanQu.forEach(function(item, i) {
    item.index = i + 1;
    ob.observe(item);
});
