import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-slate-950 py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[700px] bg-amber-500/10 blur-[180px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full border border-amber-400 bg-amber-500/10 text-amber-300 text-sm font-medium">
            📞 Contact Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-5xl lg:text-6xl font-bold text-white">
          Let's{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-400 text-lg leading-8">
          Have questions about MineTrack? We'd love to hear from you.
          Reach out to us for support, collaboration, or product
          inquiries.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Info */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-white mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <MapPin className="text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Office Address
                  </h4>

                  <p className="text-gray-400">
                    Ranchi, Jharkhand, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Phone className="text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Mail className="text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    contact@minetrack.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Clock className="text-amber-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Working Hours
                  </h4>

                  <p className="text-gray-400">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

            <h3 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400 transition"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-5 py-4 text-white outline-none focus:border-amber-400 transition resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-[1.02] transition duration-300 text-white font-semibold py-4 rounded-xl shadow-lg"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;