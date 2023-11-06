import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import router from 'next/router';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';

import iconVoltar from '/public/icons/iconVoltar.svg';
import iconDadosPessoaisBlue from '/public/icons/iconDadosPessoaisBlue.svg';
import iconAcademicoBlue from '/public/icons/iconAcademicoBlue.svg';
import iconProfissionalBlue from '/public/icons/iconProfissionalBlue.svg';
import iconFeedbackBlue from '/public/icons/iconFeedbackBlue.svg';
import iconNext from '/public/icons/iconNext.svg';
import iconSucesso from '/public/icons/iconSucesso.svg';

export default function FormStep04() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleLogout = () => {
        router.push('/egresso/home');
        closePopup();
    };

    return (
        <main className="bg-cinza10">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section id="conteudo" className='mt-30 space-y-15 mx-120 items-center justify-center flex flex-col relative'>
                {/* Título Form */}
                <div className="bg-fundo w-4/5 py-30 px-60 rounded-lg border-t-8 border-azulForm">
                    <Link href='/egresso/home' className="absolute top-0 left-0">
                        <Image src={iconVoltar} alt="Voltar para página inicial" />
                    </Link>
                    <h1 className='font-semibold text-azulBase text-tituloSessão text-center'>Acompanhamento de Egressos do Curso de Engenharia de Software - IFPE Campus Belo Jardim</h1>
                </div>
                {/* Navegação Form */}
                <div className="bg-fundo w-4/5 py-30 px-60 rounded-lg space-x-20 flex flex-row items-center justify-center">
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='/egresso/formStep01'>
                            <Image src={iconDadosPessoaisBlue} alt="Página 1: dados pessoais" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Dados Pessoais</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Acadêmico" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='egresso/formStep02'>
                            <Image src={iconAcademicoBlue} alt="Página atual: Acadêmico" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Acadêmico</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Profissional" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='/egresso/formStep03'>
                            <Image src={iconProfissionalBlue} alt="Página 3: Profissional" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Profissional</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Feedback" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='/egresso/formStep04'>
                            <Image src={iconFeedbackBlue} alt="Página 4: feedback" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Feedback</p>
                    </div>
                </div>
                {/* Form */}
                <div className="bg-fundo w-4/5 py-30 px-60 rounded-lg space-y-30">
                    {/* Deixe aqui a sua sugestão/crítica/elogios para o curso de Engenharia de Software do IFPE - campus Belo Jardim */}
                    <div className="space-y-10">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Deixe aqui a sua sugestão/crítica/elogios para o curso de Engenharia de Software do IFPE - campus Belo Jardim</p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="text"
                            placeholder="Digite aqui"
                        />
                    </div>
                    {/* Botões */}
                    <div className="flex flex-row space-x-30 justify-center items-center">
                        <Link href="/egresso/formStep03">
                            <button className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro'>
                                Voltar
                            </button>
                        </Link>
                        <Link href="/egresso/formStep04">
                            <button onClick={openPopup} className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro'>
                                Enviar
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute w-full h-full bg-black opacity-50"></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                        <div className='flex flex-col items-center justify-center space-y-15 mx-30 my-15'>
                            <Image src={iconSucesso} alt="Sucesso" />
                            <h1 className='text-tituloSessão text-azulBase font-semibold'>Enviado</h1>
                            <p className='text-paragrafo text-pretoTexto'>O formulário foi enviado com sucesso</p>
                            <div className="space-x-15">
                                <button className="px-15 py-5 bg-azulBase font-semibold text-cinza10 rounded-lg hover:bg-azulForm hover:text-pretoTexto" onClick={handleLogout}>Voltar para Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <footer>
                <Footer />
            </footer>
        </main>
    )
}