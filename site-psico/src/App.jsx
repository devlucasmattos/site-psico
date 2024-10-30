// src/App.js
import React from 'react';
import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';
import Title from './components/Title';
import Social from './components/Social';
import './index.css'; // CSS global

const App = () => {
    return (
        <>
            <Header />
            <div className="container foto-perfil">
                <img src="/src/assets/gabrielle-chemieski.jpg" alt="Foto de Gabrielle Chemieski" />
            </div>
            <Title text="Sobre mim"/>
            <Sobre />
            <Title text="Serviços oferecidos"/>
            <Servicos />
            <Title text="O que os pacientes dizem" />
            <Depoimentos text="Gabi é otima! Tem me ajudado muito com meus pensamentos e autoconhecimento! Me sinto muito melhor desde que começamos as sessões! Estou muito satisfeita com a evolução! " text2= " - L.D.S.R" />
            <Depoimentos text="Já estive com outros psicólogos e nunca me senti tão acolhida como Gabi me acolheu, ela é uma pessoa que me traz para o lugar de reflexão, e não de palpites, como já estive em outros profissionais que eram apenas palpiteiros, só tenho a agradecer a Gabi por tudo e quanto me fez evoluir nesse tempo juntas. Deus te abençoe, Gabi! Que você possa mudar muitas vidas com o seu trabalho." text2= " - P.P.R.S" />
            <Depoimentos text="Ela é incrível com as palavras e as pontuações sobre cada situação" text2="S.D.C.I" />
            <Depoimentos text="Gabrielle é maravilhosa. Tem me colocado para pensar e sem julgamentos. Me sinto muito a vontade." text2="A.M.O.S.D.A" />
            <Title text="Saiba mais"/>
            <Social/>
            <Footer />
        </>
    );
};

export default App;
