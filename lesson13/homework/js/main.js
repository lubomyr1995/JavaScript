// setTimeout(_ => {
//     let text = 'daily routine1';
//     console.log('day1: ', text);
//     setTimeout(_ => {
//         text = 'daily routine2';
//         console.log('day2: ', text);
//         setTimeout(_ => {
//             text = 'daily routine3'
//             console.log('day3: ', text);
//             setTimeout(_ => {
//                 text = 'daily routine4';
//                 console.log('day4: ', text);
//                 setTimeout(_ => {
//                     text = 'daily routine5';
//                     console.log('day5: ', text);
//                     setTimeout(_ => {
//                         text = 'daily routine6';
//                         console.log('day6: ', text);
//                         setTimeout(_ => {
//                             text = 'daily routine7';
//                             console.log('day7: ', text);
//                         }, 1600)
//                     }, 1500)
//                 }, 1400)
//             }, 1300)
//         }, 1200)
//     }, 1100)
// }, 1000)


// new Promise(((resolve, reject) => {
//     let text = 'daily routine1';
//     setTimeout(_ => {
//         console.log('day1: ', text)
//         resolve(text)
//     }, 1000);
// }))
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine2'
//                 console.log('day2: ', value);
//                 resolve(value)
//             }, 1100);
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine3';
//                 console.log('day3: ', value);
//                 resolve(value)
//             }, 1200)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine4';
//                 console.log('day4: ', value);
//                 resolve(value)
//             }, 1300)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine5';
//                 console.log('day5: ', value);
//                 resolve(value)
//             }, 1400)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine6';
//                 console.log('day6: ', value);
//                 resolve(value)
//             }, 1500)
//         })
//     })
//     .then(value => {
//         return new Promise((resolve, reject) => {
//             setTimeout(_ => {
//                 value = 'daily routine7';
//                 console.log('day7: ', value);
//                 resolve(value)
//             }, 1600)
//         })
//     })


// function fnTimeout(milisec, day) {
//     return new Promise((resolve, reject) => {
//         setTimeout(_ => {
//             console.log(`day ${day}: daily routine${day}`)
//             day++
//             resolve(day)
//         }, milisec)
//     })
// }
// fnTimeout(2000, 1)
//     .then(value => fnTimeout(1000, value))
//     .then(value => fnTimeout(1000, value))
//     .then(value => fnTimeout(1000, value))
//     .then(value => fnTimeout(1000, value))
//     .then(value => fnTimeout(1000, value))
//     .then(value => fnTimeout(1000, value))
