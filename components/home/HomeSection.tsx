import Image from 'next/image';
import style from './home.module.scss';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const HomeSection = () => {
    return ( 
        <div className={style.Home} id='#inicio'>
            <Image 
                src={'/images/HomeBanner.webp'}
                alt='Estructuras industriales imagen'
                width={1000}
                height={1000}
            />

            <div className={style.Info}>
                <Image 
                    src={'/images/Logotipo.svg'}
                    alt='Logotipo estructuras industriales'
                    width={400}
                    height={100}
                    className={style.Logotipo}
                />

                <h1>Construyendo <br/> soluciones sólidas <br/> para su industria.</h1>

                <button>
                    Contáctanos
                </button>

                <div className={style.SocialIcons}>
                    <a href="" target='_blank'>
                        <FaInstagram />
                    </a>
                    <a href="" target='_blank'>
                        <FaFacebookF />
                    </a>
                    <a href="" target='_blank'>
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;