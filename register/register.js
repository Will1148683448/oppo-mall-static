// 头部语言切换
// 头部二级菜单功能
document.querySelector(".head_right>li:nth-child(2)").onclick = function() {
    document.querySelector(".sce_menu").classList.toggle("active");
}
document.querySelectorAll(".sce_menu>div").forEach(function(item) {
    item.onclick = function() {
        document.querySelector(".head_right>li:nth-child(2)>a").innerText = this.dataset.lan;
        document.querySelector(".sce_menu").classList.toggle("active");
    }
})
// 密码显示隐藏
var input = document.querySelector(".password_box>input");
document.querySelector(".password_box>.passwordsvg>i").onclick = function() {
    this.classList.toggle("show_code");
    this.classList.toggle("none_code");
    if (input.getAttribute("type") === "password") {
        input.setAttribute("type", "text");
    } else {
        input.setAttribute("type", "password");
    }
}
// 选择框点击功能
var checkBox = document.querySelector("i.checkbox");
checkBox.onclick = function() {
	this.classList.toggle("checked");
	if((document.querySelectorAll("input.need_text_a.pass").length >= 2) && checkBox.classList.contains("checked"))
    document.querySelector("button.need_text_btn").classList.add("active");
    if((document.querySelectorAll("input.need_text_a.pass").length < 2) || !checkBox.classList.contains("checked"))
    document.querySelector("button.need_text_btn").classList.remove("active");
}
// 表单验证功能
var needTextA = document.querySelectorAll("input.need_text_a");
var checkMessageA = document.querySelectorAll("span.check_item");
console.log(checkMessageA)
console.log(needTextA)
// console.log(needText)
needTextA.forEach(function(item,i) {
	item.index = i;
    item.onblur = function() {
		var reg = new RegExp(this.dataset.reg);
		// 如果没有通过验证
		if(!reg.test(this.value)) {
			checkMessageA[this.index].innerText = this.dataset.msg;
			this.classList.remove("pass");

		} else {
			checkMessageA[this.index].innerText = "";
			this.classList.add("pass");
		}
		console.log(document.querySelectorAll("input.need_text_a.pass").length)
		if((document.querySelectorAll("input.need_text_a.pass").length >= 2) && checkBox.classList.contains("checked"))
        document.querySelector("button.need_text_btn").classList.add("active");
        if((document.querySelectorAll("input.need_text_a.pass").length < 2) || !checkBox.classList.contains("checked"))
        document.querySelector("button.need_text_btn").classList.remove("active");
	};
});
document.querySelector("button.need_text_btn").onclick = function() {
	if((document.querySelectorAll("input.need_text_a.pass").length < 2) || !checkBox.classList.contains("checked")) return;
    console.log("注册成功")
}
// 验证码倒计时
// 获取验证码倒计时
var codeBtn = document.querySelector(".code_btn");
codeBtn.onclick = function() {
    this.classList.add("disabled");
    this.disabled = true;
    var target = 60;
    var timer = setInterval(function() {
        if(target === 1) {
            clearInterval(timer)
            codeBtn.innerText = "重新发送";
            codeBtn.disabled = false;
            codeBtn.classList.remove("disabled");
            return;
        }
        codeBtn.innerText = `${--target}s`;
    }, 1000);
};