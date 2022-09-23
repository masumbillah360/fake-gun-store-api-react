import React, { useEffect, useState } from 'react';
import Showguns from '../Showguns/Showguns';
import './Loadguns.css'

const Loadguns = (props) => {
    const [guns, setGuns] = useState([]);
    const datas=async()=>{
        const res = await fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json');
        const data = await res.json();
        setGuns(data);
    }
    useEffect(()=>{
        datas();
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {guns.map(gun=> <Showguns data = {gun} key = {gun.id} cart = {props.data}></Showguns>)}
        </div>
    );
};

export default Loadguns;