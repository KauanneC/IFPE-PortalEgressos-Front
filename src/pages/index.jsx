import React from 'react';
import NavBar from '@/components/navBar/user';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<main>
			<header>
				<NavBar />
			</header>
			<button>
				<a href="/adm/formAdministrator">Formulário Administrador</a>
			</button>
			<footer>
				<Footer />
			</footer>
		</main>
	);
}
