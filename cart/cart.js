// 虚拟数据
var listAll = [
    {id: 5,name: "一加 11 16GB+256GB 一瞬青 官方标配", path:"./imgs/2.webp", price: 4349, count: 1, maxCount: 5},
    {id: 9,name: "一加 Buds Pro 2 旗舰耳机 轻享版 云峰白", path:"./imgs/3.webp", price: 799, count: 1, maxCount: 3}
];
// 购物车需要使用的函数声明部分开始————————————————————————————————————
// 定义更新商品数量的函数
function updateAmountAndtotal() {
    //找到表格中所有勾选的checkbox
    var checkedItem = document.querySelectorAll(".goods_message_box>i.checkbox.checked");
    // console.log(checkedItem)
    // 声明需要累加的总数
    var amount = 0,
        total = 0;
    // 遍历所有的选中的checked
    checkedItem.forEach(function(item) {
        // 找到checked的id
        var checkedId = parseInt(item.parentNode.parentNode.parentNode.dataset.id);
        // 找到checked的id对应的商品
        var target = listAll.find(function(item) {
            // console.log(item.id);
            // console.log(checkedId);
            return item.id === checkedId;
        });
        // 对购物记录进行累加
        amount += target.count;
        total += target.count * target.price;
    });
    // 把累加的结果显示在页面上
    document.querySelector("span.amount").innerHTML = amount;
    document.querySelector(".buy>a>span>span").innerHTML = amount;
    document.querySelector("span.total").innerHTML = total;
}

// // 选择框联动功能函数————————————————————————————————————————————————————————————
// // 找到全选按钮，并给他绑定点击事件
document.querySelector(".footer i").onclick = function() {
    // 点击时切换它的状态
    this.classList.toggle("checked");
    // 找到其他的单选框,并且使他们的选中状态和全选一样
    document.querySelectorAll("div>i.checkbox").forEach(function(item) {
        item.classList.toggle("checked", this.classList.contains("checked"))
    }, this);
    updateAmountAndtotal();
}
// 找到thbody,并把单选框的点击事件委托给它
document.querySelector("tbody").addEventListener("click", function(e) {
    // 判断事件是不是由单选框触发的
    if(! e.target.classList.contains("checkbox")) return;
    // 改变单选框的选择情况
    e.target.classList.toggle("checked");
    // 判断如果没有被选中的类数组长度是0,则改变全选状态
    var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
    document.querySelector(".footer i.checkbox").classList.toggle("checked", isAllChecked);
    // 更新页面
    updateAmountAndtotal();
});
// 删除函数————————————————————————————————————————————————————————————————
// 找到tbody,并把删除按钮的点击事件委托给它
document.querySelector("tbody").addEventListener("click", function(e) {
    if(!e.target.classList.contains("remove")) return;
    // 询问用户是否删除
    if(!confirm("删除？")) return;
    // 删除数组中的数据
    // 找到删除项所藏的id
    var id = parseInt(e.target.parentNode.parentNode.dataset.id);
    // console.log(id);
    // 找到ID对应的商品项目
    i = listAll.findIndex(function(item) {
        return item.id === id;
    });
    listAll.splice(i, 1);
    // 删除页面中tr
    e.target.parentNode.parentNode.remove();
    // 更新单选框信息
    var isAllChecked = document.querySelectorAll("tbody i.checkbox:not(.checked)").length === 0;
    document.querySelector(".footer i.checkbox").classList.toggle("checked", isAllChecked);
    // 更新页面信息
    updateAmountAndtotal();
    // 告诉用户删除成功了
    alert("删除成功");
});
// // 加减功能
// // 减少功能
document.querySelector("tbody").addEventListener("click", function(e) {
    // 判断是不是减少按钮的功能
    if(!e.target.classList.contains("minus")) return;
    // 更新数组的信息
    // 找到点击标签的ID
    var id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.dataset.id);
    // 找到对应ID的商品
    var target = listAll.find(function(item) {
        return item.id === id;
    });
    // 更新数组里的count信息
    target.count -= 1;
    // 更新页面上的信息
    // 更新页面上的数量
    e.target.nextElementSibling.innerText = target.count;
    e.target.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = `￥<span>${target.price * target.count}</span>`;
    // 判断是不是到达了1，如果到达禁用自己
    e.target.disabled = target.count === 1;
    // 取消加号的禁用
    e.target.nextElementSibling.nextElementSibling.disabled = false;
    updateAmountAndtotal();
});
// 增加功能
document.querySelector("tbody").addEventListener("click", function(e) {
    // 判断是不是减少按钮的功能
    if(!e.target.classList.contains("add")) return;
    // 更新数组的信息
    // 找到点击标签的ID
    var id = parseInt(e.target.parentNode.parentNode.parentNode.parentNode.dataset.id);
    // 找到对应ID的商品
    var target = listAll.find(function(item) {
        return item.id === id;
    });
    // 更新数组里的count信息
    target.count += 1;
    // 更新页面上的信息
    // 更新页面上的数量
    e.target.previousElementSibling.innerText = target.count;
    e.target.parentNode.parentNode.parentNode.nextElementSibling.innerHTML = `￥<span>${target.price * target.count}</span>`;
    // 判断是不是到达了1，如果到达禁用自己
    e.target.disabled = target.count === target.maxCount;
    // 取消加号的禁用
    e.target.previousElementSibling.previousElementSibling.disabled = false;
    updateAmountAndtotal();
});
// // 购物车需要使用的函数声明部分结束————————————————————————————————————
// 初次动态渲染
var htmlStr = "";
listAll.forEach(function(item) {
    htmlStr += `
        <tr data-id="${item.id}">
            <td class="goods_box">
                <div class="goods_message_box">
                    <i class="iconfont icon-check checkbox checked"></i>
                    <div class="img_box">
                        <img src="${item.path}" alt="">
                    </div>
                </div>
                <div class="text_message_box">
                    <span>${item.name}</span>
                </div>
            </td>
            <td class="price_box"> ￥<span>${item.price}</span></td>
            <td class="count_box">
                <div class="count_main">
                    <div class="count_box_top">
                        <button type="button" class="minus iconfont icon-minus" ${item.count === 1 ? "disabled" : ""}></button>
                        <span>${item.count}</span>
                        <button type="button" class="add iconfont icon-add" ${item.count === item.maxCount ? "disabled" : ""}></button>
                    </div>
                    <div class="count_box_buttom">限购${item.maxCount}件</div>
                </div>
            </td>
            <td class="price_box"> ￥<span>${item.price * item.count}</span></td>
            <td>
                <button type="button" class="remove">删除商品</button>
            </td>
        </tr>
    `;
});

document.querySelector("button.minus")
document.querySelector("table.cart>tbody").innerHTML = htmlStr;
updateAmountAndtotal();