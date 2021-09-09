import { useLocalStorageState } from "ahooks";
import axios from "axios";
import React, { createContext, useMemo, useContext, useState } from "react";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorageState("auth", {
    email: "",
    nama: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async (values, history) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("role", "admin");
    try {
      setLoading(true);
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/login.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      if (res.data.status) {
        console.log("status oke");
        setAuth({
          email: res.data.email,
          nama: res.data.nama,
          role: res.data.role,
          id: res.data.id,
        });
        setLoading(false);

        history.push("/");
      }
      setLoading(false);
      console.log(res.data);
      console.log(auth);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const register = async (values, history) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("nama", values.username);
    formData.append("role", "admin");
    console.log("register");
    try {
      setLoading(true);
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/register.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      if (res.data.status) {
        console.log("status oke");
        setLoading(false);
        history.push("/login");
      }
      setLoading(false);

      console.log(res.data);
      console.log(auth);
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = (history) => {
    setAuth({ email: "", nama: "", role: "" });
    history.push("/login");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateUser = async (values, id, history) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("idadmin", id);
    formData.append("nama", values.username);
    console.log("id", id);
    try {
      setLoading(true);

      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/updateadmin.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      if (res.data.status) {
        console.log("status oke");
        setLoading(false);
        history.push("/users");
        window.location.reload();
      }
      setLoading(false);

      console.log(res.data);
      console.log(auth);
    } catch (error) {
      console.log(error);
    }
  };
  const memoedValue = useMemo(
    () => ({
      auth,
      login,
      register,
      logout,
      updateUser,
      loading,
    }),
    [auth, login, register, logout, updateUser, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
