
// this is cards for movies
import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { ThreeDots } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);

      try {
        const querySnapshot = await getDocs(moviesRef);
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-96">
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((e, i) => (
          <Link to={`/Detail/${e.id}`} key={e.id}>
            <div
               key={i}
              className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-500 rounded-md"
            >
              <img
                className="card-image h-60 md:h-72 w-full"
                src={e.image}
                alt="poster"
              />
              <h1 className="text-red-500">Title: {e.title}</h1>
              <h1 className="flex items-center text-red-500">
                Rating: <ReactStars value={e.rating/e.rated} size={20} edit={false} half={true} />
              </h1>
              <h1 className="text-red-500">Year: {e.year}</h1>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Card;

