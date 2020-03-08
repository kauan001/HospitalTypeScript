"use strict";
var hospital;
(function (hospital) {
    class Hospital {
        constructor() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        getNomeHospital() {
            return this.nomeHospital;
        }
        setNomeHospital(nome) {
            this.nomeHospital = nome;
        }
       addEnfermeiros(enfermeiros) {
            this.enfermeiros.push(enfermeiros);
        }
        getEnfermeiros() {
            return this.enfermeiros;
        }
        addMedicos(medicos) {
            this.medicos.push(medicos);
        }
        getmedicos() {
            return this.medicos;
        }
        addPacientes(pacientes) {
            this.pacientes.push(pacientes);
        }
        getpacientes = function () {
            return this.pacientes;
        }
       
    }
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
