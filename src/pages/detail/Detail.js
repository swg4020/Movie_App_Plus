import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { MovieCon } from "./MovieCon";
import { PageTitle } from "../../components/PageTitle";
// import { MovieVideo } from "./MovieVideo";

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  // const [videoData, setVideoData] = useState();
  const [isLoadig, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        // const {results: videoData} = await videosMovie(id);
        // setVideoData(videoData);
        setData(detailData);
        setIsLoading(false);
      } catch (errors) {
        console.log(errors);
      }
    })();
  }, [id]);

  return (
    <>
      {isLoadig ? (
        <Loading />
      ) : (
        <>
          {data && (
            <>
              <PageTitle title={"Detail"} />
              <MovieCon data={data} />
              {/* <MovieVideo moviedata={videoData} /> */}
            </>
          )}
        </>
      )}
    </>
  );
};
