import React from "react";
import Image from "next/image";

// Icons
import dadosPessoais from "/public/icons/iconDadosPessoaisBlue.svg"
import dadosAcademicos from "/public/icons/iconAcademicoBlue.svg"
import dadosProfissionais from "/public/icons/iconProfissionalBlue.svg"
import feedback from "/public/icons/iconFeedbackWhite.svg"
import arrow from "/public/icons/arrow.svg"

// Components
import Title from "@/components/adm/form/title/Title";

export default function StepProfissional(props) {
    const {cont, setCont, step, stepStep} = props;

    const categorieChangeProx = () => {
        setCont(cont + 1);
    };

    const categorieChangeAnt = () => {
        setCont(cont - 1);
    };

    return (
        <main>
            <header>
                <Title />
            </header>
            <section className="mx-120"> 
                <div className="flex flex-wrap justify-center gap-20 bg-fundo mt-15 rounded-10 px-60 py-30">
                    <button className="flex flex-col items-center gap-5">
                        <Image src={dadosPessoais} alt="Ícone representando dados pessoais"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Dados Pessoais</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5" onClick={categorieChangeAnt}>
                        <Image src={dadosAcademicos} alt="Ícone representando dados acadêmicos"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Acadêmico</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5">
                        <Image src={dadosProfissionais} alt="Ícone representando dados profissionais"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Profissional</p>
                    </button>
                    <Image src={arrow}></Image>
                    <button className="flex flex-col items-center gap-5" onClick={categorieChangeProx}>
                        <Image src={feedback} alt="Ícone representando feedback"></Image>
                        <p className="font-regular text-subtitulo text-azulBase">Feedback</p>
                    </button>
                </div>
            </section>
        </main>
    )
}