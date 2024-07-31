import { TPCalculos } from "./calculation/TPCalculos.ts";
import { TPConstantes } from "./calculation/TPConstantes.ts";

export class TPSecundario {

    static tensao = 0;
    static corrente = 0;
    static potencia = 0;
    static i_a = 0;
    static p_va = 0;

    static secundarios = {};

    /* ----------------------------------------------------------------------------------------------------------------------- */

    static init() {

        // loop para criar as chaves dinâmicas do objeto secundarios
        for (let i = 1; i <= 10; i++) {

            // cria uma nova chave dinâmica com a sintaxe `sec${i}`
            TPSecundario.secundarios[`secundario-${i}`] = {
                tensao: 0,
                corrente: 0,
                potencia: 0,
                bitola_escolhida: 0,
                basico_vs: 0,
                basico_ns: 0,
                diam_fio: 0,
                area_fio_mm2: 0,
                basico_comprimento_fio_total: 0,
                basico_resistencia_ohm: 0,
                d_a_mm2: 0,
                basico_perda_w: 0,
                s: 0,
                delta_t: 0,
                corrigido_ns: 0,
                corrigido_vs: 0,
                corrigido_reg: 0,
                corrigido_ff: 0,
                corrigido_comprimento_total: 0,
                corrigido_resistencia_ohm: 0,
                corrigido_perda_w: 0,
                corrigido_fator_dt: 0,
                corrigido_peso_cobre: 0,
            };
        }
    }

    static calcula_resultado(num_sec, preenchido) {

        if (preenchido != '') {
            // calculando i(a) e p(va)
            if (preenchido == 'corrente') {

                TPSecundario.i_a = TPSecundario.corrente;
                TPSecundario.p_va = p_va(TPSecundario.i_a, TPSecundario.tensao);
            } else {

                TPSecundario.p_va = TPSecundario.potencia;
                TPSecundario.i_a = i_a(TPSecundario.p_va, TPSecundario.tensao);
            }

            // atribuindo resultados ao array secundarios
            TPSecundario.secundarios[`secundario-${num_sec}`].corrente = TPSecundario.i_a;
            TPSecundario.secundarios[`secundario-${num_sec}`].potencia = TPSecundario.p_va;

            // imprimindo resultados
            // (você pode usar console.log para depuração)
            console.log(`Resultado para secundario-${num_sec}: Corrente = ${TPSecundario.i_a}, Potencia = ${TPSecundario.p_va}`);

            TPSecundario.atualiza_dados();
        }
    }


    static calcula_diametros(): void {

        let diametro_calculado = 0;
        for (let i = 1; i <= TPConstantes.numero_secundarios; i++) {

            const corrente: number = parseFloat($('#dados-resultado').find(`#result-for-sec-${i}`).find('[name="resultado-i-a"]').text());

            // calculando diametro            
            diametro_calculado = TPCalculos.diametro_secundario(corrente);

            $('#diam-secundario').find(`#diam-secundario-${i}`).find(`[name="calculado-sec"]`).text(diametro_calculado);

            if (diametro_calculado < 12) {

                // sugerindo um diametro
                let diametro_sugerido = 0;
                diametro_sugerido = TPCalculos.busca_diametro_sugerido(diametro_calculado);

                $('#diam-secundario').find(`#diam-secundario-${i}`).find(`[name="sugerido-sec"]`).text(diametro_sugerido);

                // auto-selecionando o diametro com base no sugerido
                for (const prop in TPConstantes.bitolas) {
                    if (TPConstantes.bitolas[prop] == diametro_sugerido) {

                        TPSecundario.secundarios[`secundario-${i}`].bitola_escolhida = TPConstantes.bitolas[prop];

                        $('#diam-secundario').find(`#diam-secundario-${i}`).find('.opcoes-bitolas-sec').val(prop);
                    }
                }
            }
            // else { throw new Error("Diâmetro primário calculado maior que 12"); }
        }
    }


    static atualiza_dados(auto_select = true): void {

        // somando p(va) 
        TPConstantes.potencia_total = Object.keys(TPSecundario.secundarios).reduce((acc, key) => acc + TPSecundario.secundarios[key].potencia, 0);


        // imprimindo potencia total
        $('#dados-resultado').find('[name="resultado-pot-total-va"]').text(TPConstantes.potencia_total);


        // setando fh - fp - jc
        TPConstantes.set_fh();
        TPConstantes.set_fp();
        TPConstantes.set_jc();


        // verificando se é necessário auto-selecionar o diâmetro
        if (auto_select) {
            TPSecundario.calcula_diametros();
        }

        // setando dados dos cálculos gerais

        // secundario basico
        let sec_perda_w_total = 0;
        let sec_delta_t_total = 0;

        for (let i = 1; i <= TPConstantes.numero_secundarios; i++) {

            TPSecundario.secundarios[`secundario-${i}`].basico_vs = TPSecundario.secundarios[`secundario-${i}`].tensao;
            TPSecundario.secundarios[`secundario-${i}`].basico_ns = TPCalculos.sec_basico_ns(i);
            TPSecundario.secundarios[`secundario-${i}`].diam_fio = TPSecundario.secundarios[`secundario-${i}`].bitola_escolhida;
            TPSecundario.secundarios[`secundario-${i}`].area_fio_mm2 = TPCalculos.sec_area_fio_mm2(i);
            TPSecundario.secundarios[`secundario-${i}`].basico_comprimento_fio_total = TPCalculos.sec_basico_comprimento_fio_total(i);
            TPSecundario.secundarios[`secundario-${i}`].basico_resistencia_ohm = TPCalculos.sec_basico_resistencia_ohm(i);
            TPSecundario.secundarios[`secundario-${i}`].d_a_mm2 = TPCalculos.sec_d_a_mm2(i);
            TPSecundario.secundarios[`secundario-${i}`].basico_perda_w = TPCalculos.sec_basico_perda_w(i);
            TPSecundario.secundarios[`secundario-${i}`].s = TPCalculos.sec_s(i);
            TPSecundario.secundarios[`secundario-${i}`].delta_t = TPCalculos.sec_delta_t(i);

            sec_perda_w_total += TPSecundario.secundarios[`secundario-${i}`].basico_perda_w;
            sec_delta_t_total += TPSecundario.secundarios[`secundario-${i}`].delta_t;
        }

        TPConstantes.sec_perda_w_total = sec_perda_w_total;
        TPConstantes.sec_delta_t_total = Math.round(sec_delta_t_total);
        TPConstantes.calcula_perdas_e_diferencas();


        // secundario corrigido
        let sec_ff_total = 0;
        let sec_corrigido_perda_total = 0;
        let sec_corrigido_fator_dt_total = 0;
        let sec_corrigido_peso_cobre_total = 0;

        for (let i = 1; i <= TPConstantes.numero_secundarios; i++) {

            TPSecundario.secundarios[`secundario-${i}`].corrigido_ns = TPCalculos.sec_corrigido_ns(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_vs = TPCalculos.sec_corrigido_vs(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_reg = TPCalculos.sec_corrigido_reg(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_ff = TPCalculos.sec_corrigido_ff(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_comprimento_total = TPCalculos.sec_corrigido_comprimento_total(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_resistencia_ohm = TPCalculos.sec_corrigido_resistencia_ohm(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_perda_w = TPCalculos.sec_corrigido_perda_w(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_fator_dt = TPCalculos.sec_corrigido_fator_dt(i);
            TPSecundario.secundarios[`secundario-${i}`].corrigido_peso_cobre = TPCalculos.sec_corrigido_peso_cobre(i);

            sec_ff_total += TPSecundario.secundarios[`secundario-${i}`].corrigido_ff;
            sec_corrigido_perda_total += TPSecundario.secundarios[`secundario-${i}`].corrigido_perda_w;
            sec_corrigido_fator_dt_total += TPSecundario.secundarios[`secundario-${i}`].corrigido_fator_dt;
            sec_corrigido_peso_cobre_total += TPSecundario.secundarios[`secundario-${i}`].corrigido_peso_cobre;
        }

        TPConstantes.sec_ff_total = sec_ff_total;
        TPConstantes.sec_corrigido_perda_total = sec_corrigido_perda_total;
        TPConstantes.sec_corrigido_fator_dt_total = sec_corrigido_fator_dt_total;
        TPConstantes.sec_corrigido_peso_cobre_total = sec_corrigido_peso_cobre_total;
    }
}