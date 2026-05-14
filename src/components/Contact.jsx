import React, { useState } from "react";
import {  useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        await emailjs.send(
          "service_9rvywgi",
          "template_26zvq7p",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "1yNFSsZN-hQE4rl-H",
        );
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="text-red-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full shadow-[0_0_10px_red]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-orbitron text-red-500 mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations, project inquiries, or
              just a friendly chat about space and technology!
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/muhamadtegarputrapratama"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="muhamad-tegar-putra-pratama-370767329"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/garrceriaaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:garzxyz23@gmail.com" 
                className="text-gray-400 hover:text-red-500 transition-colors text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="text-lg font-orbitron text-white mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-400">
                I usually respond within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-6 rounded-xl">
              {submitted && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-500 text-center">
                  Message sent successfully!
                </div>
              )}
              <div className="mb-4">
                <label className="block text-red-500 mb-2 font-orbitron text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-red-500 mb-2 font-orbitron text-sm">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black/50 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-red-500 mb-2 font-orbitron text-sm">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 bg-black/50 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-black font-orbitron font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
