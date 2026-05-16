"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "USD" | "NGN";

const USD_TO_NGN = 1600;

type CurrencyContextType = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  convert: (usdPrice: number) => string;
  symbol: string;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convert = (usdPrice: number): string => {
    if (currency === "NGN") {
      const ngn = usdPrice * USD_TO_NGN;
      return ngn.toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }
    return usdPrice.toFixed(2);
  };

  const symbol = currency === "USD" ? "$" : "₦";

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, symbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
