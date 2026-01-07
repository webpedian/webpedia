// 共通パーツを読み込み
  async function loadPart(id, file) {
    const yomikomi = await fetch(file);
    document.getElementById(id).innerHTML = await yomikomi.text();
  }
  loadPart("header", "/header.html");
  loadPart("footer", "/footer.html");

    function updateText(newText) {
      document.getElementById("display-text").textContent = newText;
    }





// 共通パーツ読み込み & BGM 再生設定
window.addEventListener("DOMContentLoaded", () => {
  // header / footer 読み込み
  loadPart("header", "/header.html");
  loadPart("footer", "/footer.html");

  // 最初のコンテンツ（トップページ）を読み込む
  // loadPart("content", "/index.html");

  // ▶️ 自動再生はスマホだと制限されるので、ここでは「試しに再生してみる」程度
  const bgm = document.getElementById("bgm");
  if (bgm) {
    bgm.volume = 0.5; // 音量調整
    // PCブラウザなら再生されることが多い
    bgm.play().catch(() => {
      // 自動再生がブロックされた場合は何もしない（後でボタンで再生）
      console.log("BGM autoplay blocked.");
    });
  }
});

/**
 * id で指定した要素に、指定パスの HTML を読み込む簡易関数
 */
function loadPart(targetId, url) {
  const target = document.getElementById(targetId);
  if (!target) return;

  fetch(url)
    .then(response => response.text())
    .then(html => {
      target.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      target.innerHTML = "<p>読み込みに失敗しました。</p>";
    });
}




function toggleBGM() {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("bgm-toggle");
  if (!bgm || !btn) return;

  if (bgm.paused) {
    bgm.play().then(() => {
      btn.textContent = "[BGM停止]";   // 再生中
      btn.classList.add("playing");
    }).catch(err => {
      console.log("BGM再生がブロックされました");
    });
  } else {
    bgm.pause();
    btn.textContent = "[BGM]";        // 停止中
    btn.classList.remove("playing");
  }
}


// async function loadPart(id, file) {
//   const res = await fetch(file);
//   const html = await res.text();
//   document.getElementById(id).innerHTML = html;
// }




//参考
//https://breezegroup.co.jp/202004/javascript-fetch/


//バーガーメニューとドロワー

const hamburger_menu = document.querySelector("#hamburger_menu");
const gnav = document.querySelector("nav");


hamburger_menu.addEventListener("click", ()=> {
    hamburger_menu.classList.toggle("active");
    gnav.classList.toggle("active");
})

gnav.addEventListener("click", () => {
    hamburger_menu.classList.remove("active");
    gnav.classList.remove("active");
})

async function loadPart(id, file) {
  const yomikomi = await fetch(file);
  document.getElementById(id).innerHTML = await yomikomi.text();

  // ヘッダーが読み込まれた後にイベントを登録
  if (id === "header") {
    const hamburger_menu = document.querySelector("#hamburger_menu");
    const gnav = document.querySelector("nav");

    if (hamburger_menu && gnav) {
      hamburger_menu.addEventListener("click", () => {
        hamburger_menu.classList.toggle("active");
        gnav.classList.toggle("active");
      });

      gnav.addEventListener("click", () => {
        hamburger_menu.classList.remove("active");
        gnav.classList.remove("active");
      });
    }
  }
}

loadPart("header", "header.html");
loadPart("footer", "footer.html");