export interface LinkItem {
  id?: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ImageItem {
  src: string;
  alt?: string;
}

export interface SocialItem {
  name: string;
  href?: string;
  url?: string;
  icon: string;
}

export interface GlobalData {
  companyName: string;
  brand: {
    name: string;
    tagline: string;
    logo: string;
    href: string;
  };
  logo: ImageItem;
  contact: {
    address: string;
    email: string;
    emailHref: string;
    phone: string;
    phoneHref: string;
  };
  socials: { name: string; url: string; icon: string }[];
}

export interface HeaderData {
  brand: {
    name: string;
    tagline: string;
    logo: string;
    href: string;
  };
  menu: LinkItem[];
  cta: LinkItem;
}

export interface HeroData {
  image: {
    src: string;
  };
  heading: {
    main: string;
    highlight: string;
  };
  description?: string;
  ctaPrimary?: LinkItem;
  ctaSecondary?: LinkItem;
}

export interface AboutUsData {
  badge: string;
  heading: {
    main: string;
    highlight: string;
  };
  description: string;
  bottomHeading: {
    line1: string;
    line2: string;
    highlight: string;
    line3: string;
  };
  image: {
    src: string;
  };
}

export interface ServiceItem {
  id: string;
  slug: string;
  categoryLine1: string;
  categoryLine2: string;
  titleLine1: string;
  titleLine2: string;
  cta: {
    label: string;
    href: string;
  };
  image: string;
}

export interface ServicesData {
  heading: {
    main: string;
    highlight: string;
  };
  list: ServiceItem[];
  serviceDetails?: {
    header: {
      badge: string;
      titleLines: string[];
      description: string;
    };
    ourApproach: {
      title: string;
      paragraphs: string[];
    };
    gallery: {
      largeHeroImage: string;
      tapeImage: string;
      corrugatedImage: string;
      bigBottomImage: string;
    };
    designThatSpeaks: {
      heading: {
        lines: string[];
        highlight: string;
      };
      description: string;
    };
    materialMatters: {
      badge: string;
      description: string;
    };
    madeToCreate: {
      heading: {
        lines: string[];
        highlight: string;
        end: string;
      };
      description: string;
    };
  };
}

export interface WhyChooseUsFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsData {
  badge: string;
  heading: {
    main: string;
    middle: string;
    highlight: string;
  };
  description: string;
  list: WhyChooseUsFeature[];
  banner: {
    image: string;
    overlayCard: {
      titleLine1: string;
      titleLine2: string;
      subLine1: string;
      subLine2: string;
    };
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  rating: number;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface TestimonialPageItem {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  author: string;
  role: string;
  image: string;
}

export interface TestimonialsData {
  watermark: string;
  heading: {
    main: string;
  };
  description: string;
  backgroundImage: string;
  list: TestimonialItem[];
  page?: {
    badge: string;
    list: TestimonialPageItem[];
  };
}

export interface ArticleItem {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

export interface BlogDetailSection {
  step: string;
  heading: {
    lines: string[];
    highlight: string;
  };
  description: string;
  image?: string;
}

export interface BlogNewsData {
  badge: string;
  heading: {
    main: string;
  };
  cta: {
    label: string;
    href: string;
  };
  list: ArticleItem[];
  page?: {
    badge: string;
    heading: {
      main: string;
    };
    list: ArticleItem[];
  };
  details?: {
    header: {
      date: string;
      author: string;
      titleLine1: string;
      titleLine2: string;
      subtitle: string;
      introQuote: string;
    };
    heroImage: string;
    leadParagraph: string;
    sections: BlogDetailSection[];
    pullQuote: {
      line1: string;
      line2: string;
    };
  };
}

export interface ContactInfoCard {
  id: string;
  icon: string;
  title: string;
  detail: string;
  href?: string;
}

export interface ContactPageData {
  badge: string;
  heading: {
    lines: string[];
  };
  description: string;
  image: string;
  form: {
    buttonText: string;
  };
  list: ContactInfoCard[];
  bottomFeature: {
    heading: {
      lines: string[];
    };
    description: string;
    image: string;
  };
}

export interface GetQuoteStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface GetQuoteData {
  badge: string;
  heading: {
    lines: string[];
  };
  description: string;
  image: string;
  form: {
    heading: string;
    subheading: string;
    buttonText: string;
    securityNotice: string;
  };
  howItWorks: {
    badge: string;
    heading: {
      lines: string[];
    };
    list: GetQuoteStep[];
    featureImage: string;
  };
}

export interface FooterSocialLink {
  id: string;
  name: string;
  href: string;
}

export interface FooterData {
  logo: string;
  description: string;
  socials: SocialItem[];
  socialLinks: FooterSocialLink[];
  letsTalkCard: {
    badge?: string;
    subtitle?: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    cta: {
      label: string;
      href: string;
    };
    bgGraphicImage: string;
  };
  bottom: {
    copyright: string;
    links: { label: string; href: string }[];
  };
}

export interface PageBannersData {
  pages: {
    [key: string]: {
      title: string;
      image: string;
      subtitle?: string;
    };
  };
}

export interface PaptrixTemplateData {
  categories: {
    Paptrix: {
      templateComponents?: any;
      sections: {
        Global?: { variants?: { PaptrixGlobal1?: GlobalData } };
        Header?: { variants?: { PaptrixHeader1?: HeaderData } };
        PageBanners?: { variants?: { PaptrixPageBanners1?: PageBannersData } };
        HeroBanner?: { variants?: { PaptrixHeroBanner1?: HeroData } };
        AboutUs?: { variants?: { PaptrixAboutUs1?: AboutUsData } };
        Services?: { variants?: { PaptrixServices1?: ServicesData } };
        WhyChooseUs?: { variants?: { PaptrixWhyChooseUs1?: WhyChooseUsData } };
        Testimonials?: { variants?: { PaptrixTestimonials1?: TestimonialsData } };
        BlogNews?: { variants?: { PaptrixBlogNews1?: BlogNewsData } };
        ContactPage?: { variants?: { PaptrixContactPage1?: ContactPageData } };
        GetQuote?: { variants?: { PaptrixGetQuote1?: GetQuoteData } };
        Footer?: { variants?: { PaptrixFooter1?: FooterData } };
      };
    };
  };
}

/* =========================================================================
   SectionProps Namespace (Identical pattern as Rydora)
   ========================================================================= */
export interface SectionProps<T = any> {
  data?: T;
}

export namespace SectionProps {
  export type Header = { data?: HeaderData };
  export type Hero = { data?: HeroData };
  export type About = { data?: AboutUsData };
  export type Services = { data?: ServicesData };
  export type ServiceDetail = { data?: ServicesData["serviceDetails"] };
  export type WhyChooseUs = { data?: WhyChooseUsData };
  export type Testimonials = { data?: TestimonialsData };
  export type TestimonialDetail = { data?: TestimonialsData["page"] };
  export type BlogNews = { data?: BlogNewsData; limit?: number };
  export type BlogListing = { data?: BlogNewsData["page"] };
  export type BlogDetail = { data?: BlogNewsData["details"] };
  export type ContactPage = { data?: ContactPageData };
  export type GetQuote = { data?: GetQuoteData };
  export type Footer = { data?: FooterData };
  export type PageBanner = {
    title: string;
    image?: string;
    subtitle?: string;
    breadcrumbs?: { label: string; href?: string }[];
  };
}

// Aliases
export type HeaderProps = SectionProps.Header;
export type HeroProps = SectionProps.Hero;
export type AboutProps = SectionProps.About;
export type ServicesProps = SectionProps.Services;
export type WhyChooseUsProps = SectionProps.WhyChooseUs;
export type TestimonialsProps = SectionProps.Testimonials;
export type BlogNewsProps = SectionProps.BlogNews;
export type ContactPageProps = SectionProps.ContactPage;
export type GetQuoteProps = SectionProps.GetQuote;
export type FooterProps = SectionProps.Footer;
