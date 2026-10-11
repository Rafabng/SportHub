import { Landmark, MapPin } from "lucide-react";

export default function MatchVenue({ estadio }) {

    const consulta = encodeURIComponent(`${estadio.nome}, ${estadio.cidade}`);
    const linkMapa = `https://www.google.com/maps/search/?api=1&query=${consulta}`;

    return (
        <section className="match-card" aria-labelledby="titulo-local">
            <h2 id="titulo-local" className="match-card__titulo">Local do jogo</h2>

            <div className="local">
                <div className="local__info">
                    <p className="local__nome">{estadio.nome}</p>
                    <p className="local__cidade">{estadio.cidade}</p>

                    <a
                        className="local__mapa"
                        href={linkMapa}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MapPin size={15} />
                        Ver no mapa
                        <span className="sr-only">(abre em nova aba)</span>
                    </a>
                </div>
                
                {
                    estadio.foto ? (<img className="local__foto" src={estadio.foto} alt={`Vista do estádio ${estadio.nome}`} />) : 
                                   (<div className="local__foto--vazia" aria-hidden="true"><Landmark size={22} /></div>)
                }
            </div>
        </section>
    );
}