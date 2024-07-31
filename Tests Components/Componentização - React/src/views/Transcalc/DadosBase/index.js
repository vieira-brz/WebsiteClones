import React from 'react'
import './style.scss'

// Icons
import DvrIcon from '@mui/icons-material/Dvr';

// Forms
import { TextField } from '@mui/material'

// Components
import TitleSection from '../templates/TitleSection'

function DadosBase() {
    return (
        <div className='dados-base'>
            <TitleSection text="Informações do projeto" icon={<DvrIcon />}/>
            <div className='fields'>
                <TextField type="search" required id="pn-input" label="Part Number" variant="outlined" size="small" />
                <TextField type="search" required id="cliente-input" label="Cliente" variant="outlined" size="small" />
                <TextField type="search" required id="elaborador-input" label="Elaborado por" variant="outlined" size="small" />
                <TextField type="search" required id="arquivo-input" label="Nome do arquivo" variant="outlined" size="small" />
            </div>
        </div>
    )
}

export default DadosBase
