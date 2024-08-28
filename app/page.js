import Image from "next/image";
import homeimage from "../public/home.jpg"

export default function Home() {
  return (
    <div className="text-center pt-20">
      <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
        Home of Universe
      </h1>
      <p className="mt-5 text-gray-400">Explore the planets , This website is created to practice NEXT JS 14 and its fundamentals of fetching data and displaying it <br/> Upcoming deploys with features of all the elements available in space , and handling the HTTP methods <br/> This just consists of fetched data from the API and displaying it , with filter search.</p>
      
    </div>
  );
}
