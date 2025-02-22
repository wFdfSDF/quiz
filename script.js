let questions = [
    {question:"Рисуешь ли ты?", answers: ["Да", "Не много", "Нет"], scores: [10, 7, 2]},
    {question:'ходишь ли ты на выставки?', answers: ["Да", "Не много", "Нет"], scores: [10, 7, 2]},
    {question:'знаешь ли ты картину мона лиза?', answers: ["Да", "слышал где-то", "Нет"], scores: [10, 7, 2]},
    {question:'сколько цветов в радуге?', answers: ["6", "8", "7"], scores: [2, 2, 10]},
    {question:'есть ли голубой цвет в радуге?', answers: ["Да", "Нет", "Не знаю"], scores: [10, 2, 5]},
    {question:'ходил ли ты на доп занятия по творчеству?', answers: ["Да, много раз", "Пару раз", "Нет"], scores: [10, 7, 2]},
    {question:'пробовал ли рисовать самого себя?', answers: ["Да, много раз", "Пару раз", "Нет"], scores: [10, 7, 2]},
    {question:'продавал ли ты свои рисунки?', answers: ["Да", "Пару раз", "Нет"], scores: [10, 7, 2]},
    {question:'кто начал первым пользоваться красками?', answers: ["Пещерные люди", "Динозавры", "Современные люди"], scores: [10, 2, 2]},
    {question:'сколько художников вы знаете?', answers: ["Больше 10", "5 - 10", "0 - 5"], scores: [10, 7, 2]},]
let number_questoin = 0
let score = 0

let container = document.querySelector('div')
let header = container.querySelector('h1')
let label = document.querySelectorAll('label')
let button = document.querySelector('button')

function loadQuastions() {
    let q = questions[number_questoin]
    header.innerHTML = q.question
    for (let i = 0; i < label.length; i += 1) {
        if (q.answers[i]) {
            label[i].style.display = 'block'
            label[i].querySelector('span').innerHTML = q.answers[i]
            label[i].querySelector('input').value = q.scores[i]
        } else{
            label[i].style.display = 'none'
        }
    }
}

function getSelectedScore() {
    let selected = document.querySelector("input[name='answer']:checked");
    return selected ? parseInt(selected.value) : 0;
}

button.addEventListener('click', function(){
    score += getSelectedScore()
    number_questoin += 1
    if (number_questoin < questions.length) {
        loadQuastions()
    } else {
        let massage = ''
        if (score >= 70) {
            massage = 'Ты точно творческий человек!'
        } else if (score >= 45) {
            massage = 'Ты связан с творчеством'
        } else {
            massage = 'творчество не твое'
        }
        header.innerHTML = `<h1 style = 'font-size: 20px'>Твой результат: ${score} баллов</h1><p>${massage}</p>`;
        for (let i = 0; i < label.length; i += 1) {
                label[i].style.display = 'none'
            }
        button.style.display = 'none'
    }
})

loadQuastions()
