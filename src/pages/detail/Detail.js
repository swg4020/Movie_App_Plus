import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { MovieCon } from "./MovieCon";
import { PageTitle } from "../../components/PageTitle";

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoadig, setIsLoading] = useState();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
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
            </>
          )}
        </>
      )}
    </>
  );
};
