import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetailsPage.css'; 

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector(state =>
    state.products.products.find(p => p.id === Number(id))
  );

  if (!product) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Produit non trouvé</p>;

  const imageSrc =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : "/images/placeholder.png";

  return (
    <div className="product-details">
      <h2>{product.title}</h2>

      <img
        src={imageSrc}
        alt={product.title}
        onError={e => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.png";
        }}
      />

      <p><strong>Categorie:</strong> {product.category?.name || 'N/A'}</p>
      <p><strong>Prix:</strong> {product.price} DH</p>
      <p><strong>Description:</strong> {product.description || 'Pas de description'}</p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Retour
      </button>
    </div>
  );
}

export default ProductDetailsPage;