// Central contact details for Phase 1 booking (form + WhatsApp fast-path).
// TODO: replace with the real business WhatsApp number / email before launch.

/** WhatsApp number in international format, digits only (no +, spaces, or dashes). */
export const WHATSAPP_NUMBER = "919000000000"; // placeholder — update before launch
export const CONTACT_EMAIL = "bookings@namaalayam.com"; // placeholder — update before launch

/** Build a wa.me link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
