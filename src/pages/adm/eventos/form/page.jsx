import React, { useState, useEffect } from "react";

// Components
import NavBar from "@/components/navBar/adm/page";
import Footer from "@/components/footer";
import NavAcessibilidade from "@/components/navAcessibilidade/index";
import AddEvento from "@/components/adm/eventos/addEventos/addEvento";
import AllEvents from "@/components/adm/eventos/allEvents/allEvents";

// API
import { updateEvents, removeEvents, allEvents } from "../../../../../utils/apiEvents/api";

export default function EventosForm() {
    const [campos, setCampos] = useState([]);
    const [eventos, setEventos] = useState([]);

    const adicionarCampo = () => {
        setCampos([...campos, { id: Date.now() }]);
    };

    return (
        <main className="flex flex-col bg-cinza10 w-full min-h-screen font-cabin">
            <header>
                <NavAcessibilidade />
                <NavBar />
            </header>
            <section className="flex-grow mx-120">
                <div className="flex mt-30 bg-fundo border-azulForm border-t-10 rounded-10 px-60 py-30 text-center justify-center">
                    <h1 className="font-semibold text-tituloSessão text-azulBase">Edição de Eventos</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="inline-block mt-15 bg-azulBase text-white rounded-10 px-30 py-10">
                        <button onClick={adicionarCampo}>Adicionar Evento</button>
                    </div>
                </div>
                <div>
                    {campos.map((campo) => (
                        <AddEvento />
                    ))}
                </div>
                <div>
                    {eventos.map((event) => (
                        <AllEvents />
                    ))}
                </div>
            </section>
            <Footer />
        </main>
    )
}