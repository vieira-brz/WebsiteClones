import React, { useState } from 'react';
import './style.scss';
import AplicacaoSelect from './select/Aplicacao';
import BmaxSelect from './select/Bmax';
import TipoPrimarioSelect from './select/TipoPrimario';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import FilterDramaOutlinedIcon from '@mui/icons-material/FilterDramaOutlined';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { keyup_number } from '../../helpers';

const Sidebar = () => {
    const [bmax, setBmax] = useState('1.45');

    const handleAplicacaoChange = (aplicacao) => {

        switch (aplicacao) {

            case 'alta frequência':
                setBmax('0.80');
                break;

            case 'medicina':
                setBmax('1.45');
                break;

            case 'odonto':
                setBmax('1.40');
                break;

            case 'telecom':
                setBmax('1.45');
                break;

            case 'áudio':
                setBmax('1.25');
                break;

            default:
                setBmax('1.45');
                break;
        }
    };

    const handleBmaxChange = (value) => {
        setBmax(value);
    };

    return (
        <div className='sidebar'>
            <ul className='contents'>
                <li className='content-fields' id="dados-entrada">
                    <div className='header'>
                        <div className='icon'><SettingsIcon /></div>
                        <div className='title'>Dados de entrada</div>
                    </div>

                    <ul className='fields'>
                        <li className='field'>
                            <div className='content'>
                                <AplicacaoSelect onSelectChange={handleAplicacaoChange} onBmaxChange={handleBmaxChange} />
                            </div>
                        </li>
                        <li className='field'>
                            <div className='content'>
                                <BmaxSelect onSelectChange={(value) => console.log(`Bmax changed to ${value}`)} onBmaxChange={handleBmaxChange} initialValue={bmax} />
                            </div>
                        </li>
                        <li className='field'>
                            <div className='content'>
                                <TextField type="search" id="frequencia-input" name="entrada-frequencia" label="Frequência" variant="outlined" size="small" defaultValue="60" onKeyUp={() => keyup_number("frequencia-input")} />
                            </div>
                        </li>
                        <li className='field'>
                            <div className='content'>
                                <TipoPrimarioSelect onSelectChange={(value) => console.log(`Tipo de Primário changed to ${value}`)} />
                            </div>
                        </li>
                        <li className='field'>
                            <div className='content'>
                                <TextField type="search" id="deltat-input" name="entrada-delta-t" label="Delta T" variant="outlined" size="small" defaultValue="50" onKeyUp={() => keyup_number("deltat-input")} />
                            </div>
                        </li>
                    </ul>
                </li>
                <li className='content-fields' id="dados-projeto">
                    <div className='header'>
                        <div className='icon'><SaveAsIcon /></div>
                        <div className='title'>Roteiro e projetos</div>
                    </div>

                    <ul className='fields'>
                        <li className='field'>
                            <div className='content'>
                                <Button variant="contained" startIcon={<SaveAsIcon />} color='success' fullWidth>
                                    Baixar Xls
                                </Button>
                            </div>
                        </li>
                        <li className='field'>
                            <div className='content'>
                                <Button variant="contained" startIcon={<FilterDramaOutlinedIcon />} fullWidth>
                                    Similares
                                </Button>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
