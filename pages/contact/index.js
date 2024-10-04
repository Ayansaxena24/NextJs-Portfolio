//components
import Circles from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";
import { useState } from "react";  // import useState
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.send('service_c0fkya1', 'template_inafc7l', {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }, 'GWhQ-YBtzZlmbESbK')
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, something went wrong",
          text: error.text,
        });
      }
    );
  e.target.reset();
  };


  return (
    <div className="lg:h-full h-[76vh] lg:overflow-auto overflow-scroll bg-primary/30 mt-20 lg:mt-0">
      <div className="container mx-auto py-16 lg:py-32 text-center xl:text-left flex items-center justify-center lg:h-full overflow-scroll lg:overflow-auto">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}  // Add onSubmit handler
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input"
                value={formData.name}
                onChange={handleChange}  // Bind state to input
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input"
                value={formData.email}
                onChange={handleChange}  // Bind state to input
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}  // Bind state to input
            />
            <textarea
              name="message"
              placeholder="message"
              className="textarea"
              value={formData.message}
              onChange={handleChange}  // Bind state to input
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
