import { BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs';
import style from './contacto.module.scss';

const Contacto = () => {
    return ( 
        <div className={style.Contacto} id='#contacto'>
            <div className={style.Container}>
                <div>
                    <h2>Contacto</h2>
                    <span>Escríbenos y nos pondremos en contacto <br /> para servirte.</span>

                    <div className={style.Social}>
                        <a href="#" target='_blank'>
                            <BsInstagram />
                        </a>
                        <a href="#" target='_blank'>
                            <BsFacebook />
                        </a>
                        <a href="#" target='_blank'>
                            <BsTwitterX />
                        </a>
                    </div>
                </div>

                <div>
                    <form >
                        <label>Nombre: </label>
                        <input type="text" />

                        <label>Correo:</label>
                        <input type="text" />

                        <label>Teléfono:</label>
                        <input type="text" />

                        <label>Mensaje:</label>
                        <textarea>

                        </textarea>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contacto;