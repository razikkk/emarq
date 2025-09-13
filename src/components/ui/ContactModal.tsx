"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, Send } from "lucide-react";

interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  description: string;
}

const ContactModal: React.FC<AnimatedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // submit logic here
    onClose();
  };

  const inputVariants: Variants = {
    focused: {
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
    unfocused: {
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };
  
  const lineVariants: Variants = {
    focused: {
      scaleX: 1,
      backgroundColor: "#3E2F56",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
    unfocused: {
      scaleX: 0.3,
      backgroundColor: "rgba(62, 47, 86, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  const labelVariants: Variants = {
    focused: {
      y: -25,
      scale: 0.85,
      color: "#3E2F56",
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
    unfocused: {
      y: 0,
      scale: 1,
      color: "rgba(62, 47, 86, 0.6)",
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };

  interface FormFieldProps {
    field: keyof FormData;
    label: string;
    type?: string;
    multiline?: boolean;
  }

  const FormField: React.FC<FormFieldProps> = ({
    field,
    label,
    type = "text",
    multiline = false,
  }) => {
    const isFocused = focusedField === field;
    const hasValue = formData[field].length > 0;

    return (
      <motion.div
        className="relative mb-8"
        variants={inputVariants}
        animate={isFocused ? "focused" : "unfocused"}
      >
        <motion.label
          className="absolute left-0 pointer-events-none font-light"
          variants={labelVariants}
          animate={isFocused || hasValue ? "focused" : "unfocused"}
          style={{ originX: 0 }}
        >
          {label}
        </motion.label>

        {multiline ? (
          <textarea
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-none outline-none pt-6 pb-2 text-lg resize-none"
            style={{ color: "#3E2F56" }}
            rows={3}
          />
        ) : (
          <input
            type={type}
            value={formData[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onFocus={() => setFocusedField(field)}
            onBlur={() => setFocusedField(null)}
            className="w-full bg-transparent border-none outline-none pt-6 pb-2 text-lg"
            style={{ color: "#3E2F56" }}
          />
        )}

        <motion.div
          className="h-0.5 w-full"
          style={{ originX: 0 }}
          variants={lineVariants}
          animate={isFocused ? "focused" : "unfocused"}
        />
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

          {/* Modal */}
          <motion.div
    className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col"
    style={{ backgroundColor: "#E8C1C5" }}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.8, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 25,
      duration: 0.4,
    }}
  >
            {/* Header */}
            <div className="relative p-6 pb-4">
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} style={{ color: "#3E2F56" }} />
              </motion.button>

              <motion.h2
                className="text-2xl font-light tracking-wide"
                style={{ color: "#3E2F56" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Get in Touch
              </motion.h2>

              <motion.p
                className="text-sm font-light mt-2 opacity-70"
                style={{ color: "#3E2F56" }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                We'd love to hear from you
              </motion.p>
            </div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="px-6 pb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <FormField field="name" label="Your Name" />
              <FormField field="email" label="Email Address" type="email" />
              <FormField field="description" label="Message" multiline />

              <motion.button
                type="submit"
                className="w-full mt-6 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                  backgroundColor: "#3E2F56",
                  color: "#E8C1C5",
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(62, 47, 86, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </motion.form>

            {/* Decorative Top Line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: "#3E2F56", originX: 0 }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
