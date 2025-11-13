import type { ExperienceFa } from "@/types/experiences.types";

export const experiencesFa: ExperienceFa[] = [
  {
    title: "مهندس جونیور و بازاریابی دیجیتال",
    company: "افزار صنعت صبا (صبا پک)",
    companyIcon: "/images/experiences/sabalogo.jpg",
    location: "ارومیه، ایران",
    startDate: "تیر ۱۴۰۲",
    endDate: "شهریور ۱۴۰۲",
    descriptions: [
      "یادگیری برنامه‌نویسی آردوینو برای کنترل دستگاه‌های صنعتی",
      "طراحی بنرهای تبلیغاتی برای کمپین‌های بازاریابی",
      "مدیریت و به‌روزرسانی حساب اینستاگرام شرکت"
    ],
    technologies: ["devicon:arduino", "devicon:photoshop", "devicon:c"],
    type: "تمام وقت"
  },
  {
    title: "کارآموز امنیت وب",
    company: "مرکز آپای دانشگاه ارومیه",
    companyIcon: "/images/experiences/APA_logo.png",
    location: "ارومیه، ایران",
    startDate: "تیر ۱۴۰۳",
    endDate: "شهریور ۱۴۰۳",
    type: "کارآموزی",
    descriptions: [
      "مطالعه و تمرین مفاهیم امنیت وب از طریق آزمایشگاه‌ها و دوره‌های عملی",
      "نصب و کار با کالی لینوکس برای تمرین تست نفوذ",
      "آشنایی و استفاده از ابزارهایی مانند Burp Suite برای تحلیل آسیب‌پذیری‌ها",
      "انجام تمرین‌های OverTheWire (Bandit, Natas) و PortSwigger در زمینه تزریق SQL، XSS، آپلود فایل و آسیب‌پذیری‌های احراز هویت",
      "مرور و خلاصه‌سازی راهنمای تست امنیت وب OWASP (WSTG) و استاندارد ASVS به زبان فارسی برای یادگیری گروهی",
      "همکاری با مربیان و سایر کارآموزان برای تقویت دانش در تست نفوذ و کدنویسی امن"
    ],
    technologies: ["devicon:kalilinux", "devicon:linux"]
  },
  {
    title: "توسعه‌دهنده فرانت‌اند",
    location: "دورکاری",
    companyIcon: "/images/experiences/freelancering.png",
    startDate: "خرداد ۱۴۰۴",
    endDate: "اکنون",
    type: "فریلنسر",
    descriptions: [
      "توسعه وب‌اپلیکیشن‌های واکنش‌گرا و آماده تولید با استفاده از Vue.js و Nuxt.js",
      "پیاده‌سازی قابلیت‌های مدرن فرانت‌اند با تمرکز بر کارایی، دسترس‌پذیری و تجربه کاربری",
      "همکاری نزدیک با مشتریان برای ارائه راهکارهای اختصاصی و ایجاد روابط بلندمدت",
      "افزودن انیمیشن‌ها و ترنزیشن‌های جذاب با GSAP برای رابط‌های کاربری پویا"
    ],
    technologies: ["devicon:vuejs", "devicon:nuxt", "devicon:typescript", "devicon:tailwindcss"]
  }
];
