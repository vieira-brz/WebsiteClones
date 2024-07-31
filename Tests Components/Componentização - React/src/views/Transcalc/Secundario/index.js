import React, { useState } from 'react';
import './style.scss';

// Icons
import TollIcon from '@mui/icons-material/Toll';

// Components
import TitleSection from '../templates/TitleSection';
import DynamicRows from '../templates/DynamicRows';

// Forms
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { clear_on_focus, keyup_number } from '../../../helpers';

function Secundario() {

  const objetoPadrao = {
    tensao: '0.00',
    corrente: '0.00',
    potencia: '0.00',
    calculado: '-',
    sugerido: '-',
    diametro: '0',
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      tensao: '0.00',
      corrente: '0.00',
      potencia: '0.00',
      calculado: '-',
      sugerido: '-',
      diametro: '0',
    },
  ]);

  const handleDiametroChange = (value, rowIndex) => {
    const updatedRows = [...rows]
    updatedRows[rowIndex].diametro = value
    setRows(updatedRows);
  }

  const clearOnFocus = (index, field) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = '';
    setRows(updatedRows);
  };

  return (
    <div className='secundario'>
      <TitleSection text='Secundários' icon={<TollIcon />} />

      <div className='fields'>

        {rows.map((row, index) => (

          <div key={row.id} className='row'>

            <h4 id={`sec${row.id}-input`}>{`S${row.id}`}</h4>

            <TextField
              id={`tensao-sec${row.id}-input`}
              label='Tensão (V)'
              defaultValue={row.tensao}
              variant='outlined'
              type='search'
              onKeyUp={() => keyup_number(`tensao-sec${row.id}-input`)}
              onFocus={() => {
                clearOnFocus(index, 'tensao');
                clear_on_focus(`tensao-sec${row.id}-input`);
              }}
            />

            <TextField
              id={`corrente-sec${row.id}-input`}
              label='Corrente (A)'
              defaultValue={row.corrente}
              variant='outlined'
              type='search'
              onKeyUp={() => keyup_number(`corrente-sec${row.id}-input`)}
              onFocus={() => {
                clearOnFocus(index, 'corrente');
                clear_on_focus(`corrente-sec${row.id}-input`);
              }}
            />

            <TextField
              id={`potencia-sec${row.id}-input`}
              label='Potência (VA)'
              defaultValue={row.potencia}
              variant='outlined'
              type='search'
              onKeyUp={() => keyup_number(`potencia-sec${row.id}-input`)}
              onFocus={() => {
                clearOnFocus(index, 'potencia');
                clear_on_focus(`potencia-sec${row.id}-input`);
              }}
            />

            <TextField
              id={`calculado-sec${row.id}-input`}
              label='Fio calculado'
              defaultValue={row.calculado}
              InputProps={{ readOnly: true }}
              variant='filled'
            />

            <TextField
              id={`sugerido-sec${row.id}-input`}
              label='Fio sugerido'
              defaultValue={row.sugerido}
              InputProps={{ readOnly: true }}
              variant='filled'
            />

            <Box>
              <FormControl fullWidth>
                <InputLabel id={`diametro-sec${row.id}-select-label`}>Fio</InputLabel>
                <Select
                  labelId={`diametro-sec${row.id}-select-label`}
                  id={`diametro-sec${row.id}-select`}
                  label='Fio'
                  value={row.diametro}
                  fullWidth
                  onChange={(e) => handleDiametroChange(e.target.value, index)}
                >
                  <MenuItem value="0" disabled>Selecione um fio...</MenuItem>
                  <MenuItem value="1">#1 - 7.35mm</MenuItem>
                  <MenuItem value="2">#2 - 6.54mm</MenuItem>
                  <MenuItem value="3">#3 - 5.83mm</MenuItem>
                  <MenuItem value="4">#4 - 5.19mm</MenuItem>
                  <MenuItem value="5">#5 - 4.62mm</MenuItem>
                  <MenuItem value="6">#6 - 4.12mm</MenuItem>
                  <MenuItem value="7">#7 - 3.67mm</MenuItem>
                  <MenuItem value="8">#8 - 3.26mm</MenuItem>
                  <MenuItem value="9">#9 - 2.91mm</MenuItem>
                  <MenuItem value="10">#10 - 2.59mm</MenuItem>
                  <MenuItem value="11">#11 - 2.31mm</MenuItem>
                  <MenuItem value="12">#12 - 2.05mm</MenuItem>
                  <MenuItem value="13">#13 - 1.83mm</MenuItem>
                  <MenuItem value="14">#14 - 1.63mm</MenuItem>
                  <MenuItem value="15">#15 - 1.45mm</MenuItem>
                  <MenuItem value="16">#16 - 1.29mm</MenuItem>
                  <MenuItem value="17">#17 - 1.15mm</MenuItem>
                  <MenuItem value="18">#18 - 1.02mm</MenuItem>
                  <MenuItem value="19">#19 - 0.91mm</MenuItem>
                  <MenuItem value="20">#20 - 0.81mm</MenuItem>
                  <MenuItem value="21">#21 - 0.72mm</MenuItem>
                  <MenuItem value="22">#22 - 0.64mm</MenuItem>
                  <MenuItem value="23">#23 - 0.57mm</MenuItem>
                  <MenuItem value="24">#24 - 0.51mm</MenuItem>
                  <MenuItem value="25">#25 - 0.45mm</MenuItem>
                  <MenuItem value="26">#26 - 0.4mm</MenuItem>
                  <MenuItem value="27">#27 - 0.36mm</MenuItem>
                  <MenuItem value="28">#28 - 0.32mm</MenuItem>
                  <MenuItem value="29">#29 - 0.29mm</MenuItem>
                  <MenuItem value="30">#30 - 0.25mm</MenuItem>
                  <MenuItem value="31">#31 - 0.23mm</MenuItem>
                  <MenuItem value="32">#32 - 0.2mm</MenuItem>
                  <MenuItem value="33">#33 - 0.18mm</MenuItem>
                  <MenuItem value="34">#34 - 0.16mm</MenuItem>
                  <MenuItem value="35">#35 - 0.14mm</MenuItem>
                  <MenuItem value="36">#36 - 0.13mm</MenuItem>
                  <MenuItem value="37">#37 - 0.11mm</MenuItem>
                  <MenuItem value="38">#38 - 0.1mm</MenuItem>
                  <MenuItem value="39">#39 - 0.09mm</MenuItem>
                  <MenuItem value="40">#40 - 0.08mm</MenuItem>
                  <MenuItem value="41">#41 - 0.07mm</MenuItem>
                  <MenuItem value="42">#42 - 0.06mm</MenuItem>
                  <MenuItem value="43">#43 - 0.06mm</MenuItem>
                  <MenuItem value="44">#44 - 0.05mm</MenuItem>
                  <MenuItem value="4/0">#4/0 - 11.86mm</MenuItem>
                  <MenuItem value="3/0">#3/0 - 10.4mm</MenuItem>
                  <MenuItem value="2/0">#2/0 - 9.23mm</MenuItem>
                  <MenuItem value="1/0">#1/0 - 8.25mm</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        ))}

        <div className='actions'>
          <DynamicRows rows={rows} setRows={setRows} objetoPadrao={objetoPadrao} auxiliarText="secundários" limit='10'/>
        </div>

      </div>
    </div>
  );
}

export default Secundario;