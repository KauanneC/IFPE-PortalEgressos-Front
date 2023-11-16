import React, { useState } from "react";

import Dropdown from "@/components/adm/form/menu/menu";

export default function AddCampo() {
    const [selectedOption, setSelectedOption] = useState('text'); // Opções do menu
    const [radioOptions, setRadioOptions] = useState([{ question: 'Opção 1' }]); // Opções do tipo radios
    const [checkboxOptions, setCheckboxOptions] = useState([{ question: 'Opção 1' }]); // Opções do tipo radios
    const [showOtherOption, setShowOtherOption] = useState(false);
    const [showOtherOptionCheck, setShowOtherOptionCheck] = useState(false);
    const [otherOptionText, setOtherOptionText] = useState("");
    const [otherOptionCheckbox, setOtherOptionCheckbox] = useState("");

    const [dados, setDados] = useState({
        question: "",
        type: "text",
    });


    const handleOptionChange = (option) => {
        setSelectedOption(option);
        // Adicione lógica para atualizar o estado 'dados' com atributos específicos
        switch (option) {
            case "text":
                setDados((prevState) => {
                    const { option, ...rest } = prevState;
                    return {
                        ...rest,
                    };
                });
                break;
            case "radio":
                setDados((prevState) => {
                    // Cria uma cópia do estado anterior excluindo o atributo 'question'
                    const { title, ...rest } = prevState;
                    return {
                        ...rest,
                        option: [],
                    };
                });
                break;
            case "checkbox":
                setDados((prevState) => {
                    const { title, ...rest } = prevState;
                    return {
                        ...rest,
                        option: [],
                    };
                });
                break;
            default:
                break;
        }

        // PopUp de confirmação

        setSelectedOption(option);
        setRadioOptions([{ question: 'Opção 1' }]); // Redefine as opções de rádio para um estado inicial
        setShowOtherOption(false);
        setOtherOptionText(""); // Limpa o texto da opção "Outros"
        setCheckboxOptions([{ question: 'Opção 1' }]); // Redefine as opções de rádio para um estado inicial
        setShowOtherOptionCheck(false);
        setOtherOptionCheckbox(""); // Limpa o texto da opção "Outros"
    };


    const handleAddOption = () => {
        const newOption = { question: `Opção ${radioOptions.length + 1}` };
        setRadioOptions([...radioOptions, newOption]);
    };

    const handleAddCheckbox = () => {
        const newOption = { question: `Opção ${checkboxOptions.length + 1}` };
        setCheckboxOptions([...checkboxOptions, newOption]);
    };

    const handleOptionQuestionChange = (index, value) => {
        const updatedOptions = [...radioOptions];
        updatedOptions[index].question = value;
        setRadioOptions(updatedOptions);

        const newDados = { ...dados };

        // Se a opção já existe, atualize a pergunta; caso contrário, adicione uma nova opção
        if (index < newDados.option.length) {
            newDados.option[index] = { ...newDados.option[index], question: value };
        } else {
            newDados.option.push({ question: value });
        }

        newDados.type = "radio";

        // Atualize o estado com a nova cópia
        setDados(newDados);
    };

    const handleCheckboxQuestionChange = (index, value) => {
        const updatedOptions = [...checkboxOptions];
        updatedOptions[index].question = value;
        setCheckboxOptions(updatedOptions);

        const newDados = { ...dados };

        // Se a opção já existe, atualize a pergunta; caso contrário, adicione uma nova opção
        if (index < newDados.option.length) {
            newDados.option[index] = { ...newDados.option[index], question: value };
        } else {
            newDados.option.push({ question: value });
        }

        newDados.type = "checkbox";

        // Atualize o estado com a nova cópia
        setDados(newDados);
    };

    const handleShowOtherOption = () => {
        setShowOtherOption(true);
    };

    const handleShowOtherCheckbox = () => {
        setShowOtherOptionCheck(true);
    };

    const handleClickSave = () => {
        console.log(dados);
    };

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setDados({
            ...dados,
            [name]: value,
        });
    };

    return (
        <div>
            <div className="flex-grow">
                <div className="bg-fundo mt-15 rounded-10 py-30 px-60">
                    <div className="flex place-content-between items-center">
                        <input
                            type="text"
                            placeholder="Digite aqui o título do campo"
                            name="question"
                            value={dados.question}
                            onChange={(e) => { handleFieldChange(e) }}
                            className="bg-fundo outline-none text-pretoTexto pl-10 font-regular font-semibold text-paragrafo"
                        />
                        <div>
                            <Dropdown value={selectedOption} onOptionChange={handleOptionChange} />
                        </div>
                    </div>
                    {selectedOption === 'text' && (
                        <input
                            type="text"
                            placeholder="Digite aqui"
                            id="nome"
                            className="bg-fundo w-full border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo pl-10 font-regular mt-15"
                        />
                    )}
                    {selectedOption === 'radio' && (
                        <div>
                            {radioOptions.map((option, index) => (
                                <div key={index}>
                                    <input type="radio" name="radioOptions" value={index} />
                                    <input
                                        type="text"
                                        value={option.question}
                                        onChange={(e) => handleOptionQuestionChange(index, e.target.value)}
                                        className="bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {showOtherOption && (
                        <div>
                            <input
                                type="radio"
                                name="radioOptions"
                                value="outros"
                                className="mr-10"
                            />
                            <label>Outros:</label>
                            <input
                                type="text"
                                placeholder="Descreva outros detalhes"
                                value={otherOptionText}
                                onChange={(e) => otherOptionText(e.target.value)}
                                className="bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-10 mt-20">
                        {selectedOption === 'radio' && (
                            <div className="flex bg-azulBase text-white text-center justify-center rounded-10 py-5 px-10 text-legenda">
                                <button onClick={handleAddOption}>Adicionar Opção</button>
                            </div>
                        )}
                        {selectedOption === 'radio' && (
                            <div className="flex bg-azulBase text-white text-center justify-center rounded-10 py-5 px-10 text-legenda">
                                <button onClick={handleShowOtherOption}>Adicionar Outros</button>
                            </div>
                        )}
                    </div>
                    {selectedOption === 'checkbox' && (
                        <div>
                            {checkboxOptions.map((option, index) => (
                                <div key={index}>
                                    <input type="checkbox" name="checkboxOptions" value={index} />
                                    <input
                                        type="text"
                                        value={option.question}
                                        onChange={(e) => handleCheckboxQuestionChange(index, e.target.value)}
                                        className="bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    {showOtherOptionCheck && (
                        <div>
                            <input
                                type="checkbox"
                                name="checkboxOptions"
                                value="outros"
                                className="mr-10"
                            />
                            <label>Outros:</label>
                            <input
                                type="text"
                                placeholder="Descreva outros detalhes"
                                value={otherOptionCheckbox}
                                onChange={(e) => setOtherOptionCheckbox(e.target.value)}
                                className="bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                            />
                        </div>
                    )}
                    <div className="flex items-center gap-10 mt-20">
                        {selectedOption === 'checkbox' && (
                            <div className="flex bg-azulBase text-white text-center justify-center rounded-10 py-5 px-10 text-legenda">
                                <button onClick={handleAddCheckbox}>Adicionar Opção</button>
                            </div>
                        )}
                        {selectedOption === 'checkbox' && (
                            <div className="flex bg-azulBase text-white text-center justify-center rounded-10 py-5 px-10 text-legenda">
                                <button onClick={handleShowOtherCheckbox}>Adicionar Outros</button>
                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={handleClickSave}>Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
