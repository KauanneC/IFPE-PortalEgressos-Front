import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import iconPdf from '/public/icons/iconPdf.svg';

export default function CardEvent({ titulo, pdf }) {

    return (
        <div className={"w-400 h-185 flex flex-col space-y-15 border-azulForm border-t-10 px-20 py-30 rounded-lg border-2 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"}>
            <h2 className='font-bold text-pretoTexto text-subtitulo text-center'>{titulo}</h2>
            <div className='flex flex-row items-center justify-center space-x-15'>
                <Image src={iconPdf} alt="PDF" />
                <Link href={pdf} className='font-semibold text-pretoTexto text-paragrafo'>Ver edital</Link>
            </div>
        </div>
    );
}
