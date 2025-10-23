// Main JavaScript File - Syria Events Guide
// تعليق: ملف JavaScript الرئيسي يحتوي على جميع الدوال والميزات

// Event data - in real application, this would come from API/database
// بيانات الفعاليات - في التطبيق الحقيقي، ستأتي هذه البيانات من API أو قاعدة بيانات
const eventsData = [
    {
        id: 1,
        title: "مهرجان دمشق الثقافي",
        title_en: "Damascus Cultural Festival",
        date: "2025-10-15",
        location: "دمشق",
        location_en: "Damascus",
        category: "ثقافة",
        category_en: "Culture",
        image: "assets/img/event1.jpg",
        description: "مهرجان سنوي يضم عروضاً مسرحية وموسيقية وفنية في العاصمة دمشق",
        description_en: "An annual festival featuring theatrical, musical, and artistic performances in the capital Damascus",
        fullDescription: "مهرجان دمشق الثقافي هو حدث سنوي رائد يجمع أفضل المواهب الفنية والثقافية في سوريا. يشمل المهرجان عروضاً مسرحية، حفلات موسيقية، معارض فنية، ورش عمل، وأمسيات شعرية.",
        fullDescription_en: "The Damascus Cultural Festival is a leading annual event that brings together the best artistic and cultural talents in Syria. The festival includes theatrical performances, music concerts, art exhibitions, workshops, and poetry evenings.",
        price: "مجاني",
        price_en: "Free",
        age: "جميع الأعمار",
        age_en: "All Ages",
        time: "6:00 مساءً",
        time_en: "6:00 PM",
        venue: "دار الأوبرا - دمشق",
        venue_en: "Opera House - Damascus"
    },
    {
        id: 2,
        title: "معرض حلب للكتاب",
        title_en: "Aleppo Book Fair",
        date: "2025-11-05",
        location: "حلب",
        location_en: "Aleppo",
        category: "ثقافة",
        category_en: "Culture",
        image: "assets/img/event2.jpg",
        description: "أكبر معرض للكتاب في شمال سوريا بمشاركة دور نشر محلية وعربية",
        description_en: "The largest book fair in northern Syria with participation from local and Arab publishing houses",
        fullDescription: "معرض حلب للكتاب يعتبر من أبرز الأحداث الثقافية في شمال سوريا، بمشاركة العشرات من دور النشر المحلية والعربية.",
        fullDescription_en: "The Aleppo Book Fair is considered one of the most prominent cultural events in northern Syria, with the participation of dozens of local and Arab publishing houses.",
        price: "مجاني",
        price_en: "Free",
        age: "جميع الأعمار",
        age_en: "All Ages",
        time: "10:00 صباحاً",
        time_en: "10:00 AM",
        venue: "قاعة المعارض - حلب",
        venue_en: "Exhibition Hall - Aleppo"
    },
    {
        id: 3,
        title: "مهرجان اللاذقية السينمائي",
        title_en: "Latakia Film Festival",
        date: "2025-09-20",
        location: "اللاذقية",
        location_en: "Latakia",
        category: "ثقافة",
        category_en: "Culture",
        image: "assets/img/event3.jpg",
        description: "عرض لأفضل الأفلام السورية والعربية في مدينة اللاذقية الساحلية",
        description_en: "Screening of the best Syrian and Arab films in the coastal city of Latakia",
        fullDescription: "مهرجان اللاذقية السينمائي يسلط الضوء على الإنتاج السينمائي السوري والعربي، مع عروض حصرية وندوات مع مخرجين وممثلين.",
        fullDescription_en: "The Latakia Film Festival highlights Syrian and Arab cinematic production, with exclusive screenings and seminars with directors and actors.",
        price: "20,000 ل.س",
        price_en: "20,000 SYP",
        age: "+18",
        age_en: "+18",
        time: "7:00 مساءً",
        time_en: "7:00 PM",
        venue: "مسرح دار الأسد - اللاذقية",
        venue_en: "Al-Assad Theater - Latakia"
    }
];

// Team members data
// بيانات أعضاء الفريق
const teamMembers = [
    {
        name: "أحمد محمد",
        name_en: "Ahmed Mohammed",
        role: "مدير المشروع",
        role_en: "Project Manager",
        image: "assets/img/team1.jpg",
        description: "خبرة 10 سنوات في إدارة المشاريع التقنية والثقافية",
        description_en: "10 years experience in managing technical and cultural projects"
    },
    {
        name: "سارة الخالد",
        name_en: "Sara Al-Khaled",
        role: "مصممة واجهات",
        role_en: "UI/UX Designer",
        image: "assets/img/team2.jpg",
        description: "متخصصة في تصميم تجربة المستخدم والواجهات التفاعلية",
        description_en: "Specialized in user experience design and interactive interfaces"
    },
    {
        name: "ياسمين الأسد",
        name_en: "Yasmine Al-Asad",
        role: "مطورة ويب",
        role_en: "Web Developer",
        image: "assets/img/team3.jpg",
        description: "مطورة full-stack بخبرة في أحدث تقنيات الويب",
        description_en: "Full-stack developer with experience in the latest web technologies"
    },
    {
        name: "محمد العلي",
        name_en: "Mohammed Al-Ali",
        role: "منسق فعاليات",
        role_en: "Events Coordinator",
        image: "assets/img/team4.jpg",
        description: "خبرة في تنظيم وإدارة الفعاليات الثقافية والترفيهية",
        description_en: "Experience in organizing and managing cultural and entertainment events"
    }
];

// Language Management System
// تعليق: نظام إدارة اللغات باستخدام JavaScript
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'ar';
        this.translations = {
            'ar': {
                'site_title': 'دليل فعاليات سوريا',
                'home': 'الرئيسية',
                'events': 'الفعاليات',
                'about': 'عن الدليل',
                'contact': 'اتصل بنا',
                'language': 'العربية',
                'hero_title': 'اكتشف الفعاليات في سوريا',
                'hero_subtitle': 'منصة شاملة للفعاليات الثقافية والترفيهية والتعليمية في جميع أنحاء سوريا',
                'explore_events': 'استكشف الفعاليات',
                'featured_events': 'فعاليات بارزة هذا الأسبوع',
                'event_categories': 'تصنيفات الفعاليات',
                'latest_events': 'أحدث الفعاليات',
                'category_culture': 'ثقافة',
                'category_sports': 'رياضة',
                'category_music': 'موسيقى',
                'category_education': 'تعليم',
                'event1_title': 'مهرجان دمشق الثقافي',
                'event1_desc': 'مهرجان سنوي يضم عروضاً مسرحية وموسيقية وفنية في العاصمة دمشق',
                'event2_title': 'معرض حلب للكتاب',
                'event2_desc': 'أكبر معرض للكتاب في شمال سوريا بمشاركة دور نشر محلية وعربية',
                'event3_title': 'مهرجان اللاذقية السينمائي',
                'event3_desc': 'عرض لأفضل الأفلام السورية والعربية في مدينة اللاذقية الساحلية',
                'footer_desc': 'منصة شاملة للفعاليات الثقافية والترفيهية والتعليمية في جميع أنحاء سوريا',
                'quick_links': 'روابط سريعة',
                'contact_info': 'معلومات التواصل',
                'address': 'دمشق، سوريا',
                'email': 'البريد الإلكتروني: info@syriaevents.com',
                'phone': 'الهاتف: +963 11 123 4567',
                'copyright': 'جميع الحقوق محفوظة © دليل فعاليات سوريا 2025',
                'all_events': 'جميع الفعاليات',
                'event_details': 'تفاصيل الفعالية',
                'about_title': 'عن دليل فعاليات سوريا',
                'vision': 'رؤيتنا',
                'mission': 'رسالتنا',
                'team': 'فريق العمل',
                'contact_title': 'اتصل بنا',
                'full_name': 'الاسم الكامل',
                'subject': 'الموضوع',
                'message': 'الرسالة',
                'send_message': 'إرسال الرسالة'
            },
            'en': {
                'site_title': 'Syria Events Guide',
                'home': 'Home',
                'events': 'Events',
                'about': 'About',
                'contact': 'Contact Us',
                'language': 'English',
                'hero_title': 'Discover Events in Syria',
                'hero_subtitle': 'A comprehensive platform for cultural, entertainment, and educational events across Syria',
                'explore_events': 'Explore Events',
                'featured_events': 'Featured Events This Week',
                'event_categories': 'Event Categories',
                'latest_events': 'Latest Events',
                'category_culture': 'Culture',
                'category_sports': 'Sports',
                'category_music': 'Music',
                'category_education': 'Education',
                'event1_title': 'Damascus Cultural Festival',
                'event1_desc': 'An annual festival featuring theatrical, musical, and artistic performances in the capital Damascus',
                'event2_title': 'Aleppo Book Fair',
                'event2_desc': 'The largest book fair in northern Syria with participation from local and Arab publishing houses',
                'event3_title': 'Latakia Film Festival',
                'event3_desc': 'Screening of the best Syrian and Arab films in the coastal city of Latakia',
                'footer_desc': 'A comprehensive platform for cultural, entertainment, and educational events across Syria',
                'quick_links': 'Quick Links',
                'contact_info': 'Contact Information',
                'address': 'Damascus, Syria',
                'email': 'Email: info@syriaevents.com',
                'phone': 'Phone: +963 11 123 4567',
                'copyright': 'All rights reserved © Syria Events Guide 2025',
                'all_events': 'All Events',
                'event_details': 'Event Details',
                'about_title': 'About Syria Events Guide',
                'vision': 'Our Vision',
                'mission': 'Our Mission',
                'team': 'Our Team',
                'contact_title': 'Contact Us',
                'full_name': 'Full Name',
                'subject': 'Subject',
                'message': 'Message',
                'send_message': 'Send Message'
            }
        };
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLanguage);
        this.setupEventListeners();
    }

    getStoredLanguage() {
        return localStorage.getItem('language');
    }

    setStoredLanguage(lang) {
        localStorage.setItem('language', lang);
    }

    applyLanguage(lang) {
        // Update HTML lang attribute and direction
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update body class for RTL/LTR support
        document.body.classList.remove('rtl', 'ltr');
        document.body.classList.add(lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update current language
        this.currentLanguage = lang;
        this.setStoredLanguage(lang);
        
        // Update all translations
        this.updateTranslations();
        
        // Update language switcher display
        this.updateLanguageSwitcher();
        
        // Update dynamic content based on language
        this.updateDynamicContent();
    }

    updateTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
    }

    updateLanguageSwitcher() {
        const languageButton = document.querySelector('[data-bs-toggle="dropdown"]');
        if (languageButton) {
            const flagImg = languageButton.querySelector('img');
            const textSpan = languageButton.querySelector('span');
            
            if (this.currentLanguage === 'ar') {
                flagImg.src = 'assets/img/syria-flag.png';
                flagImg.alt = 'العربية';
            } else {
                flagImg.src = 'assets/img/usa-flag.png';
                flagImg.alt = 'English';
            }
            
            if (textSpan) {
                textSpan.textContent = this.translations[this.currentLanguage]['language'];
            }
        }
    }

    updateDynamicContent() {
        // Update events display
        if (typeof displayEvents === 'function') {
            displayEvents(eventsData);
        }
        
        // Update latest events on home page
        if (typeof displayLatestEvents === 'function') {
            displayLatestEvents();
        }
        
        // Update team members
        if (typeof displayTeamMembers === 'function') {
            displayTeamMembers();
        }
        
        // Update event details if on event page
        if (window.location.pathname.includes('event.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const eventId = urlParams.get('id');
            if (eventId) {
                loadEventDetails(eventId);
            }
        }
    }

    setupEventListeners() {
        // Language switcher is handled by onclick events in HTML
    }

    changeLanguage(lang) {
        this.applyLanguage(lang);
    }
}

// Theme Management System
// تعليق: نظام إدارة الثيم الداكن والفاتح
class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle ? themeToggle.querySelector('i') : null;

        // Remove existing theme classes
        body.classList.remove('light-theme', 'dark-theme');
        
        // Apply new theme
        body.classList.add(theme + '-theme');
        
        // Update toggle button icon
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }

        // Update stored theme
        this.setStoredTheme(theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
}

// Events Management
// تعليق: إدارة عرض الفعاليات
function displayEvents(eventsToShow) {
    const eventsContainer = document.getElementById('eventsGrid');
    const latestEventsContainer = document.getElementById('latestEvents');
    
    if (!eventsContainer && !latestEventsContainer) return;
    
    const container = eventsContainer || latestEventsContainer;
    const isLatestView = !!latestEventsContainer;
    const events = isLatestView ? eventsToShow.slice(0, 4) : eventsToShow;
    
    if (events.length === 0) {
        if (!isLatestView) {
            const noResults = document.getElementById('noResults');
            if (noResults) {
                noResults.classList.remove('d-none');
            }
        }
        return;
    }
    
    if (!isLatestView) {
        const noResults = document.getElementById('noResults');
        if (noResults) {
            noResults.classList.add('d-none');
        }
    }
    
    const currentLanguage = window.languageManager ? window.languageManager.currentLanguage : 'ar';
    
    container.innerHTML = events.map(event => {
        const title = currentLanguage === 'ar' ? event.title : event.title_en;
        const description = currentLanguage === 'ar' ? event.description : event.description_en;
        const location = currentLanguage === 'ar' ? event.location : event.location_en;
        const category = currentLanguage === 'ar' ? event.category : event.category_en;
        
        return `
            <div class="col-md-6 col-lg-3">
                <div class="card event-card h-100">
                    <div class="event-image-placeholder bg-primary d-flex align-items-center justify-content-center text-white" style="height: 200px;">
                        <i class="fas fa-calendar-day fa-3x"></i>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-primary mb-2">${category}</span>
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text flex-grow-1">${description}</p>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i> ${location}</small>
                                <small class="text-muted"><i class="fas fa-calendar me-1"></i> ${event.date}</small>
                            </div>
                            <a href="event.html?id=${event.id}" class="btn btn-primary w-100">التفاصيل</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function displayLatestEvents() {
    displayEvents(eventsData);
}

// Team Members Display
// تعليق: عرض أعضاء الفريق
function displayTeamMembers() {
    const teamContainer = document.getElementById('teamMembers');
    if (!teamContainer) return;
    
    const currentLanguage = window.languageManager ? window.languageManager.currentLanguage : 'ar';
    
    teamContainer.innerHTML = teamMembers.map(member => {
        const name = currentLanguage === 'ar' ? member.name : member.name_en;
        const role = currentLanguage === 'ar' ? member.role : member.role_en;
        const description = currentLanguage === 'ar' ? member.description : member.description_en;
        
        return `
            <div class="col-md-6 col-lg-3">
                <div class="team-card">
                    <div class="team-image-placeholder">
                        <i class="fas fa-user"></i>
                    </div>
                    <h5>${name}</h5>
                    <p class="text-primary fw-bold">${role}</p>
                    <p class="text-muted">${description}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Event Details Management
// تعليق: إدارة تفاصيل الفعالية
function loadEventDetails(eventId) {
    const event = eventsData.find(e => e.id === parseInt(eventId));
    
    if (!event) {
        window.location.href = 'events.html';
        return;
    }
    
    const currentLanguage = window.languageManager ? window.languageManager.currentLanguage : 'ar';
    
    // Update event details
    const elementsToUpdate = {
        'eventTitle': currentLanguage === 'ar' ? event.title : event.title_en,
        'eventCategory': currentLanguage === 'ar' ? event.category : event.category_en,
        'eventPrice': currentLanguage === 'ar' ? event.price : event.price_en,
        'eventDate': event.date,
        'eventTime': currentLanguage === 'ar' ? event.time : event.time_en,
        'eventLocation': currentLanguage === 'ar' ? event.location : event.location_en,
        'eventDescription': currentLanguage === 'ar' ? event.description : event.description_en,
        'eventFullDescription': currentLanguage === 'ar' ? event.fullDescription : event.fullDescription_en,
        'detailCategory': currentLanguage === 'ar' ? event.category : event.category_en,
        'detailLocation': currentLanguage === 'ar' ? event.venue : event.venue_en,
        'detailDate': event.date,
        'detailTime': currentLanguage === 'ar' ? event.time : event.time_en,
        'detailPrice': currentLanguage === 'ar' ? event.price : event.price_en,
        'detailAge': currentLanguage === 'ar' ? event.age : event.age_en
    };
    
    Object.keys(elementsToUpdate).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = elementsToUpdate[id];
        }
    });
}

// Contact Form Handling
// تعليق: معالجة نموذج الاتصال
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }
        
        submitContactForm();
    });
}

function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    showAlert('شكراً لك! تم استلام رسالتك وسنقوم بالرد عليك في أقرب وقت ممكن.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
    document.getElementById('contactForm').classList.remove('was-validated');
}

// Utility Functions
// تعليق: دوال مساعدة
function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alertContainer');
    if (alertContainer) {
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
        alertDiv.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        alertContainer.appendChild(alertDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.remove();
            }
        }, 5000);
    }
}

function initializeScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (!scrollButton) return;
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function addToCalendar() {
    showAlert('تم إضافة الفعالية إلى تقويمك', 'success');
}

function shareEvent() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href)
            .then(() => showAlert('تم نسخ رابط الفعالية إلى الحافظة', 'success'))
            .catch(() => showAlert('فشل في نسخ الرابط', 'danger'));
    }
}

// Events Filtering
// تعليق: تصفية الفعاليات
function filterEvents() {
    const searchQuery = document.getElementById('searchInput')?.value || '';
    const category = document.getElementById('categoryFilter')?.value || '';
    const city = document.getElementById('cityFilter')?.value || '';
    
    let filteredEvents = eventsData;
    
    // Apply search filter
    if (searchQuery) {
        const currentLanguage = window.languageManager ? window.languageManager.currentLanguage : 'ar';
        filteredEvents = filteredEvents.filter(event => {
            const title = currentLanguage === 'ar' ? event.title : event.title_en;
            const description = currentLanguage === 'ar' ? event.description : event.description_en;
            const location = currentLanguage === 'ar' ? event.location : event.location_en;
            
            return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                   location.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
    
    // Apply category filter
    if (category) {
        filteredEvents = filteredEvents.filter(event => event.category === category);
    }
    
    // Apply city filter
    if (city) {
        filteredEvents = filteredEvents.filter(event => event.location === city);
    }
    
    displayEvents(filteredEvents);
}

function resetFilters() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const cityFilter = document.getElementById('cityFilter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (cityFilter) cityFilter.value = '';
    
    displayEvents(eventsData);
}

// Global Functions for HTML onclick
// تعليق: دوال عامة للاستخدام في HTML
function changeLanguage(lang) {
    if (window.languageManager) {
        window.languageManager.changeLanguage(lang);
    }
}

function toggleTheme() {
    if (window.themeManager) {
        window.themeManager.toggleTheme();
    }
}

// Initialize everything when DOM is loaded
// تعليق: تهيئة كل شيء عند تحميل DOM
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers
    window.languageManager = new LanguageManager();
    window.themeManager = new ThemeManager();
    
    // Initialize common functionality
    initializeScrollToTop();
    initializeContactForm();
    
    // Set up event listeners for filtering
    const filterBtn = document.getElementById('filterBtn');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const cityFilter = document.getElementById('cityFilter');
    
    if (filterBtn) filterBtn.addEventListener('click', filterEvents);
    if (searchInput) searchInput.addEventListener('input', filterEvents);
    if (categoryFilter) categoryFilter.addEventListener('change', filterEvents);
    if (cityFilter) cityFilter.addEventListener('change', filterEvents);
    
    // Load appropriate content based on current page
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('events.html') || currentPage.endsWith('/')) {
        displayEvents(eventsData);
    }
    
    if (currentPage.includes('event.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('id');
        if (eventId) {
            loadEventDetails(eventId);
        }
    }
    
    if (currentPage.includes('about.html')) {
        displayTeamMembers();
    }
    
    // Initialize carousel if exists
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true
        });
    }
});

// Comment: تم إنشاء الموقع بنجاح مع جميع الميزات المطلوبة
// Comment: Website created successfully with all required features