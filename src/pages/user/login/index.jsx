import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import IconVoltar from "/public/icons/iconVoltar.svg";
import ImgLogin from "/public/icons/imgLogin.svg";
import IconUser from "/public/icons/iconUser.svg";
import IconSenha from "/public/icons/iconSenha.svg";
import IconSee from "/public/icons/iconSee.svg";
import IconUnsee from "/public/icons/iconUnsee.svg";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
        console.log(showPassword)
    }

    return (
        <main>
            <section className="flex flex-row h-screen">
                <div className="w-3/5">
                    <Image src={ImgLogin} className="object-cover h-screen w-full" alt="Imagem de alunos se formando" />
                </div>
                <div className="w-2/5 flex flex-col justify-center px-60">
                    <button className="flex flex-row items-center space-x-5 absolute top-36">
                        <Link href="/">
                            <Image src={IconVoltar} alt="Voltar" />
                        </Link>
                    </button>
                    <h1 className="font-semibold text-azulBase text-tituloDestaque mb-100">Login</h1>
                    <div className="space-y-30">
                        <div className="w-full relative text-paragrafo">
                            <label className="block absolute top-1/2 transform -translate-y-1/2 left-2">
                                <Image src={IconUser} alt="Ícone de usuário" />
                            </label>
                            <input
                                className="w-full px-2 h-10 pl-9 text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                                type="email"
                                placeholder="Email ou SIAPE"
                            />
                        </div>
                        <div className="w-full relative text-paragrafo">
                            <label className="block absolute top-1/2 transform -translate-y-1/2 left-2">
                                <Image src={IconSenha} alt="Ícone de senha" />
                            </label>
                            <input
                                className="w-full px-2 h-10 pl-9 text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Senha"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 cursor-pointer" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <Image src={IconSee} alt="Ícone para ver a senha" />
                                ) : (
                                    <Image src={IconUnsee} alt="Ícone para ocultar a senha" />
                                )}
                            </div>
                            <p className="right-0 absolute">
                                <Link href="" className="text-paragrafo text-azulBase">Esqueci minha senha</Link>
                            </p>
                        </div>
                        <div>
                            <button className="bg-azulBase py-10 text-cinza10 text-sub font-semibold rounded-lg w-full transition-transform transform hover:scale-105 active:bg-azulEscuro">
                                <Link href={'../../egresso/home'}>Entrar</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
