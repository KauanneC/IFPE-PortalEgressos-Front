import React from "react";

export default function card() {
    return (
        <div className="w-full">
            <div className="flex justify-between bg-white w-full border border-t-10 border-azulForm rounded-10 h-90 shadow-lg px-30 pb-30 pt-20">
                <h1 className="font-bold text-subtitulo">Nome do Aluno</h1>
                <div>
                    <button className="inline-block bg-azulBase mr-30 rounded-10 text-white font-semibold text-legenda px-15 py-5">Exportar Dados</button>
                    <button className="inline-block bg-azulBase mr-30 rounded-10 text-white font-semibold text-legenda px-15 py-5">Ver Formulário</button>
                </div>
            </div>
        </div>
    )
}