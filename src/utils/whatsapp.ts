import { COMPANY_DATA } from '../data/powercellData';

export interface FormSubmissionData {
  name: string;
  phone: string;
  deviceType: string;
  problemType: string;
  description: string;
}

export function formatPhoneMask(value: string): string {
  // Remove everything except numbers
  const digits = value.replace(/\D/g, '').slice(0, 11);
  
  if (digits.length <= 2) {
    return digits.length > 0 ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}

export function cleanPhoneDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function generateServiceWhatsappUrl(serviceTitle: string, customMessage?: string): string {
  const message = customMessage || `Olá, vim pelo site da Powercell e gostaria de tirar dúvidas sobre o serviço: ${serviceTitle}.`;
  return `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function generateContactFormWhatsappUrl(data: FormSubmissionData): string {
  const messageText = [
    'Olá, Powercell! Vim pelo site e gostaria de solicitar atendimento.',
    '',
    `Nome: ${data.name.trim()}`,
    `WhatsApp: ${data.phone.trim()}`,
    `Aparelho: ${data.deviceType.trim()}`,
    `Assunto: ${data.problemType.trim()}`,
    `Problema informado: ${data.description.trim()}`,
  ].join('\n');

  return `https://wa.me/${COMPANY_DATA.phoneRaw}?text=${encodeURIComponent(messageText)}`;
}
