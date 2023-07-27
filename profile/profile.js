// 头部二级菜单功能
document.querySelector(".menu_box>a:nth-child(2)").onclick = function() {
    document.querySelector(".sce_menu").classList.toggle("active");
}
document.querySelectorAll(".sce_menu>div").forEach(function(item) {
    item.onclick = function() {
        document.querySelector(".menu_box>a:nth-child(2)").innerHTML = `${this.dataset.lan}<img src="./imgs/down.png" alt="">`;
        document.querySelector(".sce_menu").classList.toggle("active");
    }
})