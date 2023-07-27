// 数据部分——————————————————————————————————————————————————
// 标题数据
var oppogoods = [
    {title: "Find N 系列", children: [
        {path: "./imgs/OPPO/0101.jpg"},
        {path: "./imgs/OPPO/0102.png", name: "Find N2 松绿", price: 6389},
        {path: "./imgs/OPPO/0103.webp", name: "Find N2 Flip 慕紫", price: 6389},
        {path: "./imgs/OPPO/0104.webp", name: "Find N 星夜", price: 5989}
    ]},
    {title: "Find X 系列", children: [
        {path: "./imgs/OPPO/0201.webp"},
        {path: "./imgs/OPPO/0202.webp", name: "Find X6 Pro 大漠银月", price: 6989},
        {path: "./imgs/OPPO/0203.webp", name: "Find X6 飞泉绿", price: 4989},
        {path: "./imgs/OPPO/0204.webp", name: "Find X5 Pro 白瓷", price: 4489},
        {path: "./imgs/OPPO/0205.webp", name: "Find X5 Pro 黑釉", price: 4489},
        {path: "./imgs/OPPO/0206.webp", name: "Find X5  素黑", price: 2789}
    ]},
    {title: "Reno系列", children: [
        {path: "./imgs/OPPO/0301.webp"},
        {path: "./imgs/OPPO/0302.webp", name: "Reno9 微醺", price: 2189},
        {path: "./imgs/OPPO/0303.webp", name: "Reno9 Pro 明日金", price: 3439},
        {path: "./imgs/OPPO/0304.webp", name: "Reno9 Pro+ 碧海青", price: 3939},
        {path: "./imgs/OPPO/0305.webp", name: "Reno8 微醺", price: 1989},
        {path: "./imgs/OPPO/0306.webp", name: "Reno8 Pro+ 暗涌黑", price: 3389}
    ]},
    {title: "K系列", children: [
        {path: "./imgs/OPPO/0401.webp"},
        {path: "./imgs/OPPO/0402.webp", name: "K10x 5G", price: 1199},
        {path: "./imgs/OPPO/0403.webp", name: "K10 暗夜黑", price: 1699},
        {path: "./imgs/OPPO/0404.webp", name: "K10 Pro 钛黑", price: 2289},
        {path: "./imgs/OPPO/0405.webp", name: "K10 活力版 星耀黑", price: 2199},
        {path: "./imgs/OPPO/0406.webp", name: "K9x 银紫超梦", price: 1249}
    ]},
    {title: "A系列", children: [
        {path: "./imgs/OPPO/0501.webp"},
        {path: "./imgs/OPPO/0502.webp", name: "A97 静夜黑", price: 1859},
        {path: "./imgs/OPPO/0503.webp", name: "A58x 静海蓝", price: 1190},
        {path: "./imgs/OPPO/0504.webp", name: "A58  静海蓝", price: 1489},
        {path: "./imgs/OPPO/0505.webp", name: "A56s 深海蓝", price: 1049},
        {path: "./imgs/OPPO/0506.webp", name: "A57 深海蓝", price: 1489},
        {path: "./imgs/OPPO/0507.webp", name: "A56 云烟蓝", price: 1189},
        {path: "./imgs/OPPO/0508.webp", name: "A36 晴川蓝", price: 1589}
    ]},
    {title: "平板电脑", children: [
        {path: "./imgs/OPPO/0601.webp"},
        {path: "./imgs/OPPO/0602.webp", name: "OPPO Pad", price: 1859},
        {path: "./imgs/OPPO/0603.webp", name: "OPPO Pad Air", price: 1190},
        {path: "./imgs/OPPO/0604.webp", name: "OPPO Pad 2 智能触控键盘", price: 1489},
        {path: "./imgs/OPPO/0605.webp", name: "OPPO Pencil 自研手写笔", price: 1049},
        {path: "./imgs/OPPO/0606.webp", name: "OPPO Pad 2 智能皮套", price: 1489},
        {path: "./imgs/OPPO/0607.webp", name: "OPPO 智美生活 智能磁吸键盘", price: 1189},
        {path: "./imgs/OPPO/0608.webp", name: "OPPO 智美生活 智能皮套", price: 1589},
        {path: "./imgs/OPPO/0609.webp", name: "OPPO 智美生活 智能手写笔", price: 1589},
        {path: "./imgs/OPPO/0610.webp", name: "OPPO 智美生活 智能磁吸键盘", price: 1589},
        {path: "./imgs/OPPO/0611.webp", name: "OPPO 智美生活 智能皮套", price: 1589}
    ]},
    {title: "智能电视", children: [
        {path: "./imgs/OPPO/0701.webp"},
        {path: "./imgs/OPPO/0702.webp", name: "OPPO 智能电视 K9x", price: 1099},
        {path: "./imgs/OPPO/0703.webp", name: "OPPO 智能电视 K9", price: 2299},
        {path: "./imgs/OPPO/0704.webp", name: "OPPO 智能电视 K9", price: 1799},
        {path: "./imgs/OPPO/0705.webp", name: "OPPO 智能电视 S1", price: 4999},
        {path: "./imgs/OPPO/0706.webp", name: "OPPO 蓝牙语音遥控器", price: 99}
    ]},
    {title: "智能耳机", children: [
        {path: "./imgs/OPPO/0801.webp"},
        {path: "./imgs/OPPO/0802.webp", name: "一加 Buds Pro 2 旗舰耳机 轻享版", price: 749},
        {path: "./imgs/OPPO/0803.webp", name: "OPPO Enco Air3 真无线耳机 新品", price: 189},
        {path: "./imgs/OPPO/0804.webp", name: "OPPO Enco X2 金色流年 无线充版", price: 899},
        {path: "./imgs/OPPO/0805.webp", name: "OPPO Enco Air2i", price: 129},
        {path: "./imgs/OPPO/0806.webp", name: "OPPO Enco Air2 Pro", price: 209},
        {path: "./imgs/OPPO/0807.webp", name: "OPPO Enco X2 镜夜黑 有线充版", price: 799},
        {path: "./imgs/OPPO/0808.webp", name: "OPPO Enco Air2 新品真无线蓝牙耳机 晨雾白", price: 149},
        {path: "./imgs/OPPO/0809.webp", name: "OPPO Enco Free2i", price: 349},
        {path: "./imgs/OPPO/0810.webp", name: "OPPO Enco Air 灵动版", price: 109},
        {path: "./imgs/OPPO/0811.webp", name: "OPPO Enco Air 灵动版", price: 109},
        {path: "./imgs/OPPO/0812.webp", name: "OPPO Enco M32 无线耳机", price: 199}
    ]},
    {title: "智能穿戴", children: [
        {path: "./imgs/OPPO/0901.webp"},
        {path: "./imgs/OPPO/0902.webp", name: "OPPO Watch 3 系列", price: 1999},
        {path: "./imgs/OPPO/0903.webp", name: "OPPO Watch SE 全智能手表 薄雾紫", price: 999},
        {path: "./imgs/OPPO/0904.webp", name: "OPPO 手环 2 系列新品手环", price: 289},
        {path: "./imgs/OPPO/0905.webp", name: "OPPO Watch Free", price: 399},
        {path: "./imgs/OPPO/0906.webp", name: "OPPO Watch 2 ECG 版", price: 1399}
    ]},
    {title: "原装配件", children: [
        {path: "./imgs/OPPO/1001.webp"},
        {path: "./imgs/OPPO/1002.webp", name: "OPPO Wi-Fi 6 路由器 AX5400 曜黑", price: 599},
        {path: "./imgs/OPPO/1003.webp", name: "30W 闪电套装", price: 99},
        {path: "./imgs/OPPO/1004.webp", name: "45W 无线闪充", price: 179},
        {path: "./imgs/OPPO/1005.webp", name: "OPPO Type-C 闪充数据线 白色", price: 49},
        {path: "./imgs/OPPO/1006.webp", name: "65W 电源适配器", price: 149},
        {path: "./imgs/OPPO/1007.webp", name: "OPPO 普通 Type-C 数据线 Type-C 接口 白色", price: 29},
        {path: "./imgs/OPPO/1008.webp", name: "30W 充电头", price: 89},
        {path: "./imgs/OPPO/1009.webp", name: "18W 快充移动电源", price: 129},
    ]}
];
var oneplusgoods = [
    {title: "一加手机", children: [
        {path: "./imgs/Oneplus/0101.webp"},
        {path: "./imgs/Oneplus/0102.webp", name: "一加 Ace 2 12GB+256GB 冰河蓝 官方标配", price: 2789, path2: ""},
        {path: "./imgs/Oneplus/0103.webp", name: "一加 11", price: 4889, path2: "../detail/detail.html"},
        {path: "./imgs/Oneplus/0104.webp", name: "一加 Ace 竞速版 8GB+256GB 竞技灰 官方标配", price: 1599, path2: ""},
        {path: "./imgs/Oneplus/0105.webp", name: "一加 Ace 8GB+256GB 回蓝 官方标配", price: 1989, path2: ""},
        {path: "./imgs/Oneplus/0106.webp", name: "一加 Ace Pro 16GB+256GB 青雾 官方标配", price: 3189, path2: ""}
    ]},
    {title: "一加耳机", children: [
        {path: "./imgs/Oneplus/0201.webp"},
        {path: "./imgs/Oneplus/0202.webp", name: "一加 Buds Ace 深度降噪游戏耳机", price: 249, path2: ""},
        {path: "./imgs/Oneplus/0203.webp", name: "一加 Buds Pro 2 旗舰耳机", price: 849, path2: ""},
        {path: "./imgs/Oneplus/0204.webp", name: "一加 Buds N 月光白", price: 179, path2: ""},
        {path: "./imgs/Oneplus/0205.webp", name: "一加 Buds N 暮影黑", price: 179, path2: ""},
        {path: "./imgs/Oneplus/0206.webp", name: "一加 Buds Pro 秘银", price: 599, path2: ""},
        {path: "./imgs/Oneplus/0207.webp", name: "一加 Buds Pro 降噪耳机 独白", price: 599, path2: ""},
        {path: "./imgs/Oneplus/0208.webp", name: "一加云耳 Z2 蓝调", price: 179, path2: ""},
        {path: "./imgs/Oneplus/0209.webp", name: "一加 Buds Z2 新品耳机", price: 299, path2: ""}
    ]},
    {title: "一加配件", children: [
        {path: "./imgs/Oneplus/0301.webp"},
        {path: "./imgs/Oneplus/0302.webp", name: "一加 SUPERVOOC 80W氮化镓超级闪充充电器套装 适配器+数据线套装", price: 219, path2: ""},
        {path: "./imgs/Oneplus/0303.webp", name: "一加 Warp 闪充 65W 电源适配器 中规", price: 149, path2: ""},
        {path: "./imgs/Oneplus/0304.webp", name: "一加 Warp 闪充 双Type-C 数据线 100cm", price: 79, path2: ""}
    ]},
    {title: "一加周边", children: [
        {path: "./imgs/Oneplus/0401.webp"},
        {path: "./imgs/Oneplus/0402.webp", name: "一加城市玩家单肩包 遐想黑", price: 119, path2: ""},
        {path: "./imgs/Oneplus/0403.webp", name: "一加 双肩背包 星能白", price: 289, path2: ""},
        {path: "./imgs/Oneplus/0404.webp", name: "一加城市玩家棒球帽 黑色", price: 64, path2: ""}
    ]},
];
var smartgoods = [
    {title: "平板电脑", children: [
        {path: "./imgs/Smart/0101.webp"},
        {path: "./imgs/Smart/0102.webp", name: "OPPO Pad", price: 1859},
        {path: "./imgs/Smart/0103.webp", name: "OPPO Pad Air", price: 1190},
        {path: "./imgs/Smart/0104.webp", name: "OPPO Pad 2 智能触控键盘", price: 1489},
        {path: "./imgs/Smart/0105.webp", name: "OPPO Pencil 自研手写笔", price: 1049},
        {path: "./imgs/Smart/0106.webp", name: "OPPO Pad 2 智能皮套", price: 1489},
        {path: "./imgs/Smart/0107.webp", name: "OPPO 智美生活 智能磁吸键盘", price: 1189},
        {path: "./imgs/Smart/0108.webp", name: "OPPO 智美生活 智能皮套", price: 1589},
        {path: "./imgs/Smart/0109.webp", name: "OPPO 智美生活 智能手写笔", price: 1589},
        {path: "./imgs/Smart/0110.webp", name: "OPPO 智美生活 智能磁吸键盘", price: 1589},
        {path: "./imgs/Smart/0111.webp", name: "OPPO 智美生活 智能皮套", price: 1589}
    ]},
    {title: "智能电视", children: [
        {path: "./imgs/Smart/0201.webp"},
        {path: "./imgs/Smart/0202.webp", name: "OPPO 智能电视 K9x", price: 1099},
        {path: "./imgs/Smart/0203.webp", name: "OPPO 智能电视 K9", price: 2299},
        {path: "./imgs/Smart/0204.webp", name: "OPPO 智能电视 K9", price: 1799},
        {path: "./imgs/Smart/0205.webp", name: "OPPO 智能电视 S1", price: 4999},
        {path: "./imgs/Smart/0206.webp", name: "OPPO 蓝牙语音遥控器", price: 99}
    ]},
    {title: "智能耳机", children: [
        {path: "./imgs/Smart/0301.webp"},
        {path: "./imgs/Smart/0302.webp", name: "一加 Buds Pro 2 旗舰耳机 轻享版", price: 749},
        {path: "./imgs/Smart/0303.webp", name: "OPPO Enco Air3 真无线耳机 新品", price: 189},
        {path: "./imgs/Smart/0304.webp", name: "OPPO Enco X2 金色流年 无线充版", price: 899},
        {path: "./imgs/Smart/0305.webp", name: "OPPO Enco Air2i", price: 129},
        {path: "./imgs/Smart/0306.webp", name: "OPPO Enco Air2 Pro", price: 209},
        {path: "./imgs/Smart/0307.webp", name: "OPPO Enco X2 镜夜黑 有线充版", price: 799},
        {path: "./imgs/Smart/0308.webp", name: "OPPO Enco Air2 新品真无线蓝牙耳机 晨雾白", price: 149},
        {path: "./imgs/Smart/0309.webp", name: "OPPO Enco Free2i", price: 349},
        {path: "./imgs/Smart/0310.webp", name: "OPPO Enco Air 灵动版", price: 109},
        {path: "./imgs/Smart/0311.webp", name: "OPPO Enco Air 灵动版", price: 109},
        {path: "./imgs/Smart/0312.webp", name: "OPPO Enco M32 无线耳机", price: 199}
    ]},
    {title: "智能穿戴", children: [
        {path: "./imgs/Smart/0401.webp"},
        {path: "./imgs/Smart/0402.webp", name: "OPPO Watch 3 系列", price: 1999},
        {path: "./imgs/Smart/0403.webp", name: "OPPO Watch SE 全智能手表 薄雾紫", price: 999},
        {path: "./imgs/Smart/0404.webp", name: "OPPO 手环 2 系列新品手环", price: 289},
        {path: "./imgs/Smart/0405.webp", name: "OPPO Watch Free", price: 399},
        {path: "./imgs/Smart/0406.webp", name: "OPPO Watch 2 ECG 版", price: 1399}
    ]},
    {title: "原装配件", children: [
        {path: "./imgs/Smart/0501.webp"},
        {path: "./imgs/Smart/0502.webp", name: "OPPO Wi-Fi 6 路由器 AX5400 曜黑", price: 599},
        {path: "./imgs/Smart/0503.webp", name: "30W 闪电套装", price: 99},
        {path: "./imgs/Smart/0504.webp", name: "45W 无线闪充", price: 179},
        {path: "./imgs/Smart/0505.webp", name: "OPPO Type-C 闪充数据线 白色", price: 49},
        {path: "./imgs/Smart/0506.webp", name: "65W 电源适配器", price: 149},
        {path: "./imgs/Smart/0507.webp", name: "OPPO 普通 Type-C 数据线 Type-C 接口 白色", price: 29},
        {path: "./imgs/Smart/0508.webp", name: "30W 充电头", price: 89},
        {path: "./imgs/Smart/0509.webp", name: "18W 快充移动电源", price: 129},
    ]}
]
// 数据渲染————————————————————————————————————————————————————————————————————————
// OPPO专区
var titleHtml = "";
var contentHtml = "";
oppogoods.forEach(function(item) {
    titleHtml += `<li>${item.title}</li>`;
    contentHtml += `<li class="goods_list"><ul class="clearfix">`;
    item.children.forEach(function(item) {
        contentHtml += `
            <li>
                <a href="">
                    <div>
                        <div class="good_small_imgs">
                            <img src="${item.path}" alt="">
                        </div>
                        <div class="good_small_massage">
                            <h5>${item.name}</h5>
                            <p>
                            <span class="goods_a-price">到手价</span>
                            <span class="goods_b-price">￥</span>
                            <span class="goods_c-price">${item.price}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        `;
    });
    contentHtml += ``;
    contentHtml += `</ul></li>`;
});
document.querySelector(".oppo_goods_title").innerHTML = titleHtml;
document.querySelector("ul.oppo_goods_title>li:first-child").classList.add("active");
document.querySelector("ul.oppo_table_main").innerHTML = contentHtml;
document.querySelector("ul.oppo_table_main>li:first-child").classList.add("show");

//oneplus专区
titleHtml = "";
contentHtml = "";
oneplusgoods.forEach(function(item) {
    titleHtml += `<li>${item.title}</li>`;
    contentHtml += `<li class="goods_list"><ul class="clearfix">`;
    item.children.forEach(function(item) {
        contentHtml += `
            <li>
                <a href="${item.path2}">
                    <div>
                        <div class="good_small_imgs">
                            <img src="${item.path}" alt="">
                        </div>
                        <div class="good_small_massage">
                            <h5>${item.name}</h5>
                            <p>
                            <span class="goods_a-price">到手价</span>
                            <span class="goods_b-price">￥</span>
                            <span class="goods_c-price">${item.price}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        `;
    });
    contentHtml += ``;
    contentHtml += `</ul></li>`;
});
document.querySelector(".oneplus_goods_title").innerHTML = titleHtml;
document.querySelector("ul.oneplus_goods_title>li:first-child").classList.add("active");
document.querySelector("ul.oneplus_table_main").innerHTML = contentHtml;
document.querySelector("ul.oneplus_table_main>li:first-child").classList.add("show");
// 智能好物专区
titleHtml = "";
contentHtml = "";
smartgoods.forEach(function(item) {
    titleHtml += `<li>${item.title}</li>`;
    contentHtml += `<li class="goods_list"><ul class="clearfix">`;
    item.children.forEach(function(item) {
        contentHtml += `
            <li>
                <a href="">
                    <div>
                        <div class="good_small_imgs">
                            <img src="${item.path}" alt="">
                        </div>
                        <div class="good_small_massage">
                            <h5>${item.name}</h5>
                            <p>
                            <span class="goods_a-price">到手价</span>
                            <span class="goods_b-price">￥</span>
                            <span class="goods_c-price">${item.price}</span>
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        `;
    });
    contentHtml += ``;
    contentHtml += `</ul></li>`;
});
document.querySelector(".smart_goods_title").innerHTML = titleHtml;
document.querySelector("ul.smart_goods_title>li:first-child").classList.add("active");
document.querySelector("ul.smart_table_main").innerHTML = contentHtml;
document.querySelector("ul.smart_table_main>li:first-child").classList.add("show");
// 选项卡切换功能——————————————————————————————————————————————————————————————————————————————————
// OPPO选项卡切换功能
var oppoTabStep = 0;
document.querySelectorAll("ul.oppo_goods_title>li").forEach(function(item, i) {
	item.index = i;
    item.onclick = function() {
		// 判断点击的标签是否已经激活
		if(item.classList.contains("active")) return;
		// 去掉已经激活的标签项
		document.querySelector("ul.oppo_goods_title>li.active").classList.remove("active");
		// 激活当前点击的
		item.classList.add("active");
        // 移动内容
        oppoTabStep = this.index;
        document.querySelector("ul.oppo_table_main").style.transition = "all 0.4s";
        document.querySelector("ul.oppo_table_main").style.transform = `translate(${-1 * oppoTabStep}00%)`;
        // 显示当前区域内容
        document.querySelector("ul.oppo_table_main>li.show").classList.remove("show");
        document.querySelectorAll("ul.oppo_table_main>li")[this.index].classList.add("show");
	};
});

//一加选项卡功能
var oneplusTabStep = 0;
document.querySelectorAll("ul.oneplus_goods_title>li").forEach(function(item, i) {
	item.index = i;
    item.onclick = function() {
		// 判断点击的标签是否已经激活
		if(item.classList.contains("active")) return;
		// 去掉已经激活的标签项
		document.querySelector("ul.oneplus_goods_title>li.active").classList.remove("active");
		// 激活当前点击的
		item.classList.add("active");
        // 移动内容
        oneplusTabStep = this.index;
        document.querySelector("ul.oneplus_table_main").style.transition = "all 0.4s";
        document.querySelector("ul.oneplus_table_main").style.transform = `translate(${-1 * oneplusTabStep}00%)`;
        // 显示当前区域内容
        document.querySelector("ul.oneplus_table_main>li.show").classList.remove("show");
        document.querySelectorAll("ul.oneplus_table_main>li")[this.index].classList.add("show");
	};
});

// smart选项卡功能
var smartTabStep = 0;
document.querySelectorAll("ul.smart_goods_title>li").forEach(function(item, i) {
	item.index = i;
    item.onclick = function() {
		// 判断点击的标签是否已经激活
		if(item.classList.contains("active")) return;
		// 去掉已经激活的标签项
		document.querySelector("ul.smart_goods_title>li.active").classList.remove("active");
		// 激活当前点击的
		item.classList.add("active");
        // 移动内容
        smartTabStep = this.index;
        document.querySelector("ul.smart_table_main").style.transition = "all 0.4s";
        document.querySelector("ul.smart_table_main").style.transform = `translate(${-1 * smartTabStep}00%)`;
        // 显示当前区域内容
        document.querySelector("ul.smart_table_main>li.show").classList.remove("show");
        document.querySelectorAll("ul.smart_table_main>li")[this.index].classList.add("show");
	};
});