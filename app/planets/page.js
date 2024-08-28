'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Link from 'next/link'
export default function Planets() {

    const router = useRouter();

    const [data, setdata] = useState([]);
    const [search, setsearch] = useState('');


    useEffect(() => {
        async function fetchplanets() {
            const planets = await fetch("https://65d563793f1ab8c63436dc50.mockapi.io/space");
            setdata(await planets.json())

        }
        fetchplanets();
    }, []);



    return (
        <>
            <div class="flex grid grid-rows-1 justify-content-center">
                <input type="text" class="text-black  m-5" onChange={(e) => setsearch(e.target.value)} placeholder="Search" />

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {data.filter((item)=>{
                        return search.toLowerCase() === '' ? item:item.planet_name.toLowerCase().includes(search)
                    }).map((item) =>
                            <div key={item.id} className="border text-black w-64 h-48 text-center rounded-md">
                            <h1 className="text-2xl  text-white mt-16">{item.planet_name}</h1>
                            {/* <p className="text-sm">USA Cricket</p> */}
                        </div>
                )}  
                </div>    
                    
                
        </>
    )
}