import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../config/axios";
function useLogin() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    setError('')
    setLoader(!loader);
    e.preventDefault();
    try {
     const res= await api.post("auth/login", inputs, {withCredentials: true});
      navigate("/");
    } catch (err) {
      // console.log(err)
        setError(err.response.data || err.message);
    }finally{

        setLoader(false);
    }
  };
  return {
    handleSubmit,
    handleChange,
    err,
    loader,
  };
}

export default useLogin;
