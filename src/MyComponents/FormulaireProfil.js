import React, { useState } from 'react';

function FormulaireProfil({ ajouterProfil }) {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nouveauProfil = { nom, age, profession, image };
    ajouterProfil(nouveauProfil);

    setNom('');
    setAge('');
    setProfession('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light mb-4">
      <h4 className="text-center mb-3 text-primary">Ajouter un nouveau profil</h4>
      <div className="mb-3">
        <label className="form-label">Nom :</label>
        <input
          type="text"
          className="form-control"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Âge :</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Profession :</label>
        <input
          type="text"
          className="form-control"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image :</label>
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Ajouter Profil
      </button>
    </form>
  );
}

export default FormulaireProfil;
