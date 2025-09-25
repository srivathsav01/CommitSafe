import React from "react";
import { motion } from "framer-motion";
import { useCounter } from "../hooks/useCounter";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";

interface DashboardCardProps {
  title: string;
  value?: number;
  titleicon?: React.ReactNode;
  trendData?: { day: string; value: number }[];
  badge?: string;
  color?: string;
  variant?: 'default' | 'clickable';
  onClick?: () => void;
}

function DashboardCard({ title, value, titleicon, trendData, badge = "Last 7 Days", color = "text-blue-600", variant = 'default', onClick }: DashboardCardProps) {

  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 flex flex-col justify-between ${variant === 'clickable' ? 'cursor-pointer hover:shadow-lg items-center justify-center' : ''}`} onClick={onClick}>
      <div className="laptop:flex items-center justify-between mb-2">
        {titleicon}
        <h3 className="font-semibold ml-3">{title}</h3>
        {variant == 'default' && <span className="ml-3 laptop:ml-0 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-0.5 rounded-full text-center ">
          {badge}
        </span>
        }
      </div>

      {value && 
      <motion.span className={`text-4xl font-bold ${color}`}>
        {useCounter(value, 2)}
      </motion.span>
      }

      {trendData && (
        <div className="h-12 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <XAxis dataKey="day" hide />
              <YAxis hide />
              <Tooltip cursor={false} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
