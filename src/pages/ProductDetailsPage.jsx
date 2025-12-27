
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetailsPage.css'; 

function ProductDetailsPage() {
  const { id } = useParams();
  const product = useSelector(state =>
    state.products.products.find(p => p.id === Number(id))
  );

  if (!product) return <p>Produit non trouvé</p>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img
        src={product.images?.[0] || '/images/produit.webp'}
        alt={product.title}
        onError={e => { e.target.onerror = null; e.target.src = '/images/produit.webp'; }}
      />
      <p><strong>Catégorie:</strong> {product.category?.name || 'N/A'}</p>
      <p><strong>Prix:</strong> {product.price} DH</p>
      <p><strong>Description:</strong> {product.description || 'Pas de description'}</p>
    </div>
  );
}

export default ProductDetailsPage;