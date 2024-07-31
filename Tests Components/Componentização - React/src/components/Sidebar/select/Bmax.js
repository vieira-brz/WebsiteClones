import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BmaxSelect = ({ onSelectChange, initialValue }) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);

    useEffect(() => {
        setSelectedValue(initialValue);
    }, [initialValue]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        onSelectChange(newValue);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
                <InputLabel id="bmax-select-label">Bmax</InputLabel>
                <Select
                    labelId="bmax-select-label"
                    id="bmax-select"
                    name="entrada-bmax"
                    label="Bmax"
                    value={selectedValue}
                    onChange={handleChange}
                >
                    <MenuItem value="0.60">0.60 T</MenuItem>
                    <MenuItem value="0.65">0.65 T</MenuItem>
                    <MenuItem value="0.70">0.70 T</MenuItem>
                    <MenuItem value="0.75">0.75 T</MenuItem>
                    <MenuItem value="0.80">0.80 T</MenuItem>
                    <MenuItem value="0.85">0.85 T</MenuItem>
                    <MenuItem value="0.90">0.90 T</MenuItem>
                    <MenuItem value="0.95">0.95 T</MenuItem>
                    <MenuItem value="1.00">1.00 T</MenuItem>
                    <MenuItem value="1.05">1.05 T</MenuItem>
                    <MenuItem value="1.10">1.10 T</MenuItem>
                    <MenuItem value="1.15">1.15 T</MenuItem>
                    <MenuItem value="1.20">1.20 T</MenuItem>
                    <MenuItem value="1.25">1.25 T</MenuItem>
                    <MenuItem value="1.30">1.30 T</MenuItem>
                    <MenuItem value="1.35">1.35 T</MenuItem>
                    <MenuItem value="1.40">1.40 T</MenuItem>
                    <MenuItem value="1.45">1.45 T</MenuItem>
                    <MenuItem value="1.50">1.50 T</MenuItem>
                    <MenuItem value="1.55">1.55 T</MenuItem>
                    <MenuItem value="1.60">1.60 T</MenuItem>
                    <MenuItem value="1.65">1.65 T</MenuItem>
                    <MenuItem value="1.70">1.70 T</MenuItem>
                    <MenuItem value="1.75">1.75 T</MenuItem>
                    <MenuItem value="1.80">1.80 T</MenuItem>
                    <MenuItem value="1.85">1.85 T</MenuItem>
                    <MenuItem value="1.90">1.90 T</MenuItem>
                    <MenuItem value="1.95">1.95 T</MenuItem>
                    <MenuItem value="2.00">2.00 T</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default BmaxSelect;
