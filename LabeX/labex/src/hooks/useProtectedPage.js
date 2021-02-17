import {useHistory} from "react-router-dom"
import React, {useEffect} from 'react'


export const useProtectedPage = () => {
    const history = useHistory();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        history.push("/login");
      }
    }, [history]);
  };