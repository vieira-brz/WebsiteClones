import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 1)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Olá, Eu sou
                <span className='font-semibold mx-2 text-white'>Vinícius</span>
                👋
                <br />
                Desenvolvedor de Software no Brasil 🇧🇷
            </h1>
        );

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Experiência profissional <br /> em que adquiri muitas habilidades ao longo do caminho
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    Leia mais
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    Realizei vários projetos ao longo dos anos. <br /> Curioso sobre?
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    Visite meu portfólio
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Precisa de um projeto feito ou procura um desenvolvedor? <br /> Estou a apenas algumas teclas de distância
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                    Vamos conversar
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;