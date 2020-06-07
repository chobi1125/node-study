// const hoge = require('fs').readFileSync('hoge.txt','utf-8');
// console.log(hoge);

const fs = require('fs');
let text = "書き出したい内容";
fs.writeFileSync("hoge.txt", text);