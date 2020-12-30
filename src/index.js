import "./styles.css";

const onClickAdd = () => {
  // テキストを取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  creteIncompleteList(inputText);
}

// 未完了リストに追加する関数
const creteIncompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成

  const li = document.createElement("li");
  li.innerText = text

  // divタグの子要素にliを設定
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("imcomplete-list").appendChild(div);

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", ()=>{
    // 押された完了ボタンの親divを未完了リストから削除
    deleteFromCompleteButton(completeButton.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode;

    //TODO内容のテキストの取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    
    // liを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻るボタン
    const backButton = document.createElement("button")
    backButton.innerText = "戻す";

    // 
    // backButtonにイベントを追加
    backButton.addEventListener("click",()=>{
      const backTarget = backButton.parentNode;
      const text = backTarget.firstChild.innerText;
     
      // 削除
      document.getElementById("complete-list").removeChild(backTarget);
      creteIncompleteList(text);
    })

    const IncompleteButton = document.createElement("button");
    IncompleteButton.innerText ="削除";
    // backButtonにイベントを追加
    IncompleteButton.addEventListener("click",()=>{
  
      // 削除
      document.getElementById("complete-list").removeChild(IncompleteButton.parentNode);
      })

    // divタグの子要素に各要路を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    addTarget.appendChild(IncompleteButton);
    
   
    //完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  })

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", ()=>{
    // 押された削除ボタンの親divを未完了リストから削除
    deleteFromCompleteButton(deleteButton.parentNode);

  })

  div.appendChild(completeButton);
  div.appendChild(deleteButton);


};

// 未完了リストから指定の要素を削除

const deleteFromCompleteButton = (target)=>{
  document.getElementById("imcomplete-list").removeChild(target);
}

document
.getElementById("add-button")
.addEventListener("click", () => onClickAdd());