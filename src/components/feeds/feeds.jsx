import profile from "../../assets/rin tohsaka.jpg";
import { useEffect, useState } from "react";

function Feed() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <section className="max-w-[90%] mx-auto bg-gray-50/30 dark:bg-gray-800 border dark:border-none shadow-lg p-4 rounded-lg mb-4">
      <div className="flex gap-2">
        {loader ? (
          <div className="relative flex w-64 animate-pulse gap-2 p-4">
            <div className="h-12 w-12 rounded-full bg-slate-400"></div>
            <div className="flex-1">
              <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
              <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
            </div>
            <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
          </div>
        ) : (
          <div className="relative flex w-64 gap-2 p-2">
            <div className="h-10 w-10 rounded-full shadow-sm shadow-blue-200 overflow-hidden">
              <img className="w-full h-full" src={profile} alt="Fundador" />
            </div>
            <div>
              <h3 className="font-bold font-primarybold text-xs md:text-sm lg:text-sm xl:text-xl  ">Brayan Palacios</h3>
              <p className="font-primaryMedium text-sm  dark:text-dark-secondaryText">
                hace una hora
              </p>
            </div>
            <div className="absolute bottom-1 right-4 pt-0 pb-0 p-1 overflow-hidden rounded-md bg-slate-300/30 backdrop-blur-md dark:text-dark-text">
              Seguir
            </div>
          </div>
        )}
      </div>
      <p className="mt-2 font-primaryRegular">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum vel
        esse, deserunt vitae quis expedita, debitis autem quos nulla enim
        recusandae, eveniet voluptate accusantium? Deserunt eos delectus culpa
        voluptatem rerum.
      </p>
      <div className="mt-4">
        <img
          src="https://via.placeholder.com/1000x500"
          alt="Post"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Feed