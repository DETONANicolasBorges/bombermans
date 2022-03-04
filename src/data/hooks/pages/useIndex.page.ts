import { useState } from "react";

export default function useIndex() {
  const [cep, setCep] = useState(""),
    [erro, setErro] = useState(""),
    [buscaFeita, setBuscaFeita] = useState(false),
    [load, setLoad] = useState(false),
    [forncedores, setFornecedores] = useState([]);
  return {
    cep,
    setCep,
  };
}
