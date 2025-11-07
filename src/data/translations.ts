export type Locale = 'bg' | 'en';

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  href: string;
};

export type Dictionary = {
  nav: {
    services: string;
    categories: string;
    usps: string;
    knowledge: string;
    contact: string;
    language: string;
    searchPlaceholder: string;
  };
  megaMenu: {
    segments: Array<{
      title: string;
      description: string;
      items: Array<{ name: string; description: string; href: string }>;
    }>;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctas: { primary: string; secondary: string };
    trustedBy: string;
  };
  highlights: Array<{ title: string; description: string }>;
  highlightsIntro: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    cards: Array<{
      title: string;
      description: string;
      points: string[];
    }>;
  };
  american: {
    title: string;
    description: string;
    bullets: string[];
    cta: string;
  };
  search: {
    title: string;
    empty: string;
    items: SearchItem[];
  };
  coverage: {
    title: string;
    description: string;
    label: string;
    cities: string[];
  };
  faq: {
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  resources: {
    title: string;
    description: string;
    tagLabel: string;
    actionLabel: string;
    items: Array<{ title: string; description: string; href: string }>;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  bg: {
    nav: {
      services: 'Услуги',
      categories: 'Категории',
      usps: 'Защо нас',
      knowledge: 'Ресурси',
      contact: 'Контакт',
      language: 'BG',
      searchPlaceholder: 'Търсене в сайта'
    },
    megaMenu: {
      segments: [
        {
          title: 'Европейски марки',
          description: 'Дълбока диагностика за VAG, BMW, Mercedes, френски и италиански производители.',
          items: [
            { name: 'Немски премиум', description: 'BMW, Mercedes-Benz, Audi, Porsche', href: '#services' },
            { name: 'VAG група', description: 'VW, Skoda, Seat, Cupra, Bentley', href: '#services' },
            { name: 'Френски и италиански', description: 'Renault, Peugeot, Citroën, Fiat, Alfa Romeo', href: '#services' }
          ]
        },
        {
          title: 'Японски и корейски',
          description: 'Специализирани процедури за Toyota/Lexus, Honda, Nissan, Hyundai/Kia.',
          items: [
            { name: 'Хибриди и EV', description: 'Toyota Hybrid, Lexus, Nissan Leaf', href: '#electro' },
            { name: 'Спортни и JDM', description: 'Subaru STI, Nissan Z, Honda Type R', href: '#services' },
            { name: 'Корейски премиум', description: 'Genesis, Kia GT Line, Hyundai N', href: '#services' }
          ]
        },
        {
          title: 'Американски внос',
          description: 'Поддръжка на автомобили от Copart и IAAI, включително електромобили.',
          items: [
            { name: 'Проверка преди търг', description: 'VIN, CarVertical, CarFax анализ', href: '#american' },
            { name: 'Оценка на щети', description: 'Калкулация на ремонт, скрити проблеми', href: '#american' },
            { name: 'Електромобили от САЩ', description: 'Tesla, Rivian, Lucid', href: '#electro' }
          ]
        }
      ]
    },
    hero: {
      badge: 'Мобилна диагностика до адрес в цяла България',
      title: 'Футуристична автодиагностика за автомобили, които заслужават най-доброто',
      subtitle:
        'Интегрираме OEM оборудване, телематика в реално време и експертиза от над 15 години, за да ви дадем ясна картина преди покупка, сервиз или търг.',
      ctas: {
        primary: 'Запази диагностика',
        secondary: 'Провери автомобил от САЩ'
      },
      trustedBy: 'Доверено от собственици на премиум автопаркове, дилъри и вносители'
    },
    highlightsIntro: {
      title: 'Технологии и предимства',
      description: 'Работим с OEM инструменти, облачни анализи и 24/7 поддръжка за максимална прозрачност.'
    },
    highlights: [
      {
        title: 'OEM & Remote Cloud Diagnostics',
        description: 'Работа с дилърски софтуер, онлайн кодиране и адаптации за най-новите платформи.'
      },
      {
        title: 'AI анализ на аукционни щети',
        description: 'Сравнение на снимки от Copart/IAAI с фабрични спецификации и бази данни за щети.'
      },
      {
        title: '24/7 Tech Concierge',
        description: 'Мигновен достъп до инженер по Viber, WhatsApp и e-mail. SLA реакция под 30 минути.'
      }
    ],
    services: {
      title: 'Сегменти и услуги',
      description:
        'Инженерен подход към диагностика на различни класове автомобили с акцент върху софтуер, електроника и хибридни системи.',
      cards: [
        {
          title: 'Премиум европейски марки',
          description: 'Специализирани OEM тестери за VAG, BMW, Mercedes, Porsche и др.',
          points: [
            'Динамични тестове на пътя и дистанционно кодиране',
            'OTA актуализации и калибрация на ADAS системи',
            'Поддръжка на флийт и подписване на дигитални протоколи'
          ]
        },
        {
          title: 'Японски/корейски хибриди и EV',
          description: 'Анализ на високоволтови системи, SOH тестове и термални профили.',
          points: [
            'Детайлна оценка на батерии и инвертори',
            'Поддръжка на Toyota/Lexus, Nissan, Hyundai/Kia, Honda',
            'Инспекция на зарядни модули и HV безопасност'
          ]
        },
        {
          title: 'Американски автомобили от търг',
          description: 'Пълно досие преди покупка, разкодиране на опции и проверка на ремонти.',
          points: [
            'VIN проверка + AI анализ на снимков материал',
            'Скрити дефекти по електроника и въздушни възглавници',
            'Координация с транспорт и логистика до България'
          ]
        }
      ]
    },
    american: {
      title: 'Фокус: автомобили от САЩ',
      description:
        'Изграждаме дигитално досие на всеки автомобил от търг: оценяваме щети, проверяваме сервизни кампании и симулираме разходи за възстановяване.',
      bullets: [
        'Обединяване на Carfax, Copart, IAAI и застрахователни записи',
        '360° проверка на електрически и автономни системи',
        'Консултация за митнически и регистрационни процедури'
      ],
      cta: 'Заяви проверка на автомобил от САЩ'
    },
    search: {
      title: 'Резултати от търсене',
      empty: 'Няма намерени резултати. Опитайте с друга ключова дума.',
      items: []
    },
    coverage: {
      title: 'Карта на покритие',
      description: 'Мобилни екипи, позиционирани в София, Пловдив, Варна, Бургас и Плевен с възможност за посещение на място в цялата страна.',
      label: 'Основни локации',
      cities: ['София', 'Пловдив', 'Варна', 'Бургас', 'Плевен', 'Русе']
    },
    faq: {
      title: 'Често задавани въпроси',
      description: 'Отговори на най-често задаваните въпроси за мобилна диагностика, проверка на автомобили от САЩ и процеса по заявка.',
      items: [
        {
          question: 'Как протича мобилната диагностика?',
          answer:
            'Екипът пристига с пълно оборудване, извършва визуална инспекция, OBD четене, динамични тестове и ви изпраща дигитален протокол с препоръки.'
        },
        {
          question: 'Можете ли да проверите автомобил преди търг?',
          answer:
            'Да, извършваме дистанционен анализ по снимки и данни от търга, след което при нужда организираме оглед на място чрез партньори.'
        },
        {
          question: 'Работите ли с електромобили?',
          answer:
            'Да, сертифицирани сме за работа с HV системи и предлагаме подробни доклади за състоянието на батерията, BMS и зарядните модули.'
        }
      ]
    },
    resources: {
      title: 'Информационни ресурси',
      description: 'Подготвили сме ръководства и чеклисти, които да ви помогнат да вземете информирано решение.',
      tagLabel: 'Ресурс',
      actionLabel: 'Изтегли',
      items: [
        {
          title: 'Чеклист за автомобил от Copart',
          description: '20 ключови точки, които проверяваме преди участие на търг.',
          href: '#'
        },
        {
          title: 'Ръководство за диагностика на хибрид',
          description: 'Как оценяваме SOH и рисковете при покупка на употребяван хибрид.',
          href: '#'
        },
        {
          title: 'Пътна карта за мобилна диагностика',
          description: 'Процес на заявка, посещение, доклад и последваща поддръжка.',
          href: '#'
        }
      ]
    },
    cta: {
      title: 'Готови ли сте за технологична диагностика?',
      description: 'Свържете се с нас по телефон, Viber или попълнете форма за обратна връзка. Реагираме в рамките на 30 минути.',
      button: 'Свържи се с екипа'
    },
    footer: {
      tagline: 'Мобилна диагностика от ново поколение',
      rights: '© ' + new Date().getFullYear() + ' MobilnaDiagnostika. Всички права запазени.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      categories: 'Segments',
      usps: 'Why us',
      knowledge: 'Resources',
      contact: 'Contact',
      language: 'EN',
      searchPlaceholder: 'Search the site'
    },
    megaMenu: {
      segments: [
        {
          title: 'European excellence',
          description: 'Deep diagnostics for VAG, BMW, Mercedes, French and Italian manufacturers.',
          items: [
            { name: 'German premium', description: 'BMW, Mercedes-Benz, Audi, Porsche', href: '#services' },
            { name: 'VAG group', description: 'VW, Skoda, Seat, Cupra, Bentley', href: '#services' },
            { name: 'French & Italian', description: 'Renault, Peugeot, Citroën, Fiat, Alfa Romeo', href: '#services' }
          ]
        },
        {
          title: 'Japanese & Korean',
          description: 'Dedicated procedures for Toyota/Lexus, Honda, Nissan, Hyundai/Kia.',
          items: [
            { name: 'Hybrids & EV', description: 'Toyota Hybrid, Lexus, Nissan Leaf', href: '#electro' },
            { name: 'Sport & JDM', description: 'Subaru STI, Nissan Z, Honda Type R', href: '#services' },
            { name: 'Korean premium', description: 'Genesis, Kia GT Line, Hyundai N', href: '#services' }
          ]
        },
        {
          title: 'US imports',
          description: 'Support for Copart & IAAI vehicles including EVs and pickups.',
          items: [
            { name: 'Pre-auction check', description: 'VIN, CarVertical, CarFax analysis', href: '#american' },
            { name: 'Damage assessment', description: 'Repair calculation, hidden issues', href: '#american' },
            { name: 'US-based EVs', description: 'Tesla, Rivian, Lucid', href: '#electro' }
          ]
        }
      ]
    },
    hero: {
      badge: 'Mobile diagnostics anywhere in Bulgaria',
      title: 'Futuristic auto diagnostics for vehicles that deserve the best',
      subtitle:
        'We merge OEM tooling, real-time telematics and 15+ years expertise to deliver crystal-clear insights before you buy, service or bid.',
      ctas: {
        primary: 'Book a diagnostic',
        secondary: 'Verify a US import'
      },
      trustedBy: 'Trusted by premium fleet owners, dealers and importers'
    },
    highlightsIntro: {
      title: 'Technology & edge',
      description: 'Dealer-grade tooling, cloud analytics and 24/7 concierge deliver complete transparency.'
    },
    highlights: [
      {
        title: 'OEM & Remote Cloud Diagnostics',
        description: 'Dealer-level software, online coding and adaptations for the newest platforms.'
      },
      {
        title: 'AI auction damage analysis',
        description: 'We match Copart/IAAI imagery with OEM specs and damage databases.'
      },
      {
        title: '24/7 Tech Concierge',
        description: 'Instant access to an engineer via Viber, WhatsApp and e-mail. SLA response under 30 minutes.'
      }
    ],
    services: {
      title: 'Segments & services',
      description:
        'An engineering-grade approach to diagnostics across vehicle classes with focus on software, electronics and hybrid systems.',
      cards: [
        {
          title: 'Premium European brands',
          description: 'OEM testers dedicated to VAG, BMW, Mercedes, Porsche and more.',
          points: [
            'Dynamic road tests and remote coding',
            'OTA updates & ADAS calibration',
            'Fleet support and digital reporting'
          ]
        },
        {
          title: 'Japanese/Korean hybrids & EV',
          description: 'High-voltage analysis, SOH tests and thermal profiling.',
          points: [
            'Battery & inverter assessment',
            'Support for Toyota/Lexus, Nissan, Hyundai/Kia, Honda',
            'Inspection of chargers and HV safety'
          ]
        },
        {
          title: 'US auction vehicles',
          description: 'Full dossier before purchase, option decoding and repair tracing.',
          points: [
            'VIN report + AI photo analysis',
            'Hidden defects across electronics and airbags',
            'Logistics coordination to Bulgaria'
          ]
        }
      ]
    },
    american: {
      title: 'Spotlight: US imported vehicles',
      description:
        'We build a digital dossier for every auction car: damage modelling, recall lookup and recovery cost simulation.',
      bullets: [
        'Aggregating Carfax, Copart, IAAI and insurance records',
        '360° inspection of electric & autonomous systems',
        'Consulting on customs and registration'
      ],
      cta: 'Request a US car inspection'
    },
    search: {
      title: 'Search results',
      empty: 'No matches found. Try a different keyword.',
      items: []
    },
    coverage: {
      title: 'Coverage map',
      description: 'Mobile teams positioned in Sofia, Plovdiv, Varna, Burgas and Pleven with nationwide onsite capability.',
      label: 'Core hubs',
      cities: ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Pleven', 'Ruse']
    },
    faq: {
      title: 'Frequently asked questions',
      description: 'Answers to common questions about mobile diagnostics, US import checks and booking workflow.',
      items: [
        {
          question: 'How does the mobile diagnostic visit work?',
          answer:
            'Our team arrives with full OEM tooling, performs visual inspection, OBD reading, dynamic tests and sends you a digital report with recommendations.'
        },
        {
          question: 'Can you check a car before an auction bid?',
          answer:
            'Yes. We provide remote analysis based on imagery and data, and we can arrange onsite inspection through trusted partners.'
        },
        {
          question: 'Do you handle EV diagnostics?',
          answer:
            'Absolutely. We are certified for HV systems and deliver in-depth reports for batteries, BMS and charging modules.'
        }
      ]
    },
    resources: {
      title: 'Knowledge hub',
      description: 'Guides and checklists designed to support better automotive decisions.',
      tagLabel: 'Resource',
      actionLabel: 'Download',
      items: [
        {
          title: 'Copart auction checklist',
          description: '20 critical points we verify before bidding.',
          href: '#'
        },
        {
          title: 'Hybrid diagnostic handbook',
          description: 'How we evaluate SOH and risks when buying a used hybrid.',
          href: '#'
        },
        {
          title: 'Mobile diagnostic roadmap',
          description: 'From request, onsite visit, report delivery to follow-up.',
          href: '#'
        }
      ]
    },
    cta: {
      title: 'Ready for a tech-first diagnostic?',
      description: 'Reach out via phone, Viber or submit a request. We respond within 30 minutes.',
      button: 'Contact the team'
    },
    footer: {
      tagline: 'Next-gen mobile diagnostics',
      rights: '© ' + new Date().getFullYear() + ' MobilnaDiagnostika. All rights reserved.'
    }
  }
};

export const searchItems: Record<Locale, SearchItem[]> = {
  bg: [
    {
      id: 'book-diagnostic',
      title: 'Запази мобилна диагностика',
      description: 'Форма за заявка и бърз контакт с инженер.',
      category: 'CTA',
      href: '#contact'
    },
    {
      id: 'us-import',
      title: 'Проверка на автомобил от САЩ',
      description: 'VIN репорти, анализ на снимки и оценка на щети.',
      category: 'Американски автомобили',
      href: '#american'
    },
    {
      id: 'hybrid-services',
      title: 'Диагностика на хибрид и електромобил',
      description: 'SOH тестове, HV системи, зарядни модули.',
      category: 'Хибриди и EV',
      href: '#electro'
    },
    {
      id: 'fleet-support',
      title: 'Флийт поддръжка',
      description: 'Персонализирани пакети за корпоративни автопаркове.',
      category: 'Бизнес',
      href: '#services'
    }
  ],
  en: [
    {
      id: 'book-diagnostic',
      title: 'Book a mobile diagnostic',
      description: 'Request form and instant engineer contact.',
      category: 'CTA',
      href: '#contact'
    },
    {
      id: 'us-import',
      title: 'Inspect a US import',
      description: 'VIN reporting, image analysis and damage modelling.',
      category: 'US vehicles',
      href: '#american'
    },
    {
      id: 'hybrid-services',
      title: 'Hybrid & EV diagnostics',
      description: 'SOH testing, HV systems, charging modules.',
      category: 'Hybrid & EV',
      href: '#electro'
    },
    {
      id: 'fleet-support',
      title: 'Fleet support',
      description: 'Tailored programmes for corporate fleets.',
      category: 'Business',
      href: '#services'
    }
  ]
};

export const locales: Locale[] = ['bg', 'en'];
