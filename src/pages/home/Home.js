import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        setNowData(nowResult);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
        alert("에러 발생");
      }
    })();
  }, []);
  console.log(nowData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {nowData && (
            <>
              <MainBanner imgUrl={nowData} />

              <Movies movieData={nowData} titleText={"인기영화"} />
            </>
          )}
        </>
      )}
    </>
  );
};
