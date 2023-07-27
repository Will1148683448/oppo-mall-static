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
// 切换登录模式
document.querySelectorAll(".login_body>.login_form_box");
document.querySelectorAll(".login_mode>div").forEach(function(item,i) {
    item.index = i;
    item.onclick = function() {
        document.querySelector(".login_mode>div.active").classList.remove("active");
        this.classList.add("active");
        document.querySelector(".login_body>.login_form_box.show").classList.remove("show");
        document.querySelectorAll(".login_body>.login_form_box")[this.index].classList.add("show");
    }
});
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
// 表单验证功能
var needTextA = document.querySelectorAll("input.need_text_a");
var checkMessageA = document.querySelectorAll("span.check_item");
console.log(checkMessageA)
console.log(needTextA)
// console.log(needText)
var pass = 0;
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
        if(document.querySelectorAll("input.need_text_a.pass").length >= 2)
        document.querySelector("button.need_text_btn").classList.add("active");
        if(document.querySelectorAll("input.need_text_a.pass").length < 2)
        document.querySelector("button.need_text_btn").classList.remove("active");
	};
});
document.querySelector("button.need_text_btn").onclick = function() {
    // console.log(document.querySelectorAll("input.need_text_a.pass").length);
	if(document.querySelectorAll("input.need_text_a.pass").length < 2) return;
    console.log("登录成功");
}
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