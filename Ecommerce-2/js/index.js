// Aguarda o carregamento completo da página antes de executar o código
window.onload = () => {

    // Variáveis para elementos HTML
    let app;
    let toggler;
    let burger_menu;
    let first_section_titulo;
    let first_section_texto;
    let first_section_cta;
    let first_section_img;

    // Função para inicializar variáveis com elementos HTML
    function declare() {
        app = document.querySelector('.app');
        toggler = document.querySelector('.toggle-theme');
        burger_menu = document.querySelector('.burguer-menu');
        first_section_titulo = document.querySelector('#motion-apresentation-titulo');
        first_section_texto = document.querySelector('#motion-apresentation-texto');
        first_section_cta = document.querySelector('#motion-apresentation-cta');
        first_section_img = document.querySelector('#motion-apresentation-img');
    }

    declare();

    // Variável para rastrear o modo escuro/claro
    let dark = false;
    const main = document.querySelector('main');

    function toggleAnimation() {

        // Inverte o valor de 'dark' (alternância entre escuro e claro)
        dark = !dark;
        localStorage.setItem('theme', dark ? 'dark' : 'light');

        // Clona o elemento 'app'
        let clone_app = app.cloneNode(true);

        // Remover/adicionar classes com base no modo escuro ou claro
        if (dark) {
            clone_app.classList.remove('light');
            clone_app.classList.add('dark');
        } else {
            clone_app.classList.remove('dark');
            clone_app.classList.add('light');
        }

        // Adiciona a classe 'copy' ao clone
        clone_app.classList.add('copy');

        // Adiciona o clone como filho do elemento 'main'
        main.appendChild(clone_app);

        clone_app.addEventListener('animationend', () => {

            // Quando a animação do clone terminar:
            // Remove o elemento 'app' original
            app.remove();

            // Remove a classe 'copy' do clone
            clone_app.classList.remove("copy");

            declare();

            // Chama a função para configurar eventos novamente
            events();
        });
    }

    // Função para configurar eventos
    function events() {

        // Adiciona evento de clique ao 'toggler' (botão de alternância)
        toggler.addEventListener('click', toggleAnimation);

        // Adiciona evento de clique ao 'burguer menu' (botão de abrir menu)
        burger_menu.addEventListener('click', () => {
            app.classList.toggle('active');
        });

        // Animações Carregamento da Tela
        first_section_titulo.style.opacity = 1;
        first_section_titulo.style.marginTop = '0%';
        first_section_titulo.style.color = 'var(--mainText)';

        first_section_texto.style.opacity = 1;
        first_section_texto.style.marginTop = '0%';

        first_section_cta.style.opacity = 1;
        first_section_cta.style.marginTop = '0%';

        first_section_img.style.opacity = 1;
    }

    events();

    // Verificar se a preferência do tema foi salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        app.classList.add('dark');
        dark = true;
    }

    // Criar um intervalo para alternar automaticamente o tema duas vezes
    localStorage.setItem('animacao-inicial-carregada', 'true');

    if (localStorage.getItem('animacao-inicial-carregada') != 'true') {

        let contagem_toggler_clicado = 0;
        let invervalo_toggler_click_event = setInterval(() => {

            var eventoClique = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            });

            // Despachar evento de clique no elemento 'toggler'
            toggler.dispatchEvent(eventoClique);

            contagem_toggler_clicado++;

            if (contagem_toggler_clicado == 2) {
                clearInterval(invervalo_toggler_click_event);
            }
        }, 1000); // A cada 1000 milissegundos (1 segundo)
    }
};
