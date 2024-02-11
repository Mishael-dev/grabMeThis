"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { H2 } from "./typography";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import OrderStore from "@/store/order";

const LocationForm = () => {
  const { register, handleSubmit } = useForm();
  const setLocation = OrderStore((state) => state.setLocation);

  const onItemSubmit = (data) => {
    setLocation(data);
  };
  return (
    <div>
      <H2>Location</H2>
      <form onSubmit={handleSubmit(onItemSubmit)} className="">
        <div className="flex justify-between">
          <div className="flex flex-col items-start w-2/3">
            <Label htmlFor="building" className="text-right">
              Building
            </Label>
            <Input
              id="building"
              placeholder="eg: New Horizon"
              {...register("building", { required: true })}
              className="col-span-3"
            />
          </div>

          <div className="flex flex-col items-start w-1/4">
            <Label htmlFor="room" className="text-right">
              Room Number
            </Label>
            <Input
              id="room"
              placeholder="eg: B102"
              {...register("room", { required: true })}
              className="col-span-3"
            />
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Label htmlFor="phoneNumber" className="text-right">
            How can we reach you
          </Label>
          <Input
            id="phoneNumber"
            placeholder="eg: B102"
            {...register("phoneNumber", { required: true })}
            className=""
          />
        </div>

        <Button type="submit">Next</Button>
      </form>
    </div>
  );
};

export default LocationForm;
