import React from 'react';
import './style.scss'

// Icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Forms
import IconButton from '@mui/material/IconButton';

// Componente reutilizável para adicionar e remover linhas dinamicamente
const DynamicRows = ({ rows, setRows, objetoPadrao, auxiliarText, limit }) => {

    const adicionarLinha = () => {

        if (rows.length < limit) {
            const novaLinha = {
                id: rows.length + 1,
                ...objetoPadrao,
            };
            setRows([...rows, novaLinha]);
        }
    };

    const removerLinha = () => {

        if (rows.length > 1) {
            const novasRows = rows.slice(0, -1);
            setRows(novasRows);
        }
    };

    return (
        <div className='actions'>

            {auxiliarText !== '' ? (
                <h4>Número de {auxiliarText}: <span>{rows.length}</span></h4>
            ) : (
                <h4>Linhas: <span>{rows.length}</span></h4>
            )}

            <div className='buttons'>
                <IconButton color='error' onClick={removerLinha}>
                    <RemoveIcon />
                </IconButton>
                <IconButton color='success' onClick={adicionarLinha}>
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default DynamicRows;