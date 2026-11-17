"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { categories, getProductsByCategory } from "@/data/products";
import { site, waLink, waMessages } from "@/lib/site";

type FieldName = "name" | "phone" | "email" | "interest" | "message";
type Status = "idle" | "submitting" | "success" | "error";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  interest: "",
  message: "",
};

const formEndpoint =
  process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim() || "https://api.web3forms.com/submit";
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY?.trim();

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your name so we know who to call back.";
  }

  const digits = values.phone.replace(/\D/g, "");
  const validPhone =
    (digits.length === 10 && /^[6-9]/.test(digits)) ||
    (digits.length === 12 && digits.startsWith("91") && /^[6-9]/.test(digits.slice(2)));
  if (!validPhone) {
    errors.phone = "Enter a 10-digit Indian mobile number.";
  }

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Check the email address, or leave it blank.";
  }

  if (!values.interest) {
    errors.interest = "Pick the line you are enquiring about.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Add shed size or bird count — at least 10 characters.";
  }

  return errors;
}

export function InquiryForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: FieldName) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          phone: values.phone.trim(),
          email: values.email.trim() || "Not provided",
          interest: values.interest,
          message: values.message.trim(),
          subject: `Website inquiry — ${values.interest}`,
          from_name: "Sai Kiran Poultry Equipments website",
          ...(accessKey ? { access_key: accessKey } : {}),
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with ${response.status}`);
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-card border border-brand-600/30 bg-brand-50 p-6 sm:p-7"
      >
        <span className="grid h-10 w-10 place-items-center rounded-[4px] bg-brand-600 text-white">
          <Icon name="check" size={19} strokeWidth={2} />
        </span>
        <h2 className="mt-5 text-[19px] font-semibold">Enquiry logged.</h2>
        <p className="mt-2 max-w-md text-[13.5px] leading-[1.7] text-ink-soft">
          The sizing desk replies within one working day. For anything urgent — a breakdown, a
          flock going in this week — call the works directly.
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
          <a
            href={waLink(waMessages.quote)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Icon name="whatsapp" size={15} />
            Continue on WhatsApp
          </a>
          <button type="button" onClick={() => setStatus("idle")} className="btn-outline">
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Name <span className="text-clay">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`field ${errors.name ? "field-invalid" : ""}`}
            placeholder="Ramesh Reddy"
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-[11.5px] text-clay">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="field-label">
            Phone <span className="text-clay">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={update("phone")}
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`field ${errors.phone ? "field-invalid" : ""}`}
            placeholder="98765 43210"
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1.5 text-[11.5px] text-clay">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="field-label">
            Email <span className="normal-case tracking-normal text-ink-mute">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`field ${errors.email ? "field-invalid" : ""}`}
            placeholder="you@farm.in"
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-[11.5px] text-clay">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="interest" className="field-label">
            Product interest <span className="text-clay">*</span>
          </label>
          <select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={update("interest")}
            aria-required="true"
            aria-invalid={Boolean(errors.interest)}
            aria-describedby={errors.interest ? "interest-error" : undefined}
            className={`field ${errors.interest ? "field-invalid" : ""}`}
          >
            <option value="">Select a line</option>
            {categories.map((category) => (
              <optgroup key={category.slug} label={category.name}>
                {getProductsByCategory(category.slug).map((product) => (
                  <option key={product.slug} value={product.name}>
                    {product.name}
                  </option>
                ))}
              </optgroup>
            ))}
            <optgroup label="Housing packages">
              <option value="Turnkey EC house — 120 × 40 ft">
                Turnkey EC house — 120 × 40 ft
              </option>
              <option value="Open house package — 60 × 30 ft">
                Open house package — 60 × 30 ft
              </option>
            </optgroup>
            <optgroup label="Support">
              <option value="Spares, service and commissioning">
                Spares, service and commissioning
              </option>
            </optgroup>
          </select>
          {errors.interest ? (
            <p id="interest-error" className="mt-1.5 text-[11.5px] text-clay">
              {errors.interest}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message <span className="text-clay">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
          className={`field resize-y ${errors.message ? "field-invalid" : ""}`}
          placeholder="Shed 100 × 40 ft, 5,000 broilers, three-phase supply, borewell with overhead tank. Looking for pan feeding and nipple lines."
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-[11.5px] text-clay">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-ink-mute">
            Shed length × width, bird count, power supply — the three things we need to quote
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="botcheck">Leave this field empty</label>
        <input id="botcheck" name="botcheck" type="checkbox" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-[6px] border border-clay/40 bg-clay/[0.07] p-3.5">
          <p className="text-[12.5px] font-medium text-ink">The enquiry did not send.</p>
          <p className="mt-1 text-[12px] leading-[1.6] text-ink-soft">
            Try again, or send the same details to{" "}
            <a
              href={waLink(waMessages.quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-700 underline decoration-brand-600/40 underline-offset-2"
            >
              WhatsApp {site.phone.display}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-ink-mute">
          Reply within one working day · Mon–Sat
        </p>
        <button type="submit" disabled={status === "submitting"} className="btn-primary disabled:opacity-70">
          {status === "submitting" ? "Sending…" : "Send inquiry"}
          {status === "submitting" ? null : <Icon name="arrow-right" size={15} />}
        </button>
      </div>
    </form>
  );
}
