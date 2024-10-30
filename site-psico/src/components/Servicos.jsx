import React from 'react';
import './Servicos.css'; 

const Servicos = () => {
    return (
        <section id="servicos" className="servicos">
            <div className="container">
                <div className="cards">
                    <div className="card">
                        <h3>Terapia Individual</h3>
                        <p>Explorar pensamentos, emoções e comportamentos, visando autoconhecimento, resolução de conflitos e melhoria do bem-estar emocional.</p>
                    </div>
                    <div className="card">
                        <h3>Psicoeducação</h3>
                        <p>Educação sobre saúde mental e técnicas para lidar com problemas emocionais.</p>
                    </div>
                    <div className="card">
                        <h3>Aconselhamento Online</h3>
                        <p>Atendimentos online para que você receba suporte no conforto da sua casa.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicos;
