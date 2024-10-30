import React from 'react';
import './Depoimentos.css'; 

const Depoimentos = ({text, text2}) => {
    return (
        <>
        <section id="depoimentos" className="depoimentos">
            <div className="container">
                <p>"{text}"</p>
                <p><strong>{text2}</strong></p>
            </div>
        </section>

        </>
    );
};

export default Depoimentos;