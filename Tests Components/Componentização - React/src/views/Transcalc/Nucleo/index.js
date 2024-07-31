import React from 'react'
import './style.scss'

// Icons
import TollIcon from '@mui/icons-material/Toll';

// Components
import TitleSection from '../templates/TitleSection';

// Forms
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FormLabel, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { keyup_number } from '../../../helpers';

function Nucleo() {

  const objetoPadrao = {
    modelo: 'padrao',
    nucleo_padrao_selecionado: '0',
    od: 0,
    id: 0,
    h: 0,
    a_cm2: 0,
    ff_total: 0,
    delta_t: 0,
    blindagem: 'n/a',
    od_final: 0,
    h_final: 0,
    maquina: '-',
    cap: '-'
  }

  return (
    <div className='nucleo'>

      <TitleSection text='Núcleo' icon={<TollIcon />} />

      <div className='fields'>

        <div className='row'>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Modelo de Núcleo</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue={objetoPadrao.modelo}
            >
              <FormControlLabel value="padrao" control={<Radio />} label="Padrão" />
              <FormControlLabel value="especial" control={<Radio />} label="Especial" />
            </RadioGroup>
          </FormControl>

          <Box>
            <FormControl>
              <InputLabel id='nucleo-padrao-label'>Fio</InputLabel>
              <Select
                labelId='nucleo-padrao-label'
                id='nucleo-padrao'
                label='Fio'
                defaultValue={objetoPadrao.nucleo_padrao_selecionado}
              // onChange={(e) => handleDiametroChange(e.target.value, index)}
              >
                <MenuItem value="0" disabled>Selecione um núcleo padrão...</MenuItem>
                <MenuItem value="0">50 x 30 x 10</MenuItem>
                <MenuItem value="1">50 x 30 x 20</MenuItem>
                <MenuItem value="2">50 x 30 x 25</MenuItem>
                <MenuItem value="3">60 x 40 x 20</MenuItem>
                <MenuItem value="4">60 x 40 x 25</MenuItem>
                <MenuItem value="5">60 x 40 x 30</MenuItem>
                <MenuItem value="6">70 x 40 x 20</MenuItem>
                <MenuItem value="7">70 x 40 x 25</MenuItem>
                <MenuItem value="8">70 x 40 x 30</MenuItem>
                <MenuItem value="9">80 x 50 x 20</MenuItem>
                <MenuItem value="10">80 x 50 x 25</MenuItem>
                <MenuItem value="11">80 x 50 x 30</MenuItem>
                <MenuItem value="12">80 x 50 x 35</MenuItem>
                <MenuItem value="13">80 x 50 x 40</MenuItem>
                <MenuItem value="14">85 x 50 x 25</MenuItem>
                <MenuItem value="15">85 x 50 x 30</MenuItem>
                <MenuItem value="16">85 x 50 x 35</MenuItem>
                <MenuItem value="17">85 x 50 x 40</MenuItem>
                <MenuItem value="18">100 x 60 x 20</MenuItem>
                <MenuItem value="19">100 x 60 x 25</MenuItem>
                <MenuItem value="20">100 x 60 x 30</MenuItem>
                <MenuItem value="21">100 x 60 x 35</MenuItem>
                <MenuItem value="22">100 x 60 x 40</MenuItem>
                <MenuItem value="23">110 x 70 x 30</MenuItem>
                <MenuItem value="24">110 x 70 x 35</MenuItem>
                <MenuItem value="25">110 x 70 x 40</MenuItem>
                <MenuItem value="26">110 x 70 x 50</MenuItem>
                <MenuItem value="27">110 x 70 x 60</MenuItem>
                <MenuItem value="28">120 x 70 x 30</MenuItem>
                <MenuItem value="29">120 x 70 x 40</MenuItem>
                <MenuItem value="30">120 x 70 x 50</MenuItem>
                <MenuItem value="31">145 x 80 x 30</MenuItem>
                <MenuItem value="32">145 x 80 x 35</MenuItem>
                <MenuItem value="33">145 x 80 x 40</MenuItem>
                <MenuItem value="34">145 x 80 x 50</MenuItem>
                <MenuItem value="35">145 x 80 x 60</MenuItem>
                <MenuItem value="36">200 x 80 x 50</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TextField
            id='od-nucleo'
            label='OD (mm)'
            defaultValue={objetoPadrao.od}
            variant='outlined'
            type='number'
            inputProps={{ min: 0 }}
            style={{ 'width': 90 }}
            onKeyUp={() => keyup_number('od-nucleo')}
          />

          <TextField
            id='id-nucleo'
            label='ID (mm)'
            defaultValue={objetoPadrao.id}
            variant='outlined'
            type='number'
            inputProps={{ min: 0 }}
            style={{ 'width': 90 }}
            onKeyUp={() => keyup_number('id-nucleo')}
          />

          <TextField
            id='h-nucleo'
            label='H (mm)'
            defaultValue={objetoPadrao.h}
            variant='outlined'
            type='number'
            inputProps={{ min: 0 }}
            style={{ 'width': 90 }}
            onKeyUp={() => keyup_number('h-nucleo')}
          />

          <FormGroup aria-label="position" row fullWidth>
            <FormControlLabel
              value="n/a"
              control={<Checkbox />}
              label="N/A"
              labelPlacement="top"
            />
            <FormControlLabel
              value="estatica"
              control={<Checkbox />}
              label="Estática"
              labelPlacement="top"
            />
            <FormControlLabel
              value="magnetica"
              control={<Checkbox />}
              label="Magnética"
              labelPlacement="top"
            />
          </FormGroup>
        </div>

        <div className='row'>
          <TextField
            id='od_final'
            label='OD Final (mm)'
            type='number'
            inputProps={{ min: 0 }}
            defaultValue={objetoPadrao.od_final}
            variant='outlined'
          />

          <TextField
            id='h_final'
            label='H Final (mm)'
            type='number'
            inputProps={{ min: 0 }}
            defaultValue={objetoPadrao.h_final}
            variant='outlined'
          />

          <TextField
            id='a_cm2'
            label='A (cm²)'
            defaultValue={objetoPadrao.a_cm2}
            InputProps={{ readOnly: true }}
            variant='filled'
          />

          <TextField
            id='ff_total'
            label='FF Total'
            defaultValue={objetoPadrao.ff_total}
            InputProps={{ readOnly: true }}
            variant='filled'
          />

          <TextField
            id='delta_t'
            label='Delta T'
            defaultValue={objetoPadrao.delta_t}
            InputProps={{ readOnly: true }}
            variant='filled'
          />
          <TextField
            id='maquina'
            label='Máquina sugerida'
            defaultValue={objetoPadrao.maquina}
            InputProps={{ readOnly: true }}
            variant='filled'

          />

          <TextField
            id='cap'
            label='Cap'
            defaultValue={objetoPadrao.cap}
            InputProps={{ readOnly: true }}
            variant='filled'

          />
        </div>
      </div>
    </div>
  )
}

export default Nucleo
