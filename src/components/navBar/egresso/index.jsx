import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual

    return (
        <div id='navmenu' className="bg-fundo px-30 py-4 justify-between flex">
            <div className="space-x-5 w-min">
                <Link href="/home" className={`text-azulBase ${router.pathname === '/' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/pages/egresso/eventos" className={`text-azulBase ${router.pathname === '/pages/egresso/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/pages/egresso/editais" className={`text-azulBase ${router.pathname === '/pages/egresso/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/pages/egresso/form" className={`text-azulBase ${router.pathname === '/pages/egresso/form' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
            </div>
            <div className='justify-center flex'>
                <button>
                    <Image src={iconLogOut} alt="Icone de sair" />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
