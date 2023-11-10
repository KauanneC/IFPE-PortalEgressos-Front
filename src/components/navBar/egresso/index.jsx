import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleLogout = () => {
        // direciona para '/'
        router.push('/');
        closePopup();
    };

    return (
        <div id='navmenu' className="bg-fundo px-120 py-4 justify-between flex">
            <div className="space-x-30 w-min">
                <Link href="/egresso/home" className={`text-azulBase ${router.pathname === '/egresso/home' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/egresso/eventos" className={`text-azulBase ${router.pathname === '/egresso/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/egresso/editais" className={`text-azulBase ${router.pathname === '/egresso/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/egresso/form" className={`text-azulBase ${router.pathname === '/egresso/form' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
            </div>
            <div className='justify-center flex'>
                <button onClick={openPopup}>
                    <Image src={iconLogOut} alt="Sair" />
                </button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute w-full h-full bg-black opacity-50"></div>
                    <div className="relative bg-white p-4 rounded-lg shadow-lg">
                        <div className='flex flex-col items-center justify-center space-y-15 mx-30'>
                            <h1 className='text-tituloSessão text-azulBase font-semibold'>Tem certeza?</h1>
                            <p className='text-paragrafo text-pretoTexto'>Você irá sair da sua conta</p>
                            <div className="space-x-15">
                                <button className="px-15 py-5 bg-azulBase font-semibold text-cinza10 rounded-lg hover:bg-azulForm hover:text-pretoTexto" onClick={handleLogout}>Sim</button>
                                <button className="px-15 py-5 bg-azulBase font-semibold text-cinza10 rounded-lg hover:bg-azulForm hover:text-pretoTexto" onClick={closePopup}>Não</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default NavBar;
