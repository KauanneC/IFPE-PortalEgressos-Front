import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import iconPdf from '/public/icons/iconPdf.svg';

export default function CardEdital({ titulo, pdf }) {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const getCardHeight = () => {
        let minHeight = 185;

        let extraHeightPerLine = 20;

        // Número de linhas necessárias para exibir o texto completo
        let numLines = Math.ceil(titulo.length / 35); // Ajuste conforme necessário

        // Calcula a altura total do card
        return minHeight + extraHeightPerLine * numLines;
    };

    return (
        <div
            className={`w-fit h-${getCardHeight()} flex flex-col space-y-15 border-azulForm border-t-10 px-20 py-30 rounded-lg border-2 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='font-bold text-pretoTexto text-subtitulo text-center'>
                {hovered ? titulo : (titulo.length > 60 ? titulo.slice(0, 60) + '...' : titulo)}
            </h2>
            <div className='flex flex-row items-center justify-center space-x-15'>
                <Image src={iconPdf} alt="PDF" />
                <Link href={pdf} className='font-semibold text-pretoTexto text-paragrafo'>Ver edital</Link>
            </div>
        </div>
    );
}
