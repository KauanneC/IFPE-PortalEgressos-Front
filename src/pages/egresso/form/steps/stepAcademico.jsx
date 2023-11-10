import React from "react";
import Image from 'next/image';
import { useState } from 'react';
import router from 'next/router';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';

import iconPerigo from '/public/icons/iconPerigo.svg';
import iconVoltar from '/public/icons/iconVoltar.svg';
import iconDadosPessoaisBlue from '/public/icons/iconDadosPessoaisBlue.svg';
import iconAcademicoBlue from '/public/icons/iconAcademicoBlue.svg';
import iconProfissionalWhite from '/public/icons/iconProfissionalWhite.svg';
import iconFeedbackWhite from '/public/icons/iconFeedbackWhite.svg';
import iconNext from '/public/icons/iconNext.svg';

export default function FormStep02(props) {

    const { cont, setCont, step, stepStep } = props;

    const categorieChangeProx = () => {
        setCont(cont + 1);
    };

    const categorieChangeAnt = () => {
        setCont(cont - 1);
    };

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
                    <button className="items-center justify-center flex flex-col space-y-5" onClick={categorieChangeAnt}>
                        <Image src={iconDadosPessoaisBlue} alt="Página atual: dados pessoais" />
                        <p className='text-azulBase text-subtitulo font-normal'>Dados Pessoais</p>
                    </button>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Acadêmico" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Image src={iconAcademicoBlue} alt="Página atual: Acadêmico" />
                        <p className='text-azulBase text-subtitulo font-normal'>Acadêmico</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Profissional" />
                    </div>
                    <button className="items-center justify-center flex flex-col space-y-5" onClick={categorieChangeProx}>
                        <Image src={iconProfissionalWhite} alt="Página 3: Profissional" />
                        <p className='text-azulBase text-subtitulo font-normal'>Profissional</p>
                    </button>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Feedback" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Image src={iconFeedbackWhite} alt="Página 4: feedback" />
                        <p className='text-azulBase text-subtitulo font-normal'>Feedback</p>
                    </div>
                </div>
                {/* Form */}
                <div className="bg-fundo w-4/5 py-30 px-60 rounded-lg space-y-30">
                    {/* Em quanto tempo você concluiu o curso? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Em quanto tempo você concluiu o curso?</p>
                        <div className="space-y-10">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="tempo1" name="tempo" value="tempo1" />
                                <label htmlFor="tempo1">Menos de 2 anos</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="tempo2" name="tempo" value="tempo2" />
                                <label htmlFor="tempo2">2 anos e meio</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="tempo3" name="tempo" value="tempo3" />
                                <label htmlFor="tempo3">3 anos</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="tempo4" name="tempo" value="tempo4" />
                                <label htmlFor="tempo4">Mais de 3 anos</label>
                            </div>
                        </div>
                    </div>
                    {/* Há quanto tempo você se formou no Curso Superior de Engenharia de Software? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Há quanto tempo você se formou no Curso Superior de Engenharia de Software?</p>
                        <div className="space-y-10">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="formou1" name="formou" value="formou1" />
                                <label htmlFor="formou1">Menos de 6 meses</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="formou2" name="formou" value="formou2" />
                                <label htmlFor="formou2">Entre 6 meses e 1 ano</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="formou3" name="formou" value="formou3" />
                                <label htmlFor="formou3">Entre 1 e 2 anos</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="formou4" name="formou" value="formou4" />
                                <label htmlFor="formou4">Mais de 2 anos</label>
                            </div>
                        </div>
                    </div>
                    {/* Você participou de projetos de ensino, pesquisa ou extensão durante a sua graduação? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Você participou de projetos de ensino, pesquisa ou extensão durante a sua graduação?</p>
                        <div className="space-y-10">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="projetos1" name="projetos" value="projetos1" />
                                <label htmlFor="projetos1">Sim, fui bolsista em projeto de ensino, de pesquisa ou de extensão</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="projetos2" name="projetos" value="projetos2" />
                                <label htmlFor="projetos2">Sim, fui voluntário(a) em projeto de ensino, de pesquisa ou de extensão</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="projetos3" name="projetos" value="projetos3" />
                                <label htmlFor="projetos3">Não, não participei de projetos durante a graduação</label>
                            </div>
                        </div>
                    </div>
                    {/* Após a conclusão da graduação, você cursou alguma pós-graduação ou especialização? (marque todas que se aplicam) */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Após a conclusão da graduação, você cursou alguma pós-graduação ou especialização?</p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos1" name="pos1" value="pos1" className="border border-cinza04 rounded-lg" />
                                <label htmlFor="pos1">Não realizei nenhum curso</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos2" name="pos2" value="pos2" />
                                <label htmlFor="pos2">Especialização</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos3" name="pos3" value="pos3" />
                                <label htmlFor="pos3">MBA</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos4" name="pos4" value="pos4" />
                                <label htmlFor="pos4">Mestrado profissional</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos5" name="pos5" value="pos5" />
                                <label htmlFor="pos5">Mestrado acadêmico</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos6" name="pos6" value="pos6" />
                                <label htmlFor="pos6">Doutorado</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="pos7" name="pos7" value="pos7" />
                                <label htmlFor="pos7">Outros</label>
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
                    {/* Após a conclusão da graduação, você cursou outra graduação? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Após a conclusão da graduação, você cursou outra graduação?</p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="outraGrad1" name="outraGrad" value="outraGrad1" />
                                <label htmlFor="outraGrad1">Não cursei (ou estou cursando) outra graduação</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="outraGrad2" name="outraGrad" value="outraGrad2" />
                                <label htmlFor="outraGrad2">Sim, cursei (ou estou cursando) outra graduação na mesma área</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="outraGrad3" name="outraGrad" value="outraGrad3" />
                                <label htmlFor="outraGrad3">Sim, cursei (ou estou cursando) outra graduação em uma área diferente em uma instituição privada</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="outraGrad4" name="outraGrad" value="outraGrad4" />
                                <label htmlFor="outraGrad4">Sim, cursei (ou estou cursando) outra graduação em uma área diferente no mesmo câmpus do IFSP (Avaré)</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="radio" id="outraGrad5" name="outraGrad" value="outraGrad5" />
                                <label htmlFor="outraGrad5">Sim, cursei (ou estou cursando) outra graduação em uma área diferente em outra instituição pública</label>
                            </div>
                        </div>
                    </div>
                    {/* Quais tipos de conhecimentos/habilidades você sentiu falta na sua formação e que foram exigidos no desempenho da sua atividade profissional? */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Quais tipos de conhecimentos/habilidades você sentiu falta na sua formação e que foram exigidos no desempenho da sua atividade profissional?</p>
                        <div>
                            <input
                                className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                                type="text"
                                placeholder="Digite aqui"
                            />
                        </div>
                    </div>
                    {/* Em relação ao IFPE quais iniciativas te motivaram a concluir um curso superior? (Sinta-se a vontade para marcar mais de uma opção se quiser) (Checkbox) */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Em relação ao IFPE quais iniciativas te motivaram a concluir um curso superior? (Sinta-se a vontade para marcar mais de uma opção se quiser)</p>
                        <div className="space-y-5">
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos1" name="motivos1" value="motivos1" />
                                <label htmlFor="motivos1">Assistência estudantil</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos2" name="motivos2" value="motivos2" />
                                <label htmlFor="motivos2">Reputação da instituição de ensino</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos3" name="motivos3" value="motivos3" />
                                <label htmlFor="motivos3">Qualidade de ensino</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos4" name="motivos4" value="motivos4" />
                                <label htmlFor="motivos4">Oportunidades de trabalho</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos5" name="motivos5" value="motivos5" />
                                <label htmlFor="motivos5">Monitoria</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos6" name="motivos6" value="motivos6" />
                                <label htmlFor="motivos6">Projeto de pesquisa</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos7" name="motivos7" value="motivos7" />
                                <label htmlFor="motivos7">Estágio</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos8" name="motivos8" value="motivos8" />
                                <label htmlFor="motivos8">Extensão</label>
                            </div>
                            <div className="space-x-5 flex flex-row">
                                <input type="checkbox" id="motivos9" name="motivos9" value="motivos9" />
                                <label htmlFor="motivos9">Projeto Moura Tech</label>
                            </div>
                        </div>
                    </div>
                    {/* Botões */}
                    <div className="flex flex-row space-x-30 justify-center items-center">
                        <button className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro' onClick={categorieChangeAnt}>
                            Voltar
                        </button>
                        <button className='bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro' onClick={categorieChangeProx}>
                            Próximo
                        </button>
                    </div>
                </div>
            </section>

            {isPopupBackOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute w-full h-full bg-black opacity-50"></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                        <div className='flex flex-col items-center justify-center space-y-15 mx-30 my-15'>
                            <Image src={iconPerigo} alt="Tem certeza que deseja voltar para a página inicial?" />
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