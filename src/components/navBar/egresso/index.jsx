import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import Swal from 'sweetalert2';

import iconLogOut from '/public/icons/iconLogOut.svg'

function NavBar() {
    const router = useRouter(); // Rota atual

    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    if (showAlert) {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Você irá sair da sua conta',
            icon: 'warning',
            iconColor: '#C18031',
            confirmButtonColor: '#991D39',
            cancelButtonColor: '#666666',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showConfirmButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/";
            } else {
                setShowAlert(false);
            }
        })
    }

    return (
        <div id='navmenu' className="bg-fundo px-30 py-4 justify-between flex">
            <div className="space-x-30 w-min">
                <Link href="/egresso/home" className={`text-azulBase ${router.pathname === '/egresso/home' ? 'border-b-2 border-azulBase' : ''}`}>Home</Link>
                <Link href="/egresso/eventos" className={`text-azulBase ${router.pathname === '/egresso/eventos' ? 'border-b-2 border-azulBase' : ''}`}>Eventos</Link>
                <Link href="/egresso/editais" className={`text-azulBase ${router.pathname === '/egresso/editais' ? 'border-b-2 border-azulBase' : ''}`}>Editais</Link>
                <Link href="/egresso/form" className={`text-azulBase ${router.pathname === '/egresso/form' ? 'border-b-2 border-azulBase' : ''}`}>Formulário</Link>
            </div>
            <div className='justify-center flex'>
                <button onClick={handleShowAlert}>
                    <Image src={iconLogOut} alt="Sair" />
                </button>
            </div>
        </div>
    );
}

export default NavBar;
