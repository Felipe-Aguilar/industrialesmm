import Image from 'next/image';
import style from './nosotros.module.scss';

const Nosotros = () => {
    return ( 
        <div className={style.Nosotros}>
            <div className={style.Info}>
                <span>Conoce un poco más de</span>
                <h2>Nosotros</h2>

                <p>Estructuras y Cubiertas Industriales MM es una empresa mexicana con amplia experiencia en todas las ramas de estructura, cubiertas, soldaduras industriales, mantenimiento de naves y estructuras de cualquier tipo.</p>

                <p>Nuestras actividades principales están dirigidas a la fabricación de estructuras, montajes de cubiertas y amplia gama en soldadura para la misma, al igual que su mantenimiento y diseño.</p>

                <p>Así mismo contamos con la infraestructura necesaria en maquinaria, equipo y personal calificado que nos permite ejecutar nuestro trabajo cubriendo normas de seguridad y calidad de los mismos.</p>
            </div>

            <Image 
                src={'/images/Nosotrosbanner.webp'}
                alt='Estructuras industriales nosotros'
                width={1000}
                height={800}
                priority={false}
            />
        </div>
    );
}

export default Nosotros;