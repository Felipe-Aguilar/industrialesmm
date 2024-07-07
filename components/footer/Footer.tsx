import Image from 'next/image';
import style from './footer.module.scss';

const Footer = () => {

    const contact = [
        {image: '/images/ubication.svg', path: '#', name: 'Ciudad de México, México.'},
        {image: '/images/phone.svg', path: 'tel:+5215633218565', name: '+52 156 332 185 65'},
        {image: '/images/mail.svg', path: 'mailto: correo@estructurasmm.com', name: 'correo@estructurasmm.com'},
    ]

    const social = [
        {name: 'Instagram', path: '#'},
        {name: 'Facebook', path: '#'},
        {name: 'X', path: '#'},
        {name: 'LinkedIn', path: '#'},
    ]

    return ( 
        <footer className={style.Footer}>
            <div className={style.Info}>
                <div className={style.One}>
                    <Image 
                        src={'/images/Logotipo.svg'}
                        alt='Logotipo'
                        width={200}
                        height={200}
                    />
                </div>
                <div className={style.Two}>
                    <h3>Nuestro compromiso: su seguridad <br/> y satisfacción.</h3>
                </div>
            </div>

            <div className={`${style.Info} ${style.Info2}`}>
                <div className={style.One}>
                    <h4>Síguenos en redes sociales</h4>
                    
                    <div className={`${style.Links} ${style.LinksSocial}`}>
                        {social.map((link)=>(
                            <a key={link.name} href={link.path} target='_blank'>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className={style.Two}>
                    <h4>Datos de contacto</h4>

                    <div className={style.Links}>
                        {contact.map((link)=>(
                            <a key={link.name} href={link.path}>
                                <Image 
                                    src={link.image}
                                    alt='ícono'
                                    width={16}
                                    height={16}
                                />

                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <span>Copyright ©2024 All rights reserved | Estructuras y Cubiertas Industriales MM</span>
            </div>
        </footer>
    );
}

export default Footer;