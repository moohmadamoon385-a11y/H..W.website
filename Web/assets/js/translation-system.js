// translation-system.js
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        events: "الفعاليات", 
        about: "عن الدليل",
        contact: "اتصل بنا",
        darkMode: "الوضع الداكن",
        eventDetails: "تفاصيل الفعالية",
        
        // Home page
        discover: "اكتشف أفضل الفعاليات في مدينتك",
        explore: "استكشف الفعاليات",
        featured: "فعاليات بارزة هذا الأسبوع",
        categories: "تصنيفات سريعة",
        latest: "أحدث الفعاليات",
        
        // Events page
        allEvents: "جميع الفعاليات",
        search: "ابحث عن فعالية...",
        applyFilters: "تطبيق الفلترة",
        searchLabel: "بحث",
        categoryLabel: "التصنيف",
        dateLabel: "التاريخ",
        allCategories: "جميع التصنيفات",
        
        // Event details
        eventTitle: "عنوان الفعالية",
        addToCalendar: "أضف إلى التقويم", 
        shareEvent: "شارك الفعالية",
        location: "الموقع",
        relatedEvents: "فعاليات ذات صلة",
        gallery: "معرض الصور",
        eventDescriptionText: "وصف كامل للفعالية سيتم تعبئته بواسطة JavaScript",
        category: "تصنيف",
        eventDate: "التاريخ",
        
        // About page
        aboutTitle: "عن دليل الحدث",
        vision: "رؤيتنا ورسالتنا",
        team: "فريق العمل",
        policies: "سياسات تقديم الفعاليات",
        projectManager: "مدير المشروع",
        eventCoordinator: "منسقة الفعاليات",
        webDeveloper: "مطور الويب",
        
        // Contact page
        contactTitle: "اتصل بنا",
        sendMessage: "أرسل رسالة",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "الموضوع", 
        message: "الرسالة",
        send: "إرسال الرسالة",
        contactInfo: "معلومات التواصل",
        followUs: "تابعنا على وسائل التواصل الاجتماعي",
        
        // Footer
        quickLinks: "روابط سريعة",
        subscribe: "اشترك في نشرتنا الإخبارية",
        rights: "جميع الحقوق محفوظة",
        footerDesc: "منصة شاملة لاكتشاف أفضل الفعاليات في مدينتك. ثقافية، رياضية، ترفيهية وتعليمية.",
        followTitle: "تابعنا",
        
        // Other texts
        viewDetails: "عرض التفاصيل",
        subscribeBtn: "اشتراك",
        
        // Categories
        culture: "ثقافة",
        sports: "رياضة", 
        music: "موسيقى",
        family: "عائلي",
        educational: "تعليمي",
        art: "فني",
        charity: "خيري",
        
        // About page content
        visionText1: "دليل 'الحدث' هو منصة شاملة تهدف إلى توثيق ونشر جميع الفعاليات والأنشطة في المدينة. نسعى لربط المجتمع بمختلف الأحداث الثقافية والرياضية والترفيهية والتعليمية، مما يسهم في إثراء الحياة المجتمعية وتعزيز التواصل بين الأفراد والمؤسسات.",
        visionText2: "رسالتنا هي توفير مصدر موثوق وشامل للمعلومات حول الفعاليات، وتسهيل عملية اكتشافها والمشاركة فيها، والمساهمة في تنشيط الحركة الثقافية والاجتماعية في مجتمعنا.",
        
        // Policies
        publishingCriteria: "معايير النشر",
        criteria1: "يجب أن تكون الفعالية مفتوحة للجمهور أو لجزء محدد منه",
        criteria2: "يجب أن تكون المعلومات المقدمة دقيقة وكاملة",
        criteria3: "يجب أن تلتزم الفعالية بالقوانين والأنظمة المحلية",
        criteria4: "يجب أن تقدم الفعالية قيمة للمجتمع",
        criteria5: "يحق لإدارة الدليل رفض نشر أي فعالية لا تلتزم بالمعايير",
        
        howToAdd: "كيفية إضافة فعالية",
        addStep1: "املأ نموذج 'اتصل بنا' مع تفاصيل الفعالية",
        addStep2: "قدم معلومات كاملة عن الفعالية (التاريخ، المكان، التصنيف، إلخ)",
        addStep3: "أرفق صورًا تعبر عن الفعالية",
        addStep4: "انتظر مراجعة الفريق للموافقة على النشر"
    },
    en: {
        // Navigation
        home: "Home",
        events: "Events",
        about: "About", 
        contact: "Contact Us",
        darkMode: "Dark Mode",
        eventDetails: "Event Details",
        
        // Home page
        discover: "Discover the Best Events in Your City",
        explore: "Explore Events",
        featured: "Featured Events This Week",
        categories: "Quick Categories", 
        latest: "Latest Events",
        
        // Events page
        allEvents: "All Events",
        search: "Search for an event...",
        applyFilters: "Apply Filters",
        searchLabel: "Search",
        categoryLabel: "Category",
        dateLabel: "Date",
        allCategories: "All Categories",
        
        // Event details
        eventTitle: "Event Title",
        addToCalendar: "Add to Calendar",
        shareEvent: "Share Event", 
        location: "Location",
        relatedEvents: "Related Events",
        gallery: "Photo Gallery",
        eventDescriptionText: "Full event description will be populated by JavaScript",
        category: "Category",
        eventDate: "Date",
        
        // About page
        aboutTitle: "About Al-Hadas Guide",
        vision: "Our Vision and Mission",
        team: "Our Team",
        policies: "Event Submission Policies",
        projectManager: "Project Manager",
        eventCoordinator: "Event Coordinator",
        webDeveloper: "Web Developer",
        
        // Contact page
        contactTitle: "Contact Us",
        sendMessage: "Send a Message",
        fullName: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message", 
        send: "Send Message",
        contactInfo: "Contact Information",
        followUs: "Follow Us on Social Media",
        
        // Footer
        quickLinks: "Quick Links",
        subscribe: "Subscribe to Our Newsletter",
        rights: "All Rights Reserved",
        footerDesc: "A comprehensive platform to discover the best events in your city. Cultural, sports, entertainment and educational.",
        followTitle: "Follow Us",
        
        // Other texts
        viewDetails: "View Details",
        subscribeBtn: "Subscribe",
        
        // Categories
        culture: "Culture",
        sports: "Sports",
        music: "Music",
        family: "Family", 
        educational: "Educational",
        art: "Art",
        charity: "Charity",
        
        // About page content
        visionText1: "Al-Hadas Guide is a comprehensive platform aimed at documenting and publishing all events and activities in the city. We strive to connect the community with various cultural, sports, entertainment, and educational events, contributing to the enrichment of community life and enhancing communication between individuals and institutions.",
        visionText2: "Our mission is to provide a reliable and comprehensive source of information about events, facilitate the process of discovering and participating in them, and contribute to revitalizing the cultural and social movement in our society.",
        
        // Policies
        publishingCriteria: "Publishing Criteria",
        criteria1: "The event must be open to the public or a specific segment of it",
        criteria2: "The information provided must be accurate and complete",
        criteria3: "The event must comply with local laws and regulations",
        criteria4: "The event must provide value to the community",
        criteria5: "The guide administration has the right to reject any event that does not meet the criteria",
        
        howToAdd: "How to Add an Event",
        addStep1: "Fill out the 'Contact Us' form with event details",
        addStep2: "Provide complete information about the event (date, location, category, etc.)",
        addStep3: "Attach images that represent the event",
        addStep4: "Wait for team review and approval for publication"
    }
};

// Current language
let currentLang = 'ar';

// Enhanced translation function
function translatePage(lang) {
    currentLang = lang;
    
    // Change page direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update language button
    updateLanguageButton(lang);
    
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Translate category badges
    translateCategoryBadges(lang);
    
    // Translate page-specific content
    translatePageSpecificContent(lang);
    
    // Load events if on events page
    if (document.getElementById('latestEvents') || document.getElementById('eventsList')) {
        loadEvents();
    }
    
    // Load event details if on event page
    if (window.location.pathname.includes('event.html')) {
        loadEventDetails();
    }
    
    // Save language preference
    localStorage.setItem('siteLanguage', lang);
}

// Translate category badges
function translateCategoryBadges(lang) {
    document.querySelectorAll('.category-badge').forEach(badge => {
        const category = badge.getAttribute('data-category');
        if (translations[lang][category]) {
            badge.textContent = translations[lang][category];
        }
    });
}

// Translate page-specific content
function translatePageSpecificContent(lang) {
    const page = document.body.getAttribute('data-section') || 
                document.body.getAttribute('data-page') || 
                window.location.pathname.split('/').pop().replace('.html', '');
    
    switch(page) {
        case 'about-page':
        case 'about':
            translateAboutPage(lang);
            break;
        case 'contact-page':
        case 'contact':
            translateContactPage(lang);
            break;
    }
    
    // Always translate footer
    translateFooter(lang);
}

// Translate about page
function translateAboutPage(lang) {
    // Page title
    const pageTitle = document.querySelector('[data-title="about-title"]');
    if (pageTitle) pageTitle.textContent = translations[lang].aboutTitle;
    
    // Vision section
    const visionSection = document.querySelector('[data-block="vision"]');
    if (visionSection) {
        const paragraphs = visionSection.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = translations[lang].visionText1;
        if (paragraphs[1]) paragraphs[1].textContent = translations[lang].visionText2;
    }
    
    // Team section
    const teamSection = document.querySelector('[data-section="team"]');
    if (teamSection) {
        const teamTitle = teamSection.querySelector('h2');
        if (teamTitle) teamTitle.textContent = translations[lang].team;
        
        // Team member roles
        document.querySelectorAll('[data-member]').forEach(member => {
            const role = member.querySelector('.text-muted');
            if (role) {
                const memberType = member.getAttribute('data-member');
                if (memberType === 'ahmad') role.textContent = translations[lang].projectManager;
                else if (memberType === 'fatima') role.textContent = translations[lang].eventCoordinator;
                else if (memberType === 'khaled') role.textContent = translations[lang].webDeveloper;
            }
        });
    }
    
    // Policies section
    const policiesSection = document.querySelector('[data-section="policies"]');
    if (policiesSection) {
        const policiesTitle = policiesSection.querySelector('h2');
        if (policiesTitle) policiesTitle.textContent = translations[lang].policies;
        
        // Publishing criteria
        const criteriaList = document.querySelector('[data-list="standards"]');
        if (criteriaList) {
            const items = criteriaList.querySelectorAll('li');
            items.forEach((item, index) => {
                const key = `criteria${index + 1}`;
                if (translations[lang][key]) {
                    item.textContent = translations[lang][key];
                }
            });
        }
        
        // How to add events
        const addList = document.querySelector('[data-list="how-to-add"]');
        if (addList) {
            const items = addList.querySelectorAll('li');
            items.forEach((item, index) => {
                const key = `addStep${index + 1}`;
                if (translations[lang][key]) {
                    item.textContent = translations[lang][key];
                }
            });
        }
    }
}

// Translate contact page
function translateContactPage(lang) {
    // Page title
    const pageTitle = document.querySelector('[data-title="contact-title"]');
    if (pageTitle) pageTitle.textContent = translations[lang].contactTitle;
    
    // Form labels
    const form = document.querySelector('[data-form="contact-form"]');
    if (form) {
        const labels = form.querySelectorAll('label');
        labels.forEach(label => {
            const forAttr = label.getAttribute('for');
            if (forAttr === 'name') label.textContent = translations[lang].fullName;
            else if (forAttr === 'email') label.textContent = translations[lang].email;
            else if (forAttr === 'subject') label.textContent = translations[lang].subject;
            else if (forAttr === 'message') label.textContent = translations[lang].message;
        });
        
        // Submit button
        const submitBtn = form.querySelector('[data-action="submit-form"]');
        if (submitBtn) submitBtn.textContent = translations[lang].send;
    }
    
    // Contact info
    const contactInfo = document.querySelector('[data-block="contact-info"]');
    if (contactInfo) {
        const followTitle = contactInfo.querySelector('h6');
        if (followTitle) followTitle.textContent = translations[lang].followUs;
    }
}

// Translate footer
function translateFooter(lang) {
    // Footer sections
    document.querySelectorAll('[data-footer-section]').forEach(section => {
        const sectionType = section.getAttribute('data-footer-section');
        
        if (sectionType === 'links') {
            const title = section.querySelector('h5');
            if (title) title.textContent = translations[lang].quickLinks;
            
            const links = section.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href === 'index.html') link.textContent = translations[lang].home;
                else if (href === 'events.html') link.textContent = translations[lang].events;
                else if (href === 'about.html') link.textContent = translations[lang].about;
                else if (href === 'contact.html') link.textContent = translations[lang].contact;
            });
        }
        else if (sectionType === 'social') {
            const title = section.querySelector('h5');
            if (title) title.textContent = translations[lang].followTitle;
            
            const subscribeText = section.querySelector('p');
            if (subscribeText) subscribeText.textContent = translations[lang].subscribe;
            
            const subscribeBtn = section.querySelector('.btn');
            if (subscribeBtn) subscribeBtn.textContent = translations[lang].subscribeBtn;
        }
    });
    
    // Rights text
    const rightsText = document.querySelector('[data-translate="rights"]') || 
                      document.querySelector('footer p:last-child');
    if (rightsText && !rightsText.querySelector('a')) {
        rightsText.textContent = translations[lang].rights;
    }
}

// Update language button
function updateLanguageButton(lang) {
    const translateBtn = document.querySelector('.btn-outline-light');
    if (translateBtn) {
        if (lang === 'ar') {
            translateBtn.innerHTML = '<img src="https://flagcdn.com/w40/us.png" alt="English" class="flag"> English';
        } else {
            translateBtn.innerHTML = '<img src="https://flagcdn.com/w40/sy.png" alt="العربية" class="flag"> العربية';
        }
    }
}

// Initialize the translation system
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language or default to Arabic
    const savedLang = localStorage.getItem('siteLanguage') || 'ar';
    translatePage(savedLang);
    
    // Setup event listeners
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Language switch button
    const translateBtn = document.querySelector('.btn-outline-light');
    if (translateBtn) {
        translateBtn.addEventListener('click', function() {
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            translatePage(newLang);
        });
    }
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode', this.checked);
            localStorage.setItem('darkMode', this.checked);
        });
        
        // Load dark mode preference
        const darkModePref = localStorage.getItem('darkMode') === 'true';
        darkModeToggle.checked = darkModePref;
        document.body.classList.toggle('dark-mode', darkModePref);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }
}

// Handle contact form submission
function handleContactForm() {
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const subject = document.getElementById('subject')?.value;
    const message = document.getElementById('message')?.value;
    
    const messagesContainer = document.getElementById('formMessages');
    
    if (name && email && subject && message) {
        // Simple success message
        if (messagesContainer) {
            messagesContainer.innerHTML = `
                <div class="alert alert-success">
                    ${currentLang === 'ar' ? 
                        'شكراً لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.' : 
                        'Thank you for contacting us! We will respond to you as soon as possible.'}
                </div>
            `;
        }
        
        // Reset form
        contactForm.reset();
    } else {
        if (messagesContainer) {
            messagesContainer.innerHTML = `
                <div class="alert alert-danger">
                    ${currentLang === 'ar' ? 
                        'يرجى ملء جميع الحقول المطلوبة.' : 
                        'Please fill in all required fields.'}
                </div>
            `;
        }
    }
}

// The rest of your existing functions (loadEvents, loadEventDetails, etc.) remain the same
// ... [Keep your existing events data and related functions here]