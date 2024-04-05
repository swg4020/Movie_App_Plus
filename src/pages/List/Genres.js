import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { genre, genres } from "../../api";

export const Genres = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [genreData, setGenreData] = useState();
  const num = Number(id);
  useEffect(() => {
    (async () => {
      try {
        const genresData = genres(id);
        const { genre: genredata } = await genre();
        setData(genresData);
        setGenreData(genredata);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const Gdata =
    genreData &&
    genreData.filter((data) => console.log(data.id === num ? data.name : ""));
  console.log(data);
  return <div>genre</div>;
};
