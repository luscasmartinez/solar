/** Link e mensagem padrão para contato via WhatsApp (Ground) */
export const WHATSAPP_LINK =
  'https://wa.me/555599314171?text=Ol%C3%A1%21%20Vim%20do%20site%20e%20tenho%20interesse%20nos%20servi%C3%A7os%20da%20Ground.';

export const WHATSAPP_BUTTON_TEXT = 'Clique e fale conosco.';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Dispara evento no dataLayer para o GTM rastrear clique no WhatsApp */
export function trackWhatsAppClick(section: string): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'whatsapp_click',
    section,
  });
}
