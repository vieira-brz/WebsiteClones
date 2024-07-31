// import $ from 'jquery';
import { TPCalculos } from "./calculation/TPCalculos";
import { TPConstantes } from "./calculation/TPConstantes";
import { TipoBlindagem, Maquinas } from './calculation/TPConstantes';

interface MedidaFinalEMaquina {
    od_final: number,
    h_final: number,
    maq_principal: string,
    maq_alternativa: string,
    cap: string,
}

interface Nucleo {
    nucleo : string;
    od : number | string | null;
    id : number | string | null;
    h : number | string | null;
    area_mm2 : number | string | null;
    area_cm2 : number | string | null;
    area_interna_nuc_mm2 : number | string | null;
    espira_media_prim : number | string | null;
    espira_media_sec_estatica : number | string | null;
    x : number | string | null;
    od_final : number | string | null;
    od_final_magnetica : number | string | null;
    h_final : number | string | null;
    maq_principal : string | string | null;
    maq_alternativa : string | string | null;
    peso_nucleo : number | string | null;
    perda_nucleo : number | string | null;
    cap : number | string | null;
}

interface Nucleos {
    [key : number] : Nucleo
}

export class AUXNucleos {
    
    static nucleos : Nucleos;

    /* ----------------------------------------------------------------------------------------------------------------------- */

    static init() : void {

        AUXNucleos.nucleos = {
            0: {
                'nucleo': '50 x 30 x 10',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            1: {
                'nucleo': '50 x 30 x 20',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            2: {
                'nucleo': '50 x 30 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            3: {
                'nucleo': '60 x 40 x 20',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            4: {
                'nucleo': '60 x 40 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            5: {
                'nucleo': '60 x 40 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            6: {
                'nucleo': '70 x 40 x 20',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            7: {
                'nucleo': '70 x 40 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            8: {
                'nucleo': '70 x 40 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            9: {
                'nucleo': '80 x 50 x 20',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            10: {
                'nucleo': '80 x 50 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            11: {
                'nucleo': '80 x 50 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            12: {
                'nucleo': '80 x 50 x 35',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            13: {
                'nucleo': '80 x 50 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            14: {
                'nucleo': '85 x 50 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            15: {
                'nucleo': '85 x 50 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            16: {
                'nucleo': '85 x 50 x 35',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            17: {
                'nucleo': '85 x 50 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            18: {
                'nucleo': '100 x 60 x 20',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            19: {
                'nucleo': '100 x 60 x 25',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            20: {
                'nucleo': '100 x 60 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            21: {
                'nucleo': '100 x 60 x 35',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            22: {
                'nucleo': '100 x 60 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            23: {
                'nucleo': '110 x 70 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            24: {
                'nucleo': '110 x 70 x 35',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            25: {
                'nucleo': '110 x 70 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            26: {
                'nucleo': '110 x 70 x 50',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            27: {
                'nucleo': '110 x 70 x 60',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            28: {
                'nucleo': '120 x 70 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            29: {
                'nucleo': '120 x 70 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            30: {
                'nucleo': '120 x 70 x 50',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            31: {
                'nucleo': '145 x 80 x 30',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            32: {
                'nucleo': '145 x 80 x 35',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            33: {
                'nucleo': '145 x 80 x 40',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            34: {
                'nucleo': '145 x 80 x 50',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            35: {
                'nucleo': '145 x 80 x 60',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            },
            36: {
                'nucleo': '200 x 80 x 50',
                'od': null,
                'id': null,
                'h': null,
                'area_mm2': null,
                'area_cm2': null,
                'area_interna_nuc_mm2': null,
                'espira_media_prim': null,
                'espira_media_sec_estatica': null,
                'x': null,
                'od_final': null,
                'od_final_magnetica': null,
                'h_final': null,
                'maq_principal': null,
                'maq_alternativa': null,
                'peso_nucleo': null,
                'perda_nucleo': null,
                'cap': null,
            }
        }

        // Varredura atribuindo valores null
        for (const key in AUXNucleos.nucleos) {
            
            const nucleo = AUXNucleos.nucleos[key];
            nucleo.od = parseInt(nucleo.nucleo.split(' x ')[0]);
            nucleo.id = parseInt(nucleo.nucleo.split(' x ')[1]);
            nucleo.h = parseInt(nucleo.nucleo.split(' x ')[2]);

            nucleo.x = TPCalculos.x_nucleo(nucleo.od, nucleo.id, nucleo.h);

            nucleo.area_mm2 = TPCalculos.area_mm2(nucleo.od, nucleo.id, nucleo.h);
            nucleo.area_cm2 = TPCalculos.area_cm2(nucleo.area_mm2);
            nucleo.area_interna_nuc_mm2 = TPCalculos.area_interna_nuc_mm2(nucleo.id);
            
            nucleo.espira_media_prim = TPCalculos.espira_media_primario(nucleo.od, nucleo.id, nucleo.h);
            nucleo.espira_media_sec_estatica = TPCalculos.espira_media_sec_estatica(nucleo.x);
            // nucleo.espira_media_sec_magnetica = TPCalculos.espira_media_sec_magnetica(nucleo.x);
            
            const verificacao : MedidaFinalEMaquina = AUXNucleos.verifica_medida_final_e_maquina(nucleo.nucleo);

            nucleo.od_final = verificacao.od_final;
            nucleo.od_final_magnetica = TPCalculos.od_final_magnetica(nucleo.od_final);
            nucleo.h_final = verificacao.h_final;

            nucleo.cap = verificacao.cap;
            
            nucleo.maq_principal = verificacao.maq_principal;
            nucleo.maq_alternativa = verificacao.maq_alternativa;
            
            nucleo.peso_nucleo = TPCalculos.peso_nucleo(nucleo.od, nucleo.id, nucleo.h);
            nucleo.perda_nucleo = TPCalculos.perda_nucleo(nucleo.peso_nucleo);
        }
    }


    static verifica_medida_final_e_maquina(nucleo) : MedidaFinalEMaquina {

        const od = parseInt(nucleo.split(' x ')[0]);
        const id = parseInt(nucleo.split(' x ')[1]);
        const h = parseInt(nucleo.split(' x ')[2]);

        const obj : MedidaFinalEMaquina = {
            od_final: od,
            h_final: h,
            maq_principal: '',
            maq_alternativa: '',
            cap: '',
        };

    
        // máquinas e medidas finais 
        if (od <= 50 && h >= 10 && h <= 30) {
            obj.od_final += 10;
            obj.h_final += 16;
            obj.maq_principal = 'Jovil (2)';
            obj.maq_alternativa = 'Ruff Slider (9)';
        }
        else if (od <= 60 && h >= 10 && h <= 40) {
            obj.od_final += 12;
            obj.h_final += 17;
            obj.maq_principal = 'Jovil';
            obj.maq_alternativa = 'Ruff Slider';
        }
        else if (od <= 70 && h >= 10 && h <= 40) {
            obj.od_final += 14;
            obj.h_final += 18;
            obj.maq_principal = 'Jovil';
            obj.maq_alternativa = 'Ruff Slider';
        }
        else if (od <= 80 && h >= 10 && h <= 50) {
            obj.od_final += 15;
            obj.h_final += 20;
            obj.maq_principal = 'Jovil';
            obj.maq_alternativa = 'Ruff Slider';
        }
        else if (od <= 85 && h >= 10 && h <= 50) {
            obj.od_final += 15;
            obj.h_final += 20;
            obj.maq_principal = 'Jovil';
            obj.maq_alternativa = 'Ruff Slider';
        }
        else if (od <= 90 && h >= 15 && h <= 50) {
            obj.od_final += 17;
            obj.h_final += 22;
            obj.maq_principal = 'Ruff Slider Média';
            obj.maq_alternativa = 'Ruff Média (7)';
        }
        else if (od <= 100 && h >= 15 && h <= 60) {
            obj.od_final += 19;
            obj.h_final += 23;
            obj.maq_principal = 'Ruff Slider Média';
            obj.maq_alternativa = 'Ruff Média';
        }
        else if (od <= 110 && h >= 20 && h <= 70) {
            obj.od_final += 20;
            obj.h_final += 24;
            obj.maq_principal = 'Ruff Slider Média';
            obj.maq_alternativa = 'Ruff Média';
        }
        else if (od <= 120 && h >= 20 && h <= 70) {
            obj.od_final += 21;
            obj.h_final += 25;
            obj.maq_principal = 'Ruff Média';
            obj.maq_alternativa = 'Ruff Grande (1)';
        }
        else if (od <= 145 && h >= 20 && h <= 80) {
            obj.od_final += 25;
            obj.h_final += 30;
            obj.maq_principal = 'Ruff Média Grande';
            obj.maq_alternativa = 'Ruff Grande';
        }
        else if (od <= 160 && h >= 20 && h <= 80) {
            obj.od_final += 30;
            obj.h_final += 35;
            obj.maq_principal = 'Ruff Média Grande';
            obj.maq_alternativa = '';
        }
        else if (od <= 180 && h >= 20 && h <= 80) {
            obj.od_final += 35;
            obj.h_final += 40;
            obj.maq_principal = 'Ruff Média Grande';
            obj.maq_alternativa = '';
        }
        else if (od > 180 && h >= 20 && h <= 80) {
            obj.od_final += 40;
            obj.h_final += 45;
            obj.maq_principal = 'Ruff Média Grande';
            obj.maq_alternativa = '';
        } 
        else { 
            obj.maq_principal = '-';
            obj.maq_alternativa = '-'; 
        }
        

        // cap
        if (od == 60 && id == 40) {
            obj.cap = 'CA02';
        }
        else if (od == 70 && id == 40) {
            obj.cap = 'CA03';
        }
        else if (od == 80 && id == 50) {
            obj.cap = 'CA04';
        }
        else if (od == 100 && id == 60) {
            obj.cap = 'CA05';
        }
        else if (od == 110 && id == 70) {
            obj.cap = 'CA06';
        }
        else if (od == 120 && id == 70) {
            obj.cap = 'CA07';
        }
        else if (od == 145 && id == 80) {
            obj.cap = 'CA08';
        }
        else if (od == 160 && id == 90) {
            obj.cap = 'CA09';
        }
        else { obj.cap = '-'; }

        return obj;
    }
}