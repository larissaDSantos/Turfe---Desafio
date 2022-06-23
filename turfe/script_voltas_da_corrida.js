var cavalo1 = [];
var cavalo2 = [];
var cavalo3 = [];
var cavalo4 = [];
var cavalo5 = [];
var cavalo6 = [];

var soma1 = Number(0);
var soma2 = Number(0);
var soma3 = Number(0);
var soma4 = Number(0);
var soma5 = Number(0);
var soma6 = Number(0);

async function voltas () {

        for (var numero_da_volta = 1; numero_da_volta <= voltas_input.value; numero_da_volta++) {
            Number(numero_da_volta);
            await new Promise(obtenha =>{

                for (let i = 1; i <= registro_de_cavalos.length; i++) {

                    if (i==1) {
                        cavalo1.push((Math.random() * 2 + 7));
                        soma1 += Number(cavalo1[cavalo1.length-1]);
                    }
                    else if(i==2) {
                        cavalo2.push((Math.random() * 2 + 7));
                        soma2 += Number(cavalo2[cavalo2.length-1]);
                    }
                    else if(i==3){
                        cavalo3.push((Math.random() * 2 + 7));
                        soma3 += Number(cavalo3[cavalo3.length-1]);
                    }
                    else if(i==4){
                        cavalo4.push((Math.random() * 2 + 7));
                        soma4 += Number(cavalo4[cavalo4.length-1]);
                    }
                    else if(i==5){
                        cavalo5.push((Math.random() * 2 + 7));
                        soma5 += Number(cavalo5[cavalo5.length-1]);
                    }
                    else if(i==6){
                        cavalo6.push((Math.random() * 2 + 7));
                        soma6 += Number(cavalo6[cavalo6.length-1]);
                    }

                }
                
                resultados_da_volta.innerHTML += `<h2>Volta ${numero_da_volta}</h2><br><br>`;
                for (var numero_do_cavalo = 1; numero_do_cavalo <= registro_de_cavalos.length; numero_do_cavalo++) {

                    if (numero_do_cavalo == 1) {

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo1[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma1).toFixed(1)} <br>
                        <br>`;

                    } 
                    else if(numero_do_cavalo == 2){

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo2[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma2).toFixed(1)} <br>
                        <br>`;

                    }
                    else if(numero_do_cavalo == 3){

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo3[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma3).toFixed(1)} <br>
                        <br>`;

                    }
                    else if(numero_do_cavalo == 4){

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo4[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma4).toFixed(1)} <br>
                        <br>`;

                    }
                    else if(numero_do_cavalo == 5){

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo5[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma5).toFixed(1)} <br>
                        <br>`;

                    }
                    else if(numero_do_cavalo == 6){

                        resultados_da_volta.innerHTML += `
                        ${registro_de_cavalos[numero_do_cavalo-1]} - tempo ${Number(cavalo6[numero_da_volta-1]).toFixed(1)} - soma ${Number(soma6).toFixed(1)} <br>
                        <br>`;
                        
                    }

                }

            setInterval(obtenha, 5000);
        })
}
}