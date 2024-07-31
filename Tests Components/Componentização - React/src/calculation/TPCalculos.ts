import { TPConstantes } from "./calculation/TPConstantes";
import { TPPrimario } from "./calculation/TPPrimario";
import { TPSecundario } from "./calculation/TPSecundario";

export class TPCalculos {

    // CONSTANTES

    static jc() : number {
        return Math.pow(TPConstantes.delta_t / TPConstantes.fh, 1/2) * 0.51;
    }

    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    // GERAIS

    static perda_total() : number {
        return TPConstantes.nucleo_perda + TPConstantes.prim_perda_w_total + TPConstantes.sec_perda_w_total;  
    }

    static max_ipo() : number {
        return (TPConstantes.nucleo_perda / TPPrimario.primarios[`primario-1`].vp) * 1100;
    }

    static diferenca_p() : number {
        return (TPConstantes.perda_total * 100) / TPConstantes.potencia_total;  
    }  

    static diferenca() : number {
        return (TPConstantes.diferenca_p / 100) + 1;  
    }

    static delta_t_final() : number { 
        return Math.pow((((TPConstantes.nucleo_perda + TPConstantes.perda_cobre_total) * 1000) / ((TPConstantes.nucleo_od_final * TPConstantes.pi / 10) * (TPConstantes.nucleo_h_final / 10))), 0.833);
    }

    static total_ff() : number { 
        return TPConstantes.prim_ff_total + TPConstantes.sec_ff_total;
    }

    static total_ff_max() : number { 
        
        // eslint-disable-next-line no-prototype-builtins
        if (TPConstantes.ffmax.hasOwnProperty(TPConstantes.nucleo_id)) 
        {
            return TPConstantes.ffmax[TPConstantes.nucleo_id][TPConstantes.nucleo_blindagem];
        } 
        else 
        {
            let valor;
            let diferenca = Infinity; // inicializa a diferença como infinito

            for (const chave in TPConstantes.ffmax) 
            {
                // eslint-disable-next-line no-prototype-builtins
                if (TPConstantes.ffmax.hasOwnProperty(chave)) 
                {
                    const difAtual = Math.abs(parseInt(chave) - TPConstantes.nucleo_id); // calcula a diferença atual
                
                    if (difAtual < diferenca) 
                    {
                        diferenca = difAtual; // atualiza a menor diferença encontrada até agora
                        valor = TPConstantes.ffmax[chave][TPConstantes.nucleo_blindagem]; // atualiza o valor correspondente
                    }
                }
            }

            if (valor !== undefined) { return valor; } else { return 0; }
        }
    }
    
    static total_perda_cobre() : number { 
        return TPConstantes.prim_perda_w_total + TPConstantes.sec_corrigido_perda_total;
    }

    static total_perda_geral_trafo() : number { 
        return TPConstantes.perda_cobre_total + TPConstantes.nucleo_perda;
    }

    static total_eficiencia() : number { 
        return (TPConstantes.potencia_total * 100) / (TPConstantes.potencia_total + TPConstantes.perda_geral_trafo);
    }

    static total_peso_cobre() : number { 
        return TPConstantes.sec_corrigido_peso_cobre_total + TPConstantes.prim_peso_cobre_total;
    }

    static total_peso_trafo() : number { 
        return TPConstantes.peso_nucleo + TPConstantes.peso_total_cobre;
    }

    static total_rel_volt_espira() : number { 
        return TPPrimario.primarios[`primario-1`].vp / TPPrimario.primarios[`primario-1`].np;
    }


    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    // PRIMARIO

    static corrente_primario_paralelo(tensao) : number {
        return ((TPConstantes.potencia_total / tensao) / TPConstantes.numero_primarios) * 1.15;
    }          

    static corrente_primario_serie(tensao) : number {
        console.log(TPConstantes.potencia_total, tensao);
        
        return (TPConstantes.potencia_total / tensao) * 1.2;
    }

    static diametro_primario(corrente) : number {
        return Math.pow(4 * (corrente / TPConstantes.jc) / TPConstantes.pi, 1/2);
    }

    static espira_media_primario(od, id, h) : number {
        return (((od - id) + (2 * h)) * 1.11) / 1000
    }

    static vp_serie(num_prim) : number {
        const tensao = TPPrimario.primarios[`primario-${ num_prim }`].tensao;
        const tensao_anterior = TPPrimario.primarios[`primario-${ (num_prim  - 1) }`].tensao;
        
        return tensao - tensao_anterior;
    }

    static np_primario(num_prim) : number {
        const vp = TPPrimario.primarios[`primario-${ num_prim }`].vp;
        
        return Math.round(vp / (4.44 * TPConstantes.frequencia * TPConstantes.bmax * TPConstantes.nucleo_area_cm2 * 0.0001 * 0.98));
    }

    static area_fio_mm2_primario(num_prim) : number {
        const diam_fio = TPPrimario.primarios[`primario-${ num_prim }`].diam_fio;
        
        return TPConstantes.pi * Math.pow(diam_fio / 2, 2);
    }

    static comprimento_fio_total_primario(num_prim) : number {
        const np = TPPrimario.primarios[`primario-${ num_prim }`].np;

        return np * TPConstantes.espira_media_prim;
    }

    static d_a_mm2_primario(num_prim) : number {
        const corrente = TPPrimario.primarios[`primario-${ num_prim }`].corrente;
        const area_fio_mm2 = TPPrimario.primarios[`primario-${ num_prim }`].area_fio_mm2;

        return corrente / area_fio_mm2;
    }

    static resistencia_ohm_primario(num_prim) : number {
        const np = TPPrimario.primarios[`primario-${ num_prim }`].np;
        const area_fio_mm2 = TPPrimario.primarios[`primario-${ num_prim }`].area_fio_mm2;

        return ((TPConstantes.espira_media_prim * np) / area_fio_mm2) * 0.0175;
    }

    static peso_cobre_kg_primario(num_prim) : number {
        const np = TPPrimario.primarios[`primario-${ num_prim }`].np;
        const area_fio_mm2 = TPPrimario.primarios[`primario-${ num_prim }`].area_fio_mm2;

        return area_fio_mm2 * np * TPConstantes.espira_media_prim * 0.00933;
    }

    static ff_primario(num_prim) : number {
        const np = TPPrimario.primarios[`primario-${ num_prim }`].np;
        const area_fio_mm2 = TPPrimario.primarios[`primario-${ num_prim }`].area_fio_mm2;
        
        return (100 * (area_fio_mm2 * np) / TPConstantes.nucleo_area_interna);
    }

    static perda_w_primario(num_prim) : number {
        const corrente = TPPrimario.primarios[`primario-${ num_prim }`].corrente;
        const resistencia_ohm = TPPrimario.primarios[`primario-${ num_prim }`].resistencia_ohm;
        
        return resistencia_ohm * Math.pow(corrente, 2);
    }

    static aux_delta_t_primario(num_prim) : number {
        const corrente = TPPrimario.primarios[`primario-${ num_prim }`].corrente;
        const area_fio_mm2 = TPPrimario.primarios[`primario-${ num_prim }`].area_fio_mm2;
        
        return corrente / area_fio_mm2;
    }

    static delta_t_primario(num_prim) : number {
        const aux_delta_t = TPPrimario.primarios[`primario-${ num_prim }`].aux_delta_t;
        
        return Math.pow(aux_delta_t, 2) * (TPConstantes.fh / 0.26);
    }

    static fator_dt_primario(num_prim) : number {
        const ff = TPPrimario.primarios[`primario-${ num_prim }`].ff;
        const delta_t = TPPrimario.primarios[`primario-${ num_prim }`].delta_t;
        
        return delta_t * ff;
    }

    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    // SECUNDARIO

    static i_a(p_va, tensao) : number {
        return p_va / tensao;
    }

    static p_va(i_a, tensao) : number {
        return i_a * tensao;
    }

    static diametro_secundario(corrente) : number {
        return Math.pow((4 * (corrente / TPConstantes.jc)) / TPConstantes.pi, 1/2);
    }

    static espira_media_sec_estatica(x) : number {
        return x * 1.3;
    }

    static espira_media_sec_magnetica(x) : number {
        return x * 1.3;
    }

    static espira_media_sec_normal(x) : number {
        return x * 1.3;
    }

    static espira_media_sec(od, id ,h) : number {
        return ((od - id) + (2 * h)) / 1000
    }

    static sec_basico_ns(num_sec) : number { 
        const basico_vs = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_vs;

        return Math.round((basico_vs / (4.44 * TPConstantes.bmax * TPConstantes.frequencia * TPConstantes.nucleo_area_cm2 * 0.0001 * 0.98)) * TPConstantes.fp);
    }

    static sec_area_fio_mm2(num_sec) : number { 
        const diam_fio = TPSecundario.secundarios[`secundario-${ num_sec }`].diam_fio;
        
        return TPConstantes.pi * Math.pow(diam_fio / 2, 2);
    }

    static sec_basico_comprimento_fio_total(num_sec) : number { 
        const basico_ns = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_ns;

        return basico_ns * TPConstantes.espira_media_sec;
    }

    static sec_basico_resistencia_ohm(num_sec) : number { 
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;
        const basico_comprimento_fio_total = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_comprimento_fio_total;

        return (basico_comprimento_fio_total / area_fio_mm2) * 0.0175;
    }

    static sec_d_a_mm2(num_sec) : number { 
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;
        const corrente = TPSecundario.secundarios[`secundario-${ num_sec }`].corrente;

        return corrente / area_fio_mm2;
    }

    static sec_basico_perda_w(num_sec) : number { 
        const corrente = TPSecundario.secundarios[`secundario-${ num_sec }`].corrente;
        const basico_resistencia_ohm = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_resistencia_ohm;

        return basico_resistencia_ohm * Math.pow(corrente, 2);
    }

    static sec_s(num_sec) : number { 
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;
        const corrente = TPSecundario.secundarios[`secundario-${ num_sec }`].corrente;

        return corrente / area_fio_mm2;
    }

    static sec_delta_t(num_sec) : number { 
        const s = TPSecundario.secundarios[`secundario-${ num_sec }`].s;

        return Math.pow(s, 2) * (TPConstantes.fh / 0.26);
    }

    static sec_corrigido_ns(num_sec) : number { 
        const basico_ns = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_ns;

        return Math.round((basico_ns / TPConstantes.fp) * TPConstantes.diferenca);
    }
    
    static sec_corrigido_vs(num_sec) : number { 
        const ns_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_ns;

        return (4.44 * TPConstantes.bmax * TPConstantes.frequencia * TPConstantes.nucleo_area_cm2 * 0.0001 * 0.98 * ns_corrigido);
    }

    static sec_corrigido_reg(num_sec) : number { 
        const basico_vs = TPSecundario.secundarios[`secundario-${ num_sec }`].basico_vs;
        const vs_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_vs;
        
        return ((vs_corrigido * 100) / basico_vs) - 100;
    }

    static sec_corrigido_ff(num_sec) : number { 
        const ns_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_ns;
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;

        return (100 * (area_fio_mm2 * ns_corrigido) / TPConstantes.nucleo_area_interna);
    }

    static sec_corrigido_comprimento_total(num_sec) : number { 
        const ns_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_ns;
        
        return ns_corrigido * TPConstantes.espira_media_sec;
    }

    static sec_corrigido_resistencia_ohm(num_sec) : number { 
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;
        const comprimento_total_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_comprimento_total;

        return (comprimento_total_corrigido / area_fio_mm2) * 0.0175;
    }

    static sec_corrigido_perda_w(num_sec) : number { 
        const corrente = TPSecundario.secundarios[`secundario-${ num_sec }`].corrente;
        const resistencia_ohm_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_resistencia_ohm;

        return resistencia_ohm_corrigido * Math.pow(corrente, 2);
    }

    static sec_corrigido_fator_dt(num_sec) : number { 
        const delta_t = TPSecundario.secundarios[`secundario-${ num_sec }`].delta_t;
        const ff_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_ff;

        return ff_corrigido * delta_t;
    }

    static sec_corrigido_peso_cobre(num_sec) : number { 
        const area_fio_mm2 = TPSecundario.secundarios[`secundario-${ num_sec }`].area_fio_mm2;
        const ns_corrigido = TPSecundario.secundarios[`secundario-${ num_sec }`].corrigido_ns;

        return area_fio_mm2 * ns_corrigido * TPConstantes.espira_media_sec * 0.00933;
    }

    /* ----------------------------------------------------------------------------------------------------------------------- */
    
    // FUNCIONALIDADES

    static busca_diametro_sugerido(diametro_calculado) : number {
        
        let nearestValue = Infinity;
        let minDiff = Infinity;

        for (const key in TPConstantes.bitolas) {
        
            const value = TPConstantes.bitolas[key];
            const diff = Math.abs(diametro_calculado - value);
        
            if (diff < minDiff && value <= diametro_calculado) {
                minDiff = diff;
                nearestValue = value;
            }
        }

        return nearestValue;
    }

    /* ----------------------------------------------------------------------------------------------------------------------- */

    // NÚCLEOS

    static x_nucleo(od, id, h) : number {
        return (((od - id) + (2 * h))) / 1000;
    }

    static area_mm2(od, id, h) : number {
        return (od - id) / 2 * h;
    }

    static area_cm2(area_mm2) : number {
        return area_mm2 / 100;
    }

    static area_interna_nuc_mm2(id) : number {
        return TPConstantes.pi * Math.pow((parseInt(id) / 2), 2);
    }

    static od_final_magnetica(od_final) : number {
        return od_final + 5;
    }

    static voltar_od_final_magnetica(od_final) : number {
        return od_final - 5;
    }

    static peso_nucleo(od, id, h) : number {
        return ((((od - id) / 2) + id) * TPConstantes.pi * ((od - id) / 2) * h * TPConstantes.densidade_aco);
    }

    static perda_nucleo(peso_nucleo) : number {
        TPConstantes.set_alfa_beta_gama();
        return peso_nucleo * TPConstantes.alfa * Math.pow(TPConstantes.frequencia, TPConstantes.beta) * Math.pow(TPConstantes.bmax, TPConstantes.gama);
    }
}
