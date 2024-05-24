var canvas = document.getElementById('canvas'); 
// var는 변수를 선언할때 쓰는 키워드 최근에는 let, const를 사용
// var: 함수 스코프, 호이스팅, 중복 선언 가능. 블록 스코프를 지원하지 않으며 초기화되지 않은 상태에서 undefined 값을 가짐.
// let: 블록 스코프, 호이스팅 (TDZ), 중복 선언 불가. 변수를 선언하기 전에 접근할 수 없음.
// const: 블록 스코프, 호이스팅 (TDZ), 중복 선언 불가, 재할당 불가. 변수를 선언하기 전에 접근할 수 없음.
// document: 현재 HTML 문서 전체를 나타내는 객체입니다.
// getElementById('canvas'): document 객체의 메서드로, 주어진 id를 가진 HTML 요소를 찾아 반환합니다. 만약 id가 'canvas'인 요소가 존재하지 않으면 null을 반환합니다.
// var canvas: canvas라는 변수를 선언하고, getElementById('canvas') 메서드의 반환 값을 할당합니다. 이 변수는 var로 선언되어 함수 스코프를 가집니다.
// var라는 변수 키워드로 canvas를 선언하고 html 전체문서인 document객체의 메서드인 getElementById('canvas')의 반환 값을 할당합니다. 
// canvas는 html의 id가 canvas인 요소를 가리킵니다
var ctx = canvas.getContext('2d');
// canvas라는 변수의 <canvas>요소의 메서드인 getContext('2d')의 반환 값을 할당합니다. 이 컨텍트는 그래픽을 그리기 위한 다양한 메서드와 속성을 포함. 2D 그래픽 작업에 사용됨.
canvas.width = window.innerWidth - 100;
// 
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;

function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 200 === 0) {
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o) => {
        //x좌표가 0미만이면 제거
        if (a.x < 0) {
            o.splice(i, 1)
        }
        a.x--;
        충돌하냐(dino, a);  

        a.draw();
    })
    if (점프중 == true) {
        dino.y--;
        점프timer++;
    }
    if (점프중 == false) {
        if (dino.y < 200) {
            dino.y++;
        }
    }
    if (점프timer > 100) {
        점프중 = false;
        점프timer = 0;

    }

    dino.draw()
}


프레임마다실행할거();


//충돌확인
function 충돌하냐(dino,cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animation)
    }
}



var 점프중 = false;
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        점프중 = true;
    }
})
