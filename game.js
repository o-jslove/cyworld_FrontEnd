const startWord = () => {
  let myWord = document.getElementById("myWord").value;
  let word = document.getElementById("word").innerText;

  let lastWord = word[word.length - 1];
  let firstMyWord = myWord[0];

  if (lastWord === firstMyWord) {
    //정답일때
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = myWord;
    document.getElementById("myWord").value = "";
  } else {
    //오답일때
    document.getElementById("result").innerText = "땡!";
    document.getElementById("myWord").value = "";
  }
};

const randomBtn = () => {
  const numElements = document.getElementsByClassName("num");

  for (let i = 0; i < numElements.length; i++) {
    const randomNum = String(Math.floor(Math.random() * 100)).padStart(2, "0");
    numElements[i].innerText = randomNum;
  }
};

const enterKey = () => {
  if (window.event.keyCode == 13) {
    startWord();
  }
};
