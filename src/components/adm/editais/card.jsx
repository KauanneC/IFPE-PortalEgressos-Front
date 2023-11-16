import React from "react";
import Image from "next/image";

// Icons
import iconPdf from "/public/icons/iconPdf.svg";

export default function card({ title, link }) {

    const handleDownload = () => {
        const pdfUrl = `http://localhost:3333/api/public/${id}.pdf`;
        saveAs(pdfUrl, nomeArquivo); // Nome do arquivo
    }

    return (
        <div className="flex flex-col justify-center items-center w-400 h-185 border-t-10 border-azulForm rounded-10 bg-white drop-shadow">
            <h1 className="text-pretoTexto font-bold text-tituloSessão">Edital</h1>
            <button className="flex justify-center items-center gap-15 mt-20">
                <Image className="" src={iconPdf}></Image>
                Ver Edital
            </button>
        </div>
    )
}