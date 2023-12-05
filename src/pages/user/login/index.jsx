"use client"
import React, { useState } from "react"; // Importe o useState corretamente
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Importe o useRouter corretamente
import Swal from "sweetalert2";
import jwt from 'jsonwebtoken';

import IconVoltar from "/public/icons/iconVoltar.svg";
import ImgLogin from "/public/icons/imgLogin.svg";
import IconUser from "/public/icons/iconUser.svg";
import IconSenha from "/public/icons/iconSenha.svg";
import IconSee from "/public/icons/iconSee.svg";
import IconUnsee from "/public/icons/iconUnsee.svg";

// API
import { authenticate } from "../../../../utils/apiLogin/api";

export default function Login() {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleBack = () => {
        window.history.back();
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: email,
                password: password,
            };

            const response = await authenticate(data);

            if (response && response.statusCode === 200) {
                const token = response.data.token;

                localStorage.setItem('token', token);

                Swal.fire({
                    icon: "success",
                    iconColor: '#20771B',
                    title: "Sucesso!",
                    text: "Login realizado com sucesso!",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#242B63",
                }).then((result) => {
                    if (result.isConfirmed) {
                        const decoded = jwt.decode(token);
                        console.log(decoded);
                        console.log(decoded.profile);
                        console.log(decoded.primaryAcess);
                        if (decoded) {
                            if (decoded.profile === 'coordinator') {
                                if (decoded.primaryAcess == true) {
                                    router.push('/egresso/home');
                                } else {
                                    router.push('/egresso/primeiroAcesso');
                                    decoded.primaryAcess = true;
                                }
                            } else if (decoded.profile === 'student') {
                                if (decoded.primaryAcess == true) {
                                    router.push('/egresso/home');
                                } else {
                                    router.push('/egresso/primeiroAcesso');
                                    decoded.primaryAcess = true;
                                }
                            } else if (decoded.profile === 'teacher') {
                                if (decoded.primaryAcess == true) {
                                    router.push('/docente/home');
                                } else {
                                    router.push('/docente/primeiroAcesso');
                                    decoded.primaryAcess = true;
                                }
                            }
                        }
                    }
                });
            } else {
                console.error('Erro na autenticação:', response);
                Swal.fire({
                    icon: "error",
                    iconColor: '#991D39',
                    title: "Ops...",
                    text: "Email e/ou senha incorretos!",
                    confirmButtonText: "Tentar novamente",
                    confirmButtonColor: "#242B63",
                });
            }
        } catch (error) {
            console.error('Erro ao fazer requisição:', error.message);
            Swal.fire({
                icon: "error",
                iconColor: '#991D39',
                title: "Ops...",
                text: "Erro ao fazer requisição!",
                confirmButtonText: "Tentar novamente",
                confirmButtonColor: "#242B63",
            });
        }
    };

    return (
        <main>
            <section className="flex flex-row h-screen">
                <div className="w-4/6">
                    <Image src={ImgLogin} className="object-cover h-screen w-full" alt="Imagem de alunos se formando" />
                </div>
                <form onSubmit={handleSubmit} className="w-3/6 flex flex-col justify-center px-60">
                    <button onClick={handleBack}>
                        <Image src={IconVoltar} alt="Voltar" className="mb-30" />
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
                                value={email}
                                onChange={handleEmailChange}
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
                                value={password}
                                onChange={handlePasswordChange}
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
                            <button type="submit" className="bg-azulBase mt-10 py-10 text-cinza10 text-sub font-semibold rounded-lg w-full transition-transform transform hover:scale-105 active:bg-azulEscuro">
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )
}
