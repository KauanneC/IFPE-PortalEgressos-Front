import React from "react";
import Image from "next/image";

// Components 
import NavBar from "@/components/navBar/adm/page";
import Footer from "@/components/footer";
import Card from "@/components/adm/eventos/card";

// Images
import ImgHeader from "/public/icons/imgHeader.svg";    

export default function Eventos() {
    return (
        <main className="flex flex-col bg-fundo w-full min-h-screen font-cabin">
            <header>
                <NavBar />
            </header>
            <section className="flex-grow">
                <Image className="w-full" src={ImgHeader}></Image>
                <div className="mt-30 mb-100 justify-center items-center">
                    <h1 className="font-semibold text-azulBase text-center text-tituloPrincial">Acompanhe nossos eventos!</h1>
                </div>
                <div className="flex flex-row flex-wrap mx-120 gap-30 justify-center">
                    <Card />
                </div>
            </section>
            <Footer />
        </main>
    )
}