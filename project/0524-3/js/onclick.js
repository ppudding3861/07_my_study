const menuCounts = {
    'americano': 0,
    'vanillaLatte': 0,
    'cappuccino': 0
};

const menuPrices = {
    'americano': 2000,
    'vanillaLatte': 3000,
    'cappuccino': 2500
};

const updateTotalPrice = () => {
    let total = 0;
    Object.keys(menuCounts).forEach(menuName => {
        total += menuCounts[menuName] * menuPrices[menuName];
    });
    document.querySelector('.total-price-align').textContent = `${total} 원`;
};

const menu = (name, price, count) => {
    const totalPrice = price * count;
    const menuOutput = document.getElementById("menuOutput");

    // 해당 메뉴에 해당하는 기존 요소를 찾음
    let existingMenuElement = document.querySelector(`#menuOutput .menu-item[data-name="${name}"]`);

    if (existingMenuElement) {
        // 기존 요소가 있으면 내용을 업데이트
        existingMenuElement.innerHTML = `<div class="coffee">${name}</div>
                                         <div class="coffee">${price}</div>
                                         <div class="coffee">${count}</div>
                                         <div class="coffee">${totalPrice}원</div>`;
    } else {
        // 기존 요소가 없으면 새 요소를 추가
        const newMenuElement = document.createElement("div");
        newMenuElement.classList.add("menu-item");
        newMenuElement.setAttribute("data-name", name);
        newMenuElement.innerHTML = `<div class="coffee">${name}</div>
                                    <div class="coffee">${price}</div>
                                    <div class="coffee">${count}</div>
                                    <div class="coffee">${totalPrice}원</div>`;
        menuOutput.appendChild(newMenuElement);
    }

    // 총 합계 업데이트
    updateTotalPrice();
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
