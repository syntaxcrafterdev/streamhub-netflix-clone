// Netflix Landing Page Clone - JavaScript Functionality

// FAQ Data
const faqs = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
];

// Generate FAQ items
function generateFAQs() {
    const faqAccordion = document.getElementById('faq-accordion');
    if (!faqAccordion) return;

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'hs-accordion-group';
        faqItem.innerHTML = `
            <button class="hs-accordion-toggle hs-accordion-active:text-white w-full text-left py-4 px-6 text-xl font-medium flex justify-between items-center hover:bg-gray-700 transition" aria-controls="faq-${index}">
                ${faq.question}
                <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
            </button>
            <div id="faq-${index}" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="faq-${index}">
                <div class="p-6">
                    <p class="text-gray-300">${faq.answer}</p>
                </div>
            </div>
        `;
        faqAccordion.appendChild(faqItem);
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('color-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// Check for saved theme preference or use system preference
function initTheme() {
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

// Prevent default anchor behavior
function initAnchorHandlers() {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(`Navigating to: ${anchor.getAttribute('href')}`);
        });
    });
}

// Sign in button handler
function initSignInButton() {
    const signInBtn = document.getElementById('signin-btn');
    if (!signInBtn) return;

    signInBtn.addEventListener('click', () => {
        alert('Sign in functionality would go here');
    });
}

// Language toggle handlers
function initLanguageToggles() {
    const languageToggle = document.getElementById('language-toggle');
    const footerLanguageToggle = document.getElementById('footer-language-toggle');

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            alert('Language selection would appear here');
        });
    }

    if (footerLanguageToggle) {
        footerLanguageToggle.addEventListener('click', () => {
            alert('Language selection would appear here');
        });
    }
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Email signup handlers
function initEmailSignup() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const getStartedBtns = document.querySelectorAll('button');

    emailInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleEmailSignup(input.value);
            }
        });
    });

    getStartedBtns.forEach(btn => {
        if (btn.textContent.includes('Get Started')) {
            btn.addEventListener('click', () => {
                const emailInput = btn.parentElement.querySelector('input[type="email"]');
                if (emailInput) {
                    handleEmailSignup(emailInput.value);
                }
            });
        }
    });
}

// Handle email signup
function handleEmailSignup(email) {
    if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert(`Thank you! We'll send you updates about Netflix at ${email}`);
}

// Add fade-in animation to elements
function addFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize Preline accordion
function initPrelineAccordion() {
    if (typeof HSAccordion !== 'undefined') {
        HSAccordion.autoInit();
    }
}

// Main initialization function
function init() {
    initTheme();
    generateFAQs();
    initThemeToggle();
    initAnchorHandlers();
    initSignInButton();
    initLanguageToggles();
    initEmailSignup();
    addFadeInAnimation();
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPrelineAccordion);
    } else {
        initPrelineAccordion();
    }
}

// Auto-initialize when script loads
init(); 