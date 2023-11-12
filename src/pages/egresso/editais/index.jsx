import React from 'react';
import Image from 'next/image';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';
import imgHeader from '/public/icons/imgHeader.svg';
import CardEdital from '@/components/cardEdital';

import iconNoEdital from '/public/icons/iconNoEdital.svg';

export default function Editais() {

    const editais = [
        {
            titulo: 'Concurso Prefeitura de Mogi das Cruzes (SP) do coisa na coisa de onde foi',
            pdf: '',
        },
        {
            titulo: 'Concurso Prefeitura de Mogi das Cruzes (SP)',
            pdf: '',
        },
        {
            titulo: 'Concurso Prefeitura de Mogi das Cruzes (SP)',
            pdf: '',
        },
        {
            titulo: 'Concurso Prefeitura de Mogi das Cruzes (SP)',
            pdf: '',
        },
        {
            titulo: 'Concurso Prefeitura de Mogi das Cruzes (SP)',
            pdf: '',
        },
    ];

    return (
        <main>
            <header>
                <NavAcessibilidade />
                <NavBar />
                <Image src={imgHeader} alt="Editais" className='w-screen' />
            </header>
            <section id='conteudo' className='flex flex-col items-center justify-center mt-30 space-y-100 mx-120'>
                <h1 className='font-semibold text-azulBase text-tituloPrincial'>Acompanhe os editais!</h1>
                {editais.length === 0 ? (
                    <div className='flex flex-col space-y-15 items-center justify-center'>
                        <Image src={iconNoEdital} alt="Imagem de um edital" />
                        <p className='text-pretoTexto text-tituloSessão'>No momento não há editais</p>
                    </div>
                ) : (
                    <div className='grid gap-x-30 gap-y-30 grid-cols-3'>
                        {editais.map((edital, index) => (
                            <div key={index} className='w-full'>
                                <CardEdital
                                    titulo={edital.titulo}
                                    pdf={edital.pdf}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}