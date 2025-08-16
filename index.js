/*** Dark Mode Toggle ***
  Purpose:
  - Toggle dark mode on body
***/
// Dark mode toggle (if you have a button for it)
const themeButton = document.getElementById("theme-button");
themeButton?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// RSVP form handling
const rsvpForm = document.getElementById("rsvp-form");
const rsvpCountDisplay = document.getElementById("rsvp-count");
const participantsDiv = document.querySelector(".rsvp-participants");
const modal = document.getElementById("success-modal");
const modalText = document.getElementById("modal-text");
const modalImage = document.getElementById("modal-image");

let rsvpCount = 3; // initial count

rsvpForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const guests = document.getElementById("guests").value.trim();

    if(name.length < 2 || email.length < 5 || !email.includes("@") || guests === "" || isNaN(guests)) {
        alert("Please fill out the form correctly!");
        return;
    }

    // Add participant
    const newParticipant = document.createElement("p");
    newParticipant.textContent = `🎉 ${name} - ${email} - Guests: ${guests}`;
    participantsDiv.appendChild(newParticipant);

    // Update count
    rsvpCount++;
    rsvpCountDisplay.textContent = `⭐ ${rsvpCount} people have RSVP'd to this event!`;

    // Show modal
    modal.style.display = "flex";
    modalText.textContent = `Thanks for RSVPing, ${name}! We can't wait to see you at the event! 🎉`;

    // Animate modal image
    let angle = 0;
    const intervalId = setInterval(() => {
        angle = angle === 0 ? -10 : 0;
        modalImage.style.transform = `rotate(${angle}deg)`;
    }, 500);

    // Hide modal after 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
        modalImage.style.transform = "rotate(0deg)";
    }, 5000);

    // Reset form
    rsvpForm.reset();
});

// Close modal if clicking outside
modal.addEventListener("click", (e) => {
    if(e.target === modal) modal.style.display = "none";
});
