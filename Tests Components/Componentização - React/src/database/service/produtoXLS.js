const XlsxPopulate = require("xlsx-populate");

const criaXLS = async (produto) => {
    // produto irá vir como um json já convertido para obj
    try {
        var str = produto.nucleo;
        var nucleo = str.split(" ");

        var dados = {
            //gerais
            D6: nucleo[0],
            E6: nucleo[2],
            F6: nucleo[4],
            D7: `${produto.perdas} W`,
            I6: `${produto.peso_nucleo} kg`,
            I7: `${produto.corrente} mA`,
            L6: `${produto.bmax} T`,
            L7: `${produto.frequencia} Hz`,
            C34: produto.fftotal,
            C35: `${produto.deltat} oC`,
            F34: produto.dim_finais,
            F35: produto.pot_sec,
            I35: `${produto.peso_total}Kg`,
            I36: `Blindagem: ${produto.blindagem}`,
            K34: `${produto.peso_cobre}Kg`,
            L35: produto.relacao,
            I55: `${produto.pn}`,
            D54: produto.cliente,
            K55: produto.data,
            K54: produto.elaborado_por,
            C56: produto.titulo
        };

        try {
            // Para ambiente de desenvolvimento, mudar caminho para o template no seu pc ( ou vice versa )
            const workbook = await XlsxPopulate.fromFileAsync(
                "/var/www/engenharia.toroid/Engenharia_TDB/backend/src/service/planilha_template2.xlsx"
            );
            const sheet = workbook.sheet("Transcalc");

            var arrayPrimario = produto.primarios;
            var arraySecundario = produto.secundarios;

            let chaves_primario = {
                0: "tensao",
                1: "corrente",
                2: "np",
                3: "diam_fio",
                4: "d_a_mm2",
                5: "ff",
                6: "resistencia_ohm",
                7: "peso_cobre_kg",
                8: "comprimento_fio_total",
            };

            let chaves_secundario = {
                0: "tensao",
                1: "corrente",
                2: "corrigido_vs",
                3: "corrigido_reg",
                4: "corrigido_ns",
                5: "diam_fio",
                6: "d_a_mm2",
                7: "corrigido_ff",
                8: "corrigido_resistencia_ohm",
                9: "corrigido_peso_cobre",
                10: "corrigido_comprimento_total",
            };

            const letras_primario = {
                0: "D",
                1: "E",
                2: "F",
                3: "G",
                4: "H",
                5: "I",
                6: "J",
                7: "K",
                8: "L",
                9: "M",
            };

            const letras_secundario = {
                0: "B",
                1: "C",
                2: "D",
                3: "E",
                4: "F",
                5: "G",
                6: "H",
                7: "I",
                8: "J",
                9: "K",
                10: "L",
            };


            function insereDados(
                arrayParametro,
                chaveParametro,
                objetoParametro,
                letrasParametro,
                linha,
                chave,
                num
            ) {
                for (const idx in arrayParametro[`${objetoParametro}-${linha}`]) {
                    if (idx == chaveParametro[chave]) {
                        var valor = arrayParametro[`${objetoParametro}-${linha}`][idx];
                        sheet.cell(`${letrasParametro[chave]}${linha + num}`).value(valor);
                        console.log(`${letrasParametro[chave]}${linha + num}`);
                    }
                }
            }

            for (let linha = 0; linha <= 10; linha++) {
                for (let chave = 0; chave <= 10; chave++) {
                    insereDados(
                        arrayPrimario,
                        chaves_primario,
                        `primario`,
                        letras_primario,
                        linha,
                        chave,
                        9
                    );
                    insereDados(
                        arraySecundario,
                        chaves_secundario,
                        `secundario`,
                        letras_secundario,
                        linha,
                        chave,
                        22
                    );
                }
            }

            for (const i in dados) {
                sheet.cell(i).value(dados[i]);
            }

            function numerarLinhas(sheet, coluna, linhas) {
                for (let linhaNumerada = linhas[0]; linhaNumerada <= linhas[1]; linhaNumerada++) {
                    const valorCelula = sheet.cell(`${coluna}${linhaNumerada}`).value();
                    if (valorCelula !== undefined && valorCelula !== "") {
                        // Se a célula não estiver vazia, atribuir a numeração
                        sheet.cell(`A${linhaNumerada}`).value(linhaNumerada - (linhas[0] - 1));
                    }
                }
            }

            // Chamada da função para a coluna E e linhas de 10 a 19
            numerarLinhas(sheet, 'E', [10, 19]);

            // Chamada da função para a coluna B e linhas de 23 a 33
            numerarLinhas(sheet, 'B', [23, 33]);

            //return workbook.toFileAsync('./arquivo.xlsx')

            const xls = await workbook.outputAsync();

            return xls;
        } catch (err) {
            console.log(err);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = criaXLS;