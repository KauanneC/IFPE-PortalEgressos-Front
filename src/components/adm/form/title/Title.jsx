import React from "react";

import NavBar from "@/components/navBar/adm/page";
import NavAcessibilidade from "@/components/navAcessibilidade";

export default function Title() {
    return (
        <main className="flex flex-col bg-cinza10 font-cabin">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section className="mx-120">
                <div className="bg-fundo justify-center text-center mt-30 border-t-10 border-azulForm px-60 py-30 rounded-10">
                    <h1 className="font-semibold text-tituloSessão text-azulBase">Acompanhamento de Egressos do Curso de Engenharia de Software - IFPE Campus Belo Jardim</h1>
                </div>
            </section>
        </main>
    )
}