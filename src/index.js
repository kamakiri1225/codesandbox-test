/**
 * mapやfilterを使った配列
 */

//map

const nameArr = ["田中", "山田", "kamakiri"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i + 1}番目は${nameArr[i]}`));

// filter (条件式が書ける)
// const numArr2 = [1, 2, 3, 4, 5, 6];
// const newNumArr = numArr2.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNumArr3 = nameArr.map((name) => {
//   if (name === "kamakiri") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNumArr3);

/**
 * 三項演算子
 */

// ある条件? 条件がtrueの時: 条件がfalseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 13000;
// console.log(num.toLocaleString());
// console.log(typeof num);

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
// };

// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります。");
// }

// if (flag1 && flag2) {
//   console.log("1も2はtrueになります。");
// }

// || は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// // && は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
