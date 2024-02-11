import React from "react";
import { H1 } from "@/components/typography";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import OrderForm from "@/components/OrderForm";

const Page = () => {
  return (
    <div>
      <Container pad>
        <H1>Fill the form to place order</H1>
        <Container sm pad>
          <OrderForm />
        </Container>
      </Container>
    </div>
  );
};

export default Page;
