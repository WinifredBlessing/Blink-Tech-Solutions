import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // Optional: Trigger only once when it comes into view
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse the numeric part and the non-numeric suffix/prefix
  // Example: "2,500+" -> numeric: 2500, prefix: "", suffix: "+"
  const numericString = value.replace(/[^0-9.]/g, '');
  const endValue = parseFloat(numericString);
  const suffix = value.replace(/[0-9.,]/g, ''); // Naive suffix extraction

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 80,
    mass: 1,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView && !isNaN(endValue)) {
      motionValue.set(endValue);
    }
  }, [isInView, endValue, motionValue]);

  useEffect(() => {
    if (isNaN(endValue)) {
      setDisplayValue(value);
      return;
    }
    
    return springValue.on("change", (latest) => {
      // Format number back with commas if necessary
      const formatted = Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
      }).format(Math.round(latest));
      setDisplayValue(formatted + suffix);
    });
  }, [springValue, endValue, suffix, value]);

  return <span ref={ref}>{displayValue}</span>;
}
