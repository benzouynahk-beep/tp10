import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>À propos de Shop-Ease</h1>
      <p>
        Shop-Ease est une plateforme e-commerce moderne développée avec <strong>React</strong> et <strong>Redux</strong>. 
        Elle permet aux utilisateurs de parcourir des produits, ajouter au panier, et gérer leur compte de manière fluide et sécurisée.
      </p>
      
      <h2>Fonctionnalités principales :</h2>
      <ul>
        <li>Navigation rapide entre les catégories de produits</li>
        <li>Filtrage par prix et catégorie pour trouver rapidement ce que vous cherchez</li>
        <li>Panier dynamique avec suivi des articles et total mis à jour en temps réel</li>
        <li>Authentification sécurisée pour un compte personnalisé</li>
        <li>Design responsive pour une expérience optimale sur mobile et desktop</li>
      </ul>

      <h2>Pourquoi Shop-Ease ?</h2>
      <p>
        Nous nous efforçons de fournir une expérience utilisateur simple et agréable, similaire aux plus grandes plateformes e-commerce.
        Notre objectif est de rendre vos achats en ligne rapides, sûrs et intuitifs.
      </p>
    </div>
  );
}

export default About;