import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter(); // Obtenha a rota atual

    return (
        <div id='navmenu' className="bg-fundo px-30 py-4 justify-between flex">
            <div className="space-x-5 w-min">
                <Link href="/" className={`text-azulBase ${router.pathname === '/' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/pages/user/eventos" className={`text-azulBase ${router.pathname === '/pages/user/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/pages/user/editais" className={`text-azulBase ${router.pathname === '/pages/user/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
            </div>
            <div className='w-min'>
                <button className='bg-azulBase pb-1 py-0.5 px-15 text-cinza10 rounded-lg'>
                    Entrar
                </button>
            </div>
        </div>
    );
}

export default NavBar;
