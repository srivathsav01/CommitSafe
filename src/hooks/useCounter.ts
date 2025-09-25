import { useEffect } from "react";
import { animate, useMotionValue, useTransform } from "framer-motion";

export function useCounter(target: number, duration: number = 1) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, target, { duration });
    return controls.stop;
  }, [target, duration, count]);

  return rounded;
}