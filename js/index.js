//箭头函数
let youFunction = (name) =>{
    console.log(name);
}
youFunction("lixw");

//let定义的变量是从上到下执行， var是把定义的变量拿到最顶端
let ceshi = "ceshi";
console.log(ceshi);

const cat = {
    name : "大红",
    sex :"母的",
}

{
    const h ={
        name: "狗屎池",
        sex:"母",
    }
    console.log(h);
}

h.sex="公";
console.log(h);
cat.sex = "公的";

console.log(cat);