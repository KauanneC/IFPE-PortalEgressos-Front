import React, { useState } from 'react';
import Image from 'next/image';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/user';
import Footer from '@/components/footer';
import imgHeader from '/public/icons/imgHeader.svg';
import CardEvent from '@/components/cardEvento';

import iconNoEvents from '/public/icons/iconNoEvents.svg';

export default function Eventos() {

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
    ];

    const [expandidoArray, setExpandidoArray] = useState(Array(eventos.length).fill(false)); // Verifica se o card está expandido ou não

    const handleToggleExpansao = (index) => {
        setExpandidoArray((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
        });
    };

    const handleToggleReducao = (index) => {
        setExpandidoArray((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    return (
        <main>
            <header>
                <NavAcessibilidade />
                <NavBar />
                <Image src={imgHeader} alt="Imagem de alunos se formando" className='w-screen' />
            </header>
            <section id='conteudo' className='flex flex-col items-center justify-center mt-30 space-y-100 mx-120'>
                <h1 className='font-semibold text-azulBase text-tituloPrincial'>Acompanhe nossos eventos!</h1>
                <div className={eventos.length > 0 ? 'grid gap-x-8 gap-y-4 grid-cols-3' : ''}>
                    {eventos.length === 0 ? (
                        <div className='flex flex-col space-y-15 items-center justify-center'>
                            <Image src={iconNoEvents} alt="Imagem de um calendário" />
                            <p className='text-pretoTexto text-tituloSessão'>No momento não há eventos</p>
                        </div>
                    ) : (
                        eventos.map((evento, index) => (
                            <CardEvent
                                key={index}
                                titulo={evento.titulo}
                                data={evento.data}
                                horario={evento.horario}
                                local={evento.local}
                                descricao={evento.descricao}
                                expandido={expandidoArray[index]}
                                onToggleExpansao={() => handleToggleExpansao(index)}
                                onToggleReducao={() => handleToggleReducao(index)}
                            />
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
