import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import NavAcessibilidade from '@/components/navAcessibilidade';
import NavBar from '@/components/navBar/egresso';
import Footer from '@/components/footer';

import iconVoltar from '/public/icons/iconVoltar.svg';
import iconDadosPessoaisBlue from '/public/icons/iconDadosPessoaisBlue.svg';
import iconProfissionalWhite from '/public/icons/iconProfissionalWhite.svg';
import iconAcademicoWhite from '/public/icons/iconAcademicoWhite.svg';
import iconFeedbackWhite from '/public/icons/iconFeedbackWhite.svg';
import iconNext from '/public/icons/iconNext.svg';

export default function FormStep01() {
    return (
        <main className="bg-cinza10">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section id='conteudo' className='mt-30 space-y-15 mx-120 items-center justify-center flex flex-col relative'>
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
                            <Image src={iconDadosPessoaisBlue} alt="Página atual: dados pessoais" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Dados Pessoais</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Acadêmico" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='/egresso/formStep02'>
                            <Image src={iconAcademicoWhite} alt="Página 2: Acadêmico" />
                        </Link>
                        <p className='text-azulBase text-subtitulo font-normal'>Acadêmico</p>
                    </div>
                    <div>
                        <Image src={iconNext} alt="Próxima página: Profissional" />
                    </div>
                    <div className="items-center justify-center flex flex-col space-y-5">
                        <Link href='/egresso/formStep03'>
                            <Image src={iconProfissionalWhite} alt="Página 3: Profissional" />
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
                    {/* Última modificação */}
                    <div className="flex flex-row space-x-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Última Modificação: </p>
                        <p className='text-pretoTexto text-paragrafo font-normal m-auto'>Não preenchido </p>
                    </div>
                    {/* Nome Completo */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Nome Completo </p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="text"
                            placeholder="Digite seu nome completo"
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Email </p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="email"
                            placeholder="Digite seu email"
                        />
                    </div>
                    {/* Telefone */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Telefone </p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="tel"
                            placeholder="Digite seu telefone"
                        />
                    </div>
                    {/* Sexo */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Sexo </p>
                        <div className="space-y-10">
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="masculino" name="sexo" value="masculino" />
                                <label htmlFor="masculino" className="text-pretoTexto text-paragrafo font-normal">Masculino</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="feminino" name="sexo" value="feminino" />
                                <label htmlFor="feminino" className="text-pretoTexto text-paragrafo font-normal">Feminino</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="outro" name="sexo" value="outro" />
                                <label htmlFor="outro" className="text-pretoTexto text-paragrafo font-normal">Prefiro não declarar</label>
                            </div>
                        </div>
                    </div>
                    {/* Idade */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Idade </p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="number"
                            placeholder="Digite sua idade"
                        />
                    </div>
                    {/* Estado Civil */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Estado Civil </p>
                        <div className="space-y-10">
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="solteiro" name="estadoCivil" value="solteiro" />
                                <label htmlFor="solteiro" className="text-pretoTexto text-paragrafo font-normal">Solteiro(a)</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="casado" name="estadoCivil" value="casado" />
                                <label htmlFor="casado" className="text-pretoTexto text-paragrafo font-normal">Casado(a)</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="divorciado" name="estadoCivil" value="divorciado" />
                                <label htmlFor="divorciado" className="text-pretoTexto text-paragrafo font-normal">Divorciado(a)</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="viuvo" name="estadoCivil" value="viuvo" />
                                <label htmlFor="viuvo" className="text-pretoTexto text-paragrafo font-normal">Viúvo(a)</label>
                            </div>
                            <div className="flex flex-row items-center space-x-5">
                                <input type="radio" id="outro" name="estadoCivil" value="outro" />
                                <label htmlFor="outro" className="text-pretoTexto text-paragrafo font-normal">Outro</label>
                            </div>
                        </div>
                    </div>
                    {/* Município de Moradia */}
                    <div className="flex flex-col space-y-5">
                        <p className='text-pretoTexto text-subtitulo font-semibold'>Município de Moradia </p>
                        <input
                            className="w-full bg-fundo px-10 py-10 font-cabin text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                            type="text"
                            placeholder="Digite seu município de moradia"
                        />
                    </div>
                    {/* Botão */}
                    <div className="justify-center items-center flex">
                        <button className="bg-azulBase py-10 px-30 text-cinza10 font-semibold rounded-lg transition-transform transform hover:scale-105 active:bg-azulEscuro">
                            <Link href="/egresso/formStep02">Próximo</Link>
                        </button>
                    </div>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}