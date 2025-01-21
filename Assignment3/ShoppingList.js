// 创建一个购物清单数组
let shoppingList = ["牛奶", "鸡蛋", "面包"];
console.log('原始清单', shoppingList);
// 向购物清单中添加两样物品，并输出更新后的清单。
shoppingList.push("苹果", "橙子");
console.log('添加后的清单', shoppingList);
// 从购物清单中删除最后一项物品，并输出结果。
shoppingList.pop();
console.log('删除后的清单', shoppingList);
// 创建一个函数，当购物清单中的物品超过5项时，在控制台输出"你的购物车满了"。
console.log('购物清单数量检测：')
let itemsNum = shoppingList.length;
if (itemsNum > 5) {
    console.log('你的购物车满了');
} else{
    console.log('你的购物车未满5项');
}
// 使用循环语句遍历购物清单，将每一项物品在控制台上以编号的形式输出。例如：
console.log('购物清单：')
// for
for (let i = 0; i < shoppingList.length; i++) {
    console.log(i + 1, shoppingList[i]);
}
// foreach
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. &{item}`);
});
// 创建一个函数，该函数接受物品名称作为参数，并返回该物品是否在购物清单中。
console.log('检查物品是否在购物清单中：')
function checkItem(itemName){
    return shoppingList.includes(itemName) ? '是' : '否';
}
console.log('牛奶？', checkItem('牛奶'));
console.log('西瓜？', checkItem('西瓜'));
// 创建一个购物物品对象，其中包括物品名称、价格和数量。例如:
let item = {
    name: "牛奶",
    price: 2.5,
    quantity: 1
};
console.log('购物物品对象', item);