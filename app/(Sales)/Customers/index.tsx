"use client"
import Header from "@/components/Header";
import New from "./Landing"
import CustomerList from "./CustomersList"
import CustomerBody from "@/components/CustomerBody";

const Index = () => {
 

  return (
    <CustomerBody>
      <Header pageTitle="Customers" />
      <CustomerList />
      
    </CustomerBody>
  );
};

export default Index;