
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/productActions';
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      title: name,
      price: Number(price),
      images: [image],
      category: { name: category },
    };
    dispatch(addProduct(newProduct));
    navigate('/products');
  };

  return (
    <div className="add-product-wrapper">
      <div className="add-product-form">
        <h2>Ajouter un produit</h2>

        <label>Nom</label>
        <input placeholder="Nom" value={name} onChange={e => setName(e.target.value)} />

        <label>Catégorie</label>
        <input placeholder="Categorie" value={category} onChange={e => setCategory(e.target.value)} />

        <label>Prix</label>
        <input placeholder="Prix" type="number" value={price} onChange={e => setPrice(e.target.value)} />

        <label>Image URL</label>
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />

        <div className="buttons">
          <button onClick={handleAdd}>Ajouter</button>
          <button className="back-btn" onClick={() => navigate('/products')}>Retour</button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;