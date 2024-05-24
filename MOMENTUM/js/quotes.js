const quotes = [
    {quote : "다 잘될거야말고 망하면 어때 x발 이쪽이 더 위로가 된다.",
     author : "웃긴명언",   
    },
    {quote :"노력하지 않으면 아무것도 안 생긴다.",
    author : "마이클 조던",   
    },
    {quote : "성공은 매일 반복되는 작은 노력의 결과이다.",
    author : "로버트 콜리어",   
    },
    {quote : "노력은 절대 배신하지 않는다.",
    author : "손흥민",   
    },
    {quote : "성공으로 가는 엘리베이터는 고장 났다. 계단을 사용해야 한다. 한 번에 한 걸음씩.",
    author : "조 웨더리",   
    },
    {quote : "하늘은 스스로 돕는 자를 돕는다.",
    author : "벤자민 프랭클린",   
    },
    {quote : "노력하지 않는 자는 운도 따르지 않는다.",
    author : "소포클레스",   
    },
    {quote : "당신이 얼마나 높은 곳에 있는지는 중요하지 않다. 중요한 것은 당신이 올라가고 있다는 사실이다.",
    author : "자프장",   
    },
    {quote : "성공은 당신이 포기하지 않을 때 찾아온다.",
    author : "톰 크루즈",   
    },
    {quote : "모든 위대한 성취는 작은 도전에서 시작된다.",
    author : "노먼 빈센트 필",   
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;