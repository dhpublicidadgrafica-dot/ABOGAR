/**
 * CONFIGURACIÓN CENTRAL DE LA PASARELA DE PAGOS
 * 
 * Para cambiar el enlace de pago de la empresa en el futuro,
 * modifica ÚNICAMENTE el valor de PAYMENT_URL a continuación.
 * 
 * La aplicación validará automáticamente la URL y aplicará el cambio
 * en todos los botones y secciones del sitio web de forma inmediata.
 */

export const PAYMENT_URL: string = "https://checkout.bold.co/payment/LNK_W5LLDKHCE9";

/**
 * Validador seguro para la URL de la pasarela de pagos.
 * Verifica que sea una URL bien formada con protocolo http o https.
 */
export function isValidPaymentUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (
    !trimmed ||
    trimmed === '#' ||
    trimmed.startsWith('javascript:') ||
    trimmed.toLowerCase().includes('ejemplo.com')
  ) {
    return false;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
