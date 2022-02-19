// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let elcontById = document.getElementById('content');
console.log(elcontById);
// -- отримує текст з блоку з id "rules"
let elrulesById = document.getElementById('rules');
console.log(elrulesById);
//     -- замініть текст параграфа з id 'content' на будь-який інший
elcontById.innerHTML = '<em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, velit!</em>';
//     -- замініть текст параграфа з id 'rules' на будь-який інший
elrulesById.innerHTML = '<p>Lorem ipsum dolor sit amet.</p>';
//     -- змініть кожному елементу колір фону на червоний
let childrenBody = document.body.children;
for (const el of childrenBody) {
    el.style.backgroundColor = 'red'
}
//     -- змініть кожному елементу колір тексту на синій
for (const el of childrenBody) {
    el.style.color = 'blue'
}
//     -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

//     -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elByClass = document.getElementsByClassName('fc_rules');
for (const el of elByClass) {
    el.style.color = 'green' // 'red' is font
}