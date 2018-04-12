function $(ele){
    if(typeof(ele) !== 'string'){
        throw '请输入字符串';
    }else if(ele.charAt(0) === '.'){
        var newStr = ele.slice(1);
        return document.getElementsByClassName(newStr);
    }else if(ele.charAt(0) === '#'){
        newStr = ele.slice(1);
        return document.getElementById(newStr);
    }
}
function calulater(event){
    var results = event.srcElement.innerText;
}

var add_a = $('#addition');   
var sub_a = $('#subtraction');
var mult_a = $('#multiplication');
var met_a = $('#method');
var dot_a = $('#dot');
var sym_div = $('.symbol');
var result_p = $('#result');
var reset_a = $('#reset');
var sum_a = $('#summation');    //等号
var numBtn_all = $('.num');
var resultVal = '';             //用户输入的值

for(var i = 0,len = numBtn_all.length;i<len;i++){
        numBtn_all[i].onclick = function(){
            result_p.innerHTML += this.innerHTML;
            if(this.innerHTML == '='){
                calulater();
            }
        }
    }


