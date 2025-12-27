import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* =========================================
   1. إدارة اللغة والواجهة (UI & Translations)
   ========================================= */

const translations = {
    ar: {
        nav_logo: "أَكْمْ",
        home: "الرئيسية", gallery: "المعرض", warehouse: "المستودع", store: "المتجر", contact: "اتصل بنا",
        t1_main: 'أصالة <span class="gold-word">التصميم</span>', t1_sub: "وعمق المعنى",
        t2_main: "تفاصيل دقيقة تروي", t2_sub: 'قصة <span class="gold-word">الضيافة</span>',
        t3_main: 'حيث يجتمع <span class="gold-word">الفن</span>', t3_sub: "بمذاق لا يُنسى",
        btn_hotel: "حجز فنادق", btn_event: "حجز مناسبات",
        btn_shop: "تصفح المتجر الإلكتروني",

        // المنتجات
        coffee_title: "القهوة السعودية", coffee_desc: "خلطة فاخرة ومميزة تعكس كرم الضيافة الأصيلة",
        dates_title: "التمور الفاخرة", dates_desc: "سكري، صقعي، مجدول، وعجوة المدينة.. محشوة بأجود المكسرات",
        nuts_title: "المكسرات المقرمشة", nuts_desc: "تشكيلة من المكسرات اليابانية، الفصفص الفاخر، والمكسرات المشكلة",
        choco_title: "عالم الشوكولاتة", choco_desc: "ألواح غنية وقطع محشوة بألذ النكهات العالمية",
        
        // --- (محدث) نصوص المعرض الكاملة ---
        gal_title1: "معرض أكم الفاخر", gal_desc1: "حيث تلتقي الفخامة بالضيافة في أبهى صورها",
        gal_title2: "تجربة تسوق فريدة", gal_desc2: "تجوّل بين أرقى أنواع التمور والقهوة المختارة بعناية",
        gal_map_title: "📍 فرع التحلية", gal_map_desc: "الرياض - شارع التحلية",

        // --- (محدث) نصوص المستودع الكاملة ---
        war_title1: "مستودعاتنا المركزية", war_desc1: "تقنيات حفظ متطورة لضمان الجودة والطزاجة",
        war_title2: "من المزرعة إليك", war_desc2: "سلسلة إمداد مُحكمة تضمن وصول المنتج في قمته",
        war_map_title: "📍 المنطقة اللوجستية", war_map_desc: "جنوب الرياض - المخرج 18",

        // الفوتر
        footer_about: "علامة سعودية فاخرة تقدم تجربة ضيافة استثنائية من خلال أجود أنواع القهوة والتمور والمكسرات.",
        footer_links: "روابط سريعة",
        footer_contact: "تواصل معنا",
        footer_follow: "تابعنا",
        loc_riyadh: "الرياض، المملكة العربية السعودية",
        copyright: "جميع الحقوق محفوظة © 2025 أكم - AKM",

        langBtn: "English",
        verses: [
            "مِن سَمرةٍ سَحَرَتْ عُيُوناً ... وَصَاغَتْ لِلمَشَاعِرِ أَلفَ مَعنَى",
            "مِن حَبَّةٍ صَنَعَتْ مِزَاجاً ... وَفَاقَ مَذَاقُهَا حَدَّ الخَيَالِ",
            "مِن نَفحَةٍ عَبَقَتْ مَكَاناً ... وَذَابَ السِّحرُ فِي جَوفِ اللَّيَالي",
            "مِن غَرسَةٍ شَرِبَتْ غَمَاماً ... فَجَاءَ حَصَادُهَا ذَوقاً وَفَنَّا"
        ]
    },
    en: {
        nav_logo: "AKM",
        home: "Home", gallery: "Gallery", warehouse: "Warehouse", store: "Store", contact: "Contact Us",
        t1_main: 'Authentic <span class="gold-word">Design</span>', t1_sub: "Deep Meaning",
        t2_main: "Details that tell a", t2_sub: 'Story of <span class="gold-word">Hospitality</span>',
        t3_main: 'Where <span class="gold-word">Art</span> meets', t3_sub: "Unforgettable Taste",
        btn_hotel: "Hotel Booking", btn_event: "Events Booking",
        btn_shop: "Visit Online Store",

        // Products
        coffee_title: "Saudi Coffee", coffee_desc: "A distinct premium blend reflecting authentic hospitality",
        dates_title: "Luxury Dates", dates_desc: "Sukkari, Sagai, Mejdool, and Ajwa.. stuffed with the finest nuts",
        nuts_title: "Crunchy Nuts", nuts_desc: "Assortment of Japanese crackers, luxury seeds, and mixed nuts",
        choco_title: "Chocolate World", choco_desc: "Rich bars and truffles stuffed with delicious international flavors",
        
        // --- (Updated) Gallery Full Text ---
        gal_title1: "AKM Luxury Gallery", gal_desc1: "Where luxury meets hospitality in its finest form",
        gal_title2: "Unique Shopping Experience", gal_desc2: "Wander through the finest selection of carefully chosen dates and coffee",
        gal_map_title: "📍 Tahlia Branch", gal_map_desc: "Riyadh - Tahlia Street",

        // --- (Updated) Warehouse Full Text ---
        war_title1: "Central Warehouses", war_desc1: "Advanced preservation technologies ensuring quality and freshness",
        war_title2: "From Farm to You", war_desc2: "A controlled supply chain ensuring the product arrives at its peak",
        war_map_title: "📍 Logistics Area", war_map_desc: "South Riyadh - Exit 18",

        // Footer
        footer_about: "A luxury Saudi brand offering an exceptional hospitality experience through the finest coffee, dates, and nuts.",
        footer_links: "Quick Links",
        footer_contact: "Contact Us",
        footer_follow: "Follow Us",
        loc_riyadh: "Riyadh, Saudi Arabia",
        copyright: "All Rights Reserved © 2025 AKM",

        langBtn: "العربية",
        verses: [
            "From a dark complexion that captivated eyes... and crafted a thousand meanings for emotions.",

            "From a single seed that created a mood... whose taste surpassed all imagination.",

            "From a fragrance that permeated a place... and magic melted into the heart of the nights.",

            "From a plant that drank from the clouds... and its harvest came as taste and art."
        ]
    }
};

let currentLang = 'ar';

/* =========================================
   5. إدارة شاشة التحميل (Loader)
   ========================================= */
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    if (loader) {
        // استخدام GSAP لإخفاء اللودر بنعومة
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                loader.style.display = 'none';
                // يمكنك حذف العنصر تماماً من الـ DOM لتخفيف الحمل
                // loader.remove(); 
            }
        });
    }
});
// إتاحة الدوال للنطاق العام (Window) لأنها مستدعاة عبر HTML
window.toggleLanguage = function() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    const t = translations[currentLang];
    
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    document.querySelector('.nav-logo').innerText = t.nav_logo;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(t[key]) el.innerHTML = t[key];
    });
    
    document.querySelector('.lang-btn').innerText = t.langBtn;
    
    if(currentLang === 'en') {
        document.body.style.fontFamily = "sans-serif";
    } else {
        document.body.style.fontFamily = "'Reem Kufi', sans-serif";
    }
};

window.toggleMobileMenu = function() {
    const menu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.hamburger');
    
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        burger.classList.remove('active');
    } else {
        menu.classList.add('active');
        burger.classList.add('active');
    }
};

// دالة الانتقال لصفحة الحجز مع نقل اللغة
function goToBooking(type) {
    // currentLang هو المتغير الذي يحمل 'ar' أو 'en' في صفحتك الرئيسية
    window.location.href = `booking.html?type=${type}&lang=${currentLang}`;
}
// تأكد من جعلها عامة
window.goToBooking = goToBooking;

// منطق أبيات الشعر في الهيرو
let vIndex = 0;
const verseBox = document.getElementById('verse-box');
function updateVerse() {
    if (!verseBox) return;
    verseBox.classList.remove('visible');
    setTimeout(() => {
        verseBox.innerText = translations[currentLang].verses[vIndex];
        verseBox.classList.add('visible');
        vIndex = (vIndex + 1) % 3;
    }, 1000);
}
updateVerse();
setInterval(updateVerse, 5000);


/* =========================================
   3. قسم المنتجات (Products Section)
   ========================================= */

function initProductSection() {
    const slides = document.querySelectorAll('.prod-slide');
    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#products-section",
            start: "top top",
            end: "+=4000", // مدة العرض
            pin: true,
            scrub: 1,
            // قتل العربة عند الدخول لضمان عدم ظهورها
        }
    });

            slides.forEach((slide, i) => {
                const bg = slide.querySelector('.prod-bg');
                const mainImg = slide.querySelector('.main-prod-img');
                const info = slide.querySelector('.prod-info');
                const scatterItems = slide.querySelectorAll('.scatter-item');
                const visuals = slide.querySelector('.prod-visuals'); // تحديد حاوية الصور

                // --- 1. الدخول (Enter) ---
                if (i > 0) {
                    // الشريحة الجديدة تظهر فوق القديمة (تداخل)
                    tl.to(slide, { autoAlpha: 1, duration: 1.5 }); // زدنا المدة قليلاً لنعومة أكثر
                } else {
                    tl.set(slide, { autoAlpha: 1 });
                }

                // --- 2. الحركات (Animations) ---
                tl.fromTo(bg, { scale: 1 }, { scale: 1.2, duration: 5 }, "<");
                tl.fromTo(info, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, "<");
                tl.fromTo(mainImg, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: "back.out(1.7)" }, "<0.5");

                // حركة البعثرة
                scatterItems.forEach((item) => {
                    const xVal = item.style.getPropertyValue('--x');
                    const yVal = item.style.getPropertyValue('--y');
                    const rVal = item.style.getPropertyValue('--r');
                    tl.fromTo(item,
                        { x: 0, y: 0, scale: 0, opacity: 0, rotation: 0 },
                        { x: xVal, y: yVal, scale: 1, opacity: 1, rotation: rVal, duration: 3, ease: "power2.out" }, "<");
                });

                tl.to({}, { duration: 2 }); // وقفة للمشاهدة

                // --- 3. الخروج (Exit) - التعديل الجوهري هنا ---
                if (i < slides.length - 1) {
                    // بدلاً من إخفاء الشريحة كاملة، نخفي المحتويات فقط
                    // ونترك الخلفية (bg) ظاهرة لتغطيها الشريحة التالية
                    tl.to([info, visuals], { autoAlpha: 0, duration: 0.5 });
                }
            });
}

initProductSection();


/* =========================================
   4. المعرض والمستودع (Panoramas)
   ========================================= */

function initPanorama(canvasId, imageURL, wrapperId, contentIds) {
    const canvas = document.getElementById(canvasId);
    const wrapper = document.getElementById(wrapperId);
    
    if (!canvas || !wrapper) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 0.1);

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1); 

    const textureLoader = new THREE.TextureLoader();
    // للملفات المحلية، لا نحتاج setCrossOrigin ولكن لا يضر وجودها
    // textureLoader.setCrossOrigin('anonymous'); 
    
    textureLoader.load(imageURL, (texture) => {
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                end: "+=3000", 
                pin: true,
                scrub: 1,
                anticipatePin: 1 // لمنع الوميض عند فك التثبيت
            }
        });

        // 1. دوران الكرة
        tl.to(sphere.rotation, { y: Math.PI * 0.5, duration: 1 }, 0)
          .to(camera, { fov: 50, duration: 1, onUpdate: () => camera.updateProjectionMatrix() }, 0);

        // 2. ظهور النصوص
        if(contentIds.text1) {
            tl.fromTo(contentIds.text1, 
                { autoAlpha: 0, y: 50 }, 
                { autoAlpha: 1, y: 0, duration: 0.15 }, 0.1)
              .to(contentIds.text1, 
                { autoAlpha: 0, y: -50, duration: 0.15 }, 0.4);
        }
        
        if(contentIds.text2) {
            tl.fromTo(contentIds.text2, 
                { autoAlpha: 0, y: 50 }, 
                { autoAlpha: 1, y: 0, duration: 0.15 }, 0.5)
              .to(contentIds.text2, 
                { autoAlpha: 0, y: -50, duration: 0.15 }, 0.8);
        }

        // 3. الخريطة
        if(contentIds.map) {
            tl.fromTo(contentIds.map, 
                { autoAlpha: 0, x: 50 }, 
                { autoAlpha: 1, x: 0, duration: 0.2 }, 0.8); 
        }

        function animatePan() {
            const rect = wrapper.getBoundingClientRect();
            // رسم فقط عندما يكون القسم ظاهراً
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
                renderer.render(scene, camera);
            }
            requestAnimationFrame(animatePan);
        }
        animatePan();

    }, undefined, (err) => { console.error("Error loading pano:", err); });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// تشغيل الأقسام بالصور المحلية
initPanorama(
    'gallery-canvas', 
    'Gemini_Generated_Image_3v1qib3v1qib3v1q.png', // المسار المحلي للصورة
    'gallery-wrapper', 
    { text1: '#g-text1', text2: '#g-text2', map: '#g-map' }
);

initPanorama(
    'warehouse-canvas', 
    'Gemini_Generated_Image_e7hkdoe7hkdoe7hk.png', // المسار المحلي للصورة
    'warehouse-wrapper', 
    { text1: '#w-text1', text2: '#w-text2', map: '#w-map' }
);


