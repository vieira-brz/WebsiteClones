import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AplicacaoSelect = ({ onSelectChange, onBmaxChange }) => {
    const [selectedValue, setSelectedValue] = useState('outros');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onSelectChange(newValue);

        // Atualize o Bmax automaticamente com base na aplicação selecionada
        switch (newValue) {
            case 'alta frequência':
                onBmaxChange('0.80');
                break;
            case 'medicina':
                onBmaxChange('1.45');
                break;
            case 'odonto':
                onBmaxChange('1.40');
                break;
            case 'telecom':
                onBmaxChange('1.45');
                break;
            case 'áudio':
                onBmaxChange('1.25');
                break;
            default:
                onBmaxChange('1.45');
                break;
        }
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
                <InputLabel id="aplicacao-select-label">Aplicação</InputLabel>
                <Select
                    labelId="aplicacao-select-label"
                    id="aplicacao-select"
                    name="entrada-aplicacao"
                    label="Aplicação"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    <MenuItem value='alta frequência'>Alta Frequência</MenuItem>
                    <MenuItem value='áudio'>Áudio</MenuItem>
                    <MenuItem value='medicina'>Medicina</MenuItem>
                    <MenuItem value='odonto'>Odonto</MenuItem>
                    <MenuItem value='outros'>Outros</MenuItem>
                    <MenuItem value='telecom'>Telecom</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default AplicacaoSelect;
