namespace hospital{
    export class Paciente extends hospital.Pessoa{
        private codPaciente: number;

        getcodPaciente(){
            
            return this.codPaciente;

        }

        setcodPaciente(cod:number){

            this.codPaciente = cod;
            
        }
    }
}