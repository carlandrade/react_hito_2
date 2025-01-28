import React from "react";

const Profile = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Perfil del Usuario</h1>
      <div className="card mx-auto mt-4" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h5 className="card-title">Bienvenido, Usuario</h5>
          <p className="card-text">
            Aquí puedes ver tu información personal o editarla si es necesario.
          </p>
          <button className="btn btn-primary w-100">Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
