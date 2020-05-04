'use strict';

let money,
    time,
    firstAnswer,
    secondAnswer,
    thirdAnswer,
    fourthAnswer;

let appdata = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};   

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
firstAnswer = prompt("Введите обязательную статью расходов в этом месяце");
secondAnswer = +prompt("Во сколько обойдется?");
thirdAnswer = prompt("Введите обязательную статью расходов в этом месяце");
fourthAnswer = +prompt("Во сколько обойдется?");

appdata.budget = money;
appdata.timeData = time;
appdata.expenses.firstAnswer = secondAnswer;
appdata.expenses.thirdAnswer = fourthAnswer;

let dayBudget = (appdata.budget - appdata.expenses.firstAnswer - appdata.expenses.thirdAnswer)/30;

alert("Бюджет на 1 день " + dayBudget);
