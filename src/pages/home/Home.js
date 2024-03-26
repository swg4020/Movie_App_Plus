import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";

export const Home = () => {
  const [nowData, setNowData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        setNowData(nowResult);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);
  console.log(nowData);
  return <div></div>;
};
