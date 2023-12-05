'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllFormFields } from "../../../utils/apiForm/api";
import noFields from "/public/icons/noFields.svg";

export default function AllFields({ formType, hasFields, setHasFields }) {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);

    const backHome = () => {
        window.location.href = "/egresso/home";
    }

    useEffect(() => {
        if (hasFields) {
            getAllFormFields(formType)
                .then((response) => {
                    setFields(response || []);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    setFields([]);
                    setLoading(false);
                });
        }
    }, [hasFields, formType]);

    const renderLoading = () => {
        return (
            <div className="flex flex-col items-center justify-center">
                {/* spin */}
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-azulBase"></div>
                <p className="text-legenda text-azulBase mt-2">Carregando...</p>
            </div>
        );
    };

    const renderField = (field) => {
        if (field.type === "text") {
            return (
                <div className="flex flex-col space-y-5">
                    <p className="text-pretoTexto text-subtitulo font-semibold">{field.question}</p>
                    <input
                        className="w-full bg-fundo px-10 py-10 text-pretoTexto border-b-2 border-cinza07 focus:outline-none text-input required"
                        type="text"
                        placeholder="Digite aqui"
                    />
                </div>
            );
        } else if (field.type === "radio") {
            return (
                <div className="flex flex-col space-y-5">
                    <p className="text-pretoTexto text-subtitulo font-semibold">{field.question}</p>
                    {field.options.map((option, index) => (
                        <div className="flex gap-10 mt-15" key={index}>
                            <div className="flex w-full">
                                <input type="radio" name="radioOptions" value={index} disabled />
                                <input
                                    type="text"
                                    value={option.question}
                                    className="w-full bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                />
                            </div>
                        </div>
                    ))}
                    {field.other === "Outros:" && (
                        <div className="flex gap-10 mt-15">
                            <div className="flex w-full">
                                <input
                                    type="radio"
                                    name="radioOptions"
                                    value="other"
                                    className="mr-10"
                                    disabled
                                />
                                <label>Outros:</label>
                                <input
                                    type="text"
                                    placeholder="Digite aqui"
                                    disabled
                                    className="w-full bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                />
                            </div>
                        </div>
                    )}
                </div>
            );
        } else if (field.type === "checkbox") {
            return (
                <div>
                    {field.options.map((option, index) => (
                        <div className="flex gap-10 mt-15" key={index}>
                            <div className="flex w-full">
                                <input type="checkbox" name="checkboxOptions" value={index} disabled />
                                <input
                                    type="text"
                                    value={option.question}
                                    className="w-full bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    };

    const renderFields = () => {
        if (loading) {
            return renderLoading(); // Se estiver carregando, exiba o componente de carregamento
        } else if (fields.statusCode === 404) {
            return (
                <div className="flex flex-col items-center justify-center">
                    <Image
                        className="mt-90"
                        src={noFields}
                        alt="Ícone representando que não tem campos no formulário"
                    />
                    <p className="text-tituloSessão text-cinza05 text-center mt-15 mb-90">
                        Ainda não há campos nesta seção
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    {fields.map((field, index) => (
                        <div key={index}>{renderField(field)}</div>
                    ))}
                </div>
            );
        }
    };

    return <div>{renderFields()}</div>;
}
