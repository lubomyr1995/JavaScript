// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_rect(a, b) {
    return a * b
}

console.log('Площа прямокутника: ' + area_rect(30, 20));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_triangle(r) {
    return Math.PI * r * r
}

console.log('Площа кола: ' + area_triangle(10));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area_cyl(h, r) {
    return Math.PI * r * r * h
}

console.log('Площа циліндра: ' + area_cyl(5, 10));


// - створити функцію яка приймає масив та виводить кожен його елемент
function get_el_array(arr) {
    for (let aElement of arr) {
        console.log(aElement)
    }
}

get_el_array([2, 3, 4, 5, 6]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function get_text_p(text) {
    document.write(`<p>${text}</p>`)
}

get_text_p('okten school');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function get_ul3li(text) {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

get_ul3li('hello world');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function get_ul_li(text, numb) {
    if (typeof numb === "number") {
        document.write('<ul>')
        for (let i = 0; i < numb; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write('</ul>')
    } else {
        document.write('Incorrectly specified argument')
    }
}

get_ul_li('Okten Web', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function get_elements(...elements) {
    for (let element of elements) {
        console.log(element)
    }
}

get_elements(1, 2, 3, 'sdds', true);

function get_elements2(arr) {
    for (let i of arr) {
        console.log(i)
    }
}

get_elements2([1, 2, 3, 'sdds', true]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function print_arr(arr) {
    for (let obj of arr) {
        document.write(`<div>${obj.id}) ${obj.name} - ${obj.age}</div>`)
    }
}

print_arr([{id: 1, name: 'Ivan', age: 20}, {id: 2, name: 'Petro', age: 18}, {id: 3, name: 'Vasil', age: 25}]);
