'use client'


import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";


const Planetbyid=()=>{

    const [info,setinfo] = useState({});
    const params = useParams();

   

console.log(info);
    useEffect(() => {
        async function fetchplanetsbyid() {
            const planets = await fetch("https://65d563793f1ab8c63436dc50.mockapi.io/space/"+ params.id);
            setinfo(await planets.json())

        }
        fetchplanetsbyid(params.id);
    }, []);

    return(
        <>
            {/* {info ? (

        <div>
            <h1 className="text-white">{info.planet_name}</h1>
        </div>
            ) : (
                <p>Loading...</p>
            )} */}
        </>
    )
}

export default Planetbyid;