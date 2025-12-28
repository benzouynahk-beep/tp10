import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>A propos de Shop-Ease</h1>
      <p>
        Shop-Ease est une plateforme e-commerce moderne developpee avec <strong>React</strong> et <strong>Redux</strong>. 
        Elle permet aux utilisateurs de parcourir des produits, ajouter au panier, et gerer leur compte de manière fluide et sacurisae.
      </p>
      
      <h2>Fonctionnalités principales :</h2>
      <ul>
        <li>Navigation rapide entre les categories de produits</li>
        <li>Filtrage par prix et categorie pour trouver rapidement ce que vous cherchez</li>
        <li>Panier dynamique avec suivi des articles et total mis a jour en temps reel</li>
        <li>Authentification securisee pour un compte personnalisé</li>
        <li>Design responsive pour une experience optimale sur mobile et desktop</li>
      </ul>

      <h2>Pourquoi Shop-Ease ?</h2>
      <p>
        Nous nous efforeons de fournir une experience utilisateur simple et agreable, similaire aux plus grandes plateformes e-commerce.
        Notre objectif est de rendre vos achats en ligne rapides, sûrs et intuitifs.
      </p>
    </div>
  );
}

export default About;