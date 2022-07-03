import "./Banner.css";
import BannerImg from "/imgs/Banner.svg";

const Banner = () => {

    const listFeatures = ["Alta Visibilidade", "Segurança", 
                          "Facilidade em Anunciar", 
                          "+1000 Produtos Vendidos", 
                          "Interface Simples",];

    return (
        <div className="banner">
            <div className="banner-content">
                <h1 className="title-banner">Anuncie Já o seu <br /> produto!</h1>
                <ul className="ul-banner">
                    { listFeatures.map( (item, index) => <li className="li-banner" key={index}>{item}</li> )}
                </ul>
            </div>
            <div className="banner-image">
                <img className="img-banner" src={BannerImg} alt="img-banner" />
                
            </div>
        </div>
    );
}

export default Banner;
