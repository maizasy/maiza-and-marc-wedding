
import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';
import { RSVPFormData } from '../types';


export default function RSVP() {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    email: '',
    attending: '',
    hasPlusOne: '',
    plusOneName: '',
    dietaryRestrictions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmittedName, setLastSubmittedName] = useState('');
  const [lastSubmittedAttending, setLastSubmittedAttending] = useState('');

 
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  setIsSubmitting(true);

  try {
    await fetch(
      'https://script.google.com/macros/s/AKfycbw_MRTpeYxQ0ymR0pPZnwZpRp6JrpMoWE9Rka4XzW3cqmNUBROE2UW-O6LWV3CbUjyI/exec',
      {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      }
    );

    setLastSubmittedName(formData.guestName);
    setLastSubmittedAttending(formData.attending);
    setSubmitted(true);

  } catch (error) {
    alert('Something went wrong. Please try submitting your RSVP again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const handleResetForm = () => {
    setSubmitted(false);
    setFormData({
      guestName: '',
      email: '',
      attending: '',
      hasPlusOne: '',
      plusOneName: '',
      dietaryRestrictions: '',
    });
  };

  return (
    <section
      id="rsvp"
className="py-20 sm:py-24 px-6 sm:px-12 max-w-3xl mx-auto flex flex-col items-center justify-center"    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
       className="w-full max-w-lg"
      >
        <p className="subtext mb-4">RSVP</p>

        <h2 className="text-4xl sm:text-5xl font-serif font-light text-primary tracking-tight mb-6">
          Let us know you're coming!
        </h2>

        <p className="font-normal text-primary/85 leading-relaxed text-sm sm:text-base mb-8">
          Please RSVP by February 20, 2027. Kindly complete one form per invitation.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface p-10 text-center flex flex-col items-center justify-center border border-border-color min-h-[350px] relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
                className="mb-6 text-primary"
              >
                <CheckCircle2 size={48} strokeWidth={1} />
              </motion.div>

              <h3 className="text-3xl font-serif mb-3 text-primary">
                Thank you, {lastSubmittedName}!
              </h3>

              <p className="font-light text-primary/80 mb-8 max-w-sm">
                {lastSubmittedAttending === 'yes'
                  ? "We look forward to celebrating with you in Woodbridge!"
                  : "We will miss you, but thank you for letting us know."}
              </p>

              <button
                type="button"
                onClick={handleResetForm}
                className="px-6 py-2.5 rounded-full border border-primary/30 text-[11px] tracking-widest uppercase font-light hover:bg-primary hover:text-base transition-colors duration-300"
              >
                Submit another RSVP
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  id="guestName"
                  required
                  disabled={isSubmitting}
                  placeholder=" "
                  className="input-border peer"
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData({ ...formData, guestName: e.target.value })
                  }
                />
                <label
                  htmlFor="guestName"
                  className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary transition-all cursor-text pointer-events-none uppercase tracking-widest font-light"
                >
                  Guest Name
                </label>
              </div>

              <div className="relative w-full group">
                <input
                  type="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  placeholder=" "
                  className="input-border peer"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <label
                  htmlFor="email"
className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary transition-all cursor-text pointer-events-none uppercase tracking-widest font-light"                >
                  Email Address
                </label>
              </div>

              <div className="relative w-full flex items-center">
                <select
                  id="attending"
                  required
                  disabled={isSubmitting}
                  className={`input-border appearance-none cursor-pointer pr-10 ${
                    formData.attending === '' ? 'text-transparent' : 'text-primary'
                  }`}
                  value={formData.attending}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      attending: e.target.value as 'yes' | 'no' | '',
                      hasPlusOne: e.target.value === 'no' ? 'no' : formData.hasPlusOne,
                      plusOneName: e.target.value === 'no' ? '' : formData.plusOneName,
                    })
                  }
                >
                  <option value="" disabled className="text-primary"></option>
                  <option value="yes" className="text-primary">Joyfully accepts</option>
                  <option value="no" className="text-primary">Regretfully declines</option>
                </select>

                <ChevronDown size={18} strokeWidth={1.5} className="absolute right-0 bottom-3 text-primary/50 pointer-events-none z-20" />

                <label
                  htmlFor="attending"
                  className={`absolute left-0 top-5 text-primary/50 text-sm transition-all pointer-events-none uppercase tracking-widest font-light ${
                    formData.attending !== '' ? '-translate-y-5 text-xs' : ''
                  }`}
                >
                  Will you attend?
                </label>
              </div>

              {formData.attending === 'yes' && (
                <>
                  <div className="relative w-full flex items-center">
                    <select
                      id="hasPlusOne"
                      required
                      disabled={isSubmitting}
                      className={`input-border appearance-none cursor-pointer pr-10 ${
                        formData.hasPlusOne === '' ? 'text-transparent' : 'text-primary'
                      }`}
                      value={formData.hasPlusOne}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hasPlusOne: e.target.value as 'yes' | 'no' | '',
                          plusOneName: e.target.value === 'no' ? '' : formData.plusOneName,
                        })
                      }
                    >
                      <option value="" disabled className="text-primary"></option>
                      <option value="yes" className="text-primary">Yes</option>
                      <option value="no" className="text-primary">No</option>
                    </select>

                    <ChevronDown size={18} strokeWidth={1.5} className="absolute right-0 bottom-3 text-primary/50 pointer-events-none z-20" />

                    <label
                      htmlFor="hasPlusOne"
                      className={`absolute left-0 top-5 text-primary/50 text-sm transition-all pointer-events-none uppercase tracking-widest font-light ${
                        formData.hasPlusOne !== '' ? '-translate-y-5 text-xs' : ''
                      }`}
                    >
                      Are you bringing a plus-one?
                    </label>
                  </div>

                  {formData.hasPlusOne === 'yes' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative w-full group"
                    >
                      <input
                        type="text"
                        id="plusOneName"
                        required
                        disabled={isSubmitting}
                        placeholder=" "
                        className="input-border peer"
                        value={formData.plusOneName}
                        onChange={(e) =>
                          setFormData({ ...formData, plusOneName: e.target.value })
                        }
                      />
                      <label
                        htmlFor="plusOneName"
className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary transition-all cursor-text pointer-events-none uppercase tracking-widest font-light"                      >
                        Plus-One Full Name
                      </label>
                    </motion.div>
                  )}
                </>
              )}

              <div className="relative w-full group mt-4">
                <textarea
                  id="dietaryRestrictions"
                  placeholder=" "
                  rows={2}
                  disabled={isSubmitting}
                  className="input-border peer resize-none animate-none"
                  value={formData.dietaryRestrictions}
                  onChange={(e) =>
                    setFormData({ ...formData, dietaryRestrictions: e.target.value })
                  }
                />
                <label
                  htmlFor="dietaryRestrictions"
className="absolute left-0 top-5 text-primary/50 text-sm peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-primary transition-all cursor-text pointer-events-none uppercase tracking-widest font-light"                >
                  Dietary Restrictions / Allergies
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 bg-primary text-base py-4 rounded-full w-full uppercase tracking-widest text-sm hover:opacity-90 hover:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Sending...</span>
                  </>
                ) : (
                  'Send RSVP'
                )}
              </button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>

     
    </section>
  );
}
