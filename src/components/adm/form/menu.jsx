import React, { useState } from 'react';

const DropdownMenu = ({ value, onOptionChange }) => {
    const [radioOptions, setRadioOptions] = useState([{ title: 'Opção 1' }]);

    const handleRadioOptionChange = (e) => {
        onOptionChange(e.target.value);
        setRadioOptions([{ title: 'Opção 1' }]);
    };

    return (
        <div className="w-full overlay">
            <select
                value={value}
                onChange={(e) => {
                    if (e.target.value === 'radio') {
                        handleRadioOptionChange(e);
                    } else {
                        onOptionChange(e.target.value);
                    }
                }}
                className="block w-full px-10 py-10 border rounded-md outline-none border-cinza03 appearance-none"
            >
            <option value="text"> Texto </option>
            <option value="radio">Rádio</option>
            <option value="checkbox">Checkbox</option>
        </select>
        </div >
    );
};

export default DropdownMenu;
