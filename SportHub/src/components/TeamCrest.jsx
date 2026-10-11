/** Ajustes decorativos dos times */
export default function TeamCrest({ time, tamanho = 64 }) {

    if (time.logo) {
        return (
            <img 
                className="match-crest"
                src={time.logo}
                alt=""
                width={tamanho}
                height={tamanho}
            />
        );
    }

    return (
        <svg 
            className="match-crest"
            viewBox="0 0 64 72"
            width={tamanho}
            height={tamanho * 1.125}
            aria-hidden="true"
            focusable="false"
        >
            <path 
                d="M32 2 6 10v24c0 17 11 29 26 36 15-7 26-19 26-36V10L32 2Z"
                fill={time.cor}
                stroke="rgba(0,0,0,.18)"
                strokeWidth="2"
            />
            <text 
                x="32"
                y="40"
                textAnchor="middle"
                fontSize="18"
                fontWeight="700"
                fill="#fff"
                fontFamily="inherit"
            >
                {time.sigla}
            </text>
        </svg>
    )

} 


