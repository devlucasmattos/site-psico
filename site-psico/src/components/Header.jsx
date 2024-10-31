import React from 'react';
import './Header.css'; 

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Gabrielle Chemieski</h1>
                <h2>CRP 07/39189</h2>
                <div className="p">
                <p>A transformação que você busca começa na sua mente. <br />Vamos caminhar juntos? 🧠⤵️</p>
                </div>
                <a href="https://api.whatsapp.com/message/3YQT5VMFXFKHI1?autoload=1&app_absent=0" className="btn-agendar">
                    <span>Agende sua consulta pelo WhatsApp</span>
                    
                </a>
            </div>
        </header>
    );
};

export default Header;