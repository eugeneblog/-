// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.say = function(){
//         alert(this.name+this.age);
//     }
// }
// function creatCar(lang,height){
//     var Car = new Object();
//     Car.lang = lang;
//     Car.height = height;
//     Car.run = function(){
//         alert(Math.random());
//     }
// }

// function Teacher(name,age,teach){
//     Teacher.prototype = name;
//     Teacher.prototype = age;
//     Teacher.prototype = teach;
//     Teacher.prototype.say = function(){
//         alert('my name is '+ this.name);
//     }
// }

// function Student(){
//    Person.call(this,name,age,len);
// }
// var Ext = new Object();
// Ext.define = function(){
    
// }
// Ext.define('program.model.Alerm', {
//     extend: 'Ext.data.Model',
//     alias: "program.Alerm",
//     fields: [
//         {name: 'high_limit', type: 'string'},
//         {name: 'low_limit', type: 'string'},
//         {name: 'delay_time', type: 'string'},
//         {name: 'deadband', type: 'string'},
//         {name: 'notification_class', type: 'string'},
//         {name: 'limit', type: 'int'},
//         {name: 'event_enable', type: 'int'},
//         {name:"event_type",type:"int"},
//         {name:"alarm_value",type:"int"}
//     ]
// });

// var s = '';
// function travel(speace,node){
//     if(node.tagName){                                //遍历节点逻辑 1、
//         s += speace + node.tagName + '<br / >';
//         travel.caller();
//         var len = node.childNodes;
//         if(node.childNodes.length < len){
//             return;
//         }
//     }
//     return '没有节点';
// }
// travel(' ',document);
// document.write(s);

// var s = '';
// !function travel(speace , node){
//     if(node.tagName){                    //如果当前节点是标签，不是空的，就拼接字符串     
//         s += speace + node.tagName + '<br />';
//     }else{
//         var len = node.childNodes.length;
//         for(var i = 0;i <len;i++){        //保存当前节点的子节点的个数
//             travel(speace + '.|',document.childNodes[i]);
//         }
//     }
//     travel('',document);
// document.write(s);
// }();

// window.color = 'red';
// document.color = 'yellow';
// var s1 = {color:'blue'};
// function changeColor(){
//     console.log(this.color);
// }
// changeColor.call();
// changeColor.call(window);
// changeColor.call(document);
// changeColor.call(s1);
// changeColor.call(this)

// var Pet = {
//     word: 'hellow',
//     speak: function(speak){
//         alert(speak + this.word);
//     }
// }
// Pet.speak('speak');
// var dog = {
//     word:'wang'
// }
// var person = new Pet;
// person.speak.call(dog);

// function changePerson(name,age){
//     var obj = new Object();
//     obj.name = name;
//     obj.age = age;
//     obj.say = function(){
//        return this.name+this.age;
//     };
//     return obj;
// }
// var p1 = changePerson('zhangsna','23');
// console.log(p1.say());

// function createObject(name,age){
//     var obj =  new Object();
//     obj.name =  name;
//     obj.age =  age;
//     obj.run =  function(){
//     return this.name +  this.age ;
//     };
//     return obj;
//     }
//     var box2 =  createObject('zhangsan',100)
//     console.log(box2.run());

// pet = {
//     words: 'hellow',
//     say : function(speak){
//         alert(speak + this.words);
//     }
// };

// dog = {
//     words: 'wang'
// };

// pet.say.call(dog);

// function test(a, b, c, d){
//      var arg = Array.prototype.slice.call(arguments, 0); alert(arg);
//      alert(arg.length);
//  }
// test(1, 2, 3, 4);  //2, 3, 4
// var aa = '123412'
// console.log(typeof(aa.slice.call(document)));

// function loadPlatformsParam(){
//     var b = window.location.search.substr(1).split("\x26"),  
//     e = {}, a, d = {}, c, m, f; 
//     for (a = 0; a < b.length; a++)c = b[a].split("\x3d"), 
//     e[c[0]] = c[1]; 
//     if (e.platformTags) 
//     for (c = e.platformTags.split(","),b = c.length, a = 0; a < b; a++)
//     e = c[a].split(":"), 
//     m = e[0], 
//     f = !0, 
//     1 < e.length && (f = e[1], "false" === f || "0" === f) && (f = !1), d[m] = f; 
//     return d
//     }

//     var content = loadPlatformsParam();
//     console.log(content);

function filterPlatform(b, e) { 
    b = q.concat(b || q);    //过滤器平台
    e = q.concat(e || q); 
    var a = b.length, d = e.length, c = !a && d, m; 
    for (m = 0; m < a && !c; m++)c = b[m], c = !!g[c]; 
    for (m = 0; m < d && c; m++)c = e[m], c = !g[c]; 
    return c 
}
var text = filterPlatform(b,e);
// console.log([] == true);
