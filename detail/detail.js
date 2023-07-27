// 数据原始数组
var arr = [
    {path:"./imgs/oppo/0101.webp", names: "OPPO Find N2", price: 8989, sales: 30, num: 1},
    {path:"./imgs/oppo/0102.webp", names: "OPPO Find N2 Flip", price: 6389, sales: 380, num: 2},
    {path:"./imgs/oppo/0103.webp", names: "OPPO Find N", price: 6989, sales: 3440, num: 3},
    {path:"./imgs/oppo/0104.webp", names: "OPPO Find N 全新折叠旗舰 浮光 12G+5", price: 6989, sales: 320, num: 4},
    {path:"./imgs/oppo/0201.webp", names: "OPPO Find X6 Pro", price: 6989, sales: 530, num: 5},
    {path:"./imgs/oppo/0202.webp", names: "OPPO Find X6", price: 4989, sales: 3430, num: 6},
    {path:"./imgs/oppo/0203.webp", names: "Find X5 Pro 白瓷", price: 5489, sales: 530, num: 7},
    {path:"./imgs/oppo/0204.webp", names: "Find X5 素黑", price: 2789, sales: 3530, num: 8},
    {path:"./imgs/oppo/0205.webp", names: "Find X5 Pro 天玑版 白瓷", price: 4189, sales: 4430, num: 9},
    {path:"./imgs/oppo/0301.webp", names: "OPPO Reno9 明日金", price: 3439, sales: 3044, num: 10},
    {path:"./imgs/oppo/0302.webp", names: "OPPO Reno9 Pro 微醺", price: 3939, sales: 305, num: 11},
    {path:"./imgs/oppo/0303.webp", names: "OPPO Reno9 Pro+ 碧海青", price: 1989, sales: 3064, num: 12},
    {path:"./imgs/oppo/0304.webp", names: "OPPO Reno8 微醺", price: 1199, sales: 350, num: 13},
    {path:"./imgs/oppo/0401.webp", names: "OPPO K10x 5G", price: 2299, sales: 330, num: 14},
    {path:"./imgs/oppo/0402.webp", names: "OPPO K10 暗夜黑", price: 2199, sales: 730, num: 15},
    {path:"./imgs/oppo/0403.webp", names: "OPPO K10 Pro", price: 1299, sales: 30, num: 16},
    {path:"./imgs/oppo/0404.webp", names: "OPPO K10 活力版 星耀黑", price: 1190, sales: 430, num: 17},
    {path:"./imgs/oppo/0405.webp", names: "OPPO K9x 银紫超梦", price: 1489, sales: 2230, num: 18},
    {path:"./imgs/oppo/0501.webp", names: "OPPO A1 Pro 朝雨蓝", price: 1099, sales: 3042, num: 19},
    {path:"./imgs/oppo/0502.webp", names: "OPPO A58x 静海蓝", price: 1899, sales: 3067, num: 20},
    {path:"./imgs/oppo/0503.webp", names: "OPPO A58 静海蓝", price: 1489, sales: 3067, num: 21},
    {path:"./imgs/oppo/0504.webp", names: "OPPO A56s 深海蓝", price: 1289, sales: 3024, num: 22},
    {path:"./imgs/oppo/0505.webp", names: "OPPO A97 静夜黑", price: 1589, sales: 3330, num: 23}
];
// 热门推荐数据渲染
function showData() {
    var htmlStr = "";
    arr.forEach(function(item) {
        htmlStr += `
        <li>
            <div class="shop_list_main">
                <a href="">
                    <div class="inside">
                        <div class="good_small_imgs">
                            <img src="${item.path}" alt="">
                        </div>
                        <div class="good_small_massage">
                            <h5 class="name">${item.names}</h5>
                            <p>
                                <span class="goods_a-price">到手价</span>
                                <span class="goods_b-price">￥</span>
                                <span class="goods_c-price">${item.price}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </li>
        `;
    });
	document.querySelector("ul.list").innerHTML = htmlStr;
}
showData();
// 小图片移动功能
var lis = document.querySelectorAll(".img_list>ul>li"),
	moveStep = 0,
	maxStep = lis.length - 4;
	if(maxStep <= 0 ) {
		maxStep = 0;
	} else {
		maxStep = lis.length - 4;
	}
// 找到火车头ul
var ul = document.querySelector(".img_list>ul");
// 找到小耳朵加入点击事件
var prev = document.querySelector("span.img_list_prev");
prev.onclick = function() {
	// 判断是否需要移动
	if(moveStep === 0) return;
	// 步数减一
	moveStep--;
	ul.style.transform = "translateX(-" + moveStep + "00%)";
}
var next = document.querySelector("span.img_list_next");
next.onclick = function() {
	// 判断是否需要移动
	if(moveStep === maxStep) return;
	// 步数减加1
	moveStep++;
	ul.style.transform = "translateX(-" + moveStep + "00%)";
}
// 大图片滚动功能
var bigImgLis = document.querySelector(".img_main>ul")
lis.forEach(function(item,i) {
    item.index = i;
    item.onmouseenter = function() {
        document.querySelector(".img_list>ul>li.active").classList.remove("active");
        this.classList.add("active");
        bigImgLis.style.transform = "translateX(-" + this.index + "00%)";
    }
});
// 右侧按钮切换功能
// 找到每个组别的按钮
var VersionBtn = document.querySelectorAll(".Version>ul>li"),
	colorBtn = document.querySelectorAll(".color>ul>li"),
	classBtn = document.querySelectorAll(".class>ul>li");
// 版本功能
VersionBtn.forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		// 去掉已经激活的
		document.querySelector(".Version>ul>li.active").classList.remove("active");
		// 激活要激活的
		this.classList.add("active");
		// 更新信息
		document.querySelector(".introduce_right_box>h1>span:nth-child(1)").innerText = this.firstElementChild.dataset.version;
		document.querySelector(".submit_top>span>span:nth-child(1)").innerText = this.firstElementChild.dataset.version;
		document.querySelector(".head_already>span:nth-child(1)").innerText = this.firstElementChild.dataset.version;
	}
});
// 颜色功能
colorBtn.forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		// 去掉已经激活的
		document.querySelector(".color>ul>li.active").classList.remove("active");
		// 激活要激活的
		this.classList.add("active");
		// 更新信息
		document.querySelector(".introduce_right_box>h1>span:nth-child(2)").innerText = this.firstElementChild.dataset.color;
		document.querySelector(".submit_top>span>span:nth-child(2)").innerText = this.firstElementChild.dataset.color;
		document.querySelector(".head_already>span:nth-child(2)").innerText = this.firstElementChild.dataset.color;
	}
});
// 类型功能
classBtn.forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		item.classList.toggle("active");
	}
});
var shopCount = 1;
// 数量功能
document.querySelector("i.add").onclick = function() {
	var max = 5;
	if(shopCount >= max) return;
	shopCount++
	document.querySelector("input.number").value = shopCount;
	document.querySelector(".submit_top>span>span:nth-child(3)").innerText = shopCount;
};
document.querySelector("i.minus").onclick = function() {
	if(shopCount <= 1) return;
	shopCount--
	document.querySelector("input.number").value = shopCount;
	document.querySelector(".submit_top>span>span:nth-child(3)").innerText = shopCount;
};
document.querySelector("input.number").onblur = function() {
	if(this.value > 5) this.value = 1;
	document.querySelector(".submit_top>span>span:nth-child(3)").innerText = this.value;
};
// 保障功能
// 保障1
document.querySelectorAll(".care1>ul>li").forEach(function(item) {
	item.onclick = function() {
		 document.querySelector(".care1>ul>li.active");
		if(this.classList.contains("active")) {
			this.classList.toggle("active");
		} else {
			if(document.querySelector(".care1>ul>li.active")) document.querySelector(".care1>ul>li.active").classList.remove("active");
			this.classList.add("active");
		}
		if(document.querySelector(".care1>ul>li.active")) {
			document.querySelector(".care1>h5>span").innerText = "碎屏免费修一次";
		} else {
			document.querySelector(".care1>h5>span").innerText = "";
		}
	};
});
// 保障2
document.querySelectorAll(".care2>ul>li").forEach(function(item) {
	item.onclick = function() {
		 document.querySelector(".care2>ul>li.active");
		if(this.classList.contains("active")) {
			this.classList.toggle("active");
		} else {
			if(document.querySelector(".care2>ul>li.active")) document.querySelector(".care2>ul>li.active").classList.remove("active");
			this.classList.add("active");
		}
		if(document.querySelector(".care2>ul>li.active")) {
			document.querySelector(".care2>h5>span").innerText = "免费更换原装电池";
		} else {
			document.querySelector(".care2>h5>span").innerText = "";
		}
	};
});
// 保障3
document.querySelectorAll(".care3>ul>li").forEach(function(item) {
	item.onclick = function() {
		 document.querySelector(".care3>ul>li.active");
		if(this.classList.contains("active")) {
			this.classList.toggle("active");
		} else {
			if(document.querySelector(".care3>ul>li.active")) document.querySelector(".care3>ul>li.active").classList.remove("active");
			this.classList.add("active");
		}
		if(document.querySelector(".care3>ul>li.active")) {
			document.querySelector(".care3>h5>span").innerText = "延长“三包”保修期";
		} else {
			document.querySelector(".care3>h5>span").innerText = "";
		}
	};
});
// 展示选项卡
var needShow = document.querySelectorAll(".item");
document.querySelectorAll(".details_description_head>ul>li").forEach(function(item, i) {
	item.index = i;
	item.onclick = function() {
		document.querySelector(".details_description_head>ul>li.active").classList.remove("active");
		document.querySelector(".item.show").classList.remove("show");
		// 激活点击的
		this.classList.add("active");
		needShow[this.index].classList.add("show");
	}
})
// 返回顶部浮现功能
window.onscroll = function() {
	if((document.documentElement.scrollTop || document.body.scrollTop) > 400)
    document.querySelector("a.turn_top").classList.add("active");
    if((document.documentElement.scrollTop || document.body.scrollTop) < 400) 
    document.querySelector("a.turn_top").classList.remove("active");
}