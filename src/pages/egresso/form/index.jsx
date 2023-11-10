import React, { useState } from "react";

import NavBar from "@/components/navBar/egresso";
import NavAcessibilidade from "@/components/navAcessibilidade";
import Footer from "@/components/footer";

import StepDadosPessoais from "./steps/stepDadosPessoais";
import StepAcademico from "./steps/stepAcademico";
import StepProfissional from "./steps/stepProfissional";
import StepFeedback from "./steps/stepFeedback";

export default function FormEgresso() {

    const [cont, setCont] = useState(0); // Contador de telas

    const arrayScreens = [
        <StepDadosPessoais cont={cont} setCont={setCont} />,
        <StepAcademico cont={cont} setCont={setCont} />,
        <StepProfissional cont={cont} setCont={setCont} />,
        <StepFeedback cont={cont} setCont={setCont} />,
    ]

    return (
        <main className="flex flex-col bg-cinza10">
            <section className="flex-grow">
                {arrayScreens[cont]} {/* Renderiza a tela 0 */}
            </section>
        </main>
    )
}