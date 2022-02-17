// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// // {
// //     id: 1,
// //     name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //         street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: {
// //             lat: '-37.3159',
// //             lng: '81.1496'
// //         }
// //     },
// //     phone: '1-770-736-8031 x56442',
// //     website: 'hildegard.org',
// //     company: {
// //         name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// //     }
// // }
//
// class CreateObjects {
//     constructor(id, name, username, email, street, suite, city, zipcode,
//                 lat, lng, phone, website, nameCompany, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street, suite, city, zipcode,};
//         this.address.geo = {lat, lng};
//         this.phone = phone;
//         this.website = website;
//         this.company = {nameCompany, catchPhrase, bs};
//
//     }
// }
//
// let ob1 = new CreateObjects(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
//     'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
//     '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
//     'Multi-layered client-server neural-net', 'harness real-time e-markets');
// console.log(ob1)


// // - -  Створити функцію конструктор / клас  який описує об'єкт тегу
// // Поля :
// //  -назва тегу ()
// //  - опис його дій
// //  - масив з атрибутами (2-3 атрибути максимум)
// //  Кожен атрибут описати як окремий який буде містити
// //  -назву атрибуту
// //  -опис дії атрибуту
// //  інформацію брати з htmlbook.ru
// //
// //  Таким чином описати теги
// //  -a
// //  -div
// //  -h1
// //  Приклад результуючого об'єкту
// //    {
// //         titleOfTag: 'area',
// //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
// //         attrs: [
// //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// //         {/*some props and values*/},
// //         {/*...*/},
// //         {/*...*/},
// //         ]
// //
// //    }
// function DescriptionObject(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [{titleOfAttr, actionOfAttr}, {titleOfAttr2, actionOfAttr2}];
// }
//
// let descObj1 = new DescriptionObject('a', `'a - является одним из важных элементов HTML и предназначен для создания ссылок'`,
//     'href', 'Задает адрес документа, на который следует перейти.', 'title',
//     'Добавляет всплывающую подсказку к тексту ссылки.');
// console.log(descObj1);
// let descObj2 = new DescriptionObject('div', 'Элемент div является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     'align', 'Задает выравнивание содержимого тега', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// console.log(descObj2);
// let descObj3 = new DescriptionObject('h1', 'представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка', 'hidden', 'Скрывает содержимое элемента от просмотра.');
// console.log(descObj3);
