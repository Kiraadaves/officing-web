"use client"
import { useSelector } from "react-redux";
import Landing from "./Component/new";
import Table from "./Component/table"
import { RootState } from "../Redux/slice/interface";
const Index = () => {
  const products = useSelector((state:RootState) => state.asset.products)
  console.log(products)

  return (
    <div>
      { products? (
        <Table />
      ) : (
        <Landing />
      )
      }
    </div>
  );
};

export default Index;