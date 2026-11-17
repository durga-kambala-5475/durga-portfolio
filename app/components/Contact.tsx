
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#030712] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">
            Get In <span className="text-violet-500">Touch</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            I'm always open to discussing new opportunities,
            interesting projects, and collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <h3 className="text-2xl font-bold">Let's Connect</h3>

            <p className="mt-4 text-sm leading-8 text-gray-400 sm:text-base">
              Looking for an opportunity to begin my professional
              journey, learn from experienced people, and contribute
              to meaningful software projects.
            </p>

            <div className="mt-8 space-y-7">
              <a
                href="mailto:durgakambala5475@gmail.com"
                className="flex min-w-0 items-center gap-4"
              >
                <div className="shrink-0 rounded-xl bg-violet-500/10 p-4 text-violet-400">
                  <FaEnvelope size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all text-sm font-medium text-white sm:text-base">
                    durgakambala5475@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919381316218"
                className="flex items-center gap-4"
              >
                <div className="shrink-0 rounded-xl bg-blue-500/10 p-4 text-blue-400">
                  <FaPhone size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-white">+91 93813 16218</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-xl bg-pink-500/10 p-4 text-pink-400">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm font-medium text-white sm:text-base">
                    Jangareddygudem, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="mb-5 font-semibold text-white">Find Me On</h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/durga-kambala-5475"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-2xl text-white transition hover:border-violet-500 hover:text-violet-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/durga-kambala-b011072bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-2xl text-blue-400 transition hover:border-blue-500"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-3">
              <span className="h-3 w-3 shrink-0 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-medium text-green-400 sm:text-sm">
                Open to Software Engineering Opportunities
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
            <h3 className="text-2xl font-bold">Send Me a Message</h3>

            <p className="mt-3 text-sm text-gray-400">
              Have a question or an opportunity? Send me a message.
            </p>

            <form
              action="https://formsubmit.co/durgakambala5475@gmail.com"
              method="POST"
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#030712] px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#030712] px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#030712] px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#030712] px-5 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-violet-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-1 hover:shadow-violet-500/40"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
