const user = {
    name: "John",
    years: 30
  };
const{name,years:age,isAdmin="false"} = user;
  console.log(name);
  console.log(age);
  console.log(isAdmin);
//求和
//way1for循环
let i =0;
for(let j=1;j<=100;j++){
  i +=j;
}
console.log(i);
//way2-递归
function f1(num){
  if(num<=1){
    return 1;
  }else{
    return num + f1(num-1)
  }
}
console.log(f1(100));
//way3-等差数列公式
class range{
  constructor(first,end,step=1){
    this.first=first;
    this.end =end;
    this.step=step;
    this.data=[];
    for (let i=0;i<=end;i+=step){
      this.data.push(i);
    }
  }
}
function sum(first,end,step){
  return (end*(first+end))/2;
}  
console.log(sum(1,100,1));
//创建newAccumulator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function() {
    this.value += +prompt("shuru","");//初始的value+用户输入的
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
//深拷贝
Parent = {name: 'foo', birthPlaces: ['北京','上海','香港']};
var clone = function (obj) { 
  if(obj === null) return null 
  if(typeof obj !== 'object') return obj;
  if(obj.constructor===Date) return new Date(obj); 
  var newObj = new obj.constructor ();  //保持继承链
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
          var val = obj[key];
          newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; //三元运算符。 使用arguments.callee解除与函数名的耦合
      }
  }  
  return newObj;  
};
console.log(clone(Parent));



 

