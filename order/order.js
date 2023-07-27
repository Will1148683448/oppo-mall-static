var order = [
    {number: "OE230320117711352474", children: [
        {path: "./imgs/0101.webp", name: "OPPO 智能电视 K9 55英寸", price: 1799, sale: 1},
        {path: "./imgs/0102.webp", name: "一加 Buds Pro 降噪耳机 独白", price: 599, sale: 2},
        {path: "./imgs/0103.webp", name: "一加 Buds Ace 深度降噪游戏耳机", price: 249, sale: 1}
    ],
    time: "2023-04-08 18:10:59"},
    {number: "230407007713134705", children: [
        {path: "./imgs/0201.webp", name: "OPPO Pad", price: 1859, sale: 3},
        {path: "./imgs/0202.webp", name: "OPPO Pad Air", price: 1190, sale: 1}
    ],
    time: "2023-04-08 10:35:38"},
    {number: "230408107716441831", children: [
        {path: "./imgs/0301.png", name: "Find N2 松绿", price: 6389, sale: 2}
    ],
    time: "2023-03-20 11:26:29"}
];
// 数据渲染
var orderHtml = "";
order.forEach(function(item) {
    var sum = 0; 
    var sumSale = 0;
    orderHtml += `
        <li>
            <div class="order_head_box">
                <div class="order_head">
                    <span>订单号：${item.number}</span>
                    <div class="countdown">
                        <div>等待付款</div>
                        <div>分钟</div>
                    </div>
                </div>
            </div>
            <div class="order_body clearfix">
                <ul class="order_content_box">
    `;
    item.children.forEach(function(item) {
        orderHtml += `
        <li class="clearfix">
            <div class="order_content">
                <div class="img_box"><img src="${item.path }" alt=""></div>
                <div>
                    <h5>${item.name}</h5>
                    <span>7天价保</span>
                </div>
                <div><span>￥${item.price}</span></div>
                <div><span>x${item.sale}</span></div>
            </div>
        </li> 
        `;
        sum += item.price * item.sale;
        sumSale += item.sale;
    });
    orderHtml += `
                </ul>
                <div class="order_orders">
                    <span>订单详情</span>
                    <i class="iconfont icon-right"></i>
                </div>
            </div>
            <div class="order_footer_box">
                <div class="order_footer">
                    <span>交易时间:${item.time}</span>
                    <div>
                        共${sumSale}件商品待付款
                        <span>￥${sum}</span>
                        <div><a href="../pay/pay.html">立即付款</a></div>
                    </div>
                </div>
            </div>
        </li>
    `;
});
document.querySelector(".order>ul").innerHTML = orderHtml;
// 创建标签存储倒计时信息
var countDown = null;
// 倒计时
// 保存最终时间的时间戳
var target = 0;
var timer = null;
var text = 0;
target = Date.now() +  1000 * 60 * 30;
timer = setInterval(function() {
    // 获取当前时间戳与目标时间戳的差
    var diff = target - Date.now();
    diff = parseInt(diff / 1000);
    text = parseInt(diff / 60);
    document.querySelectorAll(".order>ul>li").forEach(function(item) {
        countDown = item.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
        countDown.innerHTML = `${text}分钟`;
        if(diff <= 0) {
            countDown.innerHTML = `已超时`;
            clearInterval(timer);
        } 
    });
}, 1000);

// 头部点击动画
document.querySelectorAll(".main_right_head>ul>li").forEach(function(item, i) {
    item.onclick = function() {
        var indicator = document.querySelector(".main_right_head>.indicator");
        indicator.style.transition = "all 0.2s";
        indicator.style.transform = `translate(${i}00px)`;
    };
});
