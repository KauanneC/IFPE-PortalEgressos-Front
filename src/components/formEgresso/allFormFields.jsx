'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllFormFields } from "../../../utils/apiForm/api";
import noFields from "/public/icons/noFields.svg";

export default function AllFields({ formType, hasFields, setHasFields }) {
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(true);

    const backHome = () => {
        window.location.href = "/egresso/home";
    }

    useEffect(() => {
        if (hasFields) {
            getAllFormFields(formType)
                .then((response) => {
                    console.log(response)
                    setFields(response);
                    setLoader(false);
                })
        }
    }, [hasFields, formType]);

    if (fields.statusCode !== 404) {
        return (
            <div>
                {loader ? (
                    <div className="flex flex-col items-center justify-center my-50">
                        <div class="spinner" />
                    </div>
                ) : (
                    fields.map((field, index) => (
                        <div>
                            <div className="flex-grow">
                                <div className="bg-fundo mt-15 rounded-10 py-30 px-60">
                                    <div className="flex gap-10 items-center">
                                        <label className="text-subtitulo text-pretoTexto font-semibold">{field.question}</label>
                                    </div>
                                    {field.type === 'text' && (
                                        <input
                                            type="text"
                                            placeholder="Digite aqui"
                                            id="nome"
                                            className="bg-fundo w-full border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo pl-10 font-regular mt-15"
                                        />
                                    )}
                                    {field.type === 'radio' && (
                                        <div>
                                            {field.options.map((option, index) => (
                                                <div className="flex gap-10 mt-15">
                                                    <div className="flex w-full">
                                                        <input type="radio" name="radioOptions" />
                                                        <label className="w-full bg-inherit outline-none text-pretoTexto text-paragrafo font-regular ml-10">{option.question}</label>
                                                    </div>
                                                </div>
                                            ))}
                                            {field.other === 'Outros:' && (
                                                <div className="flex gap-10 mt-15">
                                                    <div className="flex w-full">
                                                        <input
                                                            type="radio"
                                                            name="radioOptions"
                                                            value="other"
                                                            className="mr-10"
                                                        />
                                                        <label>Outros:</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Digite aqui"
                                                            className="w-full bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {field.type === 'checkbox' && (
                                        <div>
                                            {field.options.map((option, index) => (
                                                <div className="flex gap-10 mt-15">
                                                    <div className="flex w-full">
                                                        <input type="checkbox" name="checkboxOptions" />
                                                        <input
                                                            type="text"
                                                            className="w-full bg-inherit outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                                            />
                                                    </div>
                                                </div>
                                            ))}
                                            {field.other === 'Outros:' && (
                                                <div className="flex gap-10 mt-15">
                                                    <div className="flex w-full">
                                                        <input
                                                            type="checkbox"
                                                            name="radioOptions"
                                                            value="other"
                                                            className="mr-10"
                                                        />
                                                        <label>Outros:</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Digite aqui"
                                                            className="w-full bg-inherit border-b-1 border-cinza07 outline-none text-pretoTexto text-paragrafo font-regular ml-10"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        )
    } else {
        return (
            <div>
                {loader ? (
                    <div className="flex flex-col items-center justify-center my-50">
                        <div class="spinner" />
                    </div>
                ) : (    
                    hasFields && (
                        <div className="flex flex-col items-center justify-center">
                            <Image className="mt-90" src={noFields} alt="Ícone representando que não tem campos no formulário" />
                            <p className="text-tituloSessão text-cinza05 text-center mt-15 mb-90">Ainda não há campos no formulário. <br></br> Comece agora!</p>
                        </div>
                    )
                )}
            </div>
        )
    }
}
