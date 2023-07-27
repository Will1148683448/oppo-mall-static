var arr = [
	{
	id: 2,
	names: "张三", 
	number: 19811713368, 
	address:"天津市 市辖区 西青区 中北镇", 
	detailed_address: "花园里小区",
	default: true
	},
	{
	id: 8,
	names: "李四", 
	number: 18812625659, 
	address:"山东省 淄博市 张店区 马尚镇", 
	detailed_address: "幸福里学校",
	default: false
	},
	{
	id: 10,
	names: "赵六", 
	number: 15235687961, 
	address:"浙江省 杭州市 西湖区 灵隐街道", 
	detailed_address: "开阳里小区",
	default: false
	}
];
var lis = [
    {path: "./imgs/01.webp", name: "一加 Buds Pro 2 旗舰耳机 轻享版 云峰白", price: 799, sale: 1, gifts: [
        {path: "./imgs/gift0101.webp", name: "【赠品】wowidea 耳机收纳包 "}
    ]},
    {path: "./imgs/02.webp", name: "一加 11 16GB+256GB 一瞬青 官方标配 ", price: 4349, sale: 1, gifts: [
        {path: "./imgs/0201.webp", name: "AIPIAIPI 赛博音箱 红色 "},
        {path: "./imgs/0202.webp", name: "OPPO Enco Air 灵动版 淡蓝 "}
    ]},
];
// 全局变量定义
var ul = document.querySelector("ul.address_box"),
	dialog = document.querySelector(".dialog")
	form = document.forms["add"],
	needText = document.querySelectorAll(".need_text"),
	divAddress = undefined;
// 封装公共函数
// 拼写当前数据的函数
function generateItemHtml(item) {
	return `
		<div class="already_address" data-id="${item.id}">
			<div class="address">
				<div class="address_top">
					<span class="address_default">默认</span>
					<span class="names">${item.names}</span>
					<span class="number">${item.number}</span>
					<button type="button" class="delete" data-id="${item.id}">删除</button>
					<button type="button" class="update" data-id="${item.id}">编辑</button>
				</div>
				<div class="address_bottom">
					<span class="province">${item.address}</span>
					<span class="detailed_address">${item.detailed_address}</span>
				</div>
			</div>
		</div>
	`;
}
// 动态渲染数据函数
function showData() {
	var htmlStr = "";
	arr.forEach(function(item) {
		htmlStr += `
			<li>${generateItemHtml(item)}</li>
		`;

	});
	ul.innerHTML = htmlStr;
	divAddress = document.querySelectorAll("ul.address_box .already_address");
}
// 地址选择函数
function selectAddress() {
    // 去掉红色边框
    var select = document.querySelector("ul.address_box>li>div.select");
    if(select) select.classList.remove("select");
    // 给选择的地址加上红色边框
    this.classList.add("select");
    // 拼接地址信息
    var id = parseInt(this.dataset.id);
	// 找到修改id对应的数组里的对象
	var target = arr.find(function(item) {
		return item.id === id;
	});
    var address = `
        寄送至：${target.address} ${target.detailed_address} 收货人:${target.names} ${target.number}
    `;
    document.querySelector(".row_body>span").innerText = address;
}  
// 删除函数
function removeHandler(e) {
	// 询问用户是否需要删除
	if(!confirm("确定要删除此地址吗？")) return;
	// 删除数据库中指定的对象---------------------
	// 找到删除元素的id
	var id = parseInt(e.target.dataset.id);
	console.log(id);
	//找到id对应的数组元素的下标
	var i = arr.findIndex(function(item) {
		return item.id === id;
	});
	arr.splice(i, 1);
	// 删除选中的LI
	e.target.parentNode.parentNode.parentNode.remove();
	// 提示用户删除成功了
	alert("删除成功");
}
// 开始新增函数
function beginAddHandler() {
	// 显示输入框
	dialog.classList.add("show");
	form.id.value = 0; 			//进入了新增模式
}
// 取消按钮
function cancelHandler() {
	dialog.classList.remove("show");	//让对话框消失
	// 重置新增表单
	form.reset();		//重置表单
    // document.querySelectorAll(".need_text").forEach(function(item) {
    //     item.innerText = "";
    // });
	document.querySelector(".dialog>form>i.default").classList.remove("checked");
}
// 开始修改函数
function beginUpdateHandler(e) {
	// 找到修改按钮的id
	var id = parseInt(e.target.dataset.id);
	// console.log(id);
	form.id.value = id;		//表示进入了修改模式
	// 找到修改id对应的数组里的对象
	var target = arr.find(function(item) {
		return item.id === id;
	});
	// 回显要修改的人
	form.name.value = target.names;
	form.number.value = target.number;
	form.address.value = regionPicker.set(target.address);
	form.detailed_address.value = target.detailed_address;
	if(target.default) document.querySelector(".dialog>form>i.default").classList.add("checked");
	if(target.default === false) document.querySelector(".dialog>form>i.default").classList.remove("checked");
	dialog.classList.add("show");		//让对话框显示
}
// 保存函数
function saveHandler() {
	// 验证是否可以保存
	needText.forEach(function(item) {
		var reg = new RegExp(item.dataset.reg);
		if(!reg.test(item.value)) {
			item.nextElementSibling.innerText = item.dataset.msg;
			item.classList.remove("pass");
		} else {
			item.nextElementSibling.innerText = "";
			item.classList.add("pass");
		}
	});
	console.log(document.querySelectorAll(".need_text.pass").length);
	if(document.querySelectorAll(".need_text.pass").length < 3) return;
	// 进入保存按钮
	var mode = parseInt(form.id.value);		// 判断应该是新增还是修改
	// console.log("mode");
	// console.log(mode);
	// 收集表单数据
	var newItem = {
		id: mode === 0 ? arr[arr.length-1].id + 1 : mode,
		names: form.name.value,
		number: form.number.value,
		address: regionPicker.get(),
		detailed_address: form.detailed_address.value,
		default: document.querySelector(".dialog>form>i.default").classList.contains("checked")
	};
	// 默认信息
	if(newItem.default) arr.forEach(function(item) {
		item.default = false;
	});
	console.log("newItem");
	// 更新数据库中的数组----------------------------
	// 找到修改模式下数组中对应元素的下标
	var i = arr.findIndex(function(item) {
		return item.id === mode;
	});
	// 更新
	mode === 0 ? arr.push(newItem) : arr.splice(i, 1, newItem);
	console.log(arr);
	// 更新页面中的信息------------------------------------
	// 创建一个新的标签来存储页面中的信息
	var newLi = document.createElement("li");
	// 给创建的标签写入需要更新的信息
	newLi.innerHTML = generateItemHtml(newItem);
	// 默认功能
	var defd = document.querySelector(".address_box>li>div>.address>.address_top>span.address_default.active");
	if(defd && newItem.default) defd.classList.remove("active");
	if(newItem.default) newLi.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add("active");
	var addBox = document.querySelector("li.new_address_box");
	mode === 0 ? ul.insertBefore(newLi, addBox) : ul.children[i].replaceWith(newLi);
	var Li = document.querySelectorAll("ul.address_box>li");
	// 关闭对话框
	dialog.classList.remove("show");
	// 充值表单
	form.reset();
	// 提示用户操作成功了
	alert(mode === 0 ? "新增地址成功" : "修改地址成功");
	// 重新查找所有的地址为后续做准备
	divAddress = document.querySelectorAll("ul.address_box .already_address");
	console.log(divAddress);
}
// 动态写入初始数据
showData();
// ul.firstElementChild.firstElementChild.classList.add("select");
var addLi = document.createElement("li");
addLi.classList.add("new_address_box")
addLi.innerHTML = `<button class="add_new_address">+添加新地址</button>`;
ul.appendChild(addLi);
document.querySelector("ul.address_box>li:first-child>.already_address").classList.add("select");
document.querySelector("ul.address_box>li:first-child>.already_address>.address>.address_top>span.address_default").classList.add("active");
// 渲染订单
var orderHtml = "";
var orderUl = document.querySelector(".shop_list_body>ul");
var sum = 0;
lis.forEach(function(item) {
    orderHtml += `
    <li>
        <div class="shop_content clearfix">
            <div class="img_box"><img src="${item.path}" alt=""></div>
                <div class="shop_name_box">
                    <h5>${item.name}</h5>
                    <span>7天价保</span>
                </div>
                <div class="shop_price_box"><span>￥${item.price}</span></div>
                <div class="shop_sale_box"><span>x1</span></div>
                <div class="sum_price"><span>${item.price * item.sale}</span></div>
            </div>
        <ul class="gift_list">
    `;
	sum = sum + item.price * item.sale;
    item.gifts.forEach(function(item) {
        orderHtml += `
        <li>
            <div class="gift_box">
                <span>赠品</span>
                <img src="${item.path}" alt="">
                <span>${item.name}</span>
                <span>x1</span>
            </div>
        </li>
        `;
    });
    orderHtml += ` </ul></li>`;
})
orderUl.innerHTML = orderHtml;
document.querySelector(".Subtotal>ul>li>span:last-child").innerText = `${sum}`;
document.querySelector(".row_head>span:last-child").innerText = `${sum - 50}`;
// 绑定按钮功能函数
// 删除和编辑按钮的功能
ul.onclick = function(e) {
	// console.log(e.target);
    if(e.target.classList.contains("delete")) removeHandler(e);
	if(e.target.classList.contains("update")) beginUpdateHandler(e);
    // if(e.target.classList.contains("already_address")) selectAddress(e);
};
// 实现新增按钮功能
console.log(document.querySelector("button.cancle"))
document.querySelector("button.add_new_address").onclick = beginAddHandler;
// 实现取消按钮功能
document.querySelector("button.cancle").onclick = cancelHandler;
// 默认地址点击功能
document.querySelector(".dialog>form>i.default").onclick = function() {
	this.classList.toggle("checked");
}
// 实现保存按钮功能
document.querySelector("button.save").addEventListener("click", saveHandler, false);
// 验证功能
needText.forEach(function(item) {
	item.onblur = function() {
		var reg = new RegExp(this.dataset.reg);
		// 如果没有通过验证
		if(!reg.test(this.value)) {
			this.nextElementSibling.innerText = this.dataset.msg;
			this.classList.remove("pass");

		} else {
			this.nextElementSibling.innerText = "";
			this.classList.add("pass");
		}
	};
});
// 地址选择功能
	divAddress.forEach(function(item) {
		item.onclick = function() {
			console.log(divAddress.length)
		}
	})
