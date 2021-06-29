import React, { useEffect, useState } from "react";
import { IKContext, IKImage } from "imagekitio-react";
function App() {
  const [data, setData] = useState([]);
  const urlEndPoint = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const dataFetch = fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f797e2cf0bb90660383d12fa045c15e6&language=en-US&page=1"
    );
    dataFetch.then((data) => data.json()).then((res) => setData(res.results));
    return () => {
      //
    };
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-gray-500 text-center">
        Selamat Datang di aplikasi Pencarian film terbaik di dunia, enjoy
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap">
        {data?.map((data) => (
          // <IKContext urlEndpoint={urlEndPoint}>
          //   <IKImage src={data.backdrop_path} />
          // </IKContext>
          <IKImage
            urlEndpoint={urlEndPoint}
            src={`${urlEndPoint}${data.backdrop_path}`}
            loading="lazy"
            height="500"
            width="500"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
