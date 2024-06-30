import { LuEye } from 'react-icons/lu';
import style from './rige.module.scss';
import { TbTargetArrow } from 'react-icons/tb';

const Rige = () => {
    return ( 
        <div className={style.Rige}>
            <h2>¿Qué nos rige?</h2>

            <div className={style.Info}>
                <div className={style.Container}>
                    <div>
                        <TbTargetArrow />
                        <h3>Misión</h3>
                    </div>

                    <p>
                        Satisfacer las necesidades de nuestros clientes entregándoles un resultado de trabajo y servicio de alta calidad en tiempos programados y como resultado de nuestro trabajo muy bien ejecutado; promoviendo el desempeño de nuestro personal y equipo en la mejora continua para el mejor desarrollo de nuestros procesos, garantizando la confiabilidad a nuestros clientes.
                    </p>
                </div>

                <div className={style.Container}>

                    <div>
                        <LuEye />
                        <h3>Visión</h3>
                    </div>

                    <p>
                        Ser una empresa confiable y rentable en la fabricación, reparación y mantenimiento. Reconocidos a un nivel de alta calidad, entrega en tiempo y forma en obras encomendadas y precios competitivos para nuestros clientes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Rige;