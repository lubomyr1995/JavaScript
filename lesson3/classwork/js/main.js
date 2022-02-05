// Ex1 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом while
let arr1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

console.log('Ex1');
let i = 0;
while (i < arr1.length) {
    console.log(arr1[i])
    i++
}
// зворотній цикл
console.log('Ex1--');
let ii = arr1.length-1;
while (ii >= 0) {
    console.log(arr1[ii])
    ii--
}


// Ex2 Ex1 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати його циклом for
console.log('Ex2');
for (let i of arr1) {
    console.log(i)
}
// зворотній цикл
console.log('Ex2--');
for (i = arr1.length-1; i >=0; i--){
    console.log(arr1[i])
}


// Ex3 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('Ex3');
j = 0;
while (j < arr1.length) {
    if (j % 2 === 1) {
        console.log(arr1[j])
    }
    j++
}
// зворотній цикл
console.log('Ex3--');
jj = arr1.length-1;
while (jj >= 0) {
    if (jj % 2 === 1) {
        console.log(arr1[jj])
    }
    jj--
}

// Ex4 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('Ex4');
for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 1) {
        console.log(arr1[i])
    }
}
// зворотній цикл
console.log('Ex4--');
for (let i = arr1.length-1; i >= 0; i--) {
    if (i % 2 === 1) {
        console.log(arr1[i])
    }
}

// Ex5 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати циклом while та вивести  числа тільки з парним значенням
console.log('Ex5');
k = 0;
while (k < arr1.length) {
    if (arr1[k] % 2 === 0) {
        console.log(arr1[k])
    }
    k++
}
// зворотній цикл
console.log('Ex5--');
kk = arr1.length-1;
while (kk >= 0) {
    if (arr1[kk] % 2 === 0) {
        console.log(arr1[kk])
    }
    kk--
}


// Ex6 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// перебрати циклом for та вивести  числа тільки з парним значенням
console.log('Ex6');
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i])
    }
}
// зворотній цикл
console.log('Ex6--');
for (let i = arr1.length-1; i >= 0; i--) {
    if (arr1[i] % 2 === 0) {
        console.log(arr1[i])
    }
}


// Ex7 зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// замінити кожне число кратне 3 на слово "okten"
let arr0 = [2,17,13,6,22,31,45,66,100,-18];
console.log('Ex7');
for (let i = 0; i < arr0.length; i++) {
    if (arr0[i] % 3 === 0) {
        arr0[i] = 'okten'
    }
}
console.log(arr0)
// зворотній цикл
let arr00 = [2,17,13,6,22,31,45,66,100,-18];
console.log('Ex7--');
for (let i = arr00.length-1; i >= 0; i--) {
    if (arr00[i] % 3 === 0) {
        arr00[i] = 'okten'
    }
}
console.log(arr00.reverse())


// Ex8 вивести масив в зворотньому порядку.
console.log('Ex8');
let arr1_rev = [];
for (let i = arr1.length-1; i >= 0; i--) {
    let index = arr1.length-1-i
    arr1_rev[i] = arr1[index]

}
console.log(arr1_rev)
// Ex8a вивести елементи масива в зворотньому порядку.
console.log('Ex8a');
for (i = arr1.length-1; i >= 0; i--) {
    console.log(arr1[i])
}
