import React, { useState } from "react";
import Image from "next/image";

// Icons
import ImgLogin from "/public/icons/imgLogin.svg";
import IconVoltar from "/public/icons/iconVoltar.svg";
import IconUser from "/public/icons/iconUser.svg";
import IconSenha from "/public/icons/iconSenha.svg";
import IconSee from "/public/icons/iconSee.svg";
import IconUnsee from "/public/icons/iconUnsee.svg";
import iconUserDisable from "/public/icons/iconUserDisable.svg";
import iconPasswordDisable from "/public/icons/iconPasswordDisable.svg";
import iconSeeDesable from "/public/icons/iconSeeDesable.svg";
import iconUnseeDesable from "/public/icons/iconUnseeDesable.svg";

export default function NewUser() {
    const [perfilSelecionado, setPerfilSelecionado] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleButtonClick = (perfil) => {
        setPerfilSelecionado(perfil);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleBack = () => {
        window.history.back();
    };

    return (
        <main className="flex flex-col bg-fundo w-full font-cabin">
            <section className="flex">
                <div className="w-4/7">
                    <Image className="object-cover h-screen w-screen" src={ImgLogin} alt="Imagem representando formandos" />
                </div>
                <div className="w-3/7">
                    <div className="mx-60">
                        <button onClick={handleBack}>
                            <Image className="mt-30" src={IconVoltar} alt="Ícone de voltar" />
                        </button>
                        <h1 className="text-azulBase text-tituloDestaque font-semibold mt-70">Cadastro</h1>
                        <div className="flex flex-col items-center justify-center mt-100 mx-90">
                            <p className="text-pretoTexto">Escolha um perfil</p>
                            <div className="flex gap-10 mt-10">
                                <button
                                    onClick={() => handleButtonClick('Docente')}
                                    className={`${perfilSelecionado === 'Docente' ? 'bg-azulBase text-white' : ''} border border-azulBase rounded-8 px-30 py-10 text-azulBase text-paragrafo font-semibold transition-transform transform hover:scale-105 hover:bg-azulBase hover:text-white`}>
                                    Docente
                                </button>
                                <button
                                    onClick={() => handleButtonClick('Coordenador')}
                                    className={`${perfilSelecionado === 'Coordenador' ? 'bg-azulBase text-white' : ''} border border-azulBase rounded-8 px-30 py-10 text-azulBase text-paragrafo font-semibold transition-transform transform hover:scale-105 hover:bg-azulBase hover:text-whit`}>
                                    Coordenador
                                </button>
                                <button
                                    onClick={() => handleButtonClick('Egresso')}
                                    className={`${perfilSelecionado === 'Egresso' ? 'bg-azulBase text-white' : ''} border border-azulBase rounded-8 px-30 py-10 text-azulBase text-paragrafo font-semibold transition-transform transform hover:scale-105 hover:bg-azulBase hover:text-white`}>
                                    Egresso
                                </button>
                            </div>
                            <div className="flex flex-col justify-center items-center mt-30 w-full">
                                <div className={`${perfilSelecionado ? 'border-cinza05' : 'border-cinza07'} flex border-b-1 w-full mt-30`}>
                                    <label className="mx-auto my-auto ml-10">
                                        <Image
                                            className={`w-25 h-25 ${!perfilSelecionado ? 'imagem-desabilitada' : ''}`}
                                            src={perfilSelecionado ? IconUser : iconUserDisable}
                                            alt={perfilSelecionado ? 'Ícone de uma pessoa' : 'Ícone de uma pessoa desativado'}
                                        />
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        disabled={!perfilSelecionado}
                                        className={`${perfilSelecionado ? 'border-cinza07 text-pretoTexto' : 'border-cinza05'} bg-inherit text-cinza04 outline-none w-full p-10`}
                                    />
                                </div>
                                <div className={`${perfilSelecionado ? 'border-cinza05' : 'border-cinza07'} flex border-b-1 w-full mt-30`}>
                                    <label className="mx-auto my-auto ml-10">
                                        <Image
                                            className={`w-25 h-25 ${!perfilSelecionado ? 'imagem-desabilitada' : ''}`}
                                            src={perfilSelecionado ? IconSenha : iconPasswordDisable}
                                            alt={perfilSelecionado ? 'Ícone de uma cadeado' : 'Ícone de uma cadeado desativado'}
                                        />
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Senha"
                                        disabled={!perfilSelecionado}
                                        className={`${perfilSelecionado ? 'border-cinza07' : ''} bg-inherit text-cinza04 outline-none w-full p-10`}
                                    />
                                    <label className="mx-auto my-auto" onClick={togglePasswordVisibility}>
                                        <Image
                                            className={`w-25 h-25 mr-10 ${!perfilSelecionado ? 'imagem-desabilitada' : ''}`}
                                            src={perfilSelecionado ? (showPassword ? IconSee : IconUnsee) : iconUnseeDesable}
                                            alt={perfilSelecionado ? 'Ícone de uma cadeado' : 'Ícone de uma cadeado desativado'}
                                        />
                                    </label>
                                </div>
                                <div className="inline-block">
                                    <button
                                        disabled={!perfilSelecionado}
                                        className={`${perfilSelecionado ? 'transition-transform transform hover:scale-105' : 'bg-cinza05 text-pretoTexto'} mt-30 bg-azulBase rounded-10 text-white py-10 px-30`}>Cadastrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}