/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
                'pretoTexto': '#323344',
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
                'fundo': '#FAFAFA',
            },

            fontFamily: {
                'cabin': ['Cabin', 'sans-serif'],
            },

            fontSize: {
                'tituloDestaque': '49px',
                'textoDestaque': '39px',
                'tituloPrincial': '31px',
                'tituloSessão': '25px',
                'subtitulo': '20px',
                'paragrafo': '16px',
                'legenda': '13px',
            },

            lineHeight: {
                '150': '150%'
            },

            margin: {
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '60': '60px',
                '90': '90px',
                '100': '100px',
                '120': '120px',
            },

            padding: {
                '5': '5px',
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '25': '25px',
                '30': '30px',
                '60': '60px',
                '120': '120px',
            },

            gap: {
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '30': '30px',
            },

            width: {
                '310': '310px',
                '400': '400px',
            },

            height: {
                '185': '185px',
                '341': '341px',
            },

            borderRadius: {
                '10': '10px',
            },

            borderWidth: {
                '10': '10px',
            },

            space: {
                '5': '5px',
                '10': '10px',
                '15': '15px',
                '20': '20px',
                '30': '30px',
                '100': '100px',
            },
        },
    },
}
