"use client";
import React from "react";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Container } from "postcss";
import { H2 } from "./typography";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import OrderStore from "@/store/order";
import { useEffect } from "react";
import LocationForm from "./LocationForm";

const OrderForm = () => {
  const { register, handleSubmit } = useForm();
  const addItem = OrderStore((state) => state.addItem);
  const items = OrderStore((state) => state.items);
  const getTotalPrice = OrderStore((state) => state.getTotalPrice);

  const onItemSubmit = (data) => {
    addItem(data);
    console.log(data);
  };

  return (
    <section className="mt-12 flex flex-col gap-y-6 ">
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between">
          <H2>Items</H2>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusIcon width={20} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add item</DialogTitle>
                <DialogDescription>
                  Make sure the prices are accurate to avoid over-pay or
                  additional charges later!
                </DialogDescription>
              </DialogHeader>
              <form
                className="grid gap-4 py-4"
                onSubmit={handleSubmit(onItemSubmit)}
              >
                <div className="flex flex-col items-start">
                  <Label htmlFor="item" className="text-right">
                    Item
                  </Label>
                  <Input
                    id="item"
                    type="text"
                    {...register("name", { required: true })}
                    className="col-span-3 "
                  />
                </div>
                <div className="flex flex-col items-start">
                  <Label htmlFor="price" className="text-right">
                    Price
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    {...register("price", { required: true })}
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <Label htmlFor="number" className="text-right">
                    How many?
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="e.g 7"
                    {...register("number", { required: true })}
                    className="col-span-3"
                  />
                </div>

                <DialogFooter>
                  <DialogTrigger asChild>
                    <Button type="submit">Add</Button>
                  </DialogTrigger>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          {items.length == 0 ? (
            <div className="h-40 w-full bg-white rounded-lg flex items-center justify-center text-gray-400 p-6">
              no items click the button to add items
            </div>
          ) : (
            <div className="rounded-lg p-6 bg-white flex flex-col gap-y-4">
              {items.map((item) => (
                <div className="flex gap-x-4 ">
                  <span className=" capitalize text-xl">
                    {`(${item.number})${item.name}`}
                  </span>
                  <span className="text-primary font-bold text-lg">
                    ₦{item.price}
                  </span>
                </div>
              ))}

              <hr />

              <div className="flex gap-x-4 ">
                <span className=" capitalize text-xl">Service Fee</span>
                <span className="text-primary font-bold text-lg">₦{200}</span>
              </div>

              <div className="flex gap-x-4 ">
                <span className=" capitalize text-xl">Total</span>
                <span className="text-primary font-bold text-lg">
                  ₦{getTotalPrice()}
                </span>
              </div>
            </div>
          )}
        </div>

        <LocationForm />
      </div>
    </section>
  );
};

export default OrderForm;
