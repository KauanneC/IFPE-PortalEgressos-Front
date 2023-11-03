import React, { useState } from "react";
import Image from "next/image";

// Icon
import dadosPessoais from "/assets/icons/dadosPessoais.svg"
import dadosAcademicos from "/assets/icons/academicoVazio.svg"
import dadosProfissionais from "/assets/icons/profissionalVazio.svg"
import feedback from "/assets/icons/feedbackVazio.svg"
import arrow from "/assets/icons/arrow.svg"

// Components
import DadosPessoais from "./dadosAcademicos";
import Dropdown from "@/components/adm/form/menu";

export default function FormAdministrator() {
    const [openDadosAcademicos, setOpenDadosAcademicos] = useState(false); // Ir para Acadêmicos
    const [selectedOption, setSelectedOption] = useState('text'); // Opções do menu
    const [radioOptions, setRadioOptions] = useState([{ title: 'Opção 1' }]); // Opções do tipo radios
    const [showOtherOption, setShowOtherOption] = useState(false);
    const [otherOptionText, setOtherOptionText] = useState("");

    const handleOpenDadosAcademicos = () => {
        setOpenDadosAcademicos(true);
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleRadioOptionChange = (e) => {
        onOptionChange(e.target.value);
        setRadioOptions([{ title: 'Opção 1' }]);
        setShowOtherOption(false);
    };

    const handleAddOption = () => {
        setRadioOptions([...radioOptions, { title: 'Nova Opção' }]);
    };

    const handleOptionTitleChange = (index, title) => {
        const updatedOptions = [...radioOptions];
        updatedOptions[index].title = title;
        setRadioOptions(updatedOptions);
    };

    const handleShowOtherOption = () => {
        setSelectedOption("outros"); // Defina a opção selecionada como "Outros"
        setShowOtherOption(true);
    };

    return (
        <main className="flex bg-cinza10 font-cabin">
            <section className="mx-120 flex-grow">
                {/* Título */}
                <div className="bg-fundo justify-center text-center mt-30 border-t-10 border-azulForm px-60 py-30 rounded-10">
                    <h1 className="font-semibold text-tituloSessão text-azulBase">Acompanhamento de Egressos do Curso de Engenharia de Software - IFPE Campus Belo Jardim</h1>
                </div>
                {/* Categorias */}
                <div className="flex justify-center gap-20 bg-fundo mt-15 rounded-10 px-60 py-30">
                    <button className="flex flex-col items-center gap-5" onClick={handleOpenDadosAcademicos}>
                        <Image src={dadosPessoais} alt="Ícone representando dados pessoais"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Dados Pessoais</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5">
                        <Image src={dadosAcademicos} alt="Ícone representando dados acadêmicos"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Acadêmico</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5">
                        <Image src={dadosProfissionais} alt="Ícone representando dados profissionais"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Profissional</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5">
                        <Image src={feedback} alt="Ícone representando feedback"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Feedback</p>
                    </button>
                </div>
                <div className="bg-fundo mt-15 px-60 py-30 rounded-10">
                    <div className="flex place-content-between items-center">
                        <p className="font-semibold text-paragrafo">Nome</p>
                        <div>
                            <Dropdown value={selectedOption} onOptionChange={handleOptionChange} />
                        </div>
                    </div>
                    {selectedOption === 'text' && (
                        <input
                            type="text"
                            placeholder="Digite seu nome"
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
                                        value={option.title}
                                        onChange={(e) => handleOptionTitleChange(index, e.target.value)}
                                        className="border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center gap-1 mt-10">
                                <button onClick={handleAddOption}>Adicionar Opção</button>
                                <p>ou</p>
                                <button onClick={handleShowOtherOption}>Adicionar Outros</button>
                            </div>
                        </div>
                    )}

                    {selectedOption === "outros" && (
                        <div>
                            <input
                                type="radio"
                                name="radioOptions"
                                value="outros"
                            />
                            <input
                                type="text"
                                placeholder="Descreva outros detalhes aqui"
                                value={otherOptionText}
                                onChange={(e) => setOtherOptionText(e.target.value)}
                                className="border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular mt-10 ml-10"
                            />
                        </div>
                    )}
                    {selectedOption === 'checkbox' && (
                        <input type="checkbox" />
                    )}
                </div>
            </section>
        </main>
    )
}