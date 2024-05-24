const menuName = '아메리카노'; // const로 menuName을 선언 후 '아메리카노'를 초기화함
const menuPrice = 2000; // const menuPrice를 2000을 초기화함
let count = 0;  // const count = 0; 으로 초기화

const menu = (i) => { // 함수 'menu'를 정의하고 매개변수'i'를 받아와서 해당하는 메뉴 정보를 html에 추가하는 역할을 합니다.
    const totalPrice = menuPrice * i; // 변수 totalPrice = menuPrice와 i를 곱해서 계산
    const addmenuElement = document.getElementById("mybutton"); 
    addmenuElement.innerHTML += `<div class="price1" id="align"><div id="menuname">${menuName}</div> <div id="price">${menuPrice}</div> <div id="quantity">${i}</div> <div id="total-price">${totalPrice}</div></div>`; // 출력 내용을 price 요소에 추가
    var newElement = document.createElement("align");
    var parentElement = document.getElementById("parent");
        parentElement.appendChild(newElement);
};

const incrementCount = () => {
    count++;
    menu(count);
};

// 클릭 이벤트를 모든 버튼에 등록하는 대신, 특정 버튼에 대한 이벤트만 등록하도록 변경
document.querySelector('.coffe-img button').addEventListener('click', incrementCount);
