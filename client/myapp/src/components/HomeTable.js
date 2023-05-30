import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const HomeTable = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem("role");
    useEffect(() => {
        if (!localStorage.getItem("token")) { navigate("/") }
    })
    return (
        <div>
            {role === "user" && <div>You have logged in as :</div>}
            {role === "admin" && <div>hopvoodimnviod</div>}
        </div>
    )
}

export default HomeTable