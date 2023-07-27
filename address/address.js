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
// 全局变量定义
var ul = document.querySelector("ul.address_box"),
	dialog = document.querySelector(".dialog")
	form = document.forms["add"],
	needText = document.querySelectorAll(".need_text");
// 封装公共函数
// 拼写当前数据的函数
function generateItemHtml(item) {
	return `
		<div>
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
	e.target.parentNode.parentNode.parentNode.parentNode.remove();
	// 提示用户删除成功了
	alert("删除成功");
}
// 开始新增函数
function beginAddHandler() {
	// 显示输入框
	dialog.classList.add("show");
	form.id.value = 0; 		//进入了新增模式
}
// 取消按钮
function cancelHandler() {
	dialog.classList.remove("show");	//让对话框消失
	// 重置新增表单
	form.reset();		//重置表单
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
	// 找是否有默认地址
	var defd = document.querySelector(".address_box>li>div>.address>.address_top>span.address_default.active");
	// 有的话并且新增或修改选中了默认就去去掉老的激活
	if(defd && newItem.default) defd.classList.remove("active");
	// 给新加的默认激活
	if(newItem.default) newLi.firstElementChild.firstElementChild.firstElementChild.firstElementChild.classList.add("active");
	// 找到新增盒子
	var addBox = document.querySelector("li.new_address_box");
	mode === 0 ? ul.insertBefore(newLi, addBox) : ul.children[i].replaceWith(newLi);
	// var Li = document.querySelectorAll("ul.address_box>li");
	// 关闭对话框
	dialog.classList.remove("show");
	// 充值表单
	form.reset();
	// 提示用户操作成功了
	alert(mode === 0 ? "新增地址成功" : "修改地址成功");
}
// 动态写入初始数据
showData();
var addLi = document.createElement("li");
addLi.classList.add("new_address_box")
addLi.innerHTML = `<button class="add_new_address">+添加新地址</button>`;
ul.appendChild(addLi);
// 给第一个地址加默认
document.querySelector(".address_box>li:first-child>div>.address>.address_top>span.address_default").classList.add("active");
// 绑定按钮功能函数
// 删除和编辑按钮的功能
ul.onclick = function(e) {
	if(e.target.classList.contains("delete")) removeHandler(e);
	if(e.target.classList.contains("update")) beginUpdateHandler(e);
};
// 实现新增按钮功能
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
var def = document.querySelectorAll(".address_box>li>div>.address>.address_top>span.address_default");
console.log(def);
// var Li = document.querySelectorAll("ul.address_box>li");
// for(var i = 0;i < Li.length - 1;i++) {
// 	console.log(Li[i].firstElementChild.firstElementChild.firstElementChild.firstElementChild)
// }