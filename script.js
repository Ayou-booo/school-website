// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade In Animations on Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Back to Top Button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
};

document.getElementById("backToTop").onclick = function() {
    document.body.scrollTop = 0; // للمتصفحات القديمة
    document.documentElement.scrollTop = 0; // للمتصفحات الحديثة
};

// Show Program Details
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// Form Validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("يرجى ملء جميع الحقول المطلوبة.");
        return false;
    }

    if (!email.includes("@")) {
        alert("يرجى إدخال بريد إلكتروني صحيح.");
        return false;
    }

    document.getElementById("confirmationMessage").style.display = "block";
    return true;
}