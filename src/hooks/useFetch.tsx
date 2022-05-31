import { useState } from "react";
import { Data } from "../interfaces/Interfaces";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Data | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const getProduct = async (trackingCode: number) => {
    try {
      setLoading(true);

      const res = await fetch("../data/books.json");
      const data = (await res.json()) as Data[];

      const product = data.find((item) => item.trackingCode === trackingCode);

      if (product === undefined) {
        throw new Error("Encomenda não encontrada!");
      }

      setData(product);
      setError(null);
      setLoading(false);

      return product;
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      return undefined;
    }
  };

  const resetData = () => {
    setData(undefined);
  };

  const resetError = () => {
    setError(null);
  };

  return { loading, data, error, getProduct, resetData, resetError };
};

export default useFetch;
