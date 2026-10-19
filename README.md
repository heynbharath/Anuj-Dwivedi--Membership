# Anuj Dwivedi × Archzos Technologies × Octopus Tank
> **"Ideas deserve more than applause. They deserve a path forward."**  
> Premium commercial advisory platform, recognition architecture, and brand ecosystem for **Anuj Dwivedi** and **Archzos Technologies Pvt Ltd**, with digital platform architecture and operational infrastructure coordinated by **Circle13**.

---

## 1. Core Entities & Operational Relationships

To maintain academic, corporate, legal, and operational integrity, all four entities are strictly defined and kept distinct:

1. **ANUJ DWIVEDI**:
   - The individual practitioner, applied AI engineer, keynote speaker, and founder whose professional presence, technical mentorship, and advisory pathways are presented.
   - Sole authorized signatory for commercial consultancy offers and Archzos corporate agreements.
2. **ARCHZOS TECHNOLOGIES PVT LTD**:
   - The associated technology company brand featured on official letterheads, executive stationery, circular seals, and formal agreement documents.
3. **OCTOPUS TANK**:
   - The campus startup-pitching competition and recognition programme (3 Gates, 2-hour session blueprint, 8 thematic innovation arms, and 10-card recognition token quota).
4. **CIRCLE13**:
   - Independent brand led by **N. Bharath (CEO)**.
   - Responsible for digital platform architecture, commercial presentation, and operational infrastructure.
   - *Governance Boundary:* Circle13 is not formally appointed as an Archzos company signatory and is not authorized to collect payments on behalf of Archzos unless formally confirmed in writing.

---

## 2. Design System & Palette

The platform employs a restrained, editorial aesthetic drawing strictly from the supplied physical stationery and recognition references:

| Color Token | Hex Code | Visual Application |
|---|---|---|
| **Warm Ivory** | `#F6F1E5` | Editorial paper backgrounds, laid letterhead simulation, badge surfaces |
| **Antique Gold** | `#C9A04A` | Accent borders, foil highlights, primary brand insignia, focus indicators |
| **Light Gold** | `#E5C66E` | Hover states, subtle metallic gradients, secondary highlights |
| **Obsidian Black** | `#101114` | Primary high-contrast text, executive presentation folders, formal stationery |
| **Deep Navy** | `#0B1726` | Hero backgrounds, formal section wraps, dark contrast panels |
| **Silver** | `#C7CBD1` | Secondary borders, muted card badges, subtle dividers |
| **Bronze** | `#A96F43` | Route B badges, individual interest tokens, warm metallic accents |
| **Muted Text** | `#65615A` | Editorial body copy, technical metadata, disclosure notices |

- **Typography**: Playfair Display (editorial serif headlines) paired with Inter (modern, legible sans-serif body).
- **Accessibility**: High-contrast focus outlines (`:focus-visible { outline: 2px solid #C9A04A; }`), full screen-reader semantic landmarks, and `@media (prefers-reduced-motion: reduce)` compliance.

---

## 3. Centralized Offers & Pricing Harmonization

All commercial packages are unified in `CENTRAL_OFFERS` (`lib/config.ts`) with strict status-level segregation (`awaiting_approval`, `approved`, `draft`, `hidden`):

| Route / Offer | Reference Fee | Target Group | Delivery Format | Commercial Status |
|---|---|---|---|---|
| **Offer A: Team Consultancy Entry** | ₹15,000 total | Teams up to 5 people (effective ₹3,000/head at 5) | Group advisory sessions | `awaiting_approval` |
| **Offer B: Individual Bronze Route** | ₹12,000 | Individual builder | 1:1 architectural consultation | `awaiting_approval` |
| **Offer C: Premium Anchor Mentorship** | ₹75,000 | Individual / Team | 30-day intensive execution & accountability | `awaiting_approval` |
| **Institutional Campus Keynote** | ₹50,000 reference | College / University | On-campus keynote & code audit | `approved` |
| **Earlier 1:1 Advisory Package** | ₹40,000 | Individual | 4 deep-dive sessions | `draft` (kept separate, not merged) |
| **Earlier 4-Session Mentorship** | ₹40,000 | Individual | Milestone review | `draft` (kept separate, not merged) |

*Pricing Rule:* Earlier draft packages are never silently merged with the master manual rates. Only approved offerings appear as confirmed commercial offers on the public site.

---

## 4. 10-Card Recognition Token System

Each edition of Octopus Tank operates under a strict **10-card quota** to maintain genuine scarcity:

1. **Gold Token #1 (1st Place Champion)** — 80% discount against approved route.
2. **Gold Token #2 (2nd Place Finalist)** — 70% discount against approved route.
3. **Gold Token #3 (3rd Place Podium)** — 60% discount against approved route.
4. **Silver Token (Selected by Anuj)** — Discretionary selection for compelling engineering (pool of ~4 cards).
5. **Bronze Token (Individual Interest Pass)** — Dedicated route for hungry individual builders (pool of ~3 cards).
6. **Universal Token Back** — Reverse face with serial number slot, Archzos Technologies insignia, and founder signature bar.

*Non-Guarantee Policy:* Holding a recognition token signifies judged capability on stage. It does not automatically guarantee venture investment, company hiring, or paid engagement.

---

## 5. Master Manual: 34-Page Operating Architecture

The Octopus Tank operational methodology (Manual Edition 01, 19 Oct 2026) is fully codified in `MASTER_MANUAL_CONFIG` (`lib/config.ts`):

- **The 3 Gates**:
  1. *Psychology* — "Is there real friction worth removing?"
  2. *Economics* — "Is contribution positive with defensible unit economics?"
  3. *Distribution* — "Can the signal reach more builders?"
- **2-Hour Room Stages**:
  1. *Enter With Authority* (Command the room; dismantle jargon).
  2. *Expose The Friction* (Reveal why toy prototypes fail to become products).
  3. *Teach What Matters* (Architecture, defensibility, and systems thinking).
  4. *Judge The Pitches* (Constructive architectural scrutiny).
  5. *Reward and Convert* (Confer numbered tokens on stage; hand off to management).
- **6-Step Command Map**: Observe gap → Show proof → Qualify need → Recognise selectively → Issue one offer → Management closes.
- **5-Question Diagnostic**: What are you building? What have you done already? What is your biggest block? What would success look like? What time can you commit?
- **Non-Negotiables**: 10 approved practices vs 10 strictly prohibited shortcuts (no manufactured urgency, no off-record cards, no guaranteed outcomes).

---

## 6. Document & Stationery Suite (12 Items)

codified in `STATIONERY_SHOWCASE_ITEMS` (`lib/config.ts`) and displayed at `/agreements`:

1. Ivory-and-Gold Letterhead
2. Black Executive Stationery
3. Offer-Letter Concept
4. Gold Agreement Concept
5. Black Agreement Concept
6. Branded Presentation Envelope
7. Obsidian Presentation Folder
8. Gold Ink Seal Concept (42mm Veerbhogya emblem)
9. Blue Ink Seal Concept (archival midnight blue)
10. Blind Emboss Concept (watermark dry seal)
11. Ceremonial Wax Seal Concept (crimson wax insignia)
12. Signature Placement Concept (gold fountain pen protocol)

*Mandatory Disclaimer:*
> "Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued."

---

## 7. Commercial Intake & Managed Booking Desk

Located at `/book` and embedded on the Homepage (`components/EnquiryForm.tsx`):

- **7 Inquiry Categories**:
  1. Team Consultancy
  2. Individual Engagement
  3. Premium Mentorship
  4. Institutional Enquiry
  5. Speaking / Judging
  6. Recognition Enquiry
  7. General Enquiry
- **4 Lifecycle States**:
  1. *Enquiry Submitted* (Intake logged with reference ID).
  2. *Booking Requested* (Scope, team roster, and timeline aligned).
  3. *Booking Confirmed* (Formal offer letter issued with Anuj Dwivedi signature).
  4. *Payment Completed* (Official banking coordinates provided upon mutual signing).
- **Zero Fake Billing Guarantee**: Online payment credentials and live payment gateway integration await formal confirmation by Circle13 and Archzos. No simulated fake transactions or invented calendar slots are rendered.

---

## 8. Homepage Architecture (Sections A through J)

1. **Section A — Premium Hero**: Headline *"Ideas deserve more than applause. They deserve a path forward."*, verified keynote photograph, primary CTA (`/offers`), secondary CTA (`/recognition`), trust notice.
2. **Section B — Verified Professional Background**: Anuj Dwivedi dossier, keynote address, DSU engineering masterclasses, and Archzos founder portrait.
3. **Section C — Work, Projects, and Technical Credibility**: Real GitHub repositories, deployed web applications (`VERIFIED_PROJECTS`), and kinetic motion graphic engine.
4. **Section D — Consultancy and Mentorship Pathways**: Routes A, B, and C cards with pricing harmonization disclosures and working CTAs.
5. **Section E — Octopus Tank Introduction**: 3 Gates, 2-Hour session logic, and 8 thematic innovation arms.
6. **Section F — Recognition-Token Gallery Preview**: 6 token designs with lightbox zoom and 10-card cap context.
7. **Section G — How the Programme Works**: The 6-step operational command map.
8. **Section H — Document and Stationery Showcase**: Interactive agreement preview, 4-seal gallery, and mandatory illustrative notice.
9. **Section I — Enquiry and Booking Section**: Functional intake desk with category selector and lifecycle tracker.
10. **Section J — Premium Footer**: Full governance disclosures, partner attribution, and legal links.

---

## 9. Local Development & Verification

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run full TypeScript validation & Next.js production build
npm run build
```

---

## 10. Owner Approval Checklist (For Anuj Dwivedi)

Before public launch, the following items require formal client sign-off:
- [ ] Confirm pricing and scope for Route A (Team ₹15,000), Route B (Individual ₹12,000), and Route C (Anchor Mentorship ₹75,000).
- [ ] Confirm whether earlier ₹40,000 packages should be kept in draft or archived.
- [ ] Confirm the target date for Octopus Tank 2026 with Dayananda Sagar University.
- [ ] Approve the 12 stationery and agreement layout designs.
- [ ] Authenticate the GitHub repository for the ~2,000 feedback metric when ready to display publicly.
- [ ] Provide authorized payment gateway credentials to activate live payment processing.
