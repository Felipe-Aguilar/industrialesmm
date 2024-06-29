'use client';

import { BsList, BsXLg } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import style from './menu.module.scss';
import { AnimatePresence, motion } from "framer-motion";

const animation = {
    initial: {opacity: 0, right: -500},
    animate: {right:0, opacity: 1},
    transition: {type: 'spring', damping: 20},
    exit: {opacity: 0, right: -500}
}

const navigationMenu = [
    {name: 'Inicio', path: '#inicio'},
    {name: 'Nosotros', path: '#nosotros'},
    {name: '¿Quién nos rige?', path: '#quien'},
    {name: 'Servicios', path: '#servicios'},
    {name: 'Galería', path: '#galería'},
    {name: 'Nuestros clientes', path: '#clientes'},
    {name: 'Nuestro equipo', path: '#equipo'},
    {name: 'Contacto', path: '#contacto'},
]
const Menu = () => {

    const [open, setOpen] = useState<boolean>(false);

    useEffect(()=>{
        if (open) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    },[open]);

    return ( 
        <Fragment>
            <div className={style.Menu}>
                <button onClick={()=>setOpen(!open)} className={open ? style.Open : ''}>
                    { !open ? <BsList /> : <BsXLg /> }
                </button>
                
            </div>
            <AnimatePresence>
                { open && (
                    <motion.div {...animation} className={style.MenuBody}>
                        <span>Menú</span>

                        <nav>
                            {navigationMenu.map((link)=>(
                                <motion.a whileHover={{scale: 1.1}} href={link.path} key={link.name} onClick={()=>setOpen(false)}>
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>
                    </motion.div>
                ) }
            </AnimatePresence>

        </Fragment>
    );
}

export default Menu;