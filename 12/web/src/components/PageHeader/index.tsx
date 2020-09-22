import React from 'react';

import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './style.css'


interface PageHeaderPros {
    title: string;
    description?: string;
    //o '?' depois da palavra significa que ela não é obrigatória
}

//props são as propriedades
const PageHeader: React.FC<PageHeaderPros> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoIcon} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* o '&&' é o if que eu estou esperando apenas uma resposta, eu tenho o se, mas não tenho o senão*/}
                {props.description && <p>{props.description}</p>}

                {props.children}
            </div>

        </header>
    );
}

export default PageHeader