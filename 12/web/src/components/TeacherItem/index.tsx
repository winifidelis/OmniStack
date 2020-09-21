import React from 'react';

import './style.css';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://i.pinimg.com/originals/73/95/cd/7395cdc04edf5226e91f60b6a548adfc.jpg" alt="Professor Fudêncio" />
                <div>
                    <strong>Fudêncio</strong>
                    Química
                </div>
            </header>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Paisis, filhis, espiritis santis.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;