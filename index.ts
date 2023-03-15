import * as os from  "os"
import * as fs from "fs"

console.log(os.hostname())
console.log(os.homedir())

const totalMemory=os.totalmem()
console.log(totalMemory + "KB")
const Memeoryinfo="Total Memory Size :"+(totalMemory/1024) + ": MB" ;
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


const factorial=(n:number):number=>{
    let total = 1 
    for (let i=n; i>=1 ; i--){
        total*=i
    }
    return total ; 
}

const Arrangement=(n:number,r:number):number=>{
    return factorial(n)/(factorial(r)*factorial(n-r))
}
    

console.log(Arrangement(4,2))


interface Employe {
    nom: string;
    prenom: string;
    departement: string;
    experience: number;
  }
  
  class EmployeImpl implements Employe {
    constructor(
      public nom: string,
      public prenom: string,
      public departement: string,
      public experience: number,
    ) {}
  }
  
  // a. Créez un objet de type Employe
  const employe1: Employe = new EmployeImpl('Dupont', 'Pierre', 'RH', 5);
  
  // b. Affichez chaque attribut de l'objet
  console.log(employe1.nom); // 'Dupont'
  console.log(employe1.prenom); // 'Pierre'
  console.log(employe1.departement); // 'RH'
  console.log(employe1.experience); // 5
  
  // c. Créez un tableau avec 3 objets de type Employe
  const employes: Employe[] = [
    new EmployeImpl('Martin', 'Jean', 'Marketing', 2),
    new EmployeImpl('Dubois', 'Marie', 'Comptabilité', 7),
    new EmployeImpl('Lefebvre', 'Luc', 'Production', 4),
  ];
  
  // d. Affichez l'étudiant avec la plus grande expérience
  const employePlusExperimente = employes.reduce((prev, curr) => {
    return prev.experience > curr.experience ? prev : curr;
  });
  console.log(employePlusExperimente.nom); // 'Dubois'

