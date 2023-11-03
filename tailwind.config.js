/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'azulEscuro': '#131736',
                'azulBase': '#242B63',
                'azulLink': '#142797',
                'azulForm': '#87A8CD',
                'fundoEvento': '#9EB8D6',
                'vermelhoButton': '#991D39',
                'verdeButton': '#20771B',
                'pretoTexto': '323344',
                'cinza01': '#191919',
                'cinza02': '#333333',
                'cinza03': '#4D4D4D',
                'cinza04': '#555555',
                'cinza05': '#666666',
                'cinza06': '#808080',
                'cinza07': '#999999',
                'cinza08': '#B3B3B3',
                'cinza09': '#CCCCCC',
                'cinza10': '#E6E6E6',
                'preto': '#000000',
                'branco': '#FFFFFF',
            },

            fontFamily: {
                'cabin': ['Cabin', 'sans-serif'],
            },

            fontSize: {
                'tituloDestaque': '55px',
                'textoDestaque': '44px',
                'tituloPrincial': '35px',
                'tituloSessão': '28px',
                'subtitulo': '23px',
                'paragrafo': '18px',
                'legenda': '14px',
            },

            margin: {
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '120': '120px',
            },

            padding: {
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
            },
        },
    },
}