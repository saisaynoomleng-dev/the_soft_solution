'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SlideInEffectProps } from '@/lib/types';
import { useRef } from 'react';
import clsx from 'clsx';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const SlideInEffect = ({
  children,
  direction,
  offset = 100,
  duration = 1,
  delay = 0,
  className,
}: SlideInEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        delay,
        duration,
        ease: 'back.inOut(1.7)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      };

      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;
      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;

      gsap.from(containerRef.current, vars);
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className={clsx('', className)}
    >
      {children}
    </div>
  );
};

export const SlideInGroup = ({
  children,
  direction,
  duration = 1,
  offset = 100,
  delay = 0,
  className,
}: SlideInEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: 'back.inOut(1.7)',
        stagger: {
          amount: 0.8,
          from: 'start',
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      };

      if (direction === 'top') vars.y = -offset;
      if (direction === 'bottom') vars.y = offset;
      if (direction === 'left') vars.x = -offset;
      if (direction === 'right') vars.x = offset;

      if (containerRef.current?.children) {
        gsap.from(Array.from(containerRef.current.children), vars);
      }
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className={clsx(className)}
    >
      {children}
    </div>
  );
};
