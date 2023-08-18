
/**                                              DOM CSS
 *
 * 
#Cách 1
var divElement = document.querySelector('.red');
Object.assign(divElement.style,{
    backgroundColor: '#f00',
});
var pElement = document.querySelector('p');
Object.assign(pElement.style,{
    color:'#f05123',
});
#Cách 2
pElement.style.color = '#f05123'
*/


/**                                              ClassList
 *
 * 
var boxElement = document.querySelector('.box');
add: thêm class vào element
contains: kiểm tra 1 class có nằm trong element hay không
remove: xóa bỏ 1 class khỏi element
toggle: nếu không có class nó sẽ thêm vào, còn nếu có nó sẽ xóa bỏ
console.log(boxElement.classList.supports);
boxElement.classList.add('red','blue');
console.log(boxElement.classList.contains('red'));
setInterval(()=>{
    boxElement.classList.toggle('blue');
},1000);

var divElements = document.getElementsByTagName('div');
var divElements2 = document.querySelectorAll('div');

console.log(divElements);
console.log(divElements2);
*/



/**                                              DOM Event
 * 1.Attribute events
 * 2.Assign event using the element node
 * 

var hElement = document.querySelector('h1');
hElement.onclick = function(){
    console.log(e.target);
}

var h1Element = document.querySelectorAll('h1');
for(var i = 0; i< h1Element.length; i++){
    h1Element[i].onclick = function(e){
        console.log(e.target);
    }
}


 * 1. Input/Select
->Nhập xong blur ra ngoài thì sẽ lấy ra đc value của thẻ input
var inputElement = document.querySelector('input[type="text"]');
inputElement.onchange = function(e){
    console.log(e.target.value);
}
->Nhập tới đâu thì sẽ 
var inputElement = document.querySelector('input[type="text"]');
inputElement.oninput = function(e){
    console.log(e.target.value);
}
->Kiểm tra xem tình trạng của checkbox trả về True hoặc false
var inputElement = document.querySelector('input[type="checkbox"]');
inputElement.onchange = function(e){
    console.log(e.target.checked);
}
->Trả về value khi chọn 1 trong các phần tử của select
var selectElement = document.querySelector('select');
selectElement.onchange = function(e){
    console.log(e.target.value);
}


 * 2. Keyup/Keydown

document.onkeydown = function(e){
    switch(e.which){
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('Send Code');
            break;
    }
}
var inputElement = document.querySelector('input[type="text"]');
inputElement.onkeyup = function(e){
    console.log(e.which)
}

 *5.preventDefault: Ngăn chặn hành động sảy ra với event 
->Khi click vao dung url facebook moi chuyen trang toi cong khi khong click vao dung url thi se ko chuyen trang
var aElements = document.links;
for(var i=0;i<aElements.length; i++){
    aElements[i].onclick = function(e){
        console.log(e.target.href);
        if(!e.target.href.startsWith('https://www.facebook.com/')){
            e.preventDefault()
        }
    }
}
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.preventDefault();
}
 *6.stopPropagation: Ngăn chặn hành động nổi bọt
document.querySelector('div').onclick = 
    function(){
        console.log('div');
    }

document.querySelector('button').onclick = 
    function(e){
        e.stopPropagation();
        console.log('Click Me');
    }
 */

/**                                              EVENT LISTENER
 * 
 * 
*/
var btn = document.getElementById('btn');
btn.onclick = function(){
    console.log('Viec 1');
    console.log('Viec 2');
    alert('Viec 1');
}