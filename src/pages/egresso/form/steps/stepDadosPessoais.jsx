'use client';
import React from "react";
import Image from 'next/image';
import { useState } from 'react';
import Swal from 'sweetalert2';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';
import AllFormFields from '@/components/formEgresso/allFormFields';

import iconVoltar from '/public/icons/iconVoltar.svg';
import iconDadosPessoaisBlue from '/public/icons/iconDadosPessoaisBlue.svg';
import iconProfissionalWhite from '/public/icons/iconProfissionalWhite.svg';
import iconAcademicoWhite from '/public/icons/iconAcademicoWhite.svg';
import iconFeedbackWhite from '/public/icons/iconFeedbackWhite.svg';
import iconNext from '/public/icons/iconNext.svg';

export default function formStep01(props) {

    const { cont, setCont } = props;
    const [openFormAcademicos, setOpenFormAcademicos] = useState(false); // Ir para Acadêmicos
    const [campos, setCampos] = useState([]);
    const [hasFields, setHasFields] = useState(true);

    const [step, setStep] = useState({
        nome: "",
    });

    const categorieChange = () => {
        setCont(cont + 1);
    }

    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    if (showAlert) {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Os dados não serão salvos!',
            icon: 'warning',
            iconColor: '#C18031',
            confirmButtonColor: '#991D39',
            cancelButtonColor: '#666666',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/egresso/home";
            } else {
                setShowAlert(false);
            }
        })
    }

    return (
        <main className="bg-cinza10">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section id='conteudo' className='mt-30 space-y-15 mx-120 items-center justify-center flex flex-col relative'>
                {/* Título Form */}
                <div className="bg-fundo w-full py-30 px-60 rounded-lg border-t-8 border-azulForm">
                    <button onClick={handleShowAlert} className="absolute top-0 left-0">
                        <Image src={iconVoltar} alt="Voltar para página inicial" />
                    </button>
                    <h1 className='font-semibold text-azulBase text-tituloSessão text-center'>Acompanhamento de Egressos do Curso de Engenharia de Software - IFPE Campus Belo Jardim</h1>
                </div>
                {/* Navegação Form */}
                <div className="bg-fundo w-full py-30 px-60 rounded-lg space-x-20 flex flex-row items-center justify-center">
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Image src={iconDadosPessoaisBlue} alt="Página atual: dados pessoais" />
                        <p className='text-azulBase text-subtitulo font-normal'>Dados Pessoais</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Acadêmico" />
                    </div>
                    <button className="items-center justify-center flex flex-col space-y-5" onClick={categorieChange}>
                        <Image src={iconAcademicoWhite} alt="Página 2: Acadêmico" />
                        <p className='text-azulBase text-subtitulo font-normal'>Acadêmico</p>
                    </button>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Profissional" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Image src={iconProfissionalWhite} alt="Página 3: Profissional" />
                        <p className='text-azulBase text-subtitulo font-normal'>Profissional</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Feedback" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Image src={iconFeedbackWhite} alt="Página 4: feedback" />
                        <p className='text-azulBase text-subtitulo font-normal'>Feedback</p>
                    </div>
                </div>
                {/* Form */}
                <div className="flex flex-col w-full rounded-lg gap-30">
                    <div>
                        <AllFormFields formType={'dados-pessoais'} hasFields={hasFields} setHasFields={setHasFields} />
                    </div>
                    {/* Botão Próximo */}
                    {hasFields && (
                        <div className="justify-center items-center flex">
                            <button className="bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro" onClick={categorieChange}>
                                Próximo
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}