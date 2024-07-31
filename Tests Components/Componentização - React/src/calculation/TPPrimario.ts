import { TPCalculos } from "./calculation/TPCalculos";
import { TPConstantes } from "./calculation/TPConstantes";

export class TPPrimario {

    static primarios : {[key : number] : {[key : number] : number}} = {};

    /* ----------------------------------------------------------------------------------------------------------------------- */
 
    static init() : void {

        // loop para criar as chaves dinâmicas do objeto secundarios
        for(let i = 1; i <= 10; i++) {
          
            // cria uma nova chave dinâmica com a sintaxe `prim${i}`
            TPPrimario.primarios[`primario-${i}`] = {
                tensao: 0,
                corrente: 0,
                vp: 0,
                np: 0,
                bitola_escolhida: 0,
                diam_fio: 0,
                area_fio_mm2: 0,
                comprimento_fio_total: 0,
                d_a_mm2: 0,
                resistencia_ohm: 0,
                peso_cobre_kg: 0,
                ff: 0,
                perda_w: 0,
                aux_delta_t: 0,
                delta_t: 0,
                fator_dt: 0
            }
        }
    }

    static calcula_corrente(num_prim, update) : void {

        let corrente = 0;
        const obj = TPPrimario.primarios[`primario-${ num_prim }`];

        if (TPConstantes.tipo_primario == 'paralelo') {

            corrente = TPCalculos.corrente_primario_paralelo(obj.tensao);

            if (update) {
                corrente = TPCalculos.corrente_primario_paralelo(obj.tensao);
                corrente = corrente == Infinity ? 0 : corrente;                
            }
        } 
        else {

            corrente = TPCalculos.corrente_primario_serie(obj.tensao);
            
            if (update) {
                corrente = TPCalculos.corrente_primario_serie(obj.tensao);
                corrente = corrente == Infinity ? 0 : corrente;  
            }
        }

        obj.corrente = corrente;

        $('#dados-primario').find(`#primario-${ num_prim }`).find('[name="p-corrente-a"]').text(corrente);
    }


    static calcula_diametros() : void {

        let diametro_calculado = 0;
        for (let i = 1; i <= TPConstantes.numero_primarios; i++) {
            
            const corrente = TPPrimario.primarios[`primario-${ i }`].corrente;

            // calculando diametro 
            diametro_calculado = TPCalculos.diametro_primario(corrente);

            $('#diam-primario').find(`#diam-primario-${ i }`).find(`[name="calculado-prim"]`).text(diametro_calculado);
        
            if (diametro_calculado < 12) {

                // sugerindo um diametro
                let diametro_sugerido = 0;
                    diametro_sugerido = TPCalculos.busca_diametro_sugerido(diametro_calculado);
                
                $('#diam-primario').find(`#diam-primario-${ i }`).find(`[name="sugerido-prim"]`).text(diametro_sugerido);

                // auto-selecionando o diametro com base no sugerido
                for (const prop in TPConstantes.bitolas) {
                    if (TPConstantes.bitolas[prop] == diametro_sugerido) {
                        
                            TPPrimario.primarios[`primario-${ i }`].bitola_escolhida = TPConstantes.bitolas[prop];
                        
                            $('#diam-primario').find(`#diam-primario-${ i }`).find('.opcoes-bitolas-prim').val(prop);
                    }
                }
            }
            else { console.info("Diâmetro primário calculado maior que 12"); }
        }
    }


    static calcula_vp(num_prim) : void {

        if (TPConstantes.tipo_primario == 'paralelo' || num_prim == 1) {
            TPPrimario.primarios[`primario-${ num_prim }`].vp = TPPrimario.primarios[`primario-${ num_prim }`].tensao;
        } 
        else {
            TPPrimario.primarios[`primario-${ num_prim }`].vp = TPCalculos.vp_serie(num_prim);
        }
    }

    static atualiza_dados(auto_select = true) {

        if (TPConstantes.potencia_total != 0 && TPConstantes.numero_primarios != 0) 
        {
            let prim_ff_total = 0;
            let prim_peso_cobre_total = 0;
            let prim_perda_w_total = 0;
            let prim_delta_t_total = 0;
            let prim_fator_dt_total = 0;

            for (let i = 1; i <= TPConstantes.numero_primarios; i++) {

                let index = i;
                if (TPConstantes.tipo_primario == 'paralelo') {
                    index = 1;
                    TPPrimario.primarios[`primario-${ i }`].tensao = TPPrimario.primarios[`primario-1`].tensao;
                }

                this.calcula_corrente(i, true);
                this.calcula_vp(i);

                TPPrimario.primarios[`primario-${ i }`].np = TPCalculos.np_primario(index);
                TPPrimario.primarios[`primario-${ i }`].diam_fio = TPPrimario.primarios[`primario-${ index }`].bitola_escolhida;
                TPPrimario.primarios[`primario-${ i }`].area_fio_mm2 = TPCalculos.area_fio_mm2_primario(index);
                TPPrimario.primarios[`primario-${ i }`].comprimento_fio_total = TPCalculos.comprimento_fio_total_primario(index);
                TPPrimario.primarios[`primario-${ i }`].d_a_mm2 = TPCalculos.d_a_mm2_primario(index);
                TPPrimario.primarios[`primario-${ i }`].resistencia_ohm = TPCalculos.resistencia_ohm_primario(index);
                TPPrimario.primarios[`primario-${ i }`].peso_cobre_kg = TPCalculos.peso_cobre_kg_primario(index);
                TPPrimario.primarios[`primario-${ i }`].ff = TPCalculos.ff_primario(index);
                TPPrimario.primarios[`primario-${ i }`].perda_w = TPCalculos.perda_w_primario(index);
                TPPrimario.primarios[`primario-${ i }`].aux_delta_t = TPCalculos.aux_delta_t_primario(index);
                TPPrimario.primarios[`primario-${ i }`].delta_t = TPCalculos.delta_t_primario(index);
                TPPrimario.primarios[`primario-${ i }`].fator_dt = TPCalculos.fator_dt_primario(index);

                prim_ff_total += TPPrimario.primarios[`primario-${ i }`].ff;
                prim_peso_cobre_total += TPPrimario.primarios[`primario-${ i }`].peso_cobre_kg;
                prim_perda_w_total += TPPrimario.primarios[`primario-${ i }`].perda_w;
                prim_delta_t_total += TPPrimario.primarios[`primario-${ i }`].delta_t;
                prim_fator_dt_total += TPPrimario.primarios[`primario-${ i }`].fator_dt;
            }

            TPConstantes.prim_ff_total = prim_ff_total; 
            TPConstantes.prim_peso_cobre_total = prim_peso_cobre_total; 
            TPConstantes.prim_perda_w_total = prim_perda_w_total; 
            TPConstantes.prim_delta_t_total = Math.round(prim_delta_t_total); 
            TPConstantes.prim_fator_dt_total = prim_fator_dt_total; 

            $('[name="nucleo-ff-total"]').text(TPConstantes.prim_ff_total);
            $('[name="nucleo-delta-t"]').text(TPConstantes.prim_delta_t_total);

            if (auto_select) {
                setTimeout(() => {
                    TPPrimario.calcula_diametros();
                }, 30);
            }
        }        
    }
}