import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Quintessential } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: "400",
});

export const quintessential = Quintessential({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
});
