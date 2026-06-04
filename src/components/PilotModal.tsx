import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle, Loader } from 'lucide-react';
import { submitPilotRequest, type PilotRequest } from '../lib/supabase';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const GREENHOUSE_SIZES = [
  'Under 1,000 sq ft',
  '1,000 – 5,000 sq ft',
  '5,000 – 20,000 sq ft',
  '20,000 – 100,000 sq ft',
  'Over 100,000 sq ft',
];

const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState<PilotRequest>({
    name: '',
    email: '',
    greenhouse_name: '',
    location: '',
    greenhouse_size: '',
    message: '',
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form when closed
      setTimeout(() => {
        setFormState('idle');
        setErrorMsg('');
        setForm({ name: '', email: '', greenhouse_name: '', location: '', greenhouse_size: '', message: '' });
      }, 300);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');
    try {
      await submitPilotRequest(form);
      setFormState('success');
    } catch (err: unknown) {
      setFormState('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(10,16,24,0.85)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.2s ease',
      }}>
      <div style={{
        background: 'linear-gradient(160deg, #1a2332, #0d2818)',
        border: '1px solid rgba(26,184,212,0.2)',
        borderRadius: '20px', width: '100%', maxWidth: '520px',
        maxHeight: '90vh', overflowY: 'auto',
        boxShadow: '0 0 60px rgba(26,184,212,0.1)',
        animation: 'slideUp 0.25s ease',
        position: 'relative',
      }}>
        {/* Header */}
        <div style={{
          padding: '28px 32px 0',
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        }}>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1ab8d4', marginBottom: '8px' }}>
              Pilot Program
            </p>
            <h2 style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.7rem', color: '#e2e8f0', lineHeight: 1.2 }}>
              Request a pilot
            </h2>
            {/* <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.5)', marginTop: '6px' }}>
              Tell us about your greenhouse and we'll be in touch within 48 hours.
            </p> */}
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px', color: 'rgba(226,232,240,0.6)', cursor: 'pointer',
            padding: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginLeft: '16px', marginTop: '4px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
            <X size={18} />
          </button>
        </div>

        {/* Success state */}
        {formState === 'success' ? (
          <div style={{ padding: '48px 32px', textAlign: 'center' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px', color: '#4ade80',
            }}>
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontFamily: '"DM Serif Display", serif', fontSize: '1.4rem', color: '#e2e8f0', marginBottom: '10px' }}>
              Request received!
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(226,232,240,0.55)', lineHeight: 1.7, maxWidth: '340px', margin: '0 auto 28px' }}>
              Thanks for your interest. We'll review your request and reach out within 48 hours.
            </p>
            <button onClick={onClose} style={{
              background: 'linear-gradient(135deg, #2d7a4f, #4ade80)',
              color: '#0d1821', padding: '12px 28px', borderRadius: '8px',
              border: 'none', fontWeight: 700, fontSize: '14px', cursor: 'pointer',
              fontFamily: 'inherit',
            }}>
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} style={{ padding: '28px 32px 32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Name + Email row */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Field label="Your name *" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" required />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@greenhouse.com" required />
              </div>

              {/* Greenhouse name */}
              <Field label="Greenhouse name" name="greenhouse_name" value={form.greenhouse_name || ''} onChange={handleChange} placeholder="Green Valley Farms" />

              {/* Location + Size row */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <Field label="Location *" name="location" value={form.location || ''} onChange={handleChange} placeholder="Abbotsford, B.C." required/>
                <SelectField label="Greenhouse size" name="greenhouse_size" value={form.greenhouse_size || ''} onChange={handleChange} options={GREENHOUSE_SIZES} />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(226,232,240,0.6)', marginBottom: '6px', letterSpacing: '0.3px' }}>
                  Anything else you'd like us to know?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Current pest challenges, crops grown, etc."
                  rows={3}
                  style={{
                    width: '100%', background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(26,184,212,0.2)', borderRadius: '8px',
                    padding: '10px 14px', fontSize: '14px', color: '#e2e8f0',
                    fontFamily: 'inherit', resize: 'vertical', outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.5)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.2)')}
                />
              </div>

              {/* Error */}
              {formState === 'error' && (
                <div style={{
                  background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)',
                  borderRadius: '8px', padding: '12px 16px',
                  fontSize: '13px', color: '#f87171',
                }}>
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'submitting'}
                style={{
                  background: formState === 'submitting'
                    ? 'rgba(74,222,128,0.4)'
                    : 'linear-gradient(135deg, #2d7a4f, #4ade80)',
                  color: '#0d1821', padding: '14px 28px', borderRadius: '8px',
                  border: 'none', fontWeight: 700, fontSize: '15px', cursor: formState === 'submitting' ? 'not-allowed' : 'pointer',
                  fontFamily: 'inherit', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '8px', marginTop: '4px',
                  transition: 'opacity 0.2s',
                }}>
                {formState === 'submitting' ? (
                  <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</>
                ) : (
                  <>Submit request <ArrowRight size={16} /></>
                )}
              </button>
            </div>

            <style>{`
              @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
              @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes spin { to { transform: rotate(360deg); } }
              @media (max-width: 480px) {
                .form-row { grid-template-columns: 1fr !important; }
              }
            `}</style>
          </form>
        )}
      </div>
    </div>
  );
};

// ── Reusable field components ──────────────────────────────────
interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const Field: React.FC<FieldProps> = ({ label, name, value, onChange, placeholder, type = 'text', required }) => (
  <div>
    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(226,232,240,0.6)', marginBottom: '6px', letterSpacing: '0.3px' }}>
      {label}
    </label>
    <input
      type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder} required={required}
      style={{
        width: '100%', background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(26,184,212,0.2)', borderRadius: '8px',
        padding: '10px 14px', fontSize: '14px', color: '#e2e8f0',
        fontFamily: 'inherit', outline: 'none', transition: 'border-color 0.2s',
      }}
      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.5)')}
      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.2)')}
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, value, onChange, options }) => (
  <div>
    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(226,232,240,0.6)', marginBottom: '6px', letterSpacing: '0.3px' }}>
      {label}
    </label>
    <select
      name={name} value={value} onChange={onChange}
      style={{
        width: '100%', background: '#1a2332',
        border: '1px solid rgba(26,184,212,0.2)', borderRadius: '8px',
        padding: '10px 14px', fontSize: '14px', color: value ? '#e2e8f0' : 'rgba(226,232,240,0.35)',
        fontFamily: 'inherit', outline: 'none', cursor: 'pointer',
        transition: 'border-color 0.2s', appearance: 'none',
      }}
      onFocus={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.5)')}
      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(26,184,212,0.2)')}>
      <option value="" disabled>Select size...</option>
      {options.map(o => <option key={o} value={o} style={{ background: '#1a2332', color: '#e2e8f0' }}>{o}</option>)}
    </select>
  </div>
);

export default PilotModal;
