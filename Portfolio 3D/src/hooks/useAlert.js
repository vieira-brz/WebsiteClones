import { useState } from 'react';

const useAlert = () => {
    // Define um estado para exibir alertas na interface do usuário.
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    // Função que exibe um alerta na interface do usuário com o texto e tipo especificados.
    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });

    // Função que oculta o alerta na interface do usuário, redefinindo suas propriedades para os valores padrão.
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    return { alert, showAlert, hideAlert };
};

export default useAlert;