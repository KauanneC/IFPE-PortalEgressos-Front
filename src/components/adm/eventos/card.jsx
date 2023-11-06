import React from "react";

export default function Card() {

    const dados = [{
        titulo: "Titulo",
        data: "Data",
        modalidade: "Modalidade",
        local: "Local",
        descricao: "Descrição",
    }]
    
    return (
        <div className="w-310 h-341 bg-white rounded-10 border-t-10 border-azulForm drop-shadow">
            <h1>{dados.titulo}</h1>
        </div>
    )
}