import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <button>
        <a href="/adm/form/formAdministrator">Formulário Administrador</a>
      </button>
    </main>
  )
}
