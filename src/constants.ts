import { Wallet, CreditCard, Banknote, Image as ImageIcon, ShieldCheck, Copy, FileText } from 'lucide-react';

export const SERVICES = [
  {
    id: 'photo-printing',
    title: 'Photo Printing',
    description: 'Mataas na kalidad na prints para sa iyong mga alaala. Perfect para sa souvenirs, graduation, at special events.',
    benefits: ['High-resolution prints', 'Water-resistant ink', 'Various sizes available'],
    icon: ImageIcon,
    price: 'Mula ₱5.00'
  },
  {
    id: 'lamination',
    title: 'Lamination',
    description: 'Protektahan ang iyong mahahalagang dokumento, ID, at certificates mula sa dumi at pagkasira.',
    benefits: ['Durable protection', 'Clear finish', 'ID to A4 sizes'],
    icon: ShieldCheck,
    price: 'Mula ₱15.00'
  },
  {
    id: 'photocopy',
    title: 'Photocopy / Xerox',
    description: 'Mabilis at malinaw na kopya ng iyong mga dokumento. Available sa Black & White at Colored.',
    benefits: ['Fast processing', 'Clear text and images', 'Bulk discounts'],
    icon: Copy,
    price: 'Mula ₱2.00'
  },
  {
    id: 'document-printing',
    title: 'Document Printing',
    description: 'Para sa iyong mga school projects, reports, at assignments. Professional look sa abot-kayang halaga.',
    benefits: ['Quality paper', 'Accurate colors', 'Fast turnaround'],
    icon: FileText,
    price: 'Mula ₱3.00'
  }
];

export const BUSINESS_INFO = {
  phone: '0915-826-9806',
  email: 'dndprintingservices2025@gmail.com',
  hours: 'Mon - Sat: 8:00 AM - 6:00 PM',
  address: 'Cebu City, Philippines'
};

export const TESTIMONIALS = [
  {
    name: 'Maria Santos',
    role: 'Student',
    content: 'Sobrang bilis ng service! Dito na ako lagi nagpapa-print ng projects ko.',
    rating: 5
  },
  {
    name: 'Juan Dela Cruz',
    role: 'Business Owner',
    content: 'Quality prints at napaka-professional kausap. Highly recommended!',
    rating: 5
  },
  {
    name: 'Elena Reyes',
    role: 'Teacher',
    content: 'Ang linaw ng photocopy at lamination. Safe na safe ang certificates ko.',
    rating: 5
  }
];

export const PORTFOLIO_ITEMS = [
  {
    title: 'Graduation Photo Prints',
    category: 'Photo Printing',
    image: '/grad-photo.jpg',
    desc: 'High-quality 8R prints with premium glossy finish.'
  },
  {
    title: 'Laminated School IDs',
    category: 'Lamination',
    image: '/laminated-id.jpg',
    desc: 'Durable and clear lamination for student IDs.'
  },
  {
    title: 'Business Reports',
    category: 'Document Printing',
    image: 'https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=800',
    desc: 'Professional colored printing for office reports.'
  },
  {
    title: 'Event Souvenirs',
    category: 'Photo Printing',
    image: '/quality-printing.jpg',
    desc: 'Wallet-sized photos for birthday giveaways.'
  },
  {
    title: 'Certificate Lamination',
    category: 'Lamination',
    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800',
    desc: 'A4 size lamination for training certificates.'
  },
  {
    title: 'Study Materials',
    category: 'Xerox / Photocopy',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    desc: 'Clear and readable photocopy of review materials.'
  }
];

export const PAYMENT_METHODS = [
  { id: 'gcash', name: 'GCash', icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 'paymaya', name: 'Maya', icon: CreditCard, color: 'text-green-600', bg: 'bg-green-50' },
  { id: 'cash', name: 'Cash on Pickup', icon: Banknote, color: 'text-orange-600', bg: 'bg-orange-50' },
];
