import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import IconVoltar from "/public/icons/iconVoltar.svg";
import ImgLogin from "/public/icons/imgLogin.svg";
import IconSenha from "/public/icons/iconSenha.svg";
import IconSee from "/public/icons/iconSee.svg";
import IconUnsee from "/public/icons/iconUnsee.svg";

export default function PrimeiroAcesso() {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordTouched(true);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordTouched(true);
    };

    const isPasswordValid = () => {
        if (!passwordTouched || password === "") {
            return true;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const isPasswordMatching = () => {
        return password === confirmPassword;
    };

    return (
        <main>
            <section className="flex flex-row h-screen">
                <div className="w-4/6">
                    <Image src={ImgLogin} className="object-cover h-screen w-full" alt="Imagem de alunos se formando" />
                </div>
                <div className="w-3/6 flex flex-col justify-center px-60">
                    <button className="flex flex-row items-center space-x-5 absolute top-24">
                        <Link href="/">
                            <Image src={IconVoltar} alt="Voltar" />
                        </Link>
                    </button>
                    <h1 className="font-semibold text-azulBase text-tituloDestaque mb-100">Primeiro Acesso</h1>
                    <div>
                        <div className="w-full relative text-paragrafo mt-30">
                            <label className="block absolute top-1/2 transform -translate-y-1/2 left-2">
                                <Image src={IconSenha} alt="Ícone de senha" />
                            </label>
                            <input
                                className={`w-full px-2 h-10 pl-9 text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required ${isPasswordMatching() && isPasswordValid() ? '' : 'border-red-500'}`}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Nova senha"
                                onChange={handlePasswordChange}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 cursor-pointer" onClick={togglePasswordVisibility}>
                                {showPassword ? (
                                    <Image src={IconSee} alt="Ícone para ver a senha" />
                                ) : (
                                    <Image src={IconUnsee} alt="Ícone para ocultar a senha" />
                                )}
                            </div>
                        </div>
                        <div className="absolute">
                            {!isPasswordValid() && passwordTouched && (
                                <p className="text-red-500 text-legenda mt-1">A senha deve ter pelo menos 8 caracteres, 1 número, 1 caractere especial e 1 letra maiúscula</p>
                            )}
                            {!isPasswordMatching() && passwordTouched && (
                                <p className="text-red-500 text-legenda mt-1">As senhas não coincidem</p>
                            )}
                        </div>
                        <div className="w-full relative text-paragrafo mt-30">
                            <label className="block absolute top-1/2 transform -translate-y-1/2 left-2">
                                <Image src={IconSenha} alt="Ícone de senha" />
                            </label>
                            <input
                                className={`w-full px-2 h-10 pl-9 text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required ${isPasswordMatching() ? '' : 'border-red-500'}`}
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirme nova senha"
                                onChange={handleConfirmPasswordChange}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-10 cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                                {showConfirmPassword ? (
                                    <Image src={IconSee} alt="Ícone para ver a senha" />
                                ) : (
                                    <Image src={IconUnsee} alt="Ícone para ocultar a senha" />
                                )}
                            </div>
                        </div>
                        <div className="absolute">
                            {!isPasswordMatching() && confirmPasswordTouched && (
                                <p className="text-red-500 text-legenda mt-1">As senhas não coincidem</p>
                            )}
                        </div>
                        <div>
                            <button className="bg-azulBase mt-30 py-10 text-cinza10 text-sub font-semibold rounded-lg w-full transition-transform transform hover:scale-105 active:bg-azulEscuro">
                                <Link href={'../../egresso/home'}>Entrar</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
