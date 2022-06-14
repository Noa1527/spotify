export const AnAlbum = ({id, cover_small, title}) => {

    return (
        <div className="album">
            <input type="hidden" value={id} className={"album__id album__id--" + {id}} />
            <h2 className="album__title">{title}</h2>
            <div className="album__coverWrapper">
                <img className="album__cover" src={cover_small} alt="An album cover" />
            </div>
            <a href={"/albumsdetails/" + id}>Voir le détail</a>
        </div>
    )
}