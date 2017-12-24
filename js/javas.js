(function () {

    var actualizar = function () {
        var fecha = new Date(),
            hora = fecha.getHours(),
            minut = fecha.getMinutes(),
            seco = fecha.getSeconds(),
            dia=fecha.getDay(),
            mes=fecha.getMonth(),
            anio=fecha.getUTCFullYear();

        var Phoras = document.getElementById('horas'),
            Pminut = document.getElementById('minu'),
            Pseco = document.getElementById('seco'),
            AP=document.getElementById('ap'),
            Pdia=document.getElementById('dia'),
            Pmes=document.getElementById('mes'),
            Pyear=document.getElementById('year'),
            PNdia=document.getElementById('Ndia');

        
            var dias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
            var meses=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

        if (hora > 12) {
            AP.textContent="PM";
            hora = hora - 12;
            Phoras.textContent = "0" + hora;
        }
        else {
            AP.textContent="AM";
            Phoras.textContent = hora;
        }


        if (minut < 10) {
            Pminut.textContent = "0" + minut;
        }
        else {
            Pminut.textContent = minut;
        }


        if(seco<10){
            Pseco.textContent="0"+seco;
        }
        else{
            Pseco.textContent=seco;
        }
        PNdia.textContent=dia;
        Pdia.textContent=dias[dia];
        Pmes.textContent=meses[mes];
        Pyear.textContent=anio;


    };

    actualizar();

    var intervalo = setInterval(actualizar, 1000);


}())