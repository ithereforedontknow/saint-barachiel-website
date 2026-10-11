import { useState } from "react";
import type { FormEvent } from "react";
import { Bus, Car, CheckCircle2, Send, MapPin, Phone, Mail } from "lucide-react";

const SCHOOL_EMAIL = "saintbarachiel_school@yahoo.com";

// Set VITE_FORMSPREE_ENDPOINT in a .env file (see .env.example) once you
// have created a form at https://formspree.io. Submissions then land in
// your Formspree inbox and the visitor never has to leave the page. Until
// that is configured, the form falls back to opening the visitor's own
// email app with the message pre-filled.
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export default function Visit() {
  const [form, setForm] = useState({ name: "", contact: "", grade: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const buildMailto = () => {
    const subject = `Inquiry from ${form.name || "a parent or guardian"}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      form.grade ? `Grade level: ${form.grade}` : null,
      "",
      form.message,
    ].filter((line) => line !== null);

    return `mailto:${SCHOOL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n"),
    )}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      window.location.href = buildMailto();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
      } else {
        throw new Error("Form service returned an error");
      }
    } catch {
      // The form service could not be reached. Fall back to the visitor's
      // own email app rather than losing the inquiry entirely.
      window.location.href = buildMailto();
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0b132b] tracking-tight">
          Visit Saint Barachiel
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Located 10 to 15 minutes north of Agoo along MacArthur Highway in Aringay, La Union.
        </p>
      </div>

      {/* Directions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Public Transport */}
        <div className="bg-amber-50 p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3">
            <Bus className="text-amber-700" size={26} />
            <h2 className="text-xl font-bold text-[#0b132b]">By Public Transport</h2>
          </div>
          <ol className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <span>Board any northbound jeepney or bus along MacArthur Highway heading to Aringay or San Fernando.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <span>Alight near Aringay Town Plaza or Quezada Street intersection.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <span>Walk to the school premises right next to Linz Pharmacy.</span>
            </li>
          </ol>
        </div>

        {/* Private Vehicle */}
        <div className="bg-blue-50 p-8 rounded-2xl space-y-4">
          <div className="flex items-center gap-3">
            <Car className="text-blue-700" size={26} />
            <h2 className="text-xl font-bold text-[#0b132b]">By Private Vehicle</h2>
          </div>
          <ol className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <span>Drive north along MacArthur National Highway towards Aringay.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <span>Upon entering San Benito Sur, turn onto Quezada Street.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <span>Continue to 350 Quezada Street; the campus gate is on your right.</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="rounded-2xl overflow-hidden border border-slate-200 h-80 sm:h-96">
        <iframe
          title="Map to Saint Barachiel Special Science School"
          src="https://www.google.com/maps?q=350+Quezada+Street,+San+Benito+Sur,+Aringay,+La+Union,+Philippines&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

      {/* Inquiry Form */}
      <div className="bg-slate-50 p-8 sm:p-12 rounded-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold text-[#0b132b]">Send an Inquiry</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Have questions about admission requirements, tuition fees, or scheduling a tour? Reach out to our admissions team.
          </p>
          <div className="pt-4 space-y-2 text-xs text-slate-700 font-medium">
            <p className="flex items-center gap-2.5">
              <MapPin size={15} className="text-amber-600" /> 350 Quezada St, San Benito Sur, Aringay, La Union
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={15} className="text-amber-600" /> (072) 607-1644
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={15} className="text-amber-600" /> saintbarachiel_school@yahoo.com
            </p>
          </div>
        </div>

        <div className="md:col-span-3 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs">
          {status === "sent" && FORM_ENDPOINT ? (
            <div className="flex items-center gap-3 p-6 bg-emerald-50 text-emerald-900 rounded-lg">
              <CheckCircle2 size={24} className="shrink-0 text-emerald-700" />
              <div>
                <p className="font-bold text-base">Inquiry sent</p>
                <p className="text-xs text-emerald-800">Thank you. Our admissions team will reach out by phone or email shortly.</p>
              </div>
            </div>
          ) : status === "sent" || status === "error" ? (
            <div className="flex items-center gap-3 p-6 bg-emerald-50 text-emerald-900 rounded-lg">
              <CheckCircle2 size={24} className="shrink-0 text-emerald-700" />
              <div>
                <p className="font-bold text-base">Opening your email app</p>
                <p className="text-xs text-emerald-800">A draft message to our admissions team should now be open. Send it from there to complete your inquiry.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Parent or Guardian Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Phone or Email</label>
                  <input
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Grade Level Inquiring For</label>
                <input
                  placeholder="Kindergarten, Grade 1, Grade 6, etc."
                  value={form.grade}
                  onChange={(e) => setForm({ ...form, grade: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Message or Questions</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="btn-primary w-full py-3 disabled:opacity-60">
                <Send size={15} /> {status === "sending" ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
