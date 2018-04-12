//封装获取元素的方法
function getId(name){
   return typeof(name) === 'string' ? document.getElementById(name):name;
}
//获取元素
var menuBar = getId('menuBar').getElementsByTagName('a');
var slideImg = getId('slideImg').getElementsByTagName('a');
var slideLen = slideImg.length;

//给menuBar的a标签添加点击事件
    for(var i = 0,len = menuBar.length;i<len;i++){
        menuBar[i].setAttribute('data-index',i);
        menuBar[i].onclick = function(){
            var menuId = this.getAttribute('data-index'); //获取data-index
            console.log(menuId);
            for(var j = 0;j<len;j++){
                menuBar[j].className = '';
            }
            this.className = 'menuBar-active';          
            changeImg(menuId);
        }
    }

//封装切换图片的函数
function changeImg(id){
    for(var a = 0;a < slideLen;a++){    //遍历，给所有图片删除类
        slideImg[a].className = '';
    }
    slideImg[id].className = 'slide-img-active';  //给对应的图片添加类
}

var cat = new Object();
cat = {
    'name':'dog',
    'age':4,
    'type':'jia fei',
    'speck':function(){
        console.log('english');
    },
    'friends':{
        'name':'joe',
        'age':34,
    }
}
// delete cat.name;
// console.log(cat);
console.log('name' in cat);