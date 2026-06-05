export type TabType = 'products' | 'solutions' | 'about' | 'pricing';

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CoreValue {
  id: string;
  icon: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

export interface Inquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  companySize: string;
  message: string;
  timestamp: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
