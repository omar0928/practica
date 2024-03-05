import { useParams } from "react-router-dom";

export const Detalles = () => {
  const match = useParams();

  console.log(match);
  return <div>{match.params}</div>;
};
