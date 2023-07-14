import { Button } from "@mui/material";

const Counter = ({ contador, setContador }) => {
  return (
    <div>
      <h2>{contador}</h2>
      <Button onClick={() => setContador(contador + 1)}>Sumar</Button>
      <Button onClick={() => setContador(contador - 1)}>Restar</Button>
    </div>
  );
};

export default Counter;
