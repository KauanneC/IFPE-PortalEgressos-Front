import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import router from 'next/router';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';

import iconPerigo from '/public/icons/iconPerigo.svg';
import iconVoltar from '/public/icons/iconVoltar.svg';
import iconDadosPessoaisBlue from '/public/icons/iconDadosPessoaisBlue.svg';
import iconAcademicoBlue from '/public/icons/iconAcademicoBlue.svg';
import iconProfissionalBlue from '/public/icons/iconProfissionalBlue.svg';
import iconFeedbackWhite from '/public/icons/iconFeedbackWhite.svg';
import iconNext from '/public/icons/iconNext.svg';

export default function FormStep03() {

    const [isPopupBackOpen, setIsPopupBackOpen] = useState(false);

    const openPopupBack = () => {
        setIsPopupBackOpen(true);
    };

    const closePopupBack = () => {
        setIsPopupBackOpen(false);
    };

    const handleConfirmBack = () => {
        router.push('/egresso/home');
        closePopupBack();
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
                    <button onClick={openPopupBack} className="absolute top-0 left-0">
                        <Image src={iconVoltar} alt="Voltar para página inicial" />
                    </button>
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
                        <Link href='/egresso/formStep02'>
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
                            <Image src={iconFeedbackWhite} alt="Página 4: feedback" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Feedback</p>
                    </div>
                </div>
                {/* Form */}
                <div className="bg-fundo w-4/5 py-30 px-60 rounded-lg space-y-30">
                    {/* Atualmente, você se encontra */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Atualmente, você se encontra: </p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="empregado" />
                                <label htmlFor="empregado" className='text-pretoTexto text-paragrafo font-normal'>Empregado(a)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="desempregado" />
                                <label htmlFor="desempregado" className='text-pretoTexto text-paragrafo font-normal'>Desempregado(a)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="empregadoPosGraduacao" />
                                <label htmlFor="empregadoPosGraduacao" className='text-pretoTexto text-paragrafo font-normal'>Empregado(a) e cursando pós graduação</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="desempregadoPosGraduacao" />
                                <label htmlFor="desempregadoPosGraduacao" className='text-pretoTexto text-paragrafo font-normal'>Desempregado(a) e cursando pós graduação</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="autonomo" />
                                <label htmlFor="autonomo" className='text-pretoTexto text-paragrafo font-normal'>Desenvolvendo atividade autônoma/liberal</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="situacao" id="outro" />
                                <label htmlFor="outro" className='text-pretoTexto text-paragrafo font-normal'>Outro</label>
                            </div>
                        </div>
                    </div>
                    {/* Em qual segmento produtivo você está vinculado atualmente? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Em qual segmento produtivo você está vinculado atualmente? </p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="privadoNaArea" />
                                <label htmlFor="privadoNaArea" className='text-pretoTexto text-paragrafo font-normal'>Iniciativa privada (Na minha área de estudo)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="privadoForaArea" />
                                <label htmlFor="privadoForaArea" className='text-pretoTexto text-paragrafo font-normal'>Iniciativa privada (Fora da minha área de estudo)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="publicoNaArea" />
                                <label htmlFor="publicoNaArea" className='text-pretoTexto text-paragrafo font-normal'>Iniciativa pública (Na minha área de estudo)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="publicoForaArea" />
                                <label htmlFor="publicoForaArea" className='text-pretoTexto text-paragrafo font-normal'>Iniciativa pública (Fora da minha área de estudo)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="terceiroSetor" />
                                <label htmlFor="terceiroSetor" className='text-pretoTexto text-paragrafo font-normal'>Terceiro setor (ONGs e afins)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="nenhum" />
                                <label htmlFor="nenhum" className='text-pretoTexto text-paragrafo font-normal'>Não estou desenvolvendo atividade profissional</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="segmentoProdutivo" id="outro" />
                                <label htmlFor="outro" className='text-pretoTexto text-paragrafo font-normal'>Outro</label>
                            </div>
                            <div>
                                <input
                                    className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                                    type="text"
                                    placeholder="Digite quais"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Quanto tempo você demorou para realizar a sua inserção profissional após se formar? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Quanto tempo você demorou para realizar a sua inserção profissional após se formar? </p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="tempoInsercao" id="menos6meses" />
                                <label htmlFor="menos6meses" className='text-pretoTexto text-paragrafo font-normal'>Menos de 6 meses</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="tempoInsercao" id="entre6meses1ano" />
                                <label htmlFor="entre6meses1ano" className='text-pretoTexto text-paragrafo font-normal'>Entre 6 meses e 1 ano</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="tempoInsercao" id="entre1ano2anos" />
                                <label htmlFor="entre1ano2anos" className='text-pretoTexto text-paragrafo font-normal'>Entre 1 e 2 anos</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="tempoInsercao" id="aindaNaoConseguiu" />
                                <label htmlFor="aindaNaoConseguiu" className='text-pretoTexto text-paragrafo font-normal'>Ainda não consegui inserção profissional</label>
                            </div>
                        </div>
                    </div>
                    {/* Para quantas ofertas de vagas na área de Engenharia de Software você se candidatou desde que concluiu o curso? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Para quantas ofertas de vagas na área de Engenharia de Software você se candidatou desde que concluiu o curso? </p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="vagasEngenharia" id="nenhuma" />
                                <label htmlFor="nenhuma" className='text-pretoTexto text-paragrafo font-normal'>Nenhuma</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="vagasEngenharia" id="1ou2" />
                                <label htmlFor="1ou2" className='text-pretoTexto text-paragrafo font-normal'>1 ou 2</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="vagasEngenharia" id="3ou4" />
                                <label htmlFor="3ou4" className='text-pretoTexto text-paragrafo font-normal'>3 ou 4</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="vagasEngenharia" id="5ou6" />
                                <label htmlFor="5ou6" className='text-pretoTexto text-paragrafo font-normal'>5 ou 6</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" name="vagasEngenharia" id="mais6" />
                                <label htmlFor="mais6" className='text-pretoTexto text-paragrafo font-normal'>Mais de 6</label>
                            </div>
                        </div>
                    </div>
                    {/* Botões */}
                    <div className="flex flex-row space-x-30 justify-center items-center">
                        <Link href="/egresso/formStep02">
                            <button className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro'>
                                Voltar
                            </button>
                        </Link>
                        <Link href="/egresso/formStep04">
                            <button className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro'>
                                Próximo
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            
            {isPopupBackOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute w-full h-full bg-black opacity-50"></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                        <div className='flex flex-col items-center justify-center space-y-15 mx-30 my-15'>
                            <Image src={iconPerigo} alt="Perigo" />
                            <h1 className='text-tituloSessão text-azulBase font-semibold'>Tem certeza?</h1>
                            <p className='text-paragrafo text-pretoTexto'>Os dados não serão salvos se voltar para a página inicial</p>
                            <div className="space-x-15">
                                <button className="px-15 py-5 bg-azulBase font-semibold text-cinza10 rounded-lg hover:bg-azulForm hover:text-pretoTexto" onClick={handleConfirmBack}>Sim</button>
                                <button className="px-15 py-5 bg-azulBase font-semibold text-cinza10 rounded-lg hover:bg-azulForm hover:text-pretoTexto" onClick={closePopupBack}>Não</button>
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