import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TipoPrimarioSelect = ({ onSelectChange }) => {
    const [selectedValue, setSelectedValue] = React.useState('paralelo');

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onSelectChange(newValue);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Tipo de Primário</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="entrada-tipo-primario"
                    label="Tipo de Primário"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    <MenuItem value='paralelo'>Paralelo</MenuItem>
                    <MenuItem value='serie'>Em série</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default TipoPrimarioSelect;
