import { useLocalStorageState } from "ahooks";
import axios from "axios";
import React, { createContext, useMemo, useContext } from "react";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useLocalStorageState("auth", {
    email: "",
    nama: "",
    role: "",
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const login = async (values, history) => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("role", "admin");
    try {
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
        });
        history.push("/");
      }
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
      const res = await axios({
        url: "https://stooping-layers.000webhostapp.com/register.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
        method: "POST",
      });
      if (res.data.status) {
        console.log("status oke");
        history.push("/login");
      }
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
  const memoedValue = useMemo(
    () => ({
      auth,
      login,
      register,
      logout,
    }),
    [auth, login, register, logout]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
