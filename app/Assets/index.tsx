"use client"
import { useSelector } from "react-redux";
import Header from "@/components/Header";
import Landing from "./Component/new";
import Table from "./Component/table"
import { RootState } from "../Redux/slice/interface";
import AssestBody from "@/components/AssestBody";
const Index = () => {
  const products = useSelector((state:RootState) => state.asset.products)
  console.log(products)

  return (
    <AssestBody>
      <Header pageTitle="Assets" />
      { products? (
        <Table />
      ) : (
        <Landing />
      )
      }
    </AssestBody>
  );
};

export default Index;