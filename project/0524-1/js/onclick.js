// 메뉴별로 수량을 개별적으로 관리하기 위해 객체를 사용
const menuCounts = {
    '아메리카노': 0,
    '바닐라라떼': 0,
    '카푸치노': 0
};

const menu = (name, price, count) => {
    const totalPrice = price * count;
    const addmenuElement = document.getElementById("menuOutput");
    // 메뉴 정보를 출력할 HTML을 생성
    addmenuElement.innerHTML += `<div class="price1" id="align">
                                    <div class="coffee">${name}</div>
                                    <div class="coffee">${price}</div>
                                    <div class="coffee">${count}</div>
                                    <div class="coffee">${totalPrice}</div>
                                 </div>`;
};

const incrementCount = (name, price) => {
    menuCounts[name]++;
    menu(name, price, menuCounts[name]);
};

// 모든 .menuButton 요소에 대해 클릭 이벤트 리스너를 추가
document.querySelectorAll('.menuButton').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        incrementCount(name, price);
    });
});
