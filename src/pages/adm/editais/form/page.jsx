import React, { useState } from "react";

// Icons

// Components
import NavBar from "@/components/navBar/adm/page";
import NavAcessibilidade from "@/components/navAcessibilidade";
import Footer from "@/components/footer";
import AddEditais from "@/components/adm/editais/addEditais/addEditais";
import AllEditais from "@/components/adm/editais/AllEditais/AllEditais";

export default function EditaisForm() {
    const [campos, setCampos] = useState([]);

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
                    <h1 className="font-semibold text-tituloSessão text-azulBase">Edição de Editais</h1>
                </div>
                <div className="flex items-center justify-center">
                    <div className="inline-block mt-15 bg-azulBase text-white rounded-10 px-30 py-10">
                        <button onClick={adicionarCampo}>Adicionar Edital</button>
                    </div>
                </div>
                <div>
                    {campos.map((campo) => (
                        <AddEditais />
                    ))}
                </div>
                <div>
                    <AllEditais />
                </div>
            </section>
            <Footer />
        </main>
    )
}