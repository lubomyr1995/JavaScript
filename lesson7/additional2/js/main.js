// additional 2 with pdf
// User Card:
function userCard(n) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: n
    }
    return {
        getCardOptions: function () {
            return card
        },
        putCredits: function (addCash) {
            card.balance += addCash
            let operation = {
                'operationType': 'Received Credits',
                'credits': addCash,
                'operationTime': `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

            }
            card.historyLogs.push(operation)
        },
        takeCredits: function (withdrawalCash) {
            if (card.balance >= withdrawalCash) {
                card.balance -= withdrawalCash
                let operation = {
                    'operationType': 'Withdrawal of credits',
                    'credits': withdrawalCash,
                    'operationTime': `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

                }
                card.historyLogs.push(operation)
            } else if (card.transactionLimit <= withdrawalCash) {
                console.error('Задана сума перевищує ліміт')
            } else {
                console.error('Задана сума перевищує ваш баланс')
            }
        },
        setTransactionLimit: function (transactionLimit) {
            card.transactionLimit = transactionLimit
            let operation = {
                'operationType': 'Transaction Limit change',
                'credits': transactionLimit,
                'operationTime': `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}, ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

            }
            card.historyLogs.push(operation)
        },
        transferCredits: function (credit, card1) {
            if (card.balance >= (credit * 0.005 + credit) && card.transactionLimit >= credit) {
                card1.getCardOptions().balance += credit
                card.balance -= (credit * 0.005 + credit)
            } else {
                console.error('Даний переказ неможливо провести')
            }
        },

    }
}


// let card3 = userCard(3);
// let card1 = userCard(1);
// console.log(card3.getCardOptions());
// card3.putCredits(200);
// card3.takeCredits(100);
// card3.setTransactionLimit(50);
// // card3.setTransactionLimit(49);
// card3.transferCredits(50, card1);
// console.log(card3.getCardOptions());
// card3.putCredits(100);
// console.log(card3.getCardOptions());
// console.log(card1.getCardOptions());


// UserAccount:
class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }

    addCard(n) {
        if (this.cards.length < 3) {
            this.cards.push(userCard(n).getCardOptions())
        } else {
            console.error('Ви не можите додати більше карт')
        }
    }

    getCardByKey(n) {
        let card = userCard(n);
        card.getCardOptions().key = n;
        return card;
    }
}

let user = new UserAccount('Bob');
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());


