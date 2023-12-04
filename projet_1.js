const prompt = require('prompt-sync')()
let choice = ""

console.log("Voulez vous commencer une partie de Ping Pong ? ");
choice = prompt("oui ou non ?")

while (choice != "oui" && choice != "non") {
    choice = prompt("Vous avez fait une erreur de frappe : choisissez oui ou non ?")
}
if (choice == "non"){
    console.log("tu est autant nul que Thomas et Pascal.");
    console.log("GAME OVER");
}
if (choice == "oui") {
    console.log("Contre qui voulez vous faire une partie de pingpong ?");
     while (choice != "thomas" && choice != "pascal") {
        choice = prompt("thomas ou pascal ?")
}   
        if (choice =="thomas"){
        console.log("confirme tu vouloir affronter maître Thomas ?");
        choice = prompt("oui ou non ?")
            if (choice == "oui") {
            console.log("Bien jouer, tu va manger une bonne raclette ( racler ) dont tu a jamais manger .");
        }   else {
            console.log("Dommage tu aurais pu battre maître raclette");
            console.log("GAME OVER");
        }
    } 
} if (choice =="pascal"){
        console.log("confirme tu vouloir affronter pascal ?");
        choice = prompt("oui ou non ?")
        if (choice == "oui") {
            console.log("bonne chance à toi, car il va falloir attaquer pascal.");
        } else {
            console.log("Tu a gagner du temps dans ta vie car pascal est nul à chier.");
            console.log("GAME OVER");
        }
}