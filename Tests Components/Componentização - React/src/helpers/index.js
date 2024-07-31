// 
// Permitir apenas números, ponto e vírgula
// 
export const keyup_number = (seletor) => {

    let input = document.querySelector(`#${seletor}`);

    if (/[^0-9]/.test(input.value)) {
        input.value = input.value.replace(',', '.').replace(/[^0-9\\.]/g, "");
    }

    input.value = input.value.replace(/\s/g, "");
}

// 
// Limpar valor do input
// 
export const clear_on_focus = (seletor) => {

    let input = document.querySelector(`#${seletor}`);

    input.value = '';
}