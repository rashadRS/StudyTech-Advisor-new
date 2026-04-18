export const homeContent = {
  ar: {
    testimonials: [
      { name: 'سارة - علوم حاسوب', text: 'الاختبار وفر علي وقت كبير وأعطاني خيار مناسب للبرمجة.' },
      { name: 'آدم - هندسة', text: 'فهمت الفرق بين المعالج وكرت الشاشة قبل الشراء.' },
      { name: 'ليلى - إدارة أعمال', text: 'اخترت جهاز خفيف ببطارية طويلة بسعر ممتاز.' }
    ]
  },
  en: {
    testimonials: [
      { name: 'Sarah - Computer Science', text: 'The quiz saved me time and gave me the right coding laptop.' },
      { name: 'Adam - Engineering', text: 'I finally understood CPU/GPU impact before buying.' },
      { name: 'Laila - Business', text: 'I chose a light device with long battery at a great price.' }
    ]
  }
};

export const learnTopics = {
  ar: [
    ['RAM', 'ذاكرة مؤقتة للمهام المفتوحة.', 'تحدد سلاسة تعدد المهام.', 'طلاب البرمجة والتصميم.', '16GB لمعظم الطلاب و32GB للأعمال الثقيلة.', 'طالب CS يشغل IDE ومتصفح ومحاكي.', 'شراء 8GB ثم المعاناة بعد سنة.'],
    ['CPU', 'المعالج هو عقل الجهاز.', 'يؤثر على سرعة تنفيذ البرامج.', 'الهندسة وعلوم الحاسوب.', 'Intel i5/Ryzen 5 كحد أدنى.', 'طالب هندسة يشغل MATLAB بسلاسة.', 'التركيز على الشكل ونسيان المعالج.'],
    ['GPU', 'معالج الرسومات.', 'مهم للتصميم والرندرة والألعاب.', 'التصميم والهندسة المعمارية.', 'RTX 4050+ للمهام الثقيلة.', 'طالبة تصميم تحتاج Adobe + Blender.', 'شراء جهاز بدون GPU مخصص للتصميم.'],
    ['Storage', 'مساحة حفظ الملفات.', 'تمتلئ سريعاً بالمشاريع.', 'كل التخصصات.', '512GB SSD على الأقل.', 'طالب طب يحتفظ بملفات كبيرة.', 'الاكتفاء بـ256GB فقط.'],
    ['SSD vs HDD', 'SSD أسرع بكثير من HDD.', 'يختصر وقت تشغيل النظام والتطبيقات.', 'كل الطلاب.', 'SSD NVMe هو الخيار الأفضل.', 'فتح البرامج خلال ثوانٍ.', 'شراء HDD فقط لتوفير بسيط.'],
    ['Battery', 'مدة عمل الجهاز بعيداً عن الشاحن.', 'مهم للمحاضرات والتنقل.', 'الأعمال والطب.', '10 ساعات فأكثر.', 'طالب أعمال يوم كامل في الحرم.', 'إهمال حجم البطارية.'],
    ['Screen', 'جودة ودقة الشاشة.', 'راحة العين ودقة الألوان.', 'التصميم والإعلام.', 'FHD جيد و2.8K ممتاز.', 'تصحيح ألوان لمشروع تخرج.', 'اختيار شاشة ضعيفة السطوع.'],
    ['Portability', 'وزن وحجم الجهاز.', 'يسهل التنقل اليومي.', 'جميع الطلاب.', '1.2-1.6 كجم مثالي.', 'طالبة تنتقل بين مبانٍ متعددة.', 'شراء جهاز ثقيل جداً.'],
    ['OS', 'نظام التشغيل الأساسي.', 'يؤثر على البرامج المتاحة.', 'حسب التخصص والبيئة.', 'Windows مرن، macOS مستقر.', 'طالب iOS يفضل macOS.', 'اختيار نظام غير متوافق مع البرامج.'],
    ['Build Quality', 'متانة الهيكل ولوحة المفاتيح.', 'للاستخدام الطويل.', 'كل الطلاب.', 'ألومنيوم أو مواد قوية.', 'جهاز يتحمل 4 سنوات دراسة.', 'شراء جهاز هش كثير الأعطال.'],
    ['Cooling', 'نظام تبريد الجهاز.', 'يمنع انخفاض الأداء والحرارة.', 'الهندسة والألعاب.', 'مراوح مزدوجة وفتحات جيدة.', 'رندرة ساعات بدون اختناق حراري.', 'تجاهل حرارة الجهاز تحت الضغط.']
  ],
  en: [
    ['RAM', 'Temporary memory for active tasks.', 'Defines multitasking smoothness.', 'CS and design students.', '16GB for most, 32GB for heavy work.', 'A CS student runs IDE, browser, emulator.', 'Buying 8GB then struggling next year.'],
    ['CPU', 'The processor is the brain.', 'Controls app speed and responsiveness.', 'Engineering and CS.', 'At least Intel i5 / Ryzen 5.', 'Engineering student runs MATLAB smoothly.', 'Choosing looks over processor quality.'],
    ['GPU', 'Graphics processor.', 'Critical for design, rendering, and 3D.', 'Design and architecture.', 'RTX 4050+ for heavy workflows.', 'Design student uses Adobe + Blender.', 'Buying no dedicated GPU for design.'],
    ['Storage', 'Capacity for files and projects.', 'Fills quickly in university life.', 'All majors.', 'Minimum 512GB SSD.', 'Medical student stores large files.', 'Settling for 256GB only.'],
    ['SSD vs HDD', 'SSD is much faster than HDD.', 'Improves boot and app launch time.', 'All students.', 'NVMe SSD is preferred.', 'Apps open in seconds.', 'Choosing HDD-only for tiny savings.'],
    ['Battery', 'How long it lasts unplugged.', 'Vital for classes and mobility.', 'Business and medicine.', '10+ hours is ideal.', 'Business student attends full-day classes.', 'Ignoring battery capacity.'],
    ['Screen', 'Panel quality and resolution.', 'Affects eye comfort and color accuracy.', 'Design and media.', 'FHD good, 2.8K excellent.', 'Final-year color correction project.', 'Picking dim low-quality screens.'],
    ['Portability', 'Weight and size.', 'Makes daily campus movement easier.', 'All students.', '1.2-1.6kg is ideal.', 'Student moves across buildings.', 'Buying excessively heavy laptops.'],
    ['OS', 'Operating system platform.', 'Impacts software compatibility.', 'Depends on your major tools.', 'Windows flexible, macOS stable.', 'iOS-focused student prefers macOS.', 'Choosing incompatible OS for tools.'],
    ['Build Quality', 'Durability of chassis and keyboard.', 'Matters for 4-year reliability.', 'All students.', 'Prefer aluminum or sturdy builds.', 'Device survives full degree cycle.', 'Fragile laptop with frequent issues.'],
    ['Cooling', 'Thermal design and airflow.', 'Prevents throttling and heat discomfort.', 'Engineering and power users.', 'Dual fans and proper vents.', 'Hours of rendering without throttling.', 'Ignoring heat behavior under load.']
  ]
};
