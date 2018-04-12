function $(ele){    //封装获取ID的函数
  if(ele.charAt(0) === '.'){
      var newStr = ele.slice(1);
      return document.getElementsByClassName(newStr);
  }else{
      return  typeof(ele) === 'string'?document.getElementById(ele):ele;
  }
}
function changeCheckCss(st,css){
    for(var i = 0 ;i<btnAll.length;i++){
        btnAll[i].style.background = css;            //改变所有商品按钮样式
        btnAll[i].setAttribute('data-ng-click',st);   //并且更改为未选中状态
    }
}
function changeShopNum(){
    window.name = haveShop;
    shopNum.innerHTML = window.name;
}

var btnAll = $('.selectorShop');   //获取所有商品按钮
var checkAll = $('selectorAll'); //获取全选按钮
var unitPrice = $('.unit-price'); // 
var index  //获取被选择的商品个数
var sumPrice = $('sumPrice');  // 获取总金额容器
var result = 0;   //总价计算结果
var state = true;
var haveShop = btnAll.length;
var shopNum = $('haveShop');
var parentCardShop = $('.card-item')[0].parentNode;
var cardShop = $('.card-item');
var cardDel = $('.item-delect');
console.log(cardShop);
console.log(cardDel);
for(var j = 0;j<cardDel.length;j++){        //删除商品
    cardDel[j].setAttribute('data-up-index',j);
    cardDel[j].onclick = function(){
        var index1 = this.getAttribute('data-up-index');
        parentCardShop.removeChild(cardShop[index1]);
        console.log(cardShop)
        console.log(index1)
    }
}

checkAll.onclick = function(){                              //设置全选按钮
     if(this.getAttribute('data-ng-click') == 'yes'){       
            changeCheckCss('no','#ccc');                //改变所有按钮样式
            this.style.background = '#ccc';             //改变自己的样式
            this.setAttribute('data-ng-click','no');
            result = 0;
            sumPrice.innerHTML = '￥'+result;
            index = 0;
            haveShop = 0;
            changeShopNum();
        }else{
            index = btnAll.length;
            changeCheckCss('yes','red');
            this.style.background = 'red';
            this.setAttribute('data-ng-click','yes');
            for(var j = 0;j<btnAll.length;j++){
                result += parseInt(unitPrice[j].innerHTML);
            }
            sumPrice.innerHTML = '￥'+result;
            haveShop = btnAll.length;
            changeShopNum()
        }
}

for(var i = 0,len = btnAll.length;i<len;i++){           //遍历所有商品选择按钮
    btnAll[i].setAttribute('data-index',i);
    
    result += parseInt(unitPrice[i].innerHTML);             //result计算商品总价格
    sumPrice.innerHTML = '￥'+result;
    console.log(index);
    
    btnAll[i].onclick = function (){                    
        if(this.getAttribute('data-ng-click') == 'yes'){            //商品按钮点击事件
            haveShop--;
            index = this.getAttribute('data-index');                //获取当前商品的索引
            result = result - parseInt(unitPrice[index].innerHTML);  //重新计算总价
            this.setAttribute('data-ng-click','no');            //设置为未选中状态
            this.style.background = '#ccc';                     //改变未选中样式
            sumPrice.innerHTML = '￥'+result;                    //计算结果
            changeShopNum()
        }else{
            haveShop++;
            result = result + parseInt(unitPrice[index].innerHTML); //重新计算总价
            this.style.background = 'red';                          //将样式改变为选中
            this.setAttribute('data-ng-click','yes');               //改变为选中状态
            sumPrice.innerHTML = '￥'+result;                        //改变总金额
            console.log(haveShop);
            changeShopNum()
        }
    }
}

window.onload = changeShopNum;