const blocks = document.querySelectorAll(".block");
const oyuncuYazısı = document.getElementById("oyuncu");
const hataKontrol = document.getElementById("error");
let oyuncu = "S";
let gameOver = false;
let kazanan;

function oyunuBaslat() {
    oyuncuYazısı.textContent = `BAŞLA! `;
    blocks.forEach(block => block.addEventListener("click", () => bolgeSec(block)))
}
function bolgeSec(block) {
    if (block.textContent === "") {
        block.textContent = oyuncu;
        if (oyuncu === "O") {
            block.style.color = "blue"
        }
        oyuncuDegisimi();
    } else {
        hataKontrol.textContent = "Orası dolu!"
        block.style.border = "3px solid red"
        setTimeout(() => {
            hataKontrol.textContent = "";
            block.style.border = "3px solid blue"

        }, 1500)
    }
    kazanmak();
    berabere();

    if (gameOver) {
        oyuncuYazısı.textContent = `Oyun Bitti! Kazanan ${kazanan}`;
        oyuncuYazısı.style.color = "red"
        blocks.forEach(block => block.style.pointerEvents = 'none');
}
    }
    function SayfaYenile() {
        location.reload();
    }

function oyuncuDegisimi() {
    if (oyuncu === "S") {
        oyuncu = "O";
        oyuncuYazısı.textContent = `${oyuncu} sırası`
        return;
    }
    else if (oyuncu === "O") {
        oyuncu = "S";
        oyuncuYazısı.textContent = `${oyuncu} sırası`
    }
}
function kazanmak() {
    satırda()
    sutunda()
    capraz()
}
function berabere() {
    const durumlar = [];
    blocks.forEach(block => durumlar.push(block.textContent))
    if (!durumlar.includes("")) {
        oyuncuYazısı.textContent = "Berabere!";
        blocks.forEach(block => block.style.pointerEvents = 'none');
    }
}
function satırda() {
    let satır1 = blocks[0].textContent == blocks[1].textContent &&
        blocks[0].textContent == blocks[2].textContent && blocks[0].textContent !== ""
    let satır2 = blocks[3].textContent == blocks[4].textContent &&
        blocks[3].textContent == blocks[5].textContent && blocks[3].textContent !== ""
    let satır3 = blocks[6].textContent == blocks[7].textContent &&
        blocks[6].textContent == blocks[8].textContent && blocks[6].textContent !== ""

    if (satır1 || satır2 || satır3) {
        gameOver = true
    }
    if (satır1) return kazanan = blocks[0].textContent
    if (satır2) return kazanan = blocks[3].textContent
    if (satır3) return kazanan = blocks[6].textContent
}
function sutunda() {
    let sütun1 = blocks[0].textContent == blocks[3].textContent &&
        blocks[0].textContent == blocks[6].textContent && blocks[0].textContent !== ""
    let sütun2 = blocks[1].textContent == blocks[4].textContent &&
        blocks[1].textContent == blocks[7].textContent && blocks[1].textContent !== ""
    let sütun3 = blocks[2].textContent == blocks[5].textContent &&
        blocks[2].textContent == blocks[8].textContent && blocks[2].textContent !== ""

    if (sütun1 || sütun2 || sütun3) {
        gameOver = true
    }
    if (sütun1) return kazanan = blocks[0].textContent
    if (sütun2) return kazanan = blocks[1].textContent
    if (sütun3) return kazanan = blocks[2].textContent
}
function capraz() {
    let cap1 = blocks[0].textContent == blocks[4].textContent &&
        blocks[0].textContent == blocks[8].textContent && blocks[0].textContent !== ""
    let cap2 = blocks[2].textContent == blocks[4].textContent &&
        blocks[2].textContent == blocks[6].textContent && blocks[2].textContent !== ""


    if (cap1 || cap2) {
        gameOver = true
    }
    if (cap1) return kazanan = blocks[0].textContent
    if (cap2) return kazanan = blocks[2].textContent

}

oyunuBaslat();






