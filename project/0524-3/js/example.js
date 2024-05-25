//각 메뉴의 선택된 수량을 저장하는 객체입니다. 처음에는 모든 메뉴의 수량이 0으로 초기화되어 있습니다.
const menuCounts = {
    '아메리카노': 0,
    '바닐라라떼': 0,
    '카푸치노': 0
};

// menu라는 함수를 만들고 name, price, count를 매개변수로 받습니다.
const menu = {
    name,
    price,
    count
} => {
    const totalPrice = price * count; //매개변수로 받은 price와 count를 곱하고 totalPrice에 할당한다.
    const menuOutput = document.getElementById("menuOutput"); //html의 id가 menuOutput을 불러와 변수인 menuOutput에 할당한다.

    let existingMenuElement = document.querySelector(
        `#menuOutput .menu-item[data-name="${name}"]`
    );

    if (existingMenuElement) {
        existingMenuElement.innerHTML = `<div class="coffee">${name}</div>
        <div class="coffee">${price}</div>
        <div class="coffee">${count}</div>
        <div class="coffee">${totalPrice}</div>`;
    } else {
        const newMenuElement = document.createElement("div"); // 새로운 Element인 div를 생성한다.
        newMenuElement
            .classList
            .add("menu-item", "price1"); // 새로 생성한 div에 class 2개를 생성한다.
        newMenuElement.setAttribute("data-name", name); // 속성을 추가한다.
        //<div class="menu-item price1" data-name="아메리카노"></div> 이런식으로 추가가 된다.
        newMenuElement.innerHTML = `<div class="coffee">${name}</div>
        <div class="coffee">${price}</div>
        <div class="coffee">${count}</div>
        <div class="coffee">${totalPrice}</div>`;
        menuOutput.appendChild(newMenuElement); //새로운 요소를 menuOutput이라는 부모 요소의 하위 요소로 추가합니다. 이렇게 하면 새로운 메뉴 항목이 HTML 문서에 표시됩니다.
    }
};

// html에서 클릭시마다 들어오는 name, price를 매개변수로 받아서
//menuCounts[name]++;에 name을 넣고 menuCounts함수에서 key값에 해당하는 값에 카운트를 한다.
//그후 menu 함수에 name,price, menuCounts[name] - (이건 count 값으로 들어가게 된다.)을 넣어 실행한다.
const incrementCount = (name, price) => {
    menuCounts[name]++;
    menu(name, price, menuCounts[name]);
};

//document.querySelectorAll('.menuButton') 코드는 HTML에서 클래스가 .menuButton인 모든 요소를 선택합니다.
document.querySelectorAll('.menuButton').forEach(button => {
    //forEach() 메서드가 호출됩니다. 이 메서드는 NodeList의 각 요소에 대해 주어진 함수를 실행합니다.
    button.addEventListener('click', () => {
        //각 요소에 대해 실행될 함수는 button => { ... }로 정의되어 있습니다. 여기서 button은 NodeList의 각 요소를 나타냅니다.
        const name = button.getAttribute('date-name');
        //클릭 이벤트 리스너 함수 내에서는 해당 버튼의 데이터 속성을 사용하여 메뉴의 이름과 가격을 가져옵니다. 이 데이터는 getAttribute 메서드를 사용하여 가져옵니다.
        const price = parseInt(button.getAttribute('data-price'));
        incrementCount(name,price);
        //가져온 메뉴의 이름과 가격은 incrementCount 함수에 전달되어 메뉴 카운트를 증가시키고 화면에 표시됩니다.
    });
});

