import { Language } from '@/lib/types';

export const dictionaries = {
  ar: {
    brand: 'StudyTech Advisor',
    nav: { home: 'الرئيسية', learn: 'تعلم الأساسيات', quiz: 'الاختبار الذكي', trusted: 'أجهزة موثوقة بسعر أقل', about: 'من نحن', faq: 'الأسئلة الشائعة', contact: 'تواصل معنا', signin: 'تسجيل الدخول', signup: 'إنشاء حساب', dashboard: 'لوحة التحكم', favorites: 'المفضلة', profile: 'الملف الشخصي', signout: 'تسجيل الخروج' },
    common: { startQuiz: 'ابدأ الاختبار', learnBasics: 'تعلم الأساسيات', save: 'حفظ', compare: 'مقارنة', viewProduct: 'عرض المنتج', myr: 'ر.م', browseNow: 'تصفح الأجهزة الآن', analyzing: 'جاري تحليل احتياجاتك...' },
    home: { heroTitle: 'اختر جهازك الجامعي بثقة وذكاء', heroSubtitle: 'منصة ثنائية اللغة تساعد طلاب ماليزيا على اختيار أفضل لابتوب حسب التخصص والميزانية والاستخدام.', problemTitle: 'المشكلة والحل', problemText: 'الطلاب يشترون أجهزة غير مناسبة ثم يواجهون بطء أو حرارة أو عمر بطارية ضعيف. نحن نحول الحيرة إلى قرار واضح مدعوم ببيانات.', optionsTitle: 'خياراتك الأساسية', whyTitle: 'لماذا StudyTech Advisor؟', whyItems: ['توصيات دقيقة حسب تخصصك', 'محتوى تعليمي عملي بدون تعقيد', 'حلول اقتصادية عبر شركاء موثوقين'], malaysiaTitle: 'طالب جديد في ماليزيا؟', malaysiaText: 'تعرف على الأسعار المحلية، الضمان، وتوازن الأداء مقابل القيمة قبل أول فصل دراسي.', testimonialsTitle: 'آراء الطلاب', faqPreviewTitle: 'أسئلة قبل الشراء' },
    about: { title: 'من نحن', intro: 'نحن فريق يهتم بتمكين الطلاب لاتخاذ قرارات تقنية ذكية بميزانيات واقعية.' },
    faq: { title: 'الأسئلة الشائعة', items: [{ q: 'هل التوصيات مناسبة لماليزيا؟', a: 'نعم، الأسعار والخيارات مصممة لواقع السوق الماليزي.' }, { q: 'هل يمكن حفظ النتائج؟', a: 'نعم، يمكنك حفظ الأجهزة المفضلة داخل حسابك.' }, { q: 'هل المنصة مجانية؟', a: 'نعم، جميع الأدوات التعليمية والاختبار مجانية.' }] },
    contact: { title: 'تواصل معنا', subtitle: 'نحن جاهزون لمساعدتك في اختيار الجهاز المناسب.', name: 'الاسم', email: 'البريد الإلكتروني', message: 'الرسالة', send: 'إرسال الرسالة', success: 'تم إرسال رسالتك بنجاح.' },
    auth: { signinTitle: 'تسجيل الدخول', signupTitle: 'إنشاء حساب جديد', name: 'الاسم الكامل', email: 'البريد الإلكتروني', password: 'كلمة المرور', university: 'الجامعة', major: 'التخصص', submitSignin: 'دخول', submitSignup: 'إنشاء الحساب', successSignin: 'تم تسجيل الدخول بنجاح.', successSignup: 'تم إنشاء الحساب بنجاح.', invalid: 'بيانات غير صحيحة أو ناقصة.' },
    dashboard: { title: 'لوحة التحكم', welcome: 'مرحباً', quick: 'إجراءات سريعة' },
    profile: { title: 'الملف الشخصي' },
    favorites: { title: 'الأجهزة المفضلة', empty: 'لا توجد أجهزة محفوظة بعد.' },
    trusted: { title: 'أجهزة موثوقة بسعر أقل', intro: 'بالتعاون مع BBTech نوفر خيارات مناسبة للطلاب بميزانيات محدودة.', badges: ['ضمان موثق', 'أجهزة مفحوصة', 'أسعار طلابية'], partner: 'شريكنا الموثوق', contact: 'للتواصل حول أفضل العروض، راسلنا وسنرشدك للخيار الأنسب.' },
    learn: { title: 'تعلم أساسيات الأجهزة', mistakesTitle: 'أخطاء شائعة عند شراء لابتوب', specsMajorTitle: 'أفضل المواصفات حسب التخصص', osTitle: 'مقارنة Windows و macOS' },
    quiz: { title: 'الاختبار الذكي', helper: 'أجب على الأسئلة التالية لنقدم أفضل 3 أجهزة مناسبة لك.', next: 'التالي', back: 'السابق', finish: 'عرض النتائج' },
    results: { title: 'نتائجك الموصى بها', subtitle: 'أفضل 3 أجهزة بناءً على إجاباتك.' },
    footer: { text: 'منصة ذكية لاختيار الأجهزة الجامعية في ماليزيا.' }
  },
  en: {
    brand: 'StudyTech Advisor',
    nav: { home: 'Home', learn: 'Learn Basics', quiz: 'Smart Quiz', trusted: 'Trusted Lower-Cost Devices', about: 'About', faq: 'FAQ', contact: 'Contact', signin: 'Sign In', signup: 'Sign Up', dashboard: 'Dashboard', favorites: 'Favorites', profile: 'Profile', signout: 'Sign Out' },
    common: { startQuiz: 'Start Quiz', learnBasics: 'Learn Basics', save: 'Save', compare: 'Compare', viewProduct: 'View Product', myr: 'MYR', browseNow: 'Browse Devices Now', analyzing: 'Analyzing your needs...' },
    home: { heroTitle: 'Choose your university device with clarity', heroSubtitle: 'A bilingual platform helping students in Malaysia pick the right laptop by major, budget, and usage.', problemTitle: 'Problem & Solution', problemText: 'Students often overspend or buy underpowered devices. We convert confusion into clear choices with practical guidance.', optionsTitle: 'Your Main Paths', whyTitle: 'Why StudyTech Advisor?', whyItems: ['Major-specific recommendations', 'Practical learning content', 'Affordable trusted device pathway'], malaysiaTitle: 'New student in Malaysia?', malaysiaText: 'Understand local pricing, warranty expectations, and performance-to-value before your first semester.', testimonialsTitle: 'Student Testimonials', faqPreviewTitle: 'Common pre-purchase questions' },
    about: { title: 'About Us', intro: 'We are a student-focused team building smarter tech decisions for real budgets.' },
    faq: { title: 'Frequently Asked Questions', items: [{ q: 'Are recommendations suitable for Malaysia?', a: 'Yes, pricing and options are tuned for Malaysian students.' }, { q: 'Can I save results?', a: 'Yes, you can save favorites in your account.' }, { q: 'Is the platform free?', a: 'Yes, all educational and quiz features are free.' }] },
    contact: { title: 'Contact Us', subtitle: 'We are here to help you choose with confidence.', name: 'Name', email: 'Email', message: 'Message', send: 'Send Message', success: 'Your message was sent successfully.' },
    auth: { signinTitle: 'Sign In', signupTitle: 'Create Account', name: 'Full Name', email: 'Email', password: 'Password', university: 'University', major: 'Major', submitSignin: 'Sign In', submitSignup: 'Sign Up', successSignin: 'Signed in successfully.', successSignup: 'Account created successfully.', invalid: 'Invalid or incomplete data.' },
    dashboard: { title: 'Dashboard', welcome: 'Welcome', quick: 'Quick actions' },
    profile: { title: 'Profile' },
    favorites: { title: 'Favorite Devices', empty: 'No saved devices yet.' },
    trusted: { title: 'Trusted Devices at Better Prices', intro: 'In partnership with BBTech, we highlight budget-friendly options for students.', badges: ['Verified warranty', 'Quality-checked devices', 'Student-first pricing'], partner: 'Partner Spotlight', contact: 'Contact us for deal guidance and we will match you with the best option.' },
    learn: { title: 'Learn Device Basics', mistakesTitle: 'Common laptop buying mistakes', specsMajorTitle: 'Best specs by major', osTitle: 'Windows vs macOS comparison' },
    quiz: { title: 'Smart Quiz', helper: 'Answer the guided questions and get your top 3 matches.', next: 'Next', back: 'Back', finish: 'See Results' },
    results: { title: 'Your Recommended Results', subtitle: 'Top 3 devices based on your answers.' },
    footer: { text: 'Smart platform for university device choices in Malaysia.' }
  }
};

export const t = (lang: Language) => dictionaries[lang];
