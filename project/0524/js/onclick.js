
// const menuName = '아메리카노'; // const로 menuName을 선언 후 '아메리카노'를 초기화함
// const menuPrice = 2000; // const menuPrice를 2000을 초기화함
let count = 0;  // const count = 0; 으로 초기화

const menu = (name, price, i) => { // 함수 'menu'를 정의하고 매개변수'i'를 받아와서 해당하는 메뉴 정보를 html에 추가하는 역할을 합니다.
    const totalPrice = price * i; // 변수 totalPrice = menuPrice와 i를 곱해서 계산
    const addmenuElement = document.getElementById("menuOutput"); 
    addmenuElement.innerHTML += `<div class="price1"><div id="menuname">${name}</div> <div id="price">${price}</div> <div id="quantity">${i}</div> <div id="total-price">${totalPrice}</div></div>`; // 출력 내용을 price 요소에 추가
};

const incrementCount = (name, price) => {
    count++;
    menu(name, price, count);
};

document.querySelectorAll('.menuButton').forEach(button =>{
    button.addEventListener('click',() => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        incrementCount(name, price);
    })
})