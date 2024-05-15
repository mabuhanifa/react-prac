import React, { useState } from "react";
import Button from "./components/Button";
import { useSelector } from "./contextAPI/store";

export default function App() {
  const state = useSelector((store) => store.cart);
  console.log(state);
  return (
    <div className="">
      <Button style={"bg-red-500 px-5 py-2"} />
      <Button style={"bg-red-500 px-5 py-2"} />
    </div>
  );
}
