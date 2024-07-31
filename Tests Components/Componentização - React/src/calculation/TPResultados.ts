import { TPConstantes } from "./calculation/TPConstantes";
import { TPPrimario } from "./calculation/TPPrimario";
import { TPSecundario } from "./calculation/TPSecundario";

export class TPResultados {

    static primarios : {[key : number] : {[key : number] : number}} = {};

    /* ----------------------------------------------------------------------------------------------------------------------- */

    static atualiza_resultados() : void {

        // Núcleo
        $('#tabela-resultados-nucleo').find('tbody').html('');
        $('#tabela-resultados-nucleo').find('tbody').append(`
            <tr>
                <td name="trn-nucleo">${ TPConstantes.nucleo_od } x ${ TPConstantes.nucleo_id } x ${ TPConstantes.nucleo_h }</td>
                <td name="trn-perdas">${ TPConstantes.nucleo_perda.toFixed(2) } W</td>
                <td name="trn-peso">${ TPConstantes.peso_nucleo.toFixed(3) } Kg</td>
                <td name="trn-corrente">${ Math.round(TPConstantes.max_ipo) } mA</td>
                <td name="trn-aplicacao">${ TPConstantes.aplicacao }</td>
                <td name="trn-bmax">${ TPConstantes.bmax } T</td>
                <td name="trn-frequencia">${ TPConstantes.frequencia } Hz</td>
            </tr>
        `);

        // Primario
        $('#tabela-resultados-primario').find('tbody').html('');
        for (let i = 1; i <= TPConstantes.numero_primarios; i++) {

            const primario = TPPrimario.primarios[`primario-${ i }`];

            $('#tabela-resultados-primario').find('tbody').append(`
                <tr id="trp-${ i }">
                    <td>P${ i }</td>
                    <td name="${ i }trp-tensao">${ primario.vp.toFixed(1) } V</td>
                    <td name="${ i }trp-corrente">${ primario.corrente.toFixed(2) } A</td>
                    <td name="${ i }trp-espiras">${ Math.round(primario.np) }</td>
                    <td name="${ i }trp-diametro">${ primario.diam_fio.toFixed(2) } mm</td>
                    <td name="${ i }trp-damm2">${ primario.d_a_mm2.toFixed(2) }</td>
                    <td name="${ i }trp-ffactor">${ primario.ff.toFixed(2) }</td>
                    <td name="${ i }trp-resistencia">${ primario.resistencia_ohm.toFixed(2) } R</td>
                    <td name="${ i }trp-pesocobre">${ primario.peso_cobre_kg.toFixed(2) } Kg</td>
                    <td name="${ i }trp-comprimento">${ primario.comprimento_fio_total.toFixed(1) } m</td>
                </tr>
            `);
        }

        // Secundario
        $('#tabela-resultados-secundario').find('tbody').html('');
        for (let i = 1; i <= TPConstantes.numero_secundarios; i++) {

            const secundario = TPSecundario.secundarios[`secundario-${ i }`];

            $('#tabela-resultados-secundario').find('tbody').append(`
                <tr id="trs-${ i }">
                    <td>S${ i }</td>
                    <td name="${ i }trs-tensao"> ${ secundario.tensao.toFixed(1) } V</td>
                    <td name="${ i }trs-corrente"> ${ secundario.corrente.toFixed(2) } A</td>
                    <td name="${ i }trs-tvazio"> ${ secundario.corrigido_vs.toFixed(1) } V</td>
                    <td name="${ i }trs-regul"> ${ secundario.corrigido_reg.toFixed(2) } %</td>
                    <td name="${ i }trs-espiras"> ${ Math.round(secundario.corrigido_ns) }</td>
                    <td name="${ i }trs-diametro"> ${ secundario.diam_fio.toFixed(2) } mm</td>
                    <td name="${ i }trs-damm2"> ${ secundario.d_a_mm2.toFixed(2) }</td>
                    <td name="${ i }trs-ffactor"> ${ secundario.corrigido_ff.toFixed(2) }</td>
                    <td name="${ i }trs-resistencia"> ${ secundario.corrigido_resistencia_ohm.toFixed(2) } R</td>
                    <td name="${ i }trs-pesocobre"> ${ secundario.corrigido_peso_cobre.toFixed(2) } Kg</td>
                    <td name="${ i }trs-comprimento"> ${ secundario.corrigido_comprimento_total.toFixed(1) } m</td>
                </tr>
            `);            
        }

        // Cálculos
        $('#tabela-resultados-calculos').find('tbody').html('');
        $('#tabela-resultados-calculos').find('tbody').append(`
            <tr>  
                <td name="trc-fftotal">${ TPConstantes.ff_total.toFixed(1) }</td>
                <td name="trc-deltat">${ Math.round(TPConstantes.delta_t_final) } oC</td>
                <td name="trc-dim-finais">${ TPConstantes.nucleo_od_final } x ${ TPConstantes.nucleo_h_final }</td>
                <td name="trc-pot-sec">${ TPConstantes.potencia_total.toFixed(2) }</td>
                <td name="trc-peso-total">${ TPConstantes.peso_total_trafo.toFixed(3) } Kg</td>
                <td name="trc-peso-cobre">${ TPConstantes.peso_total_cobre.toFixed(2) } Kg</td>
                <td name="trc-relacao">${ TPConstantes.rel_volt_espira.toFixed(2) }</td>
            </tr>
        `);
    }
}