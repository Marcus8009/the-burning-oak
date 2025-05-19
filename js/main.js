/**
 * Main JavaScript file for The Burning Oak restaurant website
 * This file handles all interactive elements of the website:
 * - Mobile navigation toggle
 * - Testimonial slider
 * - Menu category tabs
 * - FAQ accordion
 */

// Wait for DOM to be fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // --------- MOBILE NAVIGATION TOGGLE ---------
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu?.contains(event.target);
        const isClickOnToggle = menuToggle?.contains(event.target);
        
        if (navMenu?.classList.contains('active') && !isClickInsideNav && !isClickOnToggle) {
            navMenu.classList.remove('active');
        }
    });

    // --------- TESTIMONIAL SLIDER ---------
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonials.length > 0) {
        let currentIndex = 0;

        // Function to show testimonial at specified index
        function showTestimonial(index) {
            // Remove active class from all testimonials and dots
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current testimonial and dot
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            
            // Update current index
            currentIndex = index;
        }
        
        // Event listeners for dots
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showTestimonial(index);
            });
        });
        
        // Event listener for previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                let newIndex = currentIndex - 1;
                if (newIndex < 0) {
                    newIndex = testimonials.length - 1;
                }
                showTestimonial(newIndex);
            });
        }
        
        // Event listener for next button
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                let newIndex = currentIndex + 1;
                if (newIndex >= testimonials.length) {
                    newIndex = 0;
                }
                showTestimonial(newIndex);
            });
        }
        
        // Auto-rotate testimonials every 7 seconds
        setInterval(function() {
            let newIndex = currentIndex + 1;
            if (newIndex >= testimonials.length) {
                newIndex = 0;
            }
            showTestimonial(newIndex);
        }, 7000);
    }

    // --------- MENU CATEGORY TABS ---------
    const menuNavItems = document.querySelectorAll('.menu-nav-item');
    const menuCategories = document.querySelectorAll('.menu-category');
    
    if (menuNavItems.length > 0) {
        menuNavItems.forEach(item => {
            item.addEventListener('click', function() {
                // Get target category
                const target = this.getAttribute('data-target');
                
                // Remove active class from all nav items and categories
                menuNavItems.forEach(navItem => navItem.classList.remove('active'));
                menuCategories.forEach(category => category.classList.remove('active'));
                
                // Add active class to clicked nav item and corresponding category
                this.classList.add('active');
                document.getElementById(target).classList.add('active');
            });
        });
    }

    // --------- FAQ ACCORDION ---------
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Toggle active class on clicked item
                item.classList.toggle('active');
                
                // Update icon
                const icon = this.querySelector('.toggle-icon i');
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    }

    // Removed form-related code since the form has been removed

    // --------- SCROLL ANIMATIONS ---------
    // Get all sections for potential animations
    const sections = document.querySelectorAll('section');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    // Function to add animation class when section is in viewport
    function animateSections() {
        sections.forEach(section => {
            if (isInViewport(section) && !section.classList.contains('animated')) {
                section.classList.add('animated');
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial styles for animation
    sections.forEach(section => {
        if (!isInViewport(section)) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        } else {
            section.classList.add('animated');
            section.style.opacity = '1';
        }
    });
    
    // Run on load and scroll
    animateSections();
    window.addEventListener('scroll', animateSections);

    // --------- SMOOTH SCROLLING FOR INTERNAL LINKS ---------
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Only if the hash is not empty
            if (this.hash !== '') {
                event.preventDefault();
                
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    // Scroll to target element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash
                    window.history.pushState(null, null, hash);
                }
            }
        });
    });

    // --------- HEADER SCROLL EFFECT ---------
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 2rem';
                header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
            } else {
                header.style.padding = '1rem 2rem';
                header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            }
        });
    }
});