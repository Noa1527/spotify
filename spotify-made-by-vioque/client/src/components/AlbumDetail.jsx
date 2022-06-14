import { Link } from "react-router-dom"

export const AlbumDetail = ({id, cover, desciption, release_date, popularity, name, tracks}) => {
    let newDate = new Date(release_date * 1000).toLocaleDateString("fr-FR")
    return (
        <div className="albumDetail">
            <h2 className="albumDetail__title">{name}</h2>
            <div className="albumDetail__imgWrapper">
                <img src={cover} alt="An album cover" className="albumDetail__cover"/>
            </div>
            <p className="albumDetail__description">{desciption}</p>
            <div className="albumDetail__tracks">
                <h3>Pistes de l'album</h3>
                <ul>
                    {
                        tracks.map(track => 
                            <li key={track.id}>{track.name}</li>)
                    }
                </ul>
            </div>
            <div className="albumDetail__bottom">
                <p className="albumDetail__popularity">Popularité : {popularity}/20</p>
                <p className="albumDetail__release">Date de sortie : {newDate}</p>
            </div>
        </div>
    )
}