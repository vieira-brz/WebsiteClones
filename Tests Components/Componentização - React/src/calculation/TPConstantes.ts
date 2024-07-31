import { TPCalculos } from "./calculation/TPCalculos";
import { TPPrimario } from "./calculation/TPPrimario";
import { TPResultados } from "./calculation/TPResultados";
import { TPSecundario } from "./calculation/TPSecundario";

type Aplicacao = 'Áudio' | 'Medicina' | 'Odonto' | 'Telecom' | 'Alta Frequência' | 'Outros';
type TipoPrimario = 'paralelo' | 'serie';

export type TipoNucleo = 'especial' | 'padrao';
export type TipoBlindagem = 'estatica' | 'magnetica' | 'normal' | 'estatica e magnetica';
export type Maquinas = 'X' | 'Jovil (2)' | 'Jovil' | 'Ruff Slider Média' | 'Ruff Média' | 'Ruff Média Grande' | 'Ruff Grande' | 'Ruff Grande (1)' | 'Ruff Slider (9)';

export class TPConstantes {

    // Dados de entrada
    static aplicacao : Aplicacao = 'Outros';
    static bmax = 1.45;
    static frequencia = 60;
    static tipo_primario : TipoPrimario = 'paralelo';
    static numero_primarios = 2;
    static numero_secundarios = 1;
    static delta_t = 50;

    // Constantes base
    static densidade_aco = 0.00000765;
    static alfa = 0;
    static beta = 0;
    static gama = 0;

    static pi = 3.1416;
    static fh = 0;
    static fp = 0;
    static jc = 0;

    static bitolas = {
        '4/0': 11.86,
        '3/0': 10.4,
        '2/0': 9.23,
        '1/0': 8.25,

        '1': 7.35, '2': 6.54, '3': 5.83, '4': 5.19, '5': 4.62, '6': 4.12, '7': 3.67, '8': 3.26, '9': 2.91, '10': 2.59,
        '11': 2.31,'12': 2.05,'13': 1.83,'14': 1.63,'15': 1.45,'16': 1.29,'17': 1.15,'18': 1.02,'19': 0.91,'20': 0.81,
        '21': 0.72,'22': 0.64,'23': 0.57,'24': 0.51,'25': 0.45,'26': 0.40,'27': 0.36,'28': 0.32,'29': 0.29,'30': 0.25,
        '31': 0.23,'32': 0.20,'33': 0.18,'34': 0.16,'35': 0.14,'36': 0.13,'37': 0.11,'38': 0.10,'39': 0.09,'40': 0.08,
        '41': 0.07,'42': 0.06,'43': 0.06,'44': 0.05
    };

    static ffmax = {
        15: {
            'normal': 12,
            'magnetica': 0,
            'estatica': 0,
        },
        20: {
            'normal': 16,
            'magnetica': 0,
            'estatica': 0,
        },
        25: {
            'normal': 18,
            'magnetica': 0,
            'estatica': 0,
        },
        30: {
            'normal': 16,
            'magnetica': 12,
            'estatica': 12,
        },
        40: {
            'normal': 22,
            'magnetica': 17,
            'estatica': 17,
        },
        50: {
            'normal': 25,
            'magnetica': 22,
            'estatica': 22,
        },
        60: {
            'normal': 27,
            'magnetica': 24,
            'estatica': 24,
        },
        70: {
            'normal': 28,
            'magnetica': 25,
            'estatica': 25,
        },
        80: {
            'normal': 30,
            'magnetica': 26,
            'estatica': 26,
        },
        90: {
            'normal': 30,
            'magnetica': 28,
            'estatica': 28,
        },
        100: {
            'normal': 30,
            'magnetica': 28,
            'estatica': 28,
        },
    }

    static potencia_total = 0;

    // Núcleo
    static nucleo_tipo : TipoNucleo = 'padrao';
    static nucleo_blindagem : TipoBlindagem = 'normal';
    
    static nucleo_od = 0;
    static nucleo_od_final = 0;
    static nucleo_id = 0;
    static nucleo_h = 0;
    static nucleo_h_final = 0;

    static nucleo_area_cm2 = 0;
    static nucleo_area_interna = 0;

    static nucleo_ff_total = 0;
    static nucleo_delta_t = 0;
    static nucleo_perda = 0;

    static nucleo_maquina_sugerida : Maquinas = 'X';
    static nucleo_cap = '';

    // Primário e Secundário
    static espira_media_prim = 0;
    static prim_ff_total = 0;
    static prim_peso_cobre_total = 0;
    static prim_perda_w_total = 0;
    static prim_delta_t_total = 0;
    static prim_fator_dt_total = 0;
    
    static espira_media_sec = 0;
    static sec_perda_w_total = 0;
    static sec_ff_total = 0;
    static sec_delta_t_total = 0;
    static sec_corrigido_perda_total = 0;
    static sec_corrigido_fator_dt_total = 0;
    static sec_corrigido_peso_cobre_total = 0;

    // Cálculos Gerais
    static perda_total = 0;
    static peso_nucleo = 0;
    static max_ipo = 0;
    static diferenca_p = 0;
    static diferenca = 0;

    static delta_t_final = 0;

    static ff_prim = 0;
    static ff_sec = 0;
    static ff_total = 0;
    static ff_max = 0;
    
    static perda_cobre_total = 0;
    static perda_geral_trafo = 0;
    static eficiencia_p = 0;
    static peso_total_cobre = 0;
    static peso_total_trafo = 0;
    static rel_volt_espira = 0;

    /* ----------------------------------------------------------------------------------------------------------------------- */

    static set_alfa_beta_gama() : void {

        if (TPConstantes.bmax <= 1.5) {
            TPConstantes.alfa = 0.00075;
            TPConstantes.beta = 1.6;
            TPConstantes.gama = 1.86;
        }
        else {
            TPConstantes.alfa = 0.00057;
            TPConstantes.beta = 1.54;
            TPConstantes.gama = 3.2;
        }
    }

    static set_fh() : void {
        TPConstantes.fh = 0;
        if (TPConstantes.potencia_total < 15) { TPConstantes.fh = 0.5; }
        else if (TPConstantes.potencia_total < 30) { TPConstantes.fh = 0.6; }
        else if (TPConstantes.potencia_total < 100) { TPConstantes.fh = 0.7; }
        else if (TPConstantes.potencia_total < 300) { TPConstantes.fh = 1.0; }
        else if (TPConstantes.potencia_total < 500) { TPConstantes.fh = 1.2; }
        else if (TPConstantes.potencia_total < 800) { TPConstantes.fh = 1.4; }
        else if (TPConstantes.potencia_total < 1000) { TPConstantes.fh = 1.5; }
        else if (TPConstantes.potencia_total < 1500) { TPConstantes.fh = 1.6; }
        else { TPConstantes.fh = 1.7; }
    }

    static set_fp() : void {
        TPConstantes.fp = 0;
        if (TPConstantes.potencia_total < 15) { TPConstantes.fp = 1.22; }
        else if (TPConstantes.potencia_total < 35) { TPConstantes.fp = 1.15; }
        else if (TPConstantes.potencia_total < 70) { TPConstantes.fp = 1.0; }
        else if (TPConstantes.potencia_total < 120) { TPConstantes.fp = 1.08; }
        else if (TPConstantes.potencia_total < 180) { TPConstantes.fp = 1.068; }
        else if (TPConstantes.potencia_total < 250) { TPConstantes.fp = 1.05; }
        else if (TPConstantes.potencia_total < 500) { TPConstantes.fp = 1.04; }
        else if (TPConstantes.potencia_total < 1000) { TPConstantes.fp = 1.03; }
        else { TPConstantes.fp = 1.025; }
    }

    static set_jc() : void {
        TPConstantes.jc = TPCalculos.jc();
    }

    static calcula_perdas_e_diferencas() : void {
        TPConstantes.perda_total = TPCalculos.perda_total(); 
        TPConstantes.diferenca_p = TPCalculos.diferenca_p(); 
        TPConstantes.diferenca = TPCalculos.diferenca(); 
    }

    static valores_finais() : void {
        TPConstantes.ff_total = TPCalculos.total_ff();
        TPConstantes.ff_max = TPCalculos.total_ff_max();
        TPConstantes.perda_cobre_total = TPCalculos.total_perda_cobre();
        TPConstantes.perda_geral_trafo = TPCalculos.total_perda_geral_trafo();
        TPConstantes.eficiencia_p = TPCalculos.total_eficiencia();
        TPConstantes.peso_total_cobre = TPCalculos.total_peso_cobre();
        TPConstantes.peso_total_trafo = TPCalculos.total_peso_trafo();
        TPConstantes.rel_volt_espira = TPCalculos.total_rel_volt_espira();
        TPConstantes.delta_t_final = TPCalculos.delta_t_final();

        $('[name="nucleo-ff-total"]').text(TPConstantes.ff_total);
        $('[name="nucleo-delta-t"]').text(TPConstantes.delta_t_final);
    }

    static atualiza_dados(auto_select) : void {
        TPPrimario.atualiza_dados(auto_select);
        TPSecundario.atualiza_dados(auto_select);
        TPConstantes.valores_finais();
        TPResultados.atualiza_resultados();
    }
}