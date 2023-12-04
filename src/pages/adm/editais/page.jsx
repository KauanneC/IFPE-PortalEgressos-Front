"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import ImgHeader from "/public/icons/imgHeader.svg";

// Components
import NavBar from "@/components/navBar/adm/page";
import NavAcessibilidade from "@/components/navAcessibilidade";
import Card from "@/components/adm/editais/card";
import Footer from "@/components/footer";

// API
import { getNotice } from "../../../../utils/apiNotice/api";

export default function editais() {
    const [editedNotice, setEditedNotice] = useState([]);

    useEffect(() => {
        getNotice().then((data) => {
            console.log(data);
            setEditedNotice(data.data);
        });
    },[]);

    return (
        <main className="flex flex-col w-full min-h-screen bg-fundo font-cabin">
            <header>
                <NavAcessibilidade />
                <div id="navmenu">
                    <NavBar />
                </div>
            </header>
            <section className="flex-grow">
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
                    {editedNotice.map((notice) => (
                        <Card
                            key={notice.id}
                            title={notice.title}
                            pdfName={notice.pdfName}
                        />
                    ))}
                </div>
            </section>
            <footer id="rodape">
                <Footer />
            </footer>
        </main>
    )
}