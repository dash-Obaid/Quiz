let frågor = [
    //frågan nummer 1
   {
       fråga: "Vilken av valen är världens största land till yta efter Ryssland?",
       val: ["USA", "Kanada", "Kina", "México"],
       svar: "Kanada",
   },
   //frågan nummer 2
   {
       fråga: "Vilken av de alternativen är världens största land till befolkning?",
       val: ["USA", "Kanada", "Kina", "México"],
       svar: "Kina",
   },
    //frågan nummer 3
   {
       fråga: "Vad har indian för valuta?",
       val: ["Dollar", "Rupee", "Krona", "Pound"],
       svar: "Rupee",
   },
    //frågan nummer 4
   {
       fråga: "När fall Berlins muren?",
       val: ["1958", "1945", "1975", "1989"],
       svar: "1989",
   },
    //frågan nummer 5
   {
       fråga: "Robben Island är ett namn på en ö där färglades…",
       val: ["Nelson Mandela", "Mahatma Gandhi", "El Che Guevara", "Hitler"],
       svar: "Nelson Mandela",
   },
    //frågan nummer 6
   {
       fråga: "Spanska sjukan dödade runt 50 miljoner människor. Var startade den?",
       val: ["Spanien", "USA", "Tyskland", "Italien"],
       svar: "USA",
   },
    //frågan nummer 7
   {
       fråga: "Till vilket land blev Albert Einstein nominerad till att bli landets statsminister?",
       val: ["USA", "Tyskland", "Israel", "Frankrike"],
       svar: "Israel",
   },
    //frågan nummer 8
   {
       fråga: "Hur många länder finns det i världen?",
       val: ["198", "195", "205", "185"],
       svar: "195",
   },
    //frågan nummer 9
   {
       fråga: "Från vilket språk kommer ordet alkohol?",
       val: ["engelska", "italienska", "arabiska", "ryska"],
       svar: "arabiska",
   },
    //frågan nummer 10
   {
       fråga: "Diamanten är en ädelmetall som består av grundämnet… ",
       val : ["kol", "syre", "kisel", "krom"],
       svar: "kol",
   },
];
let i = 0;
let fråga = document.querySelector("#fråga");
const val = Array.from(document.getElementsByClassName("val-text"));
var aktuellaSvar = {};
let correct = 0;
let svar = 0;



//how many have you anwerd yet?
function svarNr(){
    document.querySelector("#svar").innerHTML=svar;
}

//Get a new quistion 
function newQuistion() {
   fråga.innerHTML = frågor[i].fråga;
};


//Get a new choices from the array frågor
function getChoice() {
   aktuellaSvar = frågor[i].val;
   val.forEach(val => {
       const nummer = val.dataset["number"];
       val.innerHTML = aktuellaSvar[nummer];
       val.value = aktuellaSvar[nummer];
   });
};


//check the right answer 
function check() {
   var svar1 = document.querySelector("#svar1").value;
   var svar2 = document.querySelector("#svar2").value;
   var svar3 = document.querySelector("#svar3").value;
   var svar4 = document.querySelector("#svar4").value;
   //These are button´s values. Will be used to compare with the right answer 


   document.querySelector("#svar1").onclick = function () {
       if (svar1 == frågor[i].svar) {
           i++;
           correct++;
           svar++;
           stop();
       }
       else {
           i++;
           svar++;
           stop();
       };
   };


   document.querySelector("#svar2").onclick = function () {
       if (svar2 == frågor[i].svar) {
           i++;
           correct++;
           svar++;
           stop();
       }
       else {
           i++;
           svar++;
           stop();
       };
   };

   document.querySelector("#svar3").onclick = function () {
       if (svar3 == frågor[i].svar) {
           i++;
           correct++;
           svar++;
           stop();
       }
       else {
           i++;
           svar++;
           stop();
       };
   };

   document.querySelector("#svar4").onclick = function () {
       if (svar4 == frågor[i].svar) {
           i++;
           correct++;
           svar++;
           stop();
       }
       else {
           i++;
           svar++;
           stop();
       };
   };
};

//call a quistion, a choice and check the right answer
function start() {
   newQuistion();
   getChoice();
   check();
   svarNr()
};


//stop when the quiz is over
function stop() {
   if (i < 10) {
       start();
   } else {
    document.querySelector("#show").innerHTML = "";
    document.querySelector("#resultat").innerHTML = "Du har " + correct + " av " + svar;
   }
};

stop();