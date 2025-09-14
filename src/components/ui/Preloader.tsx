"use client";
import React, { useEffect, useState } from "react";
import { FaFighterJet, FaGamepad, FaHeadphones, FaCubes, FaPaw, FaRocket, FaTicketAlt, FaChartPie, FaCodepen } from "react-icons/fa";

const icons = [
  <FaFighterJet key="jet" />,
  <FaGamepad key="gamepad" />,
  <FaHeadphones key="headphones" />,
  <FaCubes key="cubes" />,
  <FaPaw key="paw" />,
  <FaRocket key="rocket" />,
  <FaTicketAlt key="ticket" />,
  <FaChartPie key="chart" />,
  <FaCodepen key="codepen" />,
];

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  const [counter, setCounter] = useState(0);
  const [progress, setProgress] = useState(0);

  // Change icon every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Fake loading progress
  useEffect(() => {
    let num = 0;
    const interval = setInterval(() => {
      num++;
      setProgress(num);
      if (num >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          onFinish(); // hide loader and show homepage
        }, 500);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#3E2F56] z-[9999]">
      <div className="loader w-[100px] h-[80px] relative">
        {/* Icon */}
        <div className="image w-[100px] h-[160px] text-4xl flex justify-center items-center animate-[rotate_3s_infinite] opacity-0">
          {icons[counter]}
        </div>
        {/* Percentage */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-lg text-white">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default Preloader;
