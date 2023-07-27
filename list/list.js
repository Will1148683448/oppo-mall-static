// 数据原始数组
var arr = [
    {path:"./imgs/oppo/0102.webp", names: "OPPO Find N2 Flip", price: 6389, sales: 380, num: 1, path2: ""},
    {path:"./imgs/oppo/0101.webp", names: "OPPO Find N2", price: 8989, sales: 30, num: 2, path2: ""},
    {path:"./imgs/oppo/0103.webp", names: "一加 11", price: 4349, sales: 3440, num: 3, path2: "../detail/detail.html"},
    {path:"./imgs/oppo/0104.webp", names: "OPPO Find N 全新折叠旗舰 浮光 12G+5", price: 6989, sales: 320, num: 4, path2: ""},
    {path:"./imgs/oppo/0201.webp", names: "OPPO Find X6 Pro", price: 6989, sales: 530, num: 5, path2: ""},
    {path:"./imgs/oppo/0202.webp", names: "OPPO Find X6", price: 4989, sales: 3430, num: 6, path2: ""},
    {path:"./imgs/oppo/0203.webp", names: "Find X5 Pro 白瓷", price: 5489, sales: 530, num: 7, path2: ""},
    {path:"./imgs/oppo/0204.webp", names: "Find X5 素黑", price: 2789, sales: 3530, num: 8, path2: ""},
    {path:"./imgs/oppo/0205.webp", names: "Find X5 Pro 天玑版 白瓷", price: 4189, sales: 4430, num: 9, path2: ""},
    {path:"./imgs/oppo/0301.webp", names: "OPPO Reno9 明日金", price: 3439, sales: 3044, num: 10, path2: ""},
    {path:"./imgs/oppo/0302.webp", names: "OPPO Reno9 Pro 微醺", price: 3939, sales: 305, num: 11, path2: ""},
    {path:"./imgs/oppo/0303.webp", names: "OPPO Reno9 Pro+ 碧海青", price: 1989, sales: 3064, num: 12, path2: ""},
    {path:"./imgs/oppo/0304.webp", names: "OPPO Reno8 微醺", price: 1199, sales: 350, num: 13, path2: ""},
    {path:"./imgs/oppo/0401.webp", names: "OPPO K10x 5G", price: 2299, sales: 330, num: 14, path2: ""},
    {path:"./imgs/oppo/0402.webp", names: "OPPO K10 暗夜黑", price: 2199, sales: 730, num: 15, path2: ""},
    {path:"./imgs/oppo/0403.webp", names: "OPPO K10 Pro", price: 1299, sales: 31, num: 16, path2: ""},
    {path:"./imgs/oppo/0404.webp", names: "OPPO K10 活力版 星耀黑", price: 1190, sales: 430, num: 17, path2: ""},
    {path:"./imgs/oppo/0405.webp", names: "OPPO K9x 银紫超梦", price: 1489, sales: 2230, num: 18, path2: ""},
    {path:"./imgs/oppo/0501.webp", names: "OPPO A1 Pro 朝雨蓝", price: 1099, sales: 3042, num: 19, path2: ""},
    {path:"./imgs/oppo/0502.webp", names: "OPPO A58x 静海蓝", price: 1899, sales: 3067, num: 20, path2: ""},
    {path:"./imgs/oppo/0503.webp", names: "OPPO A58 静海蓝", price: 1489, sales: 3067, num: 21, path2: ""},
    {path:"./imgs/oppo/0504.webp", names: "OPPO A56s 深海蓝", price: 1289, sales: 3024, num: 22, path2: ""},
    {path:"./imgs/oppo/0505.webp", names: "OPPO A97 静夜黑", price: 1589, sales: 3330, num: 23, path2: ""}
];
// 声明全局变量
var ul = document.querySelector("ul.list");
var ob = null;
var sortDir = "asc";
var sortKey = "num";
var showLis = arr.sort(function(a, b) {
    return sortDir === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
});
console.log(ul); //测试

// 函数声明
// 声明一个数据渲染函数
function showData() {
    var htmlStr = "";
    showLis.forEach(function(item) {
        htmlStr += `
        <li>
            <div class="shop_list_main">
                <a href="${item.path2}">
                    <div class="inside">
                        <div class="good_small_imgs">
                            <img src="" data-img="${item.path}" alt="">
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
    // 数据渲染函数——监听函数部分
    // 实现览加载
    ob = new IntersectionObserver(
        function(entries) {
            entries.forEach(function(entry) {
                if(entry.isIntersecting)
                entry.target.src = entry.target.dataset.img;    //将藏的路径赋值给src
            });
        },
        {root: null, rootMargin: "0px 0px 50px 0px", threshold: [0]}
    );

   var img = document.querySelectorAll(".good_small_imgs>img");
   img.forEach(function(item) {
        item.onload = function() {ob.unobserve(item)}; //关闭已加载图片的监听
        ob.observe(item);   //开启监听
   });
}   
// 初始渲染
showData();
// 实现搜索功能
// 搜索功能函数
function search(e) {
    // 取消监听
    ob.disconnect();
    // 获取表单的值
    var key = document.forms["search"].searchText.value.trim();
    console.log(key);
    // 使用查找函数
    showLis = arr.filter(function(item) {
        
        return item.names.indexOf(key) !== -1;
    });
    // 重新渲染页面
    showData();
    // 阻止表单的默认行为
    e.preventDefault();
}
// 绑定submit使用搜索函数
document.forms["search"].onsubmit = search;
// 价格筛选函数
function price_search(e) {
    // 取消监听
    ob.disconnect();
    // 获取表单的值
    var minPrice = document.forms["price_search"].min_price.value.trim();
    minPrice = parseInt(minPrice);
    var maxPrice = document.forms["price_search"].max_price.value.trim();
    maxPrice = parseInt(maxPrice);
    console.log(minPrice, maxPrice);
    // 使用查找函数
    showLis = arr.filter(function(item) {
        return (item.price > minPrice) && (item.price < maxPrice);
    });
    // 重新渲染页面
    showData();
    // 阻止表单的默认行为
    e.preventDefault();
}
document.forms["price_search"].onsubmit = price_search;
// 排序功能
// 单项排序激活功能
var lis = document.querySelectorAll(".select_main>span.sort-item");
lis.forEach(function(item) {
    item.addEventListener("click",function() {
        // 判断是否已经激活，避免重复发送请求
        if(item.classList.contains("active")) return;
        // 找到已经激活的，取消激活
        document.querySelector(".select_main>span.active").classList.remove("active", "desc", "asc");
        // 激活点击的
        item.classList.add("active");
        sortKey = this.dataset.key;
        console.log(sortKey)
        // 取消交叉监听
        ob.disconnect();
         // 根据条件更新showlis
        showLis = showLis.sort(function(a, b) {
            return a[sortKey] - b[sortKey];
        })
        // 更新页面
        showData();
    }); 
});
// 价格双向排序功能
// 排序按钮切换函数
function turn() {
    // 如果这个按钮已经激活了
    if(this.classList.contains("active")) {
        this.classList.toggle("asc");
        this.classList.toggle("desc");
        sortDir = sortDir ==="asc" ? "desc" :"asc";
    } 
    // 如果这个按钮没有激活
    else {
        document.querySelector("span.sort-item.active").classList.remove("active", "asc", "desc");
        this.classList.add("active", sortDir);
        sortKey = this.dataset.key;
    }
    // 取消交叉监听
    ob.disconnect();
    // 根据条件更新showlis
    showLis = showLis.sort(function(a, b) {
        return sortDir === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
    })
    // 更新页面
    showData();
}  
// 找到价格排序按钮
var PriceItem = document.querySelector(".select_main>span.price");
PriceItem.onclick = turn;











// // 排序功能
// // 根据最初的顺序排序
// var overall = document.querySelector("span.overall");
// function overallUpAndDown() {
//     arr.sort(function(a, b){
//         return a.num - b.num;
//     });
//     showData();
// }
// overall.addEventListener("click", overallUpAndDown,false);
// // 根据销售量排序
// var sales = document.querySelector("span.sales");
// function salesUpAndDown() {
//     arr.sort(function(a, b){
//         return a.sales - b.sales;
//     });
//     showData();
// }
// sales.addEventListener("click", salesUpAndDown, false);

// // 根据价格排序，并切换升降序
// var i = 1;
// var price = document.querySelector("span.price");
// function priceUpAndDown() {
//  // 判断是降序还是升序值行
//     console.log(i);
//     // 升序
//     if(i === 1) {
       
//         arr.sort(function(a, b){
//             return a.price - b.price;
//         });
//         showData();
//         i = 2;
//         console.log("第一个函数", i);
//     } else if(i === 2) {
//         arr.sort(function(a, b){
//             return b.price - a.price;
//         });
//         showData();
//         console.log("第二个函数", i);
//         i = 1;
//     }
// }
// // 给价格排序绑定点击事件
// price.addEventListener("click", priceUpAndDown, false);