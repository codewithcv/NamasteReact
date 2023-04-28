import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText, data } = err;
  console.log(err);

  return (
    <>
      <h1>
        {status}:{statusText}
      </h1>
      <h3>{data}</h3>
    </>
  );
};
export default Error;
