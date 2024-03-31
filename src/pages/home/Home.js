import { useEffect, useState } from "react";
import { nowPlaying, poPular, topRated, upComing } from "../../api";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";


export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [number, setNumber] = useState(0);
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: nowPopular } = await poPular();
        const { results: nowTopRated } = await topRated();
        const { results: nowUpComing } = await upComing();
        setNumber(Math.floor(Math.random()* 20));
        setNowData(nowResult);
        setPopData(nowPopular);
        setTopData(nowTopRated);
        setUpData(nowUpComing);
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
              <PageTitle title={"Home"} />
              <MainBanner imgUrl={nowData} numData={number} />
              
              <Movies movieData={nowData} titleText={"최신 영화"} />
              <Movies movieData={popData} titleText={"인기영화"} />
              <Movies movieData={topData} titleText={"평점이 높은 영화"} />
              <Movies movieData={upData} titleText={"개봉 예정 영화"} />
            </>
          )}
        </>
      )}
    </>
  );
};
