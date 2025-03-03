"use client";

import { useEffect, useRef } from "react";

interface TurnstileProps {
  sitekey: string;
  onVerify: (token: string) => void;
}

export default function Turnstile({ sitekey, onVerify }: TurnstileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const widgetRendered = useRef(false); 
  useEffect(() => {
    if (!widgetRendered.current && typeof window !== "undefined" && window.turnstile && ref.current) {
      
      window.turnstile.render(ref.current, {
        sitekey,
        callback: (token: string) => {
          onVerify(token); 
        },
      });
      widgetRendered.current = true; 
    }

    
    return () => {
      
    };
  }, [sitekey, onVerify]);

  return <div ref={ref}></div>; 
}
