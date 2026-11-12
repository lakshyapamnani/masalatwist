import { CartItem, PaymentMode } from '../types';

/**
 * Normalizes a phone number for wa.me links (defaults 10-digit numbers to India +91).
 */
export function formatWhatsAppPhone(phone: string): string {
  const digits = (phone || '').replace(/\D/g, '');
  if (!digits) return '';
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 11 && digits.startsWith('0')) return `91${digits.slice(1)}`;
  return digits;
}

/**
 * Builds a direct https://wa.me/... URL with optional prefilled text.
 */
export function buildWaMeUrl(phone: string, message?: string): string {
  const formatted = formatWhatsAppPhone(phone);
  if (!formatted) return '';
  if (message && message.trim()) {
    return `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${formatted}`;
}

export interface BillWhatsAppParams {
  billNo?: string;
  tableName?: string;
  orderType?: string;
  customerName?: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  discountAmount?: number;
  total: number;
  paymentMode?: PaymentMode;
}

/**
 * Builds a concise, direct WhatsApp bill message ending with Masala Twist & Drona POS attribution.
 */
export function buildBillWhatsAppMessage(params: BillWhatsAppParams): string {
  const {
    billNo,
    tableName,
    orderType,
    customerName,
    items,
    subtotal,
    tax,
    discountAmount = 0,
    total,
    paymentMode,
  } = params;

  const lines: string[] = [];
  lines.push('*Masala Twist*');
  const headerParts: string[] = [];
  if (billNo) headerParts.push(`Bill #${billNo}`);
  if (tableName) headerParts.push(tableName);
  else if (orderType) headerParts.push(orderType.replace('_', ' '));
  if (headerParts.length > 0) lines.push(headerParts.join(' | '));
  if (customerName && customerName.trim()) lines.push(`Customer: ${customerName.trim()}`);
  lines.push('');

  items.forEach((it, idx) => {
    const variant = it.selectedMl || (it.selectedPortion === 'HALF' ? 'Half' : it.selectedPortion === 'FULL' ? 'Full' : '');
    const label = variant ? `${it.name} (${variant})` : it.name;
    lines.push(`${idx + 1}. ${label} x${it.quantity} = ₹${(it.price * it.quantity).toFixed(0)}`);
  });

  lines.push('');
  lines.push(`Subtotal: ₹${subtotal.toFixed(0)}`);
  if (tax > 0) lines.push(`Tax: ₹${Math.round(tax)}`);
  if (discountAmount > 0) lines.push(`Discount: -₹${Math.round(discountAmount)}`);
  lines.push(`*Total: ₹${Math.round(total)}*`);
  if (paymentMode) lines.push(`Payment: ${paymentMode}`);
  lines.push('');
  lines.push('Thank you! Masala Twist');
  lines.push('App by Drona POS');

  return lines.join('\n');
}
