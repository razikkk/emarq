import { motion } from "framer-motion";
import { useState, useRef } from "react";

interface AnimatedFormFieldProps {
  id: string;
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: (value: string) => void;
  delay?: number;
}

export const AnimatedFormField = ({
  id,
  label,
  type,
  value,
  onChange,
  delay = 0,
}: AnimatedFormFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setHasValue(value.length > 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setHasValue(newValue.length > 0);
  };

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative cursor-pointer"
      onClick={handleContainerClick}
    >
      {/* Label */}
      <motion.label
        htmlFor={id}
        className="block text-form-text font-medium mb-2 cursor-pointer"
        animate={{
          scale: isFocused || hasValue ? 0.9 : 1,
          y: isFocused || hasValue ? -8 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {label}
      </motion.label>

      {/* Input/Textarea */}
      <div className="relative">
        {type === "textarea" ? (
          <motion.textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full bg-transparent text-form-text placeholder-form-text/50 resize-none outline-none pb-2 cursor-pointer"
            rows={3}
            placeholder=""
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <motion.input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type={type}
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="w-full bg-transparent text-form-text placeholder-form-text/50 outline-none pb-2 cursor-pointer"
            placeholder=""
            whileFocus={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          />
        )}

        {/* Animated line */}
        <div className="relative">
          {/* Base line */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-form-line/30" />
          
          {/* Animated focused line */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-form-line"
            initial={{ width: "0%" }}
            animate={{
              width: isFocused ? "100%" : "0%",
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      {/* Focus indicator */}
      <motion.div
        className="absolute -left-1 top-1/2 w-0.5 bg-form-line rounded-full"
        initial={{ height: 0, y: "-50%" }}
        animate={{
          height: isFocused ? "60%" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
};