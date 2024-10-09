import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import OnBaseLogo from "@assets/partners/onbase.png";
import PECBLogo from "@assets/partners/pecb.png";
import DatprofLogo from "@assets/partners/Dataprof.png";
import NortenLogo from "@assets/partners/norten.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const partners = [
  {
    name: "OnBase",
    image: OnBaseLogo,
  },
  {
    name: "PECB",
    image: PECBLogo,
  },
  {
    name: "Datprof",
    image: DatprofLogo,
  },
  {
    name: "Nortei",
    image: NortenLogo,
  },
];
