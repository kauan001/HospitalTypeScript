"use strict";
var hospital;
(function (hospital) {
    class Pessoa {
        constructor(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        getnome() {
            return this.nome;
        };
        setnome(nome) {
            this.nome = nome;
        };
        getcpf() {
            return this.cpf;
        };
        setcpf(cpf) {
            this.cpf = cpf;
        };
       
    }
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));