export const formatPrice = (price: number, currency: "USD" | "NGN" = "USD"): string => {
  const currencyCode = currency === "NGN" ? "NGN" : "USD";
  const locale = currency === "NGN" ? "en-NG" : "en-US";
  return new Intl.NumberFormat(locale, { style: "currency", currency: currencyCode }).format(price);
};
