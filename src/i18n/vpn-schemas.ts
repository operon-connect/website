/** JSON-LD for VPN + FAQ from localized vpn.* keys (see my.json / en.json). */

type VpnPlan = {
  tier: string;
  price: string;
  data: string;
  offerDesc: string;
  placeholder?: boolean;
};

type FaqItem = {
  question: string;
  answer: string;
};

type VpnBundle = {
  pricing: { plans: VpnPlan[] };
  faq: { items: FaqItem[] };
};

export function buildVpnJsonLd(vpn: VpnBundle) {
  const priceNum = (p: string) => p.replace(/,/g, '');

  const vpnSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Operon Connect — VPN Service',
    description:
      'Privacy-focused VPN Service for Myanmar, operated on open-source networking. Standard VPN clients; no proprietary app.',
    serviceType: 'VPN Service',
    areaServed: {
      '@type': 'Country',
      name: 'Myanmar',
    },
    offers: vpn.pricing.plans
      .filter((plan) => !plan.placeholder && plan.offerDesc)
      .map((plan) => ({
        '@type': 'Offer',
        name: plan.tier,
        price: priceNum(plan.price),
        priceCurrency: 'MMK',
        description: plan.offerDesc,
      })),
    provider: {
      '@type': 'Organization',
      name: 'Operon Connect',
      url: 'https://operonconnect.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: vpn.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return { vpnSchema, faqSchema };
}
