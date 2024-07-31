// Select The Elements
var toggle_btn;         // Declaração da variável toggle_btn para armazenar o botão de alternância.
var big_wrapper;        // Declaração da variável big_wrapper para armazenar um contêiner grande.
var hamburger_menu;     // Declaração da variável hamburger_menu para armazenar um menu de hambúrguer.

function declare() {
    // Função declare() é definida para inicializar as variáveis com elementos HTML.
    toggle_btn = document.querySelector(".toggle-btn");   // Obtém o botão de alternância pelo seletor de classe ".toggle-btn".
    big_wrapper = document.querySelector(".big-wrapper"); // Obtém o contêiner grande pelo seletor de classe ".big-wrapper".
    hamburger_menu = document.querySelector(".hamburger-menu"); // Obtém o menu de hambúrguer pelo seletor de classe ".hamburger-menu".
}

const main = document.querySelector("main"); // Obtém o elemento "main" do documento.

declare(); // Chama a função declare() para inicializar as variáveis com elementos HTML.

let dark = false; // Inicializa uma variável "dark" como falsa.

function toggleAnimation() {
    // Função toggleAnimation() é definida para alternar a animação.

    // Inverte o valor da variável "dark" (de verdadeiro para falso ou vice-versa).
    dark = !dark;

    // Clona o elemento "big_wrapper".
    let clone = big_wrapper.cloneNode(true);

    if (dark) {
        // Se "dark" for verdadeiro, remove a classe "light" e adiciona a classe "dark".
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        // Se "dark" for falso, remove a classe "dark" e adiciona a classe "light".
        clone.classList.remove("dark");
        clone.classList.add("light");
    }

    // Adiciona a classe "copy" ao clone.
    clone.classList.add("copy");

    // Adiciona o clone como um filho do elemento "main".
    main.appendChild(clone);

    // Adiciona a classe "stop-scrolling" ao corpo do documento para evitar rolagem durante a animação.
    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        // Quando a animação do clone terminar:

        // Remove a classe "stop-scrolling" do corpo do documento para permitir a rolagem.
        document.body.classList.remove("stop-scrolling");

        // Remove o elemento "big_wrapper" original.
        big_wrapper.remove();

        // Remove a classe "copy" do clone.
        clone.classList.remove("copy");

        // Reinicializa as variáveis com os elementos HTML atualizados.
        declare();

        // Adiciona os eventos novamente.
        events();
    });
}

function events() {
    // Define eventos para os elementos.

    // Adiciona um evento de clique ao botão de alternância que chama toggleAnimation().
    toggle_btn.addEventListener("click", toggleAnimation);

    // Adiciona um evento de clique ao menu de hambúrguer que ativa/desativa a classe "active" no "big_wrapper".
    hamburger_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events(); // Chama a função events() para configurar os eventos iniciais.
