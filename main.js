let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]

const word = document.querySelector(".wordshow"),
      hints = document.querySelector(".hint span"),
      timer = document.querySelector(".timer span b"),
      inputfield = document.querySelector("input"),
      changeWord = document.querySelector(".change-word"),
      checkWord = document.querySelector(".check-word");

let correctword, Timer;

const initTimer = maxTime =>{
    clearInterval(Timer);
    Timer = setInterval(()=>{
        if(maxTime>0)
        {
            maxTime--;
            return timer.innerText = maxTime;
        }
        alert(`Time Up!!! ${correctword.toUpperCase()} is the correct word`);
        initGame();
    },1000)
}

const initGame = () =>{
    initTimer(30);
    let randomObject = words[Math.floor(Math.random()*words.length)];
    let wordArray = randomObject.word.split("");
    for(let i=wordArray.length-1;i>0;i--)
    {
        let j = Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];
    }
    word.innerText = wordArray.join("");
    hints.innerText = randomObject.hint;
    correctword = randomObject.word.toLowerCase();
    inputfield.value = "";
    inputfield.setAttribute("maxlength",correctword.length);
}

initGame();

const Checkword = () =>{
    let userWord = inputfield.value.toLowerCase();
    if(!userWord)
    {
        return alert("Please enter a valid word!!!")
    }
    if(userWord!==correctword)
    {
        return alert(`Sorry!!! ${userWord} is not a correct word.`);
    }
    alert(`Congratulations!!! ${correctword.toLowerCase()} is the correct word.`)
    initGame();
}

checkWord.addEventListener("click",Checkword);
changeWord.addEventListener("click",initGame);