import React from 'react';

export default function CardEvent({ titulo, data, horario, local, descricao, expandido, onToggleExpansao, onToggleReducao }) {
    const cardHeight = expandido ? 'auto' : '341px';

    return (
        <div className={`w-310 h-auto flex flex-col space-y-15 border-azulForm border-t-10 px-20 py-30 rounded-lg border-2 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg h-${cardHeight} overflow-hidden`}>
            <h2 className='font-semibold text-pretoTexto text-subtitulo text-center'>{titulo}</h2>
            <div className='space-y-10 flex flex-col items-start'>
                <div className='flex flex-row items-start space-x-5'>
                    <p className='font-semibold text-azulBase text-paragrafo'>Data: </p>
                    <p className='font-normal text-pretoTexto text-paragrafo'>{data}</p>
                </div>
                <div className='flex flex-row items-start space-x-5'>
                    <p className='font-semibold text-azulBase text-paragrafo'>Horário: </p>
                    <p className='font-normal text-pretoTexto text-paragrafo'>{horario}</p>
                </div>
                <div className='flex flex-row items-start space-x-5'>
                    <p className='font-semibold text-azulBase text-paragrafo'>Local: </p>
                    <p className='font-normal text-pretoTexto text-paragrafo'>{local}</p>
                </div>
                <div className='flex flex-col space-x-5'>
                    <p className='font-semibold text-azulBase text-paragrafo'>Descrição: </p>
                    <p className={`font-normal text-pretoTexto text-paragrafo ${expandido ? '' : 'line-clamp-3'}`}>
                        {descricao}
                    </p>
                    {!expandido && (
                        <button onClick={onToggleExpansao} className='text-azulBase font-semibold underline cursor-pointer text-right'>
                            Ver mais
                        </button>
                    )}
                    {expandido && (
                        <button onClick={onToggleReducao} className='text-azulBase font-semibold underline cursor-pointer text-right'>
                            Ver menos
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
