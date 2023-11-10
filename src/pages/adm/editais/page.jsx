import React from "react";
import Image from "next/image";

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
                <NavBar />
            </header>
            <section className="">
                <div>
                    <Image className="w-full" src={ImgHeader}></Image>
                </div>
                <div className="mt-30 mb-100 justify-center items-center">
                    <h1 className="font-semibold text-azulBase text-center text-tituloPrincial">Acompanhe os editais!</h1>
                </div>
                <div className="flex flex-row flex-wrap mx-120 gap-30 justify-center">
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