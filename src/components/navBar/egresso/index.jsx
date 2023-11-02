import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
    const router = useRouter(); // Obtenha a rota atual

    return (
        <div className="bg-fundo px-30 py-4">
            <div className="space-x-5">
                <Link href="/home" className={`text-azulBase ${router.pathname === '/' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/pages/egresso/eventos" className={`text-azulBase ${router.pathname === '/pages/egresso/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/pages/egresso/editais" className={`text-azulBase ${router.pathname === '/pages/egresso/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/pages/egresso/form" className={`text-azulBase ${router.pathname === '/pages/egresso/form' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
            </div>
        </div>
    );
}

export default NavBar;
