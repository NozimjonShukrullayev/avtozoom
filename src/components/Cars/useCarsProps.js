import axios from "axios";
import { useEffect, useState } from "react";

export const useCarsProps = () => {
  const rentprice = [
    {
      name: "3 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      price: 5000,
      day: 3,
    },
    {
      name: "3 DAYS RENT = 1300 AED🔥 ()",
      price: 1300,
      day: 3,
    },
    {
      name: "3 DAYS RENT = 1800 AED🔥",
      price: 1800,
      day: 3,
    },
    {
      name: "NO DEPOSIT",
      price: 0,
      day: "no",
    },
    {
      name: "5000 AED🔥 ALL INCLUSIVE",
      price: 5000,
      day: "all",
    },
    {
      name: "2 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      price: 5000,
      day: 2,
    },
    {
      name: "Rent Ferrari Dubai",
      price: 1,
      day: "ferrari",
    },
    {
      name: "4 DAYS RENT = 5000 AED🔥 ALL INCLUSIVE",
      price: 5000,
      day: 4,
    },
  ];
  const BASE_URL = "https://autoapi.dezinfeksiyatashkent.uz/api";
  return { rentprice, BASE_URL };
};
