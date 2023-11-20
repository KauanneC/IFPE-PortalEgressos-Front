import React, { useState } from "react";
import Image from "next/image";

// icons
import iconAttetion from "/public/icons/iconAttetion.svg"

// Components
import Popup from "@/components/popUp/popup";

export default function AddEvento() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const [eventos, setEventos] = useState({
        nome: "",
        data: "",
        horario: "",
        modalidade: "",
        local: "",
        descricao: "",
    });

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setEventos({
            ...eventos,
            [name]: value,
        });
    };

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const handleSave = () => {
        // Adicione aqui a lógica para salvar os dados ou realizar qualquer outra ação necessária
        // Depois, abra o popup
        handleOpenPopup();
    };

    return (
        <div className="bg-fundo px-60 py-30 rounded-10 mt-15">
            <div className="w-full">
                <div>
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Nome do Evento</p>
                    <input
                        type="text"
                        placeholder="Digite o nome do evento"
                        name="nome"
                        value={eventos.nome}
                        onChange={(e) => { handleFieldChange(e) }}
                        className="w-full outline-none border-b-1 border-cinza07 pl-10 text-paragrafo text-cinza07"
                    />
                </div>
                <div className="flex justify-between mt-30">
                    <div className="w-445">
                        <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Data</p>
                        <input
                            type="date"
                            name="data"
                            value={eventos.data}
                            onChange={(e) => { handleFieldChange(e) }}
                            className="border border-cinza07 rounded-10 p-10 outline-none"
                        />
                    </div>
                    <div className="w-445">
                        <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Horário</p>
                        <input
                            type="time"
                            name="horario"
                            value={eventos.horario}
                            onChange={(e) => { handleFieldChange(e) }}
                            className="border border-cinza07 rounded-10 p-10 outline-none"
                        />
                    </div>
                </div>
                <div className="mt-30">
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Modalidade</p>
                    <div>
                        <input
                            type="radio"
                            name="modalidade"
                            value={eventos.modalidade}
                            onChange={(e) => { handleFieldChange(e) }}
                        />
                        <label className="ml-10 text-pretoTexto">Presencial</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="modalidade"
                            value={eventos.modalidade}
                            onChange={(e) => { handleFieldChange(e) }}
                        />
                        <label className="ml-10 text-pretoTexto">Online</label>
                    </div>
                </div>
                <div className="mt-30">
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Local</p>
                    <input
                        type="text"
                        placeholder="Digite o local ou link"
                        name="local"
                        value={eventos.local}
                        onChange={(e) => { handleFieldChange(e) }}
                        className="w-full outline-none border-b-1 border-cinza07 pl-10 text-paragrafo text-cinza07"
                    />
                </div>
                <div className="mt-30">
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Descrição</p>
                    <input
                        type="text"
                        placeholder="Digite a descrição"
                        name="descricao"
                        value={eventos.descricao}
                        onChange={(e) => { handleFieldChange(e) }}
                        className="w-full outline-none border-b-1 border-cinza07 pl-10 text-paragrafo text-cinza07"
                    />
                </div>
                <div className="flex mt-30 justify-center gap-30">
                    <div className="inline-block bg-verdeButton rounded-10 text-white text-paragrafo py-10 px-30">
                        <button onClick={handleOpenPopup}>Salvar</button>
                    </div>
                    <div className="inline-block bg-vermelhoButton rounded-10 text-white text-paragrafo py-10 px-30">
                        <button>Cancelar</button>
                    </div>
                </div>
                {isPopupOpen && (
                    <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
                        <Image src={iconAttetion}/>
                        <h1 className="text-azulBase ">Tem certeza?</h1>
                        <p>Isso é um exemplo de popup usando JSX e Tailwind CSS.</p>
                        <button onClick={handleClosePopup}>Fechar</button>
                    </Popup>
                )}
            </div>
        </div>
    )
}