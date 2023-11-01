import React from 'react';
import NavBar from '@/components/navBar/user';

export default function Home() {
	return (
		<main>
			<header>
				<NavBar />
			</header>
			<button>
				<a href="/adm/formAdministrator">Formulário Administrador</a>
			</button>
		</main>
	);
}
