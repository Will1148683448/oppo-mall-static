// 数据部分—————————————————————————————————————————————————————
// 热卖专区数据
var onSale = [
	{
		imgPath: "./imgs/on_sale/01.png",
		name: "OPPO Find N2",
		feature: "超轻折叠设计",
		price:8989,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/02.png",
		name: "一加 11",
		feature: "第二代骁龙® 8移动平台",
		price:4289,
		path: "../detail/detail.html"
	},
	{
		imgPath: "./imgs/on_sale/03.png",
		name: "OPPO Reno9",
		feature: "高颜值轻薄设计",
		price:2189,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/04.png",
		name: "Reno9 Pro+",
		feature: "骁龙 8+ 旗舰芯片",
		price:3939,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/05.png",
		name: "Find X5 Prp",
		feature: "年度影像旗舰",
		price:5489,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/06.png",
		name: "一加 Ace 2",
		feature: "性能 自由",
		price:2799,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/07.png",
		name: "OPPO K10x",
		feature: "67W 闪速回血",
		price:1199,
		path: ""
	},
	{
		imgPath: "./imgs/on_sale/08.png",
		name: "K10",
		feature: "天玑 8000-MAX",
		price:1699,
		path: ""
	}
]
// 数据渲染部分————————————————————————————————————————————————
// 热卖专区数据渲染
var htmlStr = "";
for(var i = 0, len = onSale.length;i < len;i++) {
	htmlStr += `
		<li>
			<div class="on_sale_main">
				<a href="${onSale[i].path}">
					<div class="on_sale_left">
						<img src="${onSale[i].imgPath}" alt="">
					</div>
					<div class="on_sale_right">
						<div>
							<h5>${onSale[i].name}</h5>
							<p>${onSale[i].feature}</p>
							<div>
								<span class="a-price">到手价</span>
								<span class="b-price">￥</span>
								<span class="c-price">${onSale[i].price}</span>
							</div>
						</div>
					</div>
				</a>
			</div>
		</li>
	`
}
document.querySelector(".on_sale_box>ul").innerHTML = htmlStr;