namespace pessoa{

    let p = new Paciente();
        p.setnome("Jangda");
        p.setcpf("101.101.101-01");
        p.setcodPaciente(1);
    
    let p1 = new Paciente();
        p1.setnome("Matias");
        p1.setcpf("202.202.202-02");
        p1.setcodPaciente(2);

    let p2 = new Paciente();
        p2.setnome("Irineu");
        p2.setcpf("303.303.303-03");
        p2.setcodPaciente(3);

    let e = new Enfermeiro();
        e.setnome("Daira");
        e.setcpf("112.112.112-12");
        e.setcodFuncionario(1);
        e.setcoren(11);
    
    let e1 = new Enfermeiro();
        e1.setnome("Helemita");
        e1.setcpf("223.522.223-23");
        e1.setcodFuncionario(3);
        e1.setcoren(12);

    let e2 = new Enfermeiro();
        e2.setnome("Dolores");
        e2.setcpf("334.633.337-33");
        e2.setcodFuncionario(3);
        e2.setcoren(13);
    
    let m = new Medico();
        m.setnome("Tania");
        m.setespecialidade ("Anestesista");
        m.setcrm(123);
        m.setcpf("123.123.123-11");
        m.setcodFuncionario(21);

    let m1 = new Medico();
        m1.setnome("Hobson");
        m1.setespecialidade ("Ortopedista");
        m1.setcrm(456);
        m1.setcpf("123.123.123-12");
        m1.setcodFuncionario(22);
    
    let m2 = new Medico();
        m2.setnome("Patrick");
        m2.setespecialidade ("Cirurgião");
        m2.setcrm(789);
        m2.setcpf("123.123.123-13");
        m2.setcodFuncionario(23);

    let h = new Hospital ();
        h.setnome ("Instituição Hobscrelzo da Silva")
        h.addEnfermeiros(e);
        h.addEnfermeiros(e1);
        h.addEnfermeiros(e2);
        h.addMedicos(m);
        h.addMedicos(m1);
        h.addMedicos(m2);
        h.addPacientes(p);
        h.addPacientes(p1);
        h.addPacientes(p2);

        document.getElementById("hospital").textContent=h.getnome();

        let tbMedico = document.getElementById("tbMedico");
        h.getmedicos().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let crm = h.getcrm();
            let especialidade = h.getespecialidade();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+crm+"</td><td>"+especialidade+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbEnfermeiras = document.getElementById("tbEnfermeiras");
        h.getEnfermeiros().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let corem = h.getcoren();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+corem+"</td></tr>";
            tbEnfermeiras.innerHTML += html;
        })
        let tbPacientes = document.getElementById("tbPacientes");
        h.getpacientes().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let cod = h.getcodPaciente();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+cod+"</td></tr>";
            tbPacientes.innerHTML += html;
        })

}