"use client";
import { useEffect, useRef } from "react";

export default function MsPriceButton({
  priceId,
  className = "",
  children = "Buy Now",
}: {
  priceId: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // set the colon-attribute after mount so Memberstack can bind it
    ref.current?.setAttribute("data-ms-price:add", priceId);
  }, [priceId]);

  return (
    <a ref={ref} href="#" className={className}>
      {children}
    </a>
  );
}