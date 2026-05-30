function startWebsite(){

  const myName =
    document.getElementById("myName").value;

  const partnerName =
    document.getElementById("partnerName").value;

    /* CEK INPUT KOSONG */
    if(myName === "" || partnerName === ""){
      alert("Nama sayang atau pasangan sayang ga boleh kosong yahhh ❤️");
      return;
    }

  // CEK HURUF KAPITAL
  if(myName === "nurmalasari"){
    alert("Huruf awal nama sayang harus kapital ❤️");
    return;
  }

  if(partnerName === "mulki"){
    alert("Huruf awal nama pacar sayang harus kapital ❤️");
    return;
  }

  // CEK NAMA BENAR
  if(myName !== "Nurmalasari"){
    alert("Nama sayang salah ❌");
    return;
  }

  if(partnerName !== "Mulki"){
    alert("Nama pacar sayang salah ❌");
    return;
  }

  // MUSIC
  document.getElementById("music").play();

  // PINDAH HALAMAN
  document.getElementById("intro")
    .classList.add("hidden");

  document.getElementById("main")
    .classList.remove("hidden");
    startTyping();

  // TAMPILKAN NAMA
  document.getElementById("title").innerHTML =
    " ❤️ " + myName + " ❤️ " + " ❤️ " + partnerName + " ❤️ ";
}


/* LOVE JATUH */
function createLove(){

  const love =
    document.createElement("div");

  love.classList.add("love");

  const hearts = ["❤️","💖","💕","💗"];
  
  love.innerHTML =
  hearts[Math.floor(Math.random()*hearts.length)];

  love.style.left =
    Math.random() * window.innerWidth + "px";

  love.style.animationDuration =
    Math.random() * 3 + 2 + "s";

  document.body.appendChild(love);

  setTimeout(()=>{
    love.remove();
  },5000);
}

setInterval(createLove,300);

/* TYPING BERURUTAN */
function startTyping(){

  const cards =
    document.querySelectorAll(".card");

  const texts =
    document.querySelectorAll(".typing");

  let current = 0;

  function showNext(){

    if(current >= cards.length){

  document.getElementById(
    "messageButton"
  ).style.opacity = "1";

  return;
}

    // MUNCULKAN CARD
    cards[current]
      .classList.add("show-card");

    const textElement =
      texts[current];

    const originalText =
      textElement.getAttribute("data-text");

    textElement.innerHTML = "";

    let i = 0;

    function typing(){

      if(i < originalText.length){

        textElement.innerHTML +=
          originalText.charAt(i);

        i++;

        setTimeout(typing,40);

      }else{

        current++;

        setTimeout(showNext,800);
      }
    }

    typing();
  }

  showNext();
}

/* LANJUTKAN MUSIK */
const music =
document.getElementById("music");

/* AMBIL POSISI TERAKHIR */
window.addEventListener("load", ()=>{

  const savedTime =
    localStorage.getItem("musicTime");

  if(savedTime){

    music.currentTime = savedTime;
  }

  music.play().catch(()=>{});
});

/* SIMPAN POSISI LAGU */
setInterval(()=>{

  localStorage.setItem(
    "musicTime",
    music.currentTime
  );

},1000);