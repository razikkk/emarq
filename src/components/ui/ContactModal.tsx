"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence , Variants} from "framer-motion";
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

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

const ContactModal: React.FC<AnimatedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
  });

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
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
            className="relative w-full max-w-md rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-y-auto"
            style={{ backgroundColor: "#E8C1C5" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
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

              <h2
                className="text-2xl font-light tracking-wide"
                style={{ color: "#3E2F56" }}
              >
                Get in Touch
              </h2>
              <p
                className="text-sm font-light mt-2 opacity-70"
                style={{ color: "#3E2F56" }}
              >
                We'd love to hear from you
              </p>
            </div>

            {/* Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                
                    // Build WhatsApp message
                    const message = `Hello, my name is ${formData.name}.
                Email: ${formData.email}
                Message: ${formData.description}`;
                
                    // Encode the message for URL
                    const encodedMessage = encodeURIComponent(message);
                
                    // WhatsApp link
                    const whatsappUrl = `https://wa.me/971506568512?text=${encodedMessage}`;
                
                    // Open in new tab
                    window.open(whatsappUrl, "_blank");
                
                    // Optionally close modal
                    onClose();
                  }}
              className="px-6 pb-6 flex flex-col gap-4"
            >
              {[
                {
                  type: "text",
                  placeholder: "Your Name",
                  value: formData.name,
                  onChange: (e: any) =>
                    setFormData({ ...formData, name: e.target.value }),
                },
                {
                  type: "email",
                  placeholder: "Email Address",
                  value: formData.email,
                  onChange: (e: any) =>
                    setFormData({ ...formData, email: e.target.value }),
                },
              ].map((field, i) => (
                <motion.input
                  key={i}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                  className="w-full bg-transparent border-b border-[#3E2F56]/40 py-3 outline-none text-[#3E2F56] placeholder:text-[#3E2F56]/50 focus:border-[#3E2F56] transition-colors"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                />
              ))}

              <motion.textarea
                placeholder="Message"
                rows={3}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-transparent border-b border-[#3E2F56]/40 py-3 outline-none text-[#3E2F56] placeholder:text-[#3E2F56]/50 focus:border-[#3E2F56] resize-none transition-colors"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full mt-4 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                  backgroundColor: "#3E2F56",
                  color: "#E8C1C5",
                }}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 25px rgba(62, 47, 86, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

export default ContactModal;
