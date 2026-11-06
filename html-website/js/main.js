/**
 * PRAVEEN DIGITAL SOLUTIONS - CLIENT SCRIPT
 * Pure Vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
      } else {
        mobileNav.style.display = "block";
      }
    });
  }

  // 2. Global Quote Modal Logic
  const quoteModal = document.getElementById("quoteModal");
  const modalClose = document.getElementById("modalClose");
  const requiredServiceInput = document.getElementById("modalService");

  window.openQuoteModal = function (serviceName) {
    if (quoteModal) {
      if (requiredServiceInput && serviceName) {
        requiredServiceInput.value = serviceName;
      }
      quoteModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  };

  window.closeQuoteModal = function () {
    if (quoteModal) {
      quoteModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  if (modalClose) {
    modalClose.addEventListener("click", window.closeQuoteModal);
  }

  window.addEventListener("click", function (e) {
    if (e.target === quoteModal) {
      window.closeQuoteModal();
    }
  });

  // 3. Contact & Modal Form Submission Handling
  const handleLeadSubmit = function (e, formId) {
    e.preventDefault();
    const form = document.getElementById(formId);
    if (!form) return;

    const fullName = form.querySelector('[name="fullName"]').value.trim();
    const businessName = form.querySelector('[name="businessName"]').value.trim() || "N/A";
    const phoneNumber = form.querySelector('[name="phoneNumber"]').value.trim();
    const emailAddress = form.querySelector('[name="emailAddress"]').value.trim() || "N/A";
    const city = form.querySelector('[name="city"]').value.trim();
    const businessCategory = form.querySelector('[name="businessCategory"]').value;
    const requiredService = form.querySelector('[name="requiredService"]').value;
    const projectBudget = form.querySelector('[name="projectBudget"]').value;
    const projectDescription = form.querySelector('[name="projectDescription"]').value.trim() || "Discuss on call";

    if (!fullName) {
      alert("Please enter your full name.");
      return;
    }
    if (!phoneNumber || phoneNumber.length < 10) {
      alert("Please enter a valid 10-digit phone or WhatsApp number.");
      return;
    }

    // Save lead locally
    try {
      const enquiries = JSON.parse(localStorage.getItem("pds_enquiries") || "[]");
      enquiries.push({
        id: Date.now(),
        date: new Date().toISOString(),
        fullName, businessName, phoneNumber, emailAddress, city, businessCategory, requiredService, projectBudget, projectDescription
      });
      localStorage.setItem("pds_enquiries", JSON.stringify(enquiries));
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    // Format WhatsApp message
    const formattedMsg = `*NEW WEBSITE & DIGITAL ENQUIRY - PRAVEEN DIGITAL SOLUTIONS*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(fullName)}%0A` +
      `🏢 *Business:* ${encodeURIComponent(businessName)}%0A` +
      `📱 *Phone:* ${encodeURIComponent(phoneNumber)}%0A` +
      `✉️ *Email:* ${encodeURIComponent(emailAddress)}%0A` +
      `📍 *City:* ${encodeURIComponent(city)}%0A` +
      `🏷️ *Category:* ${encodeURIComponent(businessCategory)}%0A` +
      `⚡ *Required Service:* ${encodeURIComponent(requiredService)}%0A` +
      `💰 *Budget:* ${encodeURIComponent(projectBudget)}%0A` +
      `📝 *Details:* ${encodeURIComponent(projectDescription)}`;

    const waUrl = `https://wa.me/919505164685?text=${formattedMsg}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");

    // Success response
    alert(`Thank you, ${fullName}! Your enquiry has been received and WhatsApp chat has been triggered directly with founder Akula Praveen Yadav.`);
    form.reset();
    if (window.closeQuoteModal) window.closeQuoteModal();
  };

  const modalForm = document.getElementById("quoteModalForm");
  if (modalForm) {
    modalForm.addEventListener("submit", function(e) {
      handleLeadSubmit(e, "quoteModalForm");
    });
  }

  const contactPageForm = document.getElementById("contactPageForm");
  if (contactPageForm) {
    contactPageForm.addEventListener("submit", function(e) {
      handleLeadSubmit(e, "contactPageForm");
    });
  }

  // 4. Interactive Portfolio Filter (on portfolio page & home page)
  window.filterPortfolio = function (type) {
    const cards = document.querySelectorAll(".portfolio-item");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`filter-${type}`);
    if (activeBtn) activeBtn.classList.add("active");

    cards.forEach(card => {
      if (type === "all") {
        card.style.display = "flex";
      } else {
        const itemType = card.getAttribute("data-type");
        if (itemType === type) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      }
    });
  };

  // 5. Interactive Pricing Estimator (on pricing page)
  window.updatePriceEstimator = function () {
    const pageScope = document.querySelector('input[name="estScope"]:checked')?.value || "5";
    const gbpChecked = document.getElementById("estGbp")?.checked || false;
    const adsChecked = document.getElementById("estAds")?.checked || false;
    const seoChecked = document.getElementById("estSeo")?.checked || false;

    let base = pageScope === "1" ? 5000 : pageScope === "5" ? 8999 : 14999;
    if (gbpChecked) base += 2000;
    if (adsChecked) base += 2000;
    if (seoChecked) base += 3000;

    const display = document.getElementById("estimatedTotalDisplay");
    if (display) {
      display.textContent = "₹" + base.toLocaleString("en-IN") + " onwards";
    }
  };

});
