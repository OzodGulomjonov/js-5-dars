// alert ("Salom iltimos malumotlaringizni kiriting !");

// var userName = prompt ("iltimos ismingizni kiriting !" , "Falonchi");
// var userSurname = prompt ("Iltimos familiyangizni kiriting !" , "pismadonchiev");
// var userFatherName = prompt ("iltimos ochestvangizni kiriting" , "Falonchi ogli");
// var userAge = prompt ("Iltimos yoshingizni kiriting !");
// var userJob = prompt ("Iltimos nima ish qilishingizni kiriting !");
// var userHobby = prompt ("iltimos hobbyingizni kiriting !"); 

// alert (`Ismingiz ${userName}\nfamiliyangiz ${userSurname}\nochestvangiz ${userFatherName}\nyoshingiz ${userAge} da\n 
// ishingiz ${userJob}\nhobbyingiz ${userHobby} `);

// console.log (`Ismingiz ${userName}\nfamiliyangiz ${userSurname}\nochestvangiz ${userFatherName}\nyoshingiz ${userAge}da\nishingiz ${userJob}\nhobbyingiz ${userHobby}`);


// function writeName (name , surname) {
//     console.log ("mening ismim " + name + " familiyam " + surname);
// }

// writeName ("ozod" , "G'ulomjonov");


// function writeYourSelf (name , surname) {
//     console.log("ismim " + name + " familiyam" +   surname);
// }

// writeYourSelf ("islom" , " muhammadaliyev")




// var userAge = prompt ("yoshingizni kiriting") ;

// if (userAge >= 100) {
//     alert ("sizi yoshiz 100 dan kotta bolishi mumkun mas balabolli qimen")
// }else if (userAge >= 18) {
//     alert ("siz vayenkamatka keta olasiz  ")
// }else {
//     alert ("siz maloletkekansiz boromisiz")
// }


// const number = prompt ("sonni kiriting");

// if (number % 3 === 0 && number % 5 === 0 ) {
//     alert ("son bolinadi 5 va 3ga")
// }
// else if (number % 3 == 0) {
//     alert ("bu son faqat 3 ga bolinad");
// }

// else if (number % 5 == 0) {
//     alert ("bu son faqat 5 ga bolinadi");
// }

// else {
//     alert ("bu son bolinmidi");
// }

// var userName = prompt ("ismizi kiritin");

// if (userName) {
//      alert ("ismiz  " + userName);
// }else {
//      alert("ismizi kiriting")
// };

  
    

// const userName = prompt ("ismizi kiriting") ;

// if (userName && Number(userName)) {
//     alert ("ismiz notori")
// }else {
//     alert (`ismiz ` +  userName)
// }


// const name = prompt('Ismingizni kiriting');

// if(name && !Number(name)){
//     alert(`salom ` + name)
// }else{
//     alert("Boshqa malumot kiriting")
// }



// const userName = prompt ("ismingizni kiriting") ;

// if (Number(userName)) {
//     alert ("iltimos ismingizni harflarda yozing");
// }else {
//     alert ("ismingiz  " + userName)
// }


// var son = 0;

// for (son < 1000 , son++) {
//     console.log (son);  
// }

// var step;
// for (step = 0; step < 5; step++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   console.log('Идём 1 шаг на восток');
// }

// var i = 0;

// while (i < 1000) {
//   i++;
//   console.log(i);
// }





var dollarKursi = 9433.34;
var euroKursi = 10354.03;
alert ("iltimos imtixon natijalaringizni kiriting !");
var userEnglish = prompt ("iltimos ingilis tili natijalaringiz ni kiriting !");
var userMath = prompt ("iltimos matematika natijalaringizni kiriting !");
var userMoney = prompt ("iltimos qancha pul bero olasiz eting ($  da)!");
var userSum = (userMoney * 10354);
alert ("siz dollarda kiritkan summangiz somda " + userSum + " so'm ni tashkil etadi !");



if (userEnglish >= 101 && userMath >= 101) {
    alert ("umumiy natija 100 dan katta bolmaydi iltimos qaytadan yozing !")
}else if (userEnglish >= 70 && userMath >= 60) {
    alert ("oq yol alisher !")
}else if (userEnglish >= 30 && userMath >= 30 && userSum >= 10000000) {
    alert ("siz pulingiz bolgani uchun ottingiz !" ) ;
}else {
    alert ("sizda na pul bor va na bilim bor siz oqishga kira olmadingiz !")
}

