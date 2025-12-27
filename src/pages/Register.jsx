import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    username: "",
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    if (
      !user.nom ||
      !user.prenom ||
      !user.username ||
      !user.email ||
      !user.password
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    dispatch({ type: "REGISTER", payload: user });
    navigate("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">Inscription</h3>

      <input
        className="form-control mb-3"
        placeholder="Nom"
        value={user.nom}
        onChange={e => setUser({ ...user, nom: e.target.value })}
      />

      <input
        className="form-control mb-3"
        placeholder="Prénom"
        value={user.prenom}
        onChange={e => setUser({ ...user, prenom: e.target.value })}
      />

      <input
        className="form-control mb-3"
        placeholder="Nom utilisateur"
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />

      <input
        className="form-control mb-3"
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />

      <input
        className="form-control mb-4"
        type="password"
        placeholder="Mot de passe"
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />

      <button
        className="btn btn-success w-100"
        onClick={submit}
      >
        S'inscrire
      </button>
    </div>
  );
}