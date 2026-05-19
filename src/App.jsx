import logo from "./assets/logo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";





export default function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [editCount, setEditCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);


  useEffect(() => {

    let edits = 0;
    let years = 0;

    const interval = setInterval(() => {

      if (edits < 50) {
        edits++;
        setEditCount(edits);
      }

      if (years < 2) {
        years++;
        setYearCount(years);
      }

      if (edits >= 50 && years >= 2) {
        clearInterval(interval);
      }

    }, 40);

    return () => clearInterval(interval);

  }, []);




  useEffect(() => {

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_epr7lli",
      "template_ndwrfjh",
      e.target,
      "dQAylIRRM_IVf_-kQ"
    )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };
  return (
    <main className="relative isolate bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* Animated Ambient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Gradient Orb 1 */}
        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.06] blur-[140px]"
        />

        {/* Gradient Orb 2 */}
        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 80, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full bg-zinc-300/[0.05] blur-[160px]"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[35%] left-[35%] w-[300px] h-[300px] rounded-full bg-white/[0.04] blur-[120px]"
        />

        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

      </div>




      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">

        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <a
            href="#about"
            className="flex items-center gap-3 cursor-pointer"
          >

            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md overflow-hidden">

              <img
                src={logo}
                alt="logo"
                className="w-12 scale-110 object-contain translate-y-1"
              />

            </div>

          </a>

          <div className="flex gap-4 sm:gap-6 md:gap-10 text-[11px] sm:text-[12px] md:text-[13px] font-medium tracking-[0.12em] md:tracking-[0.2em] uppercase text-white/50">

            <a href="#work" className="relative group">

              <span className="hover:text-white transition duration-300">
                Work
              </span>

              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>

            </a>

            <a href="#about" className="relative group">

              <span className="hover:text-white transition duration-300">
                About
              </span>

              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>

            </a>

            <a href="#contact" className="relative group">

              <span className="hover:text-white transition duration-300">
                Contact
              </span>

              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>

            </a>

          </div>

        </div>

      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="relative h-screen flex items-center justify-center text-center px-6"
      >




        {/* Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="relative z-10"
        >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.3em] text-sm text-white/50 mb-5 mt-16 md:mt-0"
          >
            Video Editor • Motion designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-semibold leading-[0.95] max-w-5xl"
          >
            Editing visuals
            <br />
            that feel cinematic.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-white/40 max-w-2xl mx-auto text-sm md:text-lg"
          >
            I create modern high-retention edits for creators,
            brands and digital storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mt-10"
          >

            {/* View Work */}
            <button
              onClick={() => {
                document.querySelector("#work").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-7 py-3 bg-white text-black rounded-full font-medium hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] transition duration-300"
            >
              View Work
            </button>

            {/* Contact */}
            <button
              onClick={() => {
                document.querySelector("#contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="px-7 py-3 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition duration-300"
            >
              Contact Me
            </button>

          </motion.div>

        </motion.div>

      </section>

      {/* Stats Section */}
      <section className="px-6 py-24 border-t border-white/10 flex justify-center">

        <div className="max-w-7xl mx-auto">

          <div className="flex justify-center items-center gap-16 md:gap-32 text-center">

            {/* Stat 1 */}
            <div className="group relative cursor-pointer">

              <h2 className="text-5xl md:text-7xl font-semibold text-zinc-100 mb-3 transition duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
                {editCount}+
              </h2>

              <p className="uppercase tracking-[0.2em] text-sm text-white/40 transition duration-500 group-hover:text-white/70 relative inline-block">
                Video Edited
                <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </p>

            </div>

            {/* Stat 2 */}
            <div className="group relative cursor-pointer">

              <h2 className="text-5xl md:text-7xl font-semibold text-zinc-100 mb-3 transition duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
                {yearCount}+
              </h2>

              <p className="uppercase tracking-[0.2em] text-sm text-white/40 transition duration-500 group-hover:text-white/70 relative inline-block">
                Years Experience
                <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </p>


            </div>

          </div>

        </div>

      </section>
      {/* Work Section */}
      <section
        id="work"
        className="px-4 md:px-6 py-20 md:py-24 border-t border-white/[0.06]"
      >

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="mb-14 md:mb-16">

            <p className="uppercase tracking-[0.3em] text-[11px] text-white/40 mb-3">
              Selected Work
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
              Featured Projects
            </h2>

          </div>

          <div className="space-y-3 md:space-y-5">

            {/* TOP SECTION */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 items-start">

              {/* LEFT STACK */}
              <div className="flex flex-col gap-3 md:gap-5">

                {/* VIDEO 1 */}
                <div className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]">

                  <div className="aspect-square">

                    <video
                      className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                      onMouseEnter={(e) => {
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source src="/videos/video1.mp4" type="video/mp4" />
                    </video>

                  </div>

                </div>

                {/* VIDEO 9 */}
                <div className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]">

                  <div className="aspect-square">

                    <video
                      className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                      onMouseEnter={(e) => {
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source src="/videos/video9.mp4" type="video/mp4" />
                    </video>

                  </div>

                </div>

              </div>

              {/* VIDEO 2 */}
              <div className="mt-10 md:mt-0 group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]">

                <div className="aspect-[9/16] min-h-[260px]">

                  <video
                    className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    onMouseEnter={(e) => {
                      e.target.play();
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  >
                    <source src="/videos/video2.mp4" type="video/mp4" />
                  </video>

                </div>

              </div>

              {/* VIDEO 3 */}
              <div className="hidden md:block group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]">

                <div className="aspect-[9/16]">

                  <video
                    className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                    onMouseEnter={(e) => {
                      e.target.play();
                    }}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  >
                    <source src="/videos/video3.mp4" type="video/mp4" />
                  </video>

                </div>

              </div>

            </div>

            {/* MIDDLE ROW */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">

              {[4, 5, 6, 7].map((num) => (
                <div
                  key={num}
                  className="group rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]"
                >

                  <div className="aspect-[9/16] min-h-[260px] md:min-h-0">

                    <video
                      className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                      onMouseEnter={(e) => {
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source
                        src={`/videos/video${num}.mp4`}
                        type="video/mp4"
                      />
                    </video>

                  </div>

                </div>
              ))}

            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-2 md:flex justify-center gap-3 md:gap-5">

              {[8, 10, 11].map((num) => (
                <div
                  key={num}
                  className="group w-full md:w-[220px] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0B0B0B]"
                >

                  <div className="aspect-[9/16] min-h-[260px] md:min-h-0">

                    <video
                      className="w-full h-full object-cover bg-black transition duration-500 group-hover:scale-[1.02]"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      controls
                      onMouseEnter={(e) => {
                        e.target.play();
                      }}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    >
                      <source
                        src={`/videos/video${num}.mp4`}
                        type="video/mp4"
                      />
                    </video>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-32 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left Side */}

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-white/40 mb-6">
              Contact
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.95] mb-8">

              Let’s build{" "}

              <span className="italic text-zinc-400 font-light">
                something
              </span>

              <br />

              cinematic.

            </h2>

            <p className="text-white/40 max-w-md leading-relaxed mb-10">
              Available for creator content,
              brand storytelling and high-retention edits.
            </p>

            {/* Contact Links */}
            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:vptech.growth@gmail.com"
                className="flex items-center gap-4 group"
              >

                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300">
                  ✉️
                </div>

                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Email
                  </p>

                  <p className="text-white group-hover:text-zinc-300 transition">
                    vptech.growth@gmail.com
                  </p>
                </div>

              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/vptech.growth"
                target="_blank"
                className="flex items-center gap-4 group"
              >

                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300">
                  📸
                </div>

                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Instagram
                  </p>

                  <p className="text-white group-hover:text-zinc-300 transition">
                    @vptech.growth
                  </p>
                </div>

              </a>

              {/* Discord */}
              <div className="flex items-center gap-4 group">

                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                  🎮
                </div>

                <div>
                  <p className="text-sm text-white/40 uppercase tracking-[0.15em]">
                    Discord
                  </p>

                  <p className="text-white">
                    pryciseditz
                  </p>
                </div>

              </div>

            </div>

            {/* Response Time */}
            <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/5">

              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

              <p className="text-sm text-white/60">
                Usually replies within 24 hours
              </p>

            </div>

          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={sendEmail}>

            {/* Name */}
            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition duration-300"
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
                Project Type
              </label>

              <select
                name="project"
                required
                className="w-full px-5 py-4 rounded-2xl bg-black text-white border border-white/10 focus:border-white/30 focus:outline-none transition duration-300"
              >
                <option value="Short Form">Short Form</option>
                <option value="Long Form">Long Form</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm uppercase tracking-[0.2em] text-white/40 mb-3">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition duration-300 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}