
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const joinForm = document.getElementById("joinForm");

if (joinForm) {
    joinForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const button = document.getElementById("joinButton");
        const formData = new FormData(joinForm);

        const application = Object.fromEntries(formData.entries());

        button.disabled = true;
        button.textContent = "Submitting...";

        try {
            const response = await fetch("https://code2chill-api.onrender.com/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(application)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Submission failed");
            }

            alert("Application submitted successfully!");
            joinForm.reset();

        } catch (error) {
            alert("Error: " + error.message);

        } finally {
            button.disabled = false;
            button.textContent = "Submit Application ↗";
        }
    });
}




const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const button = document.getElementById("contactButton");
        const formData = new FormData(contactForm);
        const messageData = Object.fromEntries(formData.entries());

        button.disabled = true;
        button.textContent = "Sending...";

        try {
            const response = await fetch("http://127.0.0.1:8000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(messageData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Message submission failed");
            }

            alert("Message sent successfully!");
            contactForm.reset();

        } catch (error) {
            alert("Error: " + error.message);

        } finally {
            button.disabled = false;
            button.textContent = "Send Message ↗";
        }
    });
}

