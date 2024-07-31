import React from 'react';
import './style.scss'

// Icons
import TollIcon from '@mui/icons-material/Toll';

// Components
import TitleSection from '../templates/TitleSection';

// Forms
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import { MenuItem } from '@mui/material';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { clear_on_focus, keyup_number } from '../../../helpers';

function Resultados({ allRows }) {

  return (
    <div className='resultados'>
      <TitleSection text='Resultados' icon={<TollIcon />} />

      <div className='fields'>

        {/* <div className='row'>
          <TextField
            id='resultados-dadosbase-partnumber'
            label='Part Number'
            defaultValue={dadosBase.partNumber}
            InputProps={{ readOnly: true }}
            color="primary"
            focused
            variant='filled'
          />

          <TextField
            id='resultados-dadosbase-cliente'
            label='Cliente'
            defaultValue={dadosBase.cliente}
            InputProps={{ readOnly: true }}
            color="primary"
            focused
            variant='filled'
          />

          <TextField
            id='resultados-dadosbase-elaborador'
            label='Elaborador por'
            defaultValue={dadosBase.elaboradoPor}
            InputProps={{ readOnly: true }}
            color="primary"
            focused
            variant='filled'
          />

          <TextField
            id='resultados-dadosbase-arquivo'
            label='Nome do arquivo XLS'
            defaultValue={dadosBase.nomeDoArquivo}
            InputProps={{ readOnly: true }}
            color="primary"
            focused
            variant='filled'
          />
        </div> */}

      </div>
    </div>
  );
}

export default Resultados;
