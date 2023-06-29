
const TextAuthor = ( {data} ) => {

    return (
        <div className="cookie-information">
            <img 
            src="/fondos/yoda.jpg" 
            alt="Imagen de galleta" 
            />
            <div className="card">
                <p className="text">{ data.phrase }</p>
                <p className="author">{ data.author }</p>
            </div>
        </div> 
        );
    };
    
    export default TextAuthor; 