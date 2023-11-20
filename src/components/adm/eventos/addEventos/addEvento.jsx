import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// icons
import iconAttetion from "/public/icons/iconAttetion.svg"
import iconSucess from "/public/icons/iconSucess.svg"

// Components
import Popup from "@/components/popUp/popup";

// API
import { createEvents } from "../../../../../utils/apiEvents/api";

export default function AddEvento() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [sucessPopupOpen, setSucessPopupOpen] = useState(false);

    const [eventos, setEventos] = useState({
        name: "",
        date: "",
        hour: "",
        modality: "",
        place: "",
        description: "",
    });

    const handleFieldChange = (event) => {
        const { name, value } = event.target;
        setEventos({
            ...eventos,
            [name]: value,
        });
    };

    const handleEnviarClick = () => {
        console.log(eventos);

        createEvents(eventos)
            .then((response) => {
                if (response.statusCode === 200) {
                    setSucessPopupOpen(true);
                    setPopupOpen(false);
                } else {
                    alert("Erro ao criar o evento!")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleOpenPopup = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    const handleCloseSucessPopup = () => {
        setSucessPopupOpen(false);
    };

    return (
        <div className="bg-fundo px-60 py-30 rounded-10 mt-15">
            <div className="w-full">
                <div>
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Nome do Evento</p>
                    <input
                        type="text"
                        placeholder="Digite o nome do evento"
                        name="name"
                        value={eventos.name}
                        onChange={(e) => { handleFieldChange(e) }}
                        className="w-full outline-none border-b-1 border-cinza07 pl-10 text-paragrafo text-cinza07"
                    />
                </div>
                <div className="flex justify-between mt-30">
                    <div className="w-445">
                        <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Data</p>
                        <input
                            type="date"
                            name="date"
                            value={eventos.date}
                            onChange={(e) => { handleFieldChange(e) }}
                            className="border border-cinza07 rounded-10 p-10 outline-none"
                        />
                    </div>
                    <div className="w-445">
                        <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Horário</p>
                        <input
                            type="time"
                            name="hour"
                            value={eventos.hour}
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
                            name="modality"
                            value="Presencial"
                            checked={eventos.modality === "Presencial"}
                            onChange={(e) => { handleFieldChange(e) }}
                        />
                        <label className="ml-10 text-pretoTexto">Presencial</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="modality"
                            value="Online"
                            checked={eventos.modality === "Online"}
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
                        name="place"
                        value={eventos.place}
                        onChange={(e) => { handleFieldChange(e) }}
                        className="w-full outline-none border-b-1 border-cinza07 pl-10 text-paragrafo text-cinza07"
                    />
                </div>
                <div className="mt-30">
                    <p className="font-semibold text-subtitulo text-pretoTexto mb-15">Descrição</p>
                    <input
                        type="text"
                        placeholder="Digite a descrição"
                        name="description"
                        value={eventos.description}
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
                        <Image src={iconAttetion} />
                        <h1 className="text-azulBase text-subtitulo font-semibold mt-15 mb-15">Tem certeza?</h1>
                        <p className="font-semibold text-pretoTexto text-paragrafo mb-15">Ao salvar o evento será automaticamente publicado.</p>
                        <div className="flex justify-center">
                            <button onClick={handleEnviarClick} className="inline-block bg-azulBase text-white rounded-10 py-5 px-15 mr-15">Sim</button>
                            <button onClick={handleClosePopup} className="inline-block bg-azulBase text-white rounded-10 py-5 px-15">Não</button>
                        </div>
                    </Popup>
                )}
                {sucessPopupOpen && (
                    <Popup isOpen={sucessPopupOpen} onClose={handleCloseSucessPopup}>
                        <Image src={iconSucess} />
                        <h1 className="text-azulBase text-subtitulo font-semibold mt-15 mb-15">Publicado</h1>
                        <p className="font-semibold text-pretoTexto text-paragrafo mb-15">O evento foi publicado com sucesso</p>
                        <Link href="/adm/eventos/page">
                            <button className="inline-block bg-azulBase text-white rounded-10 py-5 px-15">Voltar para Eventos</button>
                        </Link>
                    </Popup>
                )}
            </div>
        </div>
    )
}