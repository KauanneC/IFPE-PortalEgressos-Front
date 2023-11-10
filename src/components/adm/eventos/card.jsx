"use client"
import React, { useState } from "react";

export default function Card() {

    const [expanded, setExpanded] = useState(false);

    const descricao = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero sem, fringilla eget nisi tempus, vehicula tempor odio. Sed vel metus fringilla purus facilisis pharetra sed sit amet ipsum. Morbi eget ornare risus, accumsan consectetur enim. Nunc porta augue leo, at vehicula tortor hendrerit sit amet. Cras vitae ultricies massa.`;

    // const descricao = expanded ? descricaoCompleta : descricaoCompleta.slice(0, 100); // Exibe os primeiros 100 caracteres ou o texto completo, com base no estado "expanded"

    const handleToggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`w-400 bg-white rounded-10 border-t-10 border-azulForm drop-shadow border ${expanded ? 'max-h-auto' : ''}`}>
            <h2 className="text-pretoTexto font-bold text-tituloSessão text-center mt-30">Workshop de UI/UX</h2>
            <div className="flex flex-col mt-15 mx-20 gap-10">
                <div className="flex flex-row gap-5">
                    <p className="font-semibold text-azulBase">Data:</p>
                    <p className="text-pretoTexto text-paragrafo">05/12/2023 (Terça-Feira)</p>
                </div>
                <div className="flex flex-row gap-5">
                    <p className="font-semibold text-azulBase">Horário:</p>
                    <p className="text-pretoTexto text-paragrafo">13h</p>
                </div>
                <div className="flex flex-row gap-5">
                    <p className="font-semibold text-azulBase">Modalidade:</p>
                    <p className="text-pretoTexto text-paragrafo">Online</p>
                </div>
                <div className="flex flex-row gap-5">
                    <p className="font-semibold text-azulBase">Local:</p>
                    <p className="text-pretoTexto text-paragrafo">https://meet.google.com/gab-gqjc-zmp</p>
                </div>
                <div className="break-words flex flex-row gap-5 mb-30">
                    <p className="font-semibold text-azulBase">Descrição:</p>
                    <div className="text-pretoTexto text-paragrafo break-words">
                        {descricao.length > 90 ? (
                            <div>
                                <p className="leading-snug">
                                    {expanded ? descricao : `${descricao.slice(0, 60)}...`}
                                </p>
                                <button
                                    className='text-azulBase text-paragrafo font-medium'
                                    onClick={handleToggleExpand}
                                >
                                    {expanded ? 'Ver menos' : 'Ver mais'}
                                </button>
                            </div>
                        ) : (
                            <p>{descricao}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}