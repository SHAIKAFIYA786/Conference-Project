document.addEventListener("DOMContentLoaded", function () {
    console.log("Contact Bar Loaded!");
});
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const footerSections = document.querySelectorAll(".footer-section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    };

    const animateFooter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-footer");
            }
        });
    };

    const observer = new IntersectionObserver(animateFooter, observerOptions);

    footerSections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function () {
    const conferenceSection = document.querySelector(".conference-section");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Trigger when 30% of the section is visible
    };

    const animateSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-section");
            }
        });
    };

    const observer = new IntersectionObserver(animateSection, observerOptions);
    observer.observe(conferenceSection);
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact-bar").classList.add("show");
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".navbar").classList.add("show");
});
document.addEventListener("DOMContentLoaded", function () {
    const contactInfo = document.querySelector(".contact-info");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3 // Trigger when 30% is visible
    };

    const animateContact = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactInfo.classList.add("animate-contact");
            } else {
                contactInfo.classList.remove("animate-contact"); // Remove for replay on scroll
            }
        });
    };

    const observer = new IntersectionObserver(animateContact, observerOptions);
    observer.observe(contactInfo);
});

// contact
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-container");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2 // Triggers when 30% is visible
    };

    const animateContact = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactSection.classList.add("animate-contact");
            } else {
                contactSection.classList.remove("animate-contact"); // Remove for replay on scroll
            }
        });
    };

    const observer = new IntersectionObserver(animateContact, observerOptions);
    observer.observe(contactSection);
});
// gadbad
function revealOnScroll() {
    const elements = document.querySelectorAll("h1, p");
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
            el.classList.add("show");
        }
    });
}

// Event listener for scroll
window.addEventListener("scroll", revealOnScroll);

// Run once when the page loads
revealOnScroll();
// registration
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const elements = document.querySelectorAll(".registration-page, p, table, .second, h2, .registration-form");
        elements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "opacity 1s ease, transform 1s ease";
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});
// publicTION
document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        const updateElement = document.querySelector(".update");
        if (updateElement.getBoundingClientRect().top < window.innerHeight * 0.85) {
            updateElement.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on page load
});

// document.querySelector(".registration-form").addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const formData = {
//         name: document.querySelector("input[placeholder='Name']").value,
//         paperID: document.querySelector("input[placeholder='Paper ID']").value,
//         paperTitle: document.querySelector("input[placeholder='Paper Title']").value,
//         institution: document.querySelector("input[placeholder='Institution/Organization Name']").value,
//         phone: document.querySelector("input[placeholder='Phone No']").value,
//         email: document.querySelector("input[placeholder='Email']").value,
//         amountPaid: document.querySelector("input[placeholder='Amount Paid']").value,
//         journalName: document.querySelector("input[placeholder='Publication Journal Name']").value,
//         transactionID: document.querySelector("input[placeholder='Transaction ID']").value
//     };

//     try {
//         const response = await fetch("http://localhost:5000/api/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });

//         const data = await response.json();
//         alert(data.message);  // Show success message
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Registration failed.");
//     }
// });
// app.use(express.json()); // Ensure JSON body parsing is enabled

// app.post("/register", async (req, res) => {
//     try {
//         const { name, paperID, email } = req.body;

//         if (!name || !paperID || !email) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Store in database (MongoDB example)
//         const newRegistration = new RegistrationModel(req.body);
//         await newRegistration.save();

//         res.status(200).json({ message: "Registration successful" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });
// document.querySelector(".registration-form").addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const formData = {
//         name: document.querySelector("input[placeholder='Name']").value,
//         paperID: document.querySelector("input[placeholder='Paper ID']").value,
//         paperTitle: document.querySelector("input[placeholder='Paper Title']").value,
//         institution: document.querySelector("input[placeholder='Institution/Organization Name']").value,
//         phone: document.querySelector("input[placeholder='Phone No']").value,
//         email: document.querySelector("input[placeholder='Email']").value,
//         amountPaid: document.querySelector("input[placeholder='Amount Paid']").value,
//         journalName: document.querySelector("input[placeholder='Publication Journal Name']").value,
//         transactionID: document.querySelector("input[placeholder='Transaction ID']").value
//     };

//     console.log("Sending Data:", formData); // ✅ Debugging Step

//     try {
//         const response = await fetch("http://localhost:5000/api/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//         });

//         const data = await response.json();
//         alert(data.message);
//     } catch (error) {
//         console.error("Error:", error);
//         alert("Registration failed.");
//     }
// });
// document.querySelector(".registration-form").addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const formData = {
//         name: document.querySelector("input[placeholder='Name']").value,
//         paperId: document.querySelector("input[placeholder='Paper ID']").value,
//         paperTitle: document.querySelector("input[placeholder='Paper Title']").value,
//         institution: document.querySelector("input[placeholder='Institution/Organization Name']").value,
//         phone: document.querySelector("input[placeholder='Phone No']").value,
//         email: document.querySelector("input[placeholder='Email']").value,
//         amountPaid: document.querySelector("input[placeholder='Amount Paid']").value,
//         journalName: document.querySelector("input[placeholder='Publication Journal Name']").value,
//         feePaid: document.querySelector("input[placeholder='Registration Fee Paid']").value,
//         transactionId: document.querySelector("input[placeholder='Transaction ID']").value,
//         date: document.querySelector("input[type='date']").value
//     };

//     try {
//         const response = await fetch("/api/register", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData)
//         });

//         const result = await response.json();
//         alert(result.message || "Registration Successful!");

//     } catch (error) {
//         alert("Error registering. Please try again.");
//     }
// });

document.querySelector(".registration-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = {
        name: document.querySelector("input[placeholder='Name']").value,
        paperId: document.querySelector("input[placeholder='Paper ID']").value,
        paperTitle: document.querySelector("input[placeholder='Paper Title']").value,
        institution: document.querySelector("input[placeholder='Institution/Organization Name']").value,
        phone: document.querySelector("input[placeholder='Phone No']").value,
        email: document.querySelector("input[placeholder='Email']").value,
        amountPaid: document.querySelector("input[placeholder='Amount Paid']").value,
        journalName: document.querySelector("input[placeholder='Publication Journal Name']").value,
        feePaid: document.querySelector("input[placeholder='Registration Fee Paid']").value,
        transactionId: document.querySelector("input[placeholder='Transaction ID']").value,
        date: document.querySelector("input[type='date']").value
    };
    console.log(formData);
    try {
        const response = await fetch("http://localhost:5000/api/registrations/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message || "Registration Successful!");

    } catch (error) {
        alert("Error registering. Please try again.");
    }
});
