import React, { useState } from 'react';
import Image from 'next/image';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/user';
import Footer from '@/components/footer';
import imgHeader from '/public/icons/imgHeader.svg';

import iconNoEvents from '/public/icons/iconNoEvents.svg';

export default function Eventos() {
    const [expandido, setExpandido] = useState(false);

    const handleToggleExpansao = () => {
        setExpandido(!expandido);
    };

    const handleToggleReducao = () => {
        setExpandido(false);
    };

    const cardHeight = expandido ? 'auto' : '341px'; // Ajuste a altura conforme necessário

    // Suponhamos que você tenha um array de eventos
    const eventos = [
        {
            titulo: 'Workshop de Python',
            data: '07/12/2023 (Quinta-Feira)',
            horario: '14:00 - 17:00',
            local: 'Auditório de Informática',
            descricao: 'Oferecido pela empresa Frufru, tem como objetivo apresentar aos estudantes novos conhecimentos. Além disso, os alunos podem ganhar certificados.',
        },
        {
            titulo: 'Workshop de Python',
            data: '07/12/2023 (Quinta-Feira)',
            horario: '14:00 - 17:00',
            local: 'Auditório de Informática',
            descricao: 'Oferecido pela empresa Frufru, tem como objetivo apresentar aos estudantes novos conhecimentos. Além disso, os alunos podem ganhar certificados.',
        },
        {
            titulo: 'Workshop de Python',
            data: '07/12/2023 (Quinta-Feira)',
            horario: '14:00 - 17:00',
            local: 'Auditório de Informática',
            descricao: 'Oferecido pela empresa Frufru, tem como objetivo apresentar aos estudantes novos conhecimentos. Além disso, os alunos podem ganhar certificados.',
        },
        {
            titulo: 'Workshop de Python',
            data: '07/12/2023 (Quinta-Feira)',
            horario: '14:00 - 17:00',
            local: 'Auditório de Informática',
            descricao: 'Oferecido pela empresa Frufru, tem como objetivo apresentar aos estudantes novos conhecimentos. Além disso, os alunos podem ganhar certificados.',
        },
        {
            titulo: 'Workshop de Python',
            data: '07/12/2023 (Quinta-Feira)',
            horario: '14:00 - 17:00',
            local: 'Auditório de Informática',
            descricao: 'Oferecido pela empresa Frufru, tem como objetivo apresentar aos estudantes novos conhecimentos. Além disso, os alunos podem ganhar certificados.',
        }
        // Adicione mais eventos conforme necessário
    ];

    return (
        <main>
            <header>
                <NavAcessibilidade />
                <NavBar />
                <Image src={imgHeader} alt="Imagem de alunos se formando" className='w-screen' />
            </header>
            <section id='conteudo' className='flex flex-col items-center justify-center mt-30 space-y-100 mx-120'>
                <h1 className='font-semibold text-azulBase text-tituloPrincial'>Acompanhe nossos eventos!</h1>
                <div className='grid gap-x-8 gap-y-4 grid-cols-3'>
                    {eventos.length === 0 ? (
                        <div className='flex flex-col space-y-15 items-center justify-center'>
                            <Image src={iconNoEvents} alt="Imagem de um calendário" />
                            <p className='text-pretoTexto text-tituloSessão'>No momento não há eventos</p>
                        </div>
                    ) : (
                        eventos.map((evento, index) => (
                            <div key={index} className={`w-310 h-auto flex flex-col space-y-15 border-azulForm border-t-10 px-20 py-30 rounded-lg border-2 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg h-${cardHeight} overflow-hidden`}>
                                <h2 className='font-semibold text-pretoTexto text-subtitulo text-center'>{evento.titulo}</h2>
                                <div className='space-y-10 flex flex-col items-start'>
                                    <div className='flex flex-row items-start space-x-5'>
                                        <p className='font-semibold text-azulBase text-paragrafo'>Data: </p>
                                        <p className='font-normal text-pretoTexto text-paragrafo'>{evento.data}</p>
                                    </div>
                                    <div className='flex flex-row items-start space-x-5'>
                                        <p className='font-semibold text-azulBase text-paragrafo'>Horário: </p>
                                        <p className='font-normal text-pretoTexto text-paragrafo'>{evento.horario}</p>
                                    </div>
                                    <div className='flex flex-row items-start space-x-5'>
                                        <p className='font-semibold text-azulBase text-paragrafo'>Local: </p>
                                        <p className='font-normal text-pretoTexto text-paragrafo'>{evento.local}</p>
                                    </div>
                                    <div className='flex flex-col space-x-5'>
                                        <p className='font-semibold text-azulBase text-paragrafo'>Descrição: </p>
                                        <p className={`font-normal text-pretoTexto text-paragrafo ${expandido ? '' : 'line-clamp-3'}`}>
                                            {evento.descricao}
                                        </p>
                                        {!expandido && (
                                            <button onClick={handleToggleExpansao} className='text-azulBase font-semibold underline cursor-pointer text-right'>
                                                Ver mais
                                            </button>
                                        )}
                                        {expandido && (
                                            <button onClick={handleToggleReducao} className='text-azulBase font-semibold underline cursor-pointer text-right'>
                                                Ver menos
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}
