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
                <Link href="/home" className={`text-azulBase ml-30 mr-10 ${router.pathname === '/' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/adm/eventos" className={`text-azulBase mr-10 ${router.pathname === '/adm/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/adm/editais/page" className={`text-azulBase mr-10 ${router.pathname === '/adm/editais/page' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/adm/egressos" className={`text-azulBase mr-10 ${router.pathname === '/adm/egressos' ? 'border-b-2 border-azulBase' : ''}`}>Egressos</Link>
                <Link href="/adm/form/formAdministrator" className={`text-azulBase ${router.pathname === '/adm/form/formAdministrator' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
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
