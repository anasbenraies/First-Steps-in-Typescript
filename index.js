"use strict";
exports.__esModule = true;
var os = require("os");
console.log(os.hostname());
console.log(os.homedir());
var totalMemory = os.totalmem();
console.log(totalMemory + "KB");
var Memeoryinfo = "Total Memory Size :" + (totalMemory / 1024) + ": MB";
// fs.writeFileSync("./os.info.ts",Memeoryinfo)
// for (let i=2000 ;i<=2030 ; i++){
//     i%2==0?console.log(i):null
// }
// console.log('---------------')
// var counter:number=2000
// while (counter <2030){
//     counter%3==0?console.log(counter):null
//     counter+=1;
// }
// const TestNumber : number =1000 ; 
// var Diviseur : String ="" ;
// for (let i =0 ; i<=TestNumber ; i++){
//     TestNumber%i==0?console.log(i):null
// }
var factorial = function (n) {
    var total = 1;
    for (var i = n; i >= 1; i--) {
        total *= i;
    }
    return total;
};
var Arrangement = function (n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
};
console.log(Arrangement(4, 2));
var EmployeImpl = /** @class */ (function () {
    function EmployeImpl(nom, prenom, departement, experience) {
        this.nom = nom;
        this.prenom = prenom;
        this.departement = departement;
        this.experience = experience;
    }
    return EmployeImpl;
}());
// a. Créez un objet de type Employe
var employe1 = new EmployeImpl('Dupont', 'Pierre', 'RH', 5);
// b. Affichez chaque attribut de l'objet
console.log(employe1.nom); // 'Dupont'
console.log(employe1.prenom); // 'Pierre'
console.log(employe1.departement); // 'RH'
console.log(employe1.experience); // 5
// c. Créez un tableau avec 3 objets de type Employe
var employes = [
    new EmployeImpl('Martin', 'Jean', 'Marketing', 2),
    new EmployeImpl('Dubois', 'Marie', 'Comptabilité', 7),
    new EmployeImpl('Lefebvre', 'Luc', 'Production', 4),
];
// d. Affichez l'étudiant avec la plus grande expérience
var employePlusExperimente = employes.reduce(function (prev, curr) {
    return prev.experience > curr.experience ? prev : curr;
});
console.log(employePlusExperimente.nom); // 'Dubois'
