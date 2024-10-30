import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div className="social-links">
            <a href="https://www.instagram.com/psi.gabriellechemieski/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/people/Psic%C3%B3loga-Gabrielle-Chemieski-CRP-0739189/100090650666440/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://api.whatsapp.com/message/3YQT5VMFXFKHI1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
    );
};

export default Social;
