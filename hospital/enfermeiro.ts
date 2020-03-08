namespace hospital{
    export class Enfermeiro extends hospital.Funcionario{
        private coren : number;

        getcoren(){
           return this.coren;
        }

        setcoren(coren:number){
            this.coren = coren;
        }
    }
}