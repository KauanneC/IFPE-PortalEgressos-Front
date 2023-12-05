import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual

    return (
        <div id='navmenu' className="bg-fundo py-4 justify-between flex">
            <div className="w-ful flex gap-30">
                <Link href="/adm/home/page" className={`text-azulBase ml-30 ${router.pathname === '/adm/home/page' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/adm/eventos/page" className={`text-azulBase  ${router.pathname === '/adm/eventos/page' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/adm/editais/page" className={`text-azulBase ${router.pathname === '/adm/editais/page' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/adm/form/page" className={`text-azulBase ${router.pathname === '/adm/form/page' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
                <Link href="/adm/egressos/page" className={`text-azulBase ${router.pathname === '/adm/egressos/page' ? 'border-b-2 border-azulBase' : ''}`}>Usuários</Link>
                <Link href="/adm/updatePassword/page" className={`text-azulBase ${router.pathname === '/adm/updatePassword/page' ? 'border-b-2 border-azulBase' : ''}`}>Senha Padrão</Link>
                <Link href="/adm/newUser/page" className={`text-azulBase ${router.pathname === '/adm/newUser/page' ? 'border-b-2 border-azulBase' : ''}`}>Novo Usuário</Link>
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
