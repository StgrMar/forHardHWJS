let lang = 'ru';
let days;
if (lang == 'ru') {
    days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'];
} else if (lang == 'en') {
    days = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}

console.log(days);

let leng = 'ru';
let deys;
switch ('ru') {
    case 'ru':
        console.log(['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск']);
        break;
    default:
        console.log(['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn']);
        break;
}

let lung = 'ru';
let fun = {
    ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'],
    en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let duys = fun[lung];
console.log(duys);

let yourName = prompt('Кто ты?', 'Например: Артем');
let id = yourName == 'Артем' ? console.log('Директор') : yourName == 'Александр' ? console.log('Преподаватель') : console.log('Ученик');



