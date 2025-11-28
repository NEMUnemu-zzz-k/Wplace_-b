fetch("data.json")
  .then(res => res.json())
  .then(LoadData => HTMLload(LoadData));

function HTMLload(LoadData) {
  for (let k = 0; k < LoadData.length; k++) {
    let item = LoadData[k];

    let article = document.createElement("article");
    article.className = "article";

    // タイトル
    let h1 = document.createElement("h1");
    h1.textContent = item.name;
    article.appendChild(h1);

    // 画像
    let img = document.createElement("img");
    img.src = item.img;
    article.appendChild(img);

    // 評価2項目
    const labels = ["戻しやすさ", "作りやすさ"];
    const values = [item.easeReturn, item.easeMake];

    for (let i = 0; i < 2; i++) {
      let div = document.createElement("div");
      let s1 = document.createElement("span");
      s1.textContent = labels[i];
      let s2 = document.createElement("span");
      s2.className = "spanNum";
      s2.textContent =
        "☆".repeat(5 - values[i]) + "★".repeat(values[i]);
      div.appendChild(s1);
      div.appendChild(s2);
      article.appendChild(div);
    }

    // 必要px
    let div = document.createElement("div");
    let s1 = document.createElement("span");
    s1.textContent = "必要px:";
    let s2 = document.createElement("span");
    s2.className = "spanNum";
    s2.textContent = item.pixels;
    div.appendChild(s1);
    div.appendChild(s2);
    article.appendChild(div);

    // ダウンロード
    let a = document.createElement("a");
    a.href = item.img;
    a.download = item.name;
    a.textContent = "ダウンロード";
    article.appendChild(a);

    document.getElementById("main").appendChild(article);
  }
}
