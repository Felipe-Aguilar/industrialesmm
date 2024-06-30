'use client';

import style from './servicios.module.scss';
import { motion } from 'framer-motion';

const services = [
    {name: 'Obra Civil', image: 'obra-civil.webp'},
    {name: 'Obra Estructural', image: 'obra-estructural.webp'},
    {name: 'Servicio de Cubiertas', image: 'servicio-cubiertas.webp'},
]

const Servicios = () => {
    return ( 
        <div className={style.Servicios} id='#servicios'>
            <div className={style.Contain}>
                <h2>Servicios</h2>

                <div className={style.ServicesContain}>
                    {services.map((servicio, index)=>(
                        <motion.div 
                            key={servicio.name} 
                            className={style.ContainService} 
                            style={{background: `url(/images/${servicio.image})`}}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index, duration: 0.3}}
                        >
                            <motion.span 
                                initial={{opacity: 0}} 
                                whileInView={{opacity: 1}}
                                viewport={{once: true}}
                                transition={{delay: index + 1}}
                            >
                                {servicio.name}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Servicios;