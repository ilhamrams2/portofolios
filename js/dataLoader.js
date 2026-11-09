/**
 * Portfel. JSON Database Loader
 * Fetches data from data/portfolio.json and renders all sections from top to bottom
 */
document.addEventListener("DOMContentLoaded", function () {
    fetch("data/portfolio.json")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to load data/portfolio.json");
            }
            return response.json();
        })
        .then(function (db) {
            renderPortfolio(db);
        })
        .catch(function (err) {
            console.warn("Could not fetch data/portfolio.json via HTTP, using existing DOM fallback:", err);
            initInteractiveFeatures();
        });

    function escapeHtml(str) {
        if (typeof str !== "string") return "";
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function renderPortfolio(db) {
        // 1. NAVBAR (Desktop & Mobile Sidebar)
        if (db.navbar) {
            const brandEl = document.querySelector(".brand-portfel");
            if (brandEl) {
                brandEl.textContent = db.navbar.brand;
                brandEl.setAttribute("href", db.navbar.brandHref || "#landing");
            }

            const sidebarBrand = document.querySelector(".sidebar-nav .header-nav span");
            if (sidebarBrand) {
                sidebarBrand.textContent = db.navbar.brand;
            }

            const desktopMenu = document.querySelector(".nav-desktop-menu");
            if (desktopMenu && Array.isArray(db.navbar.menu)) {
                const linksHtml = db.navbar.menu
                    .map(function (item) {
                        const activeClass = item.active ? " active" : "";
                        return `<a class="nav-desktop-link${activeClass}" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`;
                    })
                    .join("");
                const contactBtnHtml = db.navbar.contactBtn
                    ? `<a class="btn-nav-contact" href="${escapeHtml(db.navbar.contactBtn.href)}">${escapeHtml(db.navbar.contactBtn.label)}</a>`
                    : "";
                desktopMenu.innerHTML = linksHtml + contactBtnHtml;
            }

            const mobileNavList = document.querySelector(".sidebar-nav .navbar-nav");
            if (mobileNavList && Array.isArray(db.navbar.menu)) {
                const mobileItems = db.navbar.menu.slice();
                if (db.navbar.contactBtn) {
                    mobileItems.push(db.navbar.contactBtn);
                }
                mobileNavList.innerHTML = mobileItems
                    .map(function (item) {
                        return `<li class="nav-item"><a class="nav-link" href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a></li>`;
                    })
                    .join("<hr>");
            }

            const mobileSosmed = document.querySelector(".sidebar-nav .footer-nav .sosmed");
            if (mobileSosmed && Array.isArray(db.navbar.socials)) {
                mobileSosmed.innerHTML = db.navbar.socials
                    .map(function (s) {
                        return `<img src="${escapeHtml(s.icon)}" alt="${escapeHtml(s.alt || "")}" />`;
                    })
                    .join("");
            }
        }

        // 2. HERO / LANDING SECTION
        if (db.hero) {
            const greetingEl = document.querySelector(".hero-greeting");
            const nameEl = document.querySelector(".hero-name");
            const titleEl = document.querySelector(".hero-title");
            const descEl = document.querySelector(".hero-description");
            const primaryBtn = document.querySelector(".btn-hero-explore");
            const secondaryLink = document.querySelector(".link-hero-touch");
            const heroImg = document.querySelector(".hero-main-image");

            if (greetingEl) greetingEl.textContent = db.hero.greeting;
            if (nameEl) nameEl.textContent = db.hero.name;
            if (titleEl) titleEl.innerHTML = db.hero.title;
            if (descEl) descEl.textContent = db.hero.description;
            if (primaryBtn && db.hero.primaryCta) {
                primaryBtn.textContent = db.hero.primaryCta.label;
                primaryBtn.setAttribute("href", db.hero.primaryCta.href);
            }
            if (secondaryLink && db.hero.secondaryCta) {
                secondaryLink.textContent = db.hero.secondaryCta.label;
                secondaryLink.setAttribute("href", db.hero.secondaryCta.href);
            }
            if (heroImg && db.hero.image) {
                heroImg.setAttribute("src", db.hero.image.src);
                heroImg.setAttribute("alt", db.hero.image.alt || "");
            }
        }

        // 3. TECH STACK SECTION
        if (db.techStack) {
            const tsSection = document.getElementById("tech-stack");
            if (tsSection) {
                const eyebrowText = tsSection.querySelector(".eyebrow-text");
                const heading = tsSection.querySelector(".tech-stack-heading");
                const subtitle = tsSection.querySelector(".tech-stack-subtitle");
                const primaryBadge = tsSection.querySelector(".tech-stack-primary-badge");
                const grid = tsSection.querySelector(".tech-stack-grid");

                if (eyebrowText) eyebrowText.textContent = db.techStack.eyebrow;
                if (heading) heading.textContent = db.techStack.heading;
                if (subtitle) subtitle.textContent = db.techStack.subtitle;
                if (primaryBadge) {
                    primaryBadge.innerHTML = `<span class="badge-dot"></span><span>${escapeHtml(db.techStack.primaryBadge)}</span>`;
                }

                if (grid && Array.isArray(db.techStack.categories)) {
                    grid.innerHTML = db.techStack.categories
                        .map(function (cat, idx) {
                            const delay = 700 + idx * 100;
                            const itemsHtml = (cat.items || [])
                                .map(function (item) {
                                    return `<li class="tech-item"><span class="tech-bullet"></span>${escapeHtml(item)}</li>`;
                                })
                                .join("");
                            return `
                                <div class="tech-card" data-aos="fade-up" data-aos-duration="${delay}">
                                  <div class="tech-card-bars" aria-hidden="true">
                                    <span></span><span></span><span></span><span></span><span></span><span></span>
                                  </div>
                                  <h3 class="tech-card-title">${escapeHtml(cat.title)}</h3>
                                  <p class="tech-card-desc">${escapeHtml(cat.description)}</p>
                                  <ul class="tech-item-list">${itemsHtml}</ul>
                                </div>`;
                        })
                        .join("");
                }
            }
        }

        // 4. PROFILE / ABOUT ME & JOURNEY SECTION
        if (db.profile) {
            const profSection = document.getElementById("about");
            if (profSection) {
                const eyebrowText = profSection.querySelector(".eyebrow-text");
                const heading = profSection.querySelector(".tech-stack-heading");
                const subtitle = profSection.querySelector(".profile-subtitle");

                if (eyebrowText) eyebrowText.textContent = db.profile.eyebrow;
                if (heading) heading.textContent = db.profile.heading;
                if (subtitle) subtitle.textContent = db.profile.subtitle;

                if (db.profile.bioCard) {
                    const statusBadge = profSection.querySelector(".profile-status-badge");
                    const bioTitle = profSection.querySelector(".profile-bio-title");
                    const bioText = profSection.querySelector(".profile-bio-text");
                    const bioLabel = profSection.querySelector(".profile-bio-label");
                    const bioRole = profSection.querySelector(".profile-bio-role");
                    const bioCta = profSection.querySelector(".profile-bio-cta");

                    if (statusBadge) {
                        statusBadge.innerHTML = `<span class="badge-dot"></span><span>${escapeHtml(db.profile.bioCard.statusBadge)}</span>`;
                    }
                    if (bioTitle) bioTitle.textContent = db.profile.bioCard.title;
                    if (bioText && Array.isArray(db.profile.bioCard.paragraphs)) {
                        bioText.innerHTML = db.profile.bioCard.paragraphs
                            .map(function (p) {
                                return `<p>${p}</p>`;
                            })
                            .join("");
                    }
                    if (bioLabel) bioLabel.textContent = db.profile.bioCard.specialtyLabel;
                    if (bioRole) bioRole.textContent = db.profile.bioCard.specialtyRole;
                    if (bioCta && db.profile.bioCard.cta) {
                        bioCta.textContent = db.profile.bioCard.cta.label;
                        bioCta.setAttribute("href", db.profile.bioCard.cta.href);
                    }
                }

                const statsGrid = profSection.querySelector(".profile-stats-grid");
                if (statsGrid && Array.isArray(db.profile.stats)) {
                    statsGrid.innerHTML = db.profile.stats
                        .map(function (st) {
                            return `
                                <div class="profile-stat-card">
                                  <span class="stat-number">${escapeHtml(st.number)}</span>
                                  <span class="stat-title">${escapeHtml(st.title)}</span>
                                  <span class="stat-sub">${escapeHtml(st.subtitle)}</span>
                                </div>`;
                        })
                        .join("");
                }

                if (db.profile.timelineHeader) {
                    const tlHeading = profSection.querySelector(".profile-timeline-heading");
                    const tlSub = profSection.querySelector(".profile-timeline-sub");
                    if (tlHeading) tlHeading.textContent = db.profile.timelineHeader.heading;
                    if (tlSub) tlSub.textContent = db.profile.timelineHeader.subtitle;
                }

                const tlItemsContainer = profSection.querySelector(".timeline-items");
                if (tlItemsContainer && Array.isArray(db.profile.timelineItems)) {
                    tlItemsContainer.innerHTML = db.profile.timelineItems
                        .map(function (entry) {
                            const dotClass = entry.active ? "timeline-dot active" : "timeline-dot";
                            const tagsHtml = (entry.tags || [])
                                .map(function (t) {
                                    return `<span class="timeline-tag">${escapeHtml(t)}</span>`;
                                })
                                .join("");
                            return `
                                <div class="timeline-row">
                                  <div class="timeline-node">
                                    <span class="${dotClass}"></span>
                                  </div>
                                  <div class="timeline-entry-card">
                                    <div class="timeline-entry-top">
                                      <span class="timeline-date-pill">${escapeHtml(entry.period)}</span>
                                      <span class="timeline-type-label">${escapeHtml(entry.type)}</span>
                                    </div>
                                    <h4 class="timeline-entry-title">${escapeHtml(entry.title)}</h4>
                                    <span class="timeline-entry-org">${escapeHtml(entry.organization)}</span>
                                    <p class="timeline-entry-desc">${escapeHtml(entry.description)}</p>
                                    <div class="timeline-tags">${tagsHtml}</div>
                                  </div>
                                </div>`;
                        })
                        .join("");
                }
            }
        }

        // 5. SERVICES SECTION
        if (db.services) {
            const srvSection = document.getElementById("service");
            if (srvSection) {
                const eyebrowText = srvSection.querySelector(".eyebrow-text");
                const heading = srvSection.querySelector(".tech-stack-heading");
                const subtitle = srvSection.querySelector(".services-subtitle");
                const srvGrid = srvSection.querySelector(".services-grid");

                if (eyebrowText) eyebrowText.textContent = db.services.eyebrow;
                if (heading) heading.textContent = db.services.heading;
                if (subtitle) subtitle.textContent = db.services.subtitle;

                if (srvGrid && Array.isArray(db.services.items)) {
                    srvGrid.innerHTML = db.services.items
                        .map(function (srv, idx) {
                            const darkClass = srv.featuredDark ? " featured-dark" : "";
                            const delay = 700 + idx * 100;
                            const featuresHtml = (srv.features || [])
                                .map(function (f) {
                                    return `<li><span class="service-dot"></span><span>${escapeHtml(f)}</span></li>`;
                                })
                                .join("");
                            return `
                                <div class="service-card${darkClass}" data-aos="fade-up" data-aos-duration="${delay}">
                                  <div class="service-card-top">
                                    <span class="service-num-badge">${escapeHtml(srv.number)}</span>
                                    <span class="service-brand-tag">${escapeHtml(srv.brandTag)}</span>
                                  </div>
                                  <h3 class="service-card-title">${escapeHtml(srv.title)}</h3>
                                  <p class="service-card-desc">${escapeHtml(srv.description)}</p>
                                  <ul class="service-feature-list">${featuresHtml}</ul>
                                  <div class="service-card-footer">
                                    <span>${escapeHtml(srv.techFooter)}</span>
                                  </div>
                                </div>`;
                        })
                        .join("");
                }
            }
        }

        // 6. PROJECTS SECTION
        if (db.projects) {
            const prjSection = document.getElementById("projects");
            if (prjSection) {
                const eyebrowText = prjSection.querySelector(".eyebrow-text");
                const heading = prjSection.querySelector(".tech-stack-heading");
                const filterTabsWrap = prjSection.querySelector(".projects-filter-tabs");
                const prjGrid = prjSection.querySelector(".projects-grid");

                if (eyebrowText) eyebrowText.textContent = db.projects.eyebrow;
                if (heading) heading.textContent = db.projects.heading;

                if (filterTabsWrap && Array.isArray(db.projects.filters)) {
                    filterTabsWrap.innerHTML = db.projects.filters
                        .map(function (flt) {
                            const activeClass = flt.active ? " active" : "";
                            return `<button type="button" class="project-filter-tab${activeClass}" data-filter="${escapeHtml(flt.value)}">${escapeHtml(flt.label)}</button>`;
                        })
                        .join("");
                }

                if (prjGrid && Array.isArray(db.projects.items)) {
                    prjGrid.innerHTML = db.projects.items
                        .map(function (prj, idx) {
                            const delay = 700 + (idx % 3) * 100;
                            const tagsHtml = (prj.tags || [])
                                .map(function (t) {
                                    return `<span class="project-tech-tag">${escapeHtml(t)}</span>`;
                                })
                                .join("");
                            return `
                                <div class="project-showcase-card" data-category="${escapeHtml(prj.category)}" data-aos="fade-up" data-aos-duration="${delay}">
                                  <div class="project-thumb-wrap">
                                    <img src="${escapeHtml(prj.image)}" alt="${escapeHtml(prj.title)}" class="project-thumb-img" />
                                    <span class="project-cat-badge">${escapeHtml(prj.badge)}</span>
                                  </div>
                                  <div class="project-card-body">
                                    <div class="project-meta-row">
                                      <span class="project-role-text">${escapeHtml(prj.role)}</span>
                                      <span class="project-year-text">${escapeHtml(prj.year)}</span>
                                    </div>
                                    <h3 class="project-card-title">${escapeHtml(prj.title)}</h3>
                                    <p class="project-card-desc">${escapeHtml(prj.description)}</p>
                                    <div class="project-tags-row">${tagsHtml}</div>
                                      <div class="project-card-action">
                                        <a href="${escapeHtml(prj.detailUrl || "page/project.html")}" class="btn-project-detail">${escapeHtml(prj.detailText || "View Detail")}</a>
                                        ${prj.externalUrl ? `<a href="${escapeHtml(prj.externalUrl)}" target="_blank" rel="noopener noreferrer" class="btn-project-visit">${escapeHtml(prj.externalLabel || "Visit Site")} &nearr;</a>` : ""}
                                      </div>
                                  </div>
                                </div>`;
                        })
                        .join("");
                }
            }
        }

        // 7. CONTACT ME SECTION
        if (db.contact) {
            const cntSection = document.getElementById("contact");
            if (cntSection) {
                const eyebrowText = cntSection.querySelector(".eyebrow-text");
                const heading = cntSection.querySelector(".contact-heading");
                const desc = cntSection.querySelector(".contact-desc");
                const brandMini = cntSection.querySelector(".contact-brand-mini");

                if (eyebrowText) eyebrowText.textContent = db.contact.eyebrow;
                if (heading) heading.innerHTML = db.contact.heading;
                if (desc) desc.textContent = db.contact.description;
                if (brandMini) brandMini.textContent = db.contact.brandMini;

                const infoBoxes = cntSection.querySelectorAll(".contact-info-box");
                if (infoBoxes.length >= 2) {
                    if (db.contact.directEmail) {
                        infoBoxes[0].innerHTML = `
                            <div class="contact-info-text">
                              <span class="contact-info-label">${escapeHtml(db.contact.directEmail.label)}</span>
                              <strong class="contact-info-value" id="contactEmailText">${escapeHtml(db.contact.directEmail.email)}</strong>
                            </div>
                            <button type="button" class="btn-contact-copy" id="copyEmailBtn">${escapeHtml(db.contact.directEmail.copyButtonText)}</button>`;
                    }
                    if (db.contact.socialProfile) {
                        infoBoxes[1].innerHTML = `
                            <div class="contact-info-text">
                              <span class="contact-info-label">${escapeHtml(db.contact.socialProfile.label)}</span>
                              <a href="${escapeHtml(db.contact.socialProfile.url)}" target="_blank" rel="noopener" class="contact-info-value link">${escapeHtml(db.contact.socialProfile.display)}</a>
                            </div>
                            <span class="contact-handle-badge">${escapeHtml(db.contact.socialProfile.handle)}</span>`;
                    }
                }

                if (db.contact.form) {
                    const formTitle = cntSection.querySelector(".contact-form-title");
                    const formSub = cntSection.querySelector(".contact-form-sub");
                    const senderName = document.getElementById("senderName");
                    const senderEmail = document.getElementById("senderEmail");
                    const projectCategory = document.getElementById("projectCategory");
                    const projectMessage = document.getElementById("projectMessage");
                    const responseNote = cntSection.querySelector(".contact-response-note");
                    const submitBtn = cntSection.querySelector(".btn-send-message");

                    if (formTitle) formTitle.textContent = db.contact.form.title;
                    if (formSub) formSub.textContent = db.contact.form.subtitle;
                    if (senderName) senderName.setAttribute("placeholder", db.contact.form.namePlaceholder);
                    if (senderEmail) senderEmail.setAttribute("placeholder", db.contact.form.emailPlaceholder);
                    if (projectCategory && Array.isArray(db.contact.form.categories)) {
                        projectCategory.innerHTML = db.contact.form.categories
                            .map(function (cat) {
                                return `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`;
                            })
                            .join("");
                    }
                    if (projectMessage) projectMessage.setAttribute("placeholder", db.contact.form.messagePlaceholder);
                    if (responseNote) responseNote.textContent = db.contact.form.responseNote;
                    if (submitBtn) submitBtn.textContent = db.contact.form.submitText;
                }
            }
        }

        // 8. FOOTER SECTION
        if (db.footer) {
            const footerBrand = document.querySelector(".footer-brand");
            const footerCopy = document.querySelector(".footer-copy");
            const footerBackTop = document.querySelector(".footer-back-top");

            if (footerBrand) footerBrand.textContent = db.footer.brand;
            if (footerCopy) footerCopy.textContent = db.footer.copyright;
            if (footerBackTop) {
                footerBackTop.textContent = db.footer.backToTopText;
                footerBackTop.setAttribute("href", db.footer.backToTopHref || "#landing");
            }
        }

        // Re-bind interactive features after DOM render
        initInteractiveFeatures();

        // Refresh AOS animations if present
        if (window.AOS && typeof window.AOS.refresh === "function") {
            window.AOS.refresh();
        }
    }

    function initInteractiveFeatures() {
        // 1. Project Category Filter Tabs
        const filterTabs = document.querySelectorAll(".project-filter-tab");
        const projectCards = document.querySelectorAll(".project-showcase-card");

        if (filterTabs.length > 0 && projectCards.length > 0) {
            filterTabs.forEach(function (tab) {
                tab.onclick = function () {
                    filterTabs.forEach(function (t) {
                        t.classList.remove("active");
                    });
                    this.classList.add("active");

                    const selected = this.getAttribute("data-filter");
                    projectCards.forEach(function (card) {
                        const cat = card.getAttribute("data-category");
                        if (selected === "all" || cat === selected) {
                            card.style.display = "";
                        } else {
                            card.style.display = "none";
                        }
                    });
                };
            });
        }

        // 2. Copy Email Button
        const copyEmailBtn = document.getElementById("copyEmailBtn");
        const contactEmailText = document.getElementById("contactEmailText");
        if (copyEmailBtn) {
            copyEmailBtn.onclick = function () {
                const email = contactEmailText ? contactEmailText.textContent.trim() : "ilham.ramadan.dev@gmail.com";
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email);
                }
                const originalText = copyEmailBtn.textContent;
                copyEmailBtn.textContent = "Copied!";
                setTimeout(function () {
                    copyEmailBtn.textContent = originalText;
                }, 2000);
            };
        }

        // 3. Contact Quick Message Form Submit
        const contactQuickForm = document.getElementById("contactQuickForm");
        if (contactQuickForm) {
            contactQuickForm.onsubmit = function (e) {
                e.preventDefault();
                const targetEmail = contactEmailText ? contactEmailText.textContent.trim() : "ilham.ramadan.dev@gmail.com";
                const name = document.getElementById("senderName").value.trim();
                const email = document.getElementById("senderEmail").value.trim();
                const category = document.getElementById("projectCategory").value;
                const message = document.getElementById("projectMessage").value.trim();
                const subject = encodeURIComponent("[" + category + "] Project Inquiry from " + name);
                const body = encodeURIComponent(
                    "Name: " + name + "\nEmail: " + email + "\nCategory: " + category + "\n\nMessage:\n" + message
                );
                window.location.href = "mailto:" + targetEmail + "?subject=" + subject + "&body=" + body;
            };
        }

        // 4. Desktop Nav Active State on Click & Scroll
        const navLinks = document.querySelectorAll(".nav-desktop-link");
        const sections = document.querySelectorAll("section[id]");

        if (navLinks.length > 0) {
            navLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                    const href = this.getAttribute("href");
                    if (href && href.startsWith("#")) {
                        navLinks.forEach(function (l) {
                            l.classList.remove("active");
                        });
                        this.classList.add("active");
                    }
                });
            });
        }

        if (navLinks.length > 0 && sections.length > 0) {
            window.addEventListener(
                "scroll",
                function () {
                    let current = "";
                    const scrollPos = window.scrollY + 180;

                    sections.forEach(function (section) {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;
                        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                            current = section.getAttribute("id");
                        }
                    });

                    if (current) {
                        navLinks.forEach(function (link) {
                            const href = link.getAttribute("href");
                            if (href && href.startsWith("#")) {
                                link.classList.toggle("active", href === "#" + current);
                            }
                        });
                    }
                },
                { passive: true }
            );
        }
    }
});

