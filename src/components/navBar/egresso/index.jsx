import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual

    return (
        <div id='navmenu' className="bg-fundo px-120 py-4 justify-between flex">
            <div className="space-x-30 w-min">
                <Link href="/home" className={`text-azulBase ${router.pathname === '/' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/egresso/eventos" className={`text-azulBase ${router.pathname === '/egresso/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/egresso/editais" className={`text-azulBase ${router.pathname === '/egresso/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/egresso/formStep01" className={`text-azulBase ${router.pathname === '/egresso/formStep01' || '/egresso/formStep02' || '/egresso/formStep03' || '/egresso/formStep04' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
            </div>
            <div className='justify-center flex'>
                <button>
                    <Image src={iconLogOut} alt="Sair" />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
