// varによる再宣言
// var nickname = 'taro'
// console.log(nickname)
// var nickname = 'ichiro'
// console.log(nickname)

// letによる再宣言
// let nickname = 'taro'
// console.log(nickname)
// let nickname = 'kazu'
// console.log(nickname)

//constによる再宣言
// const nickname = 'taro'
// console.log(nickname)
// const nickname = 'kazu'
// console.log(nickname)

//constの場合でも再宣言はできないため、letの時と同様のエラーが確認できます。

//再代入
//変数に値を代入した後で、別の値を代入することを再代入と言います。
//再代入はvarとletで、可能です。constでは再代入ができません。

// varによる再代入
// var nickname = 'taro'
// console.log(nickname)
// nickname = 'jiro'
// console.log(nickname)

//letによる再代入
// let nickname = 'taro'
// console.log(nickname)
// nickname = 'jiro'
// console.log(nickname)

//constによる再大入
// const nickname = 'taro'
// console.log(nickname)
// const nickname = 'jiro'
// console.log(nickname)


// var str = 'webcamp'//グローバルスコープ

// function foo(){
//   console.log(str)
//   var y = 'hello'//関数スコープ
// }

// foo()
// console.log(y)

// function foo(){
//   let x = 'webcamp'
// {
//   let y = 'hello webcamp'
// }
// console.log(x)
// console.log(y)
// }

// foo()

// for (let i = 0; i < 10; i++){
//   console.log(i)
// }

// console.log(i)

// var str = 'webcamp'

// function foo(){
//   console.log(str)
//   var str = 'dmm webcamp'
//   console.log(str)
// }

// foo()

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }