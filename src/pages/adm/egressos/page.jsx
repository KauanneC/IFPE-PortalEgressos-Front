import React from "react";
import Image from "next/image";

// Icons
import ImgHeader from "/public/icons/imgHeader.svg";

// Components
import NavAcessibilidade from "@/components/navAcessibilidade";
import NavBar from "@/components/navBar/adm/page";
import Footer from "@/components/footer";
import Card from "@/components/adm/egressos/card";

export default function egressos() {
    return (
        <main className="flex flex-col bg-fundo w-full min-h-screen font-cabin">
            <header>
                <NavAcessibilidade/>
                <div id="navmenu">
                    <NavBar/>
                </div>
            </header>
            <section className="flex-grow">
                <Image className="w-full" src={ImgHeader}></Image>
                <div className='flex items-center py-8'>
                    <h1 className="font-semibold text-azulBase text-center text-tituloPrincial flex-grow">Egressos no Curso</h1>
                </div>
                <div className="flex flex-row flex-wrap items-start mx-120 gap-30 justify-center" id="conteudo">
                    <Card/>
                </div>
            </section>
            <div id="rodape">
                <Footer/>
            </div>
        </main>
    )
}