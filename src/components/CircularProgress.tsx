import React from 'react';

interface CircularProgressProps {
  size?: number; // diameter in px
  strokeWidth?: number;
  progress: number; // from 0 to 100
  className?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size = 80,
  strokeWidth = 8,
  progress,
  className = '',
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      className={` ${className}`}
    >
      <circle
        stroke="#969696"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#756aee"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className="transition-all duration-300 ease-in-out"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        className="fill-current text-sm text-gray-700"
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

export default CircularProgress;
