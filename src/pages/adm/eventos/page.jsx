import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components 
import NavBar from "@/components/navBar/adm/page";
import Footer from "@/components/footer";
import NavAcessibilidade from "@/components/navAcessibilidade/index";
import Card from "@/components/adm/eventos/card";

// Images
import ImgHeader from "/public/icons/imgHeader.svg";

export default function Eventos() {
    return (
        <main className="flex flex-col bg-fundo w-full min-h-screen font-cabin">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section className="flex-grow">
                <Image className="w-full" src={ImgHeader}></Image>
                <div className='flex items-center py-8'>
                    <h1 className="font-semibold text-azulBase text-center text-tituloPrincial flex-grow">Acompanhe nossos eventos!</h1>
                    <Link href="./admDocentes/slug" className="absolute">
                        <button className="px-15 py-5 transition-transform transform hover:scale-105 border-2 border-azulBase rounded-10 text-center text-azulBase font-semibold">
                            Editar Eventos
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row flex-wrap items-start mx-120 gap-30 justify-center" id="conteudo">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <Footer />
        </main>
    )
}