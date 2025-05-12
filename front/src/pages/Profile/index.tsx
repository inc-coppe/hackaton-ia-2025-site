import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const response = await fetch("http://localhost:8000/api/auth/user/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          }
        } catch {
          console.error("Erro ao buscar usuário");
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <img src={user.profile_picture_url} alt="Foto do Perfil" />
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}

export default Profile;
