# The Anuj Dwivedi Platform
> **Think Clearly. Build Intentionally.**  
> A premium personal brand, booking, membership, and advisory commerce platform for Anuj Dwivedi. Coordinated and managed by **Circle13 Management**.

---

## 1. Quick Start & Local Development

This platform is engineered with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide Icons**.

```bash
# Clone the repository
git clone https://github.com/heynbharath/Anuj-Dwivedi--Membership.git
cd Anuj-Dwivedi--Membership

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the live site.

---

## 2. Central Configuration & Content Editing

All commercial offers, biography copy, contact records, membership tiers, and event details are centralized in a single typed configuration file:

👉 **[`lib/config.ts`](lib/config.ts)**

Key sections to modify:
- **`SITE_CONFIG`**: Brand wordmark, proposed descriptor, editorial headlines, social URLs, and management details.
- **`SERVICES_CATALOGUE`**: Consultancy fees (₹40,000), 1:1 Mentorship fees (₹40,000), 30-Day Mentorship anchor price (₹75,000), and custom RFP terms.
- **`MEMBERSHIP_TIERS`**: Names, monthly/annual prices, and benefits for The Library, The Builder, and The Inner Circle.
- **`OCTOPUS_TANK_CONFIG`**: Event date, target teams (50 teams @ ₹299), co-host roles, and the 8 thematic arms.
- **`RECOGNITION_CARDS`**: The 10 Gold (80%, 70%, 60%), Silver (50%/40%), and Bronze (30%/20%) earned discount cards.
- **`VERIFIED_PROJECTS`**: Authentic repositories and live web applications.

---

## 3. Adding Anuj's Photographs & Visual Assets

All visual assets reside in the `public/` directory:
- `public/images/octopus-tank-2026.png`: Official Octopus Tank 2026 poster.
- `public/images/anuj-dwivedi-masterplan.png`: Master Plan infographic.
- To add a high-resolution professional portrait of Anuj:
  1. Add your file to `public/images/anuj-portrait.jpg` (or `.png`).
  2. Reference it in `app/page.tsx` or `app/about/page.tsx` using `<Image src="/images/anuj-portrait.jpg" ... />`.

---

## 4. Connecting the GitHub Proof Engine (2,000 Records)

The platform includes a strict, non-fabricated evidence engine in [`components/EvidenceModule.tsx`](components/EvidenceModule.tsx) and [`lib/config.ts`](lib/config.ts).

To connect the verified GitHub repository:
1. Open `lib/config.ts`.
2. Locate `GITHUB_PROOF_CONFIG`:
   ```ts
   export const GITHUB_PROOF_CONFIG: GitHubProofConfig = {
     repositoryUrl: "https://github.com/ANUJDWIVDI/your-verified-feedback-repo",
     repositoryOwner: "ANUJDWIVDI",
     repositoryName: "your-verified-feedback-repo",
     verifiedMetric: "feedback submissions", // EXACT metric description
     metricValue: 2000,
     metricDescription: "Verified student and builder feedback submissions documented across workshops",
     lastUpdatedDate: "October 2026",
     dataSource: "GitHub Repository API",
     isVerifiedAndActive: true, // Flip to true to display on public site
   };
   ```
3. If left `false`, the platform transparently hides unverified statistics and renders documented working code instead.

---

## 5. Configuring Razorpay Payments

Payment architecture is pre-configured in [`app/api/checkout/create-order/route.ts`](app/api/checkout/create-order/route.ts) and [`app/api/checkout/verify-payment/route.ts`](app/api/checkout/verify-payment/route.ts).

### Environment Variables
Copy `.env.example` to `.env.local` and add your production credentials:
```env
RAZORPAY_KEY_ID=rzp_live_xxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxx
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_xxxxxxxx
```

- **Demo / Enquiry Mode**: If these keys are left empty, the booking gateway automatically functions in **Enquiry Mode**, securely routing applications to Circle13 management without displaying fake payment success or throwing errors.
- **Security**: Prices are calculated and validated exclusively on the server against `lib/config.ts`. The client cannot tamper with amounts. Payment signatures are cryptographically checked using HMAC-SHA256.

---

## 6. Booking & Management Coordination

Anuj's practice operates under the **Management Protocol**:
- **Concierge Desk**: Managed by **Circle13 Management** (N Bharath & Akhil Vipin Nair).
- Bookings, intake evaluations, and calendar lock are processed through `/book` and logged via `/api/enquiry`.
- Notification routing can be connected to your email provider (e.g. Resend / SendGrid) or CRM via `app/api/enquiry/route.ts`.

---

## 7. Deploying to Vercel

The platform is 100% compatible with Vercel deployment:
1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), import `heynbharath/Anuj-Dwivedi--Membership`.
3. Add environment variables if live Razorpay payments are ready.
4. Click **Deploy**.

---

## 8. Launch Verification & Owner Approval Checklist

Before declaring the platform officially live to the public, review the following with Anuj:
- [ ] Confirm the primary professional descriptor in `lib/config.ts`.
- [ ] Approve reference fees: Personal Consultancy (₹40,000), 1:1 Mentorship (₹40,000), 30-Day Premium Mentorship (₹75,000).
- [ ] Confirm membership tier pricing when ready to launch recurring subscriptions.
- [ ] Provide the exact GitHub repository for the 2,000 feedback metric.
- [ ] Confirm the proposed Octopus Tank date (31 October 2026) with university administration.
- [ ] Supply live Razorpay API keys to activate instant card/UPI checkout.
