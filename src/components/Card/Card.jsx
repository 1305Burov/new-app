import './Card.scss';

const Card = ({image, alt, children}) => {
    return (
        <div className="card">
            {image && 
                <div className="card-image">                     
                    <img src={image} alt={alt} />
                </div>
            }

            <div className="card-content">
                {children}
            </div>
        </div>
    );
}

export default Card;
