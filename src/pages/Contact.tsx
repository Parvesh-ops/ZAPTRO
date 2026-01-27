import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setSent(true);

    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);

    console.log("Contact form submitted:", form);
  };

  return (
    <div className="min-h-screen  text-slate-50 p-6 md:p-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        .font-jakarta {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s ease-out;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500 border border-red-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6 animate-fadeInUp">
            Let's Connect
          </div>
          <h1 className="font-jakarta text-5xl md:text-6xl font-extrabold mb-4 text-black  animate-fadeInUp delay-100">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Questions, feedback or partnership — we'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 animate-fadeInUp delay-300">
          {/* Info */}
          <div className="lg:col-span-2 bg-black backdrop-blur-xl border rounded-3xl p-8">
            <h2 className="font-jakarta text-2xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              {[
                { label: "Address", value: "Biratnagar" },
                { label: "Phone", value: "+977********" },
                { label: "Email", value: "hello@zaptro.example" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 bg-slate-900/40 rounded-2xl border border-slate-700/30 hover:border-purple-500/30 transition"
                >
                  <p className="text-xs uppercase text-slate-400 font-semibold">
                    {item.label}
                  </p>
                  <p className="text-slate-50 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-black backdrop-blur-xl border rounded-3xl p-8">
            <h2 className="font-jakarta text-2xl font-bold mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl focus:border-orange-500 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl focus:border-orange-500 outline-none"
                required
              />

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl focus:border-orange-500 outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full py-4 bg-orange-500 rounded-xl font-semibold hover:shadow-lg transition"
              >
                Send Message
              </button>

              {sent && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-300 text-center animate-slideInUp">
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-80 md:h-96 mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.123456789!2d87.2671234!3d26.4556789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef7d123456789%3A0x123456789abcdef!2sNeta%20Chowk%2C%20Biratnagar%2C%20Nepal!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
          width="100%"
          height="100%"
          className="border-0k"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Biratnagar Location"
        ></iframe>
      </div>
      </div>
    </div>
  );
};

export default Contact;
