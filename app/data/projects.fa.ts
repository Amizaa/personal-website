import type { Project } from "@/types/projects.types";

export const projectsFa: Project[] = [
  {
    title: "وب‌سایت شخصی (همین وب‌سایت)",
    tag: "فول‌استک",
    image: "/images/projects/personal_web.png",
    description:
      "وب‌سایت شخصی که به‌عنوان ویترین اصلی نمونه‌کارهایم طراحی شده و بیانگر سبک کاری و توانایی‌های من است.",
    technologies: ["Nuxtjs", "Nuxt UI", "GSAP", "TailwindCSS", "TypeScript"],
    github: "https://github.com/Amizaa/personal-website",
    demo: "/",
    size: "L"
  },
  {
    title: "وب‌سایت فروشگاه ریمَس",
    tag: "فول‌استک",
    image: '/images/projects/rimas.png',
    description:
      "یک وب‌سایت فروشگاهی برای عرضه و فروش انواع اکسسوری‌ها با طراحی مدرن و امکانات کامل خرید آنلاین.",
    technologies: [
      "Nuxtjs",
      "Nuxt Ui",
      "Django",
      "REST API",
      "TailwindCSS",
      "Pinia",
      "PostgreSQL",
      "TypeScript"
    ],
    github: "https://github.com/Amizaa/Rimas-Accessories-Website",
    size: "L"
  },
  {
    title: "وب‌سایت تیم Tecso",
    tag: "فرانت‌اند",
    image: "/images/projects/Tecso_dev.png",
    description:
      "مشارکت در توسعه وب‌سایت تیم Tecso با افزودن پشتیبانی کامل زبان فارسی، بهبود دسترس‌پذیری و ارتقای تجربه کاربری.",
    technologies: ["Nuxtjs", "GSAP", "Bootstrap"],
    github: "https://github.com/Tecso-Dev/main-site",
    size: "M",
    demo: "https://tecso.team"
  },
  {
    title: "یولچی – سامانه حمل‌ونقل و باربری",
    tag: "فول‌استک",
    image: "/images/projects/yolchi.png",
    description:
      "یک سامانه جامع حمل‌ونقل و باربری که برای ساده‌سازی فرآیند لجستیک و ارتباط میان رانندگان و صاحبان بار طراحی شده است.",
    technologies: ["Django", "HTML", "Bootstrap", "Javascript", "MySQL"],
    github: "https://github.com/Amizaa/Yolchi",
    size: "L"
  },
  {
    title: "پیش‌بینی قیمت طلا",
    tag: "علوم داده",
    image: "/images/projects/gold_price_prediction.png",
    description:
      "پروژه دانشگاهی من درباره پیش‌بینی قیمت طلا بر اساس تحلیل احساسات اخبار با استفاده از یادگیری ماشین و مدل‌های زبانی پیشرفته.",
    technologies: ["Machine Learning", "Web Scraping", "NLP", "Deep Learning"],
    github: "https://github.com/Amizaa/gold-price-prediction",
    size: "M"
  },
  {
    title: "سیستم مدیریت کتابخانه",
    tag: "فرانت‌اند",
    image: "/images/projects/library.png",
    description:
      "پروژه درس نرم‌افزار که با هدف ساده‌سازی مدیریت منابع کتابخانه، جستجوی کتاب‌ها و فرآیند امانت‌گیری طراحی شد.",
    technologies: ["Vue.js", "Javascript", "CSS"],
    github: "https://github.com/Amizaa/library-management",
    size: "S",
    demo: "https://project.miladrezvani.ir/library/"
  }
];
