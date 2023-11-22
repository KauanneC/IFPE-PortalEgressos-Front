import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual

    return (
        <div id='navmenu' className="bg-fundo py-4 justify-between flex">
            <div className="w-ful">
                <Link href="/docente/home/page" className={`text-azulBase ml-30 mr-10 ${router.pathname === '/docente/home/page' ? 'p-5 border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/docente/eventos/page" className={`text-azulBase mr-10 ${router.pathname === '/docente/eventos/page' ? 'p-5 border-b-2 border-azulBase' : ''}`}>Adicionar Eventos</Link>
                <Link href="/docente/editais" className={`text-azulBase mr-10 ${router.pathname === '/docente/editais' ? 'p-5 border-b-2 border-azulBase' : ''}`}>Adicionar Editais</Link>
            </div>
            <div className='justify-center flex mr-30'>
                <button>
                    <Image src={iconLogOut} alt="Sair" />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
