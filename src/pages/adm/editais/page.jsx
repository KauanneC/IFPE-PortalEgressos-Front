import React from "react";
import Image from "next/image";
import Link from "next/link";   

// Icons
import ImgHeader from "/public/icons/imgHeader.svg";

// Components
import NavBar from "@/components/navBar/adm/page";
import NavAcessibilidade from "@/components/navAcessibilidade";
import Card from "@/components/adm/editais/card";
import Footer from "@/components/footer";

export default function editais() {
    return (
        <main className="flex flex-col bg-fundo font-cabin">
            <header>
                <NavAcessibilidade />
                <div id="navmenu">
                    <NavBar />
                </div>
            </header>
            <section className="">
                <div>
                    <Image className="w-full" src={ImgHeader}></Image>
                </div>
                <div className='items-center py-8 grid'>
                    <h1 className="font-semibold text-azulBase text-center text-tituloPrincial flex-grow">Acompanhe os editais!</h1>
                    <Link href="./form/page" className="absolute right-32">
                        <button className="px-15 py-5 transition-transform transform hover:scale-105 border-2 border-azulBase rounded-10 text-center text-azulBase font-semibold">
                            Editar Editais
                        </button>
                    </Link>
                </div>
                <div className="flex flex-row flex-wrap mx-120 gap-30 justify-center" id="conteudo">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <footer id="rodape">
                <Footer />
            </footer>
        </main>
    )
}