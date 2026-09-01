/* ============================================
   BLOG — Dynamic Detail Rendering
   ============================================ */
const BLOG_POSTS = {
  "complete-guide-motor-insurance": {
    title: "Complete Guide to Motor Insurance in India: Everything You Need to Know in 2024",
    category: "Insurance Tips",
    label: "Insurance Tips",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
    alt: "Motor insurance agreement signing",
    author: "Vikram Khanna",
    initials: "VK",
    role: "Founder, MotorSure",
    date: "August 15, 2024",
    readTime: "12 min read",
    excerpt: "From choosing between comprehensive and third-party coverage to understanding add-ons — this definitive guide covers it all.",
    content: `
      <h2 id="what-is-motor-insurance">What Is Motor Insurance?</h2>
      <p>Motor insurance is a financial protection policy that covers your vehicle against damages, theft, and third-party liabilities arising from road accidents. In India, having at least a third-party motor insurance is mandatory under the Motor Vehicles Act, 1988.</p>
      <p>Whether you own a two-wheeler, car, SUV, or commercial vehicle, motor insurance ensures you're financially protected against unforeseen events on the road.</p>

      <h2 id="types-of-coverage">Types of Motor Insurance Coverage</h2>
      <h3>1. Third-Party Liability Insurance</h3>
      <p>This is the minimum legal requirement. It covers damages you cause to a third party — including bodily injury, death, or property damage. However, it does not cover damages to your own vehicle.</p>
      <h3>2. Comprehensive Insurance</h3>
      <p>This provides complete protection — covering both third-party liability and own damage. It includes coverage for theft, fire, natural calamities, riots, and accidents. We strongly recommend comprehensive coverage for all vehicle owners.</p>
      <h3>3. Standalone Own Damage (OD) Insurance</h3>
      <p>Since 2019, IRDAI allows you to buy own damage cover separately from third-party cover. This gives you flexibility to choose different providers for each component.</p>

      <h2 id="key-add-ons">Essential Add-Ons</h2>
      <ul>
        <li><strong>Zero Depreciation:</strong> Get full claim amount without depreciation deductions on parts. Highly recommended for new vehicles.</li>
        <li><strong>Roadside Assistance:</strong> 24/7 help for breakdowns, flat tires, battery jump-starts, and towing.</li>
        <li><strong>Engine Protection:</strong> Covers engine damage from waterlogging — crucial during monsoon season.</li>
        <li><strong>Return to Invoice:</strong> Get the full invoice value of your vehicle in case of total loss or theft.</li>
        <li><strong>Personal Accident Cover:</strong> Mandatory ₹15 lakh cover for owner-driver against accidental death or disability.</li>
      </ul>
      <blockquote>"Choosing the right add-ons can make the difference between a smooth claim experience and a financial nightmare. Always prioritize zero depreciation and engine protection."</blockquote>

      <h2 id="claims-process">How to File a Claim</h2>
      <p>Filing a motor insurance claim is straightforward when you know the process:</p>
      <ul>
        <li><strong>Step 1:</strong> Inform your insurer immediately after the incident (most have 24/7 helplines).</li>
        <li><strong>Step 2:</strong> File an FIR if required (theft, major accident, third-party injury).</li>
        <li><strong>Step 3:</strong> Document the damage with photographs and gather witness information.</li>
        <li><strong>Step 4:</strong> Submit required documents — claim form, RC copy, driving license, FIR copy.</li>
        <li><strong>Step 5:</strong> Get your vehicle surveyed by the insurer's authorized surveyor.</li>
        <li><strong>Step 6:</strong> Claim approval and settlement — typically 7–15 working days for cashless claims.</li>
      </ul>

      <h2 id="tips">Expert Tips for Vehicle Owners</h2>
      <p>Based on our 12 years of experience, here are our top recommendations:</p>
      <ul>
        <li>Always renew your policy before it expires to maintain your No-Claim Bonus.</li>
        <li>Compare quotes from at least 3–4 insurers before choosing a plan.</li>
        <li>Opt for a higher voluntary deductible to reduce your premium (if you're a safe driver).</li>
        <li>Keep your PUC certificate valid — it's required during claims processing.</li>
        <li>Maintain a complete document folder with RC, insurance, PUC, and driving license copies.</li>
      </ul>
      <div style="background:var(--gradient-gold-subtle);border-left:3px solid var(--color-accent);padding:var(--space-6) var(--space-8);border-radius:0 var(--radius-md) var(--radius-md) 0;margin:var(--space-8) 0;">
        <p style="margin:0;font-weight:var(--fw-semibold);color:var(--color-heading);">Need help with your motor insurance? Our experts are here to guide you through every step. <a href="contact.html">Contact MotorSure today</a>.</p>
      </div>
    `,
    toc: [
      { id: "what-is-motor-insurance", label: "What Is Motor Insurance?" },
      { id: "types-of-coverage", label: "Types of Coverage" },
      { id: "key-add-ons", label: "Essential Add-Ons" },
      { id: "claims-process", label: "How to File a Claim" },
      { id: "tips", label: "Expert Tips" }
    ]
  },
  "renewal-mistakes": {
    title: "5 Mistakes to Avoid When Renewing Your Car Insurance",
    category: "Insurance Tips",
    label: "Insurance Tips",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
    alt: "Car insurance tips",
    author: "Vikram Khanna",
    initials: "VK",
    role: "Founder, MotorSure",
    date: "August 10, 2024",
    readTime: "6 min read",
    excerpt: "Don't let these common errors cost you money or leave you underinsured during renewal season.",
    content: `
      <h2 id="mistake-1">1. Not Comparing Premiums</h2>
      <p>Many owners simply renew with the same insurer without comparing. Premiums vary by up to 30% across providers for the same IDV and coverage. Always compare 3–4 quotes.</p>
      <h2 id="mistake-2">2. Ignoring No-Claim Bonus</h2>
      <p>NCB can give up to 50% discount after 5 claim-free years. Renewing late by even a day can lapse your NCB. Set reminders 30 days before expiry.</p>
      <h2 id="mistake-3">3. Choosing Wrong IDV</h2>
      <p>Lowering IDV to save premium reduces claim payout. Choose IDV close to market value. We help calculate optimal IDV.</p>
      <h2 id="mistake-4">4. Skipping Add-Ons</h2>
      <p>Zero depreciation, engine protect and RSA are often skipped to save ₹1,000–2,000, but they save lakhs during claims. Evaluate add-ons based on vehicle age and usage.</p>
      <h2 id="mistake-5">5. Not Updating Details</h2>
      <p>Address, nominee, or vehicle modifications not updated can cause claim rejection. Review and update all details at renewal.</p>
      <blockquote>"Renewal is not just payment — it's a chance to optimize your coverage. Review your policy like you review your vehicle service."</blockquote>
      <div style="background:var(--gradient-gold-subtle);border-left:3px solid var(--color-accent);padding:var(--space-6) var(--space-8);border-radius:0 var(--radius-md) var(--radius-md) 0;margin:var(--space-8) 0;">
        <p style="margin:0;font-weight:var(--fw-semibold);">Want a free renewal audit? <a href="contact.html">Talk to our advisors</a> — we'll find you the best deal in 30 minutes.</p>
      </div>
    `,
    toc: [
      { id: "mistake-1", label: "Not Comparing Premiums" },
      { id: "mistake-2", label: "Ignoring NCB" },
      { id: "mistake-3", label: "Choosing Wrong IDV" },
      { id: "mistake-4", label: "Skipping Add-Ons" },
      { id: "mistake-5", label: "Not Updating Details" }
    ]
  },
  "two-wheeler-comprehensive-vs-third-party": {
    title: "Two-Wheeler Insurance: Comprehensive vs Third-Party Explained",
    category: "Two-Wheeler",
    label: "Two-Wheeler",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1600&q=80",
    alt: "Two-wheeler insurance guide",
    author: "Arjun Singh",
    initials: "AS",
    role: "Claims Manager",
    date: "August 5, 2024",
    readTime: "7 min read",
    excerpt: "Understanding the key differences and which type of coverage is right for your riding needs.",
    content: `
      <h2 id="third-party">Third-Party Cover — The Legal Minimum</h2>
      <p>Mandatory by law. Covers injury/death or property damage you cause to others. Premium starts at ₹1,150/year. Does not cover your bike's damage, theft or self-accident.</p>
      <h2 id="comprehensive">Comprehensive — Complete Protection</h2>
      <p>Covers third-party + own damage, theft, fire, floods, riots and accidents. Starts at ₹2,400/year. Add-ons like zero dep and RSA make it ideal for new bikes.</p>
      <h2 id="comparison">Head-to-Head Comparison</h2>
      <ul>
        <li><strong>Premium:</strong> Third-party cheaper, but comprehensive gives 10x value.</li>
        <li><strong>Coverage:</strong> Comprehensive includes theft, own damage; third-party doesn't.</li>
        <li><strong>Add-ons:</strong> Only with comprehensive (zero dep, engine protect, RSA).</li>
        <li><strong>Ideal for:</strong> New bikes (<5 years) → comprehensive; old bikes with low IDV → third-party may suffice.</li>
      </ul>
      <h2 id="which-to-choose">Which Should You Choose?</h2>
      <p>If your bike is under 5 years old or you ride daily in city traffic, comprehensive with zero dep and RSA is the smartest choice. For bikes over 10 years with low market value, third-party keeps you legal at low cost.</p>
      <blockquote>"For 90% of riders, comprehensive with zero depreciation pays for itself in the first claim."</blockquote>
    `,
    toc: [
      { id: "third-party", label: "Third-Party Cover" },
      { id: "comprehensive", label: "Comprehensive Cover" },
      { id: "comparison", label: "Comparison" },
      { id: "which-to-choose", label: "Which to Choose?" }
    ]
  },
  "rc-transfer-maharashtra": {
    title: "RC Transfer Process in Maharashtra: A Step-by-Step Guide",
    category: "Documentation",
    label: "Documentation",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1600&q=80",
    alt: "RC transfer documents on desk",
    author: "Neha Rajput",
    initials: "NR",
    role: "Head of Operations",
    date: "July 30, 2024",
    readTime: "8 min read",
    excerpt: "Everything you need to know about transferring vehicle registration in Maharashtra.",
    content: `
      <h2 id="what-is-rc-transfer">What Is RC Transfer?</h2>
      <p>When you buy or sell a vehicle, the Registration Certificate (RC) must be transferred to the new owner's name at the RTO. In Maharashtra, this is handled via Form 29 and Form 30.</p>
      <h2 id="documents-required">Documents Required</h2>
      <ul>
        <li>Original RC, insurance in buyer's name, PUC, Form 29/30 signed by seller, buyer address & ID proof, road tax receipt, and NOC from financier if hypothecated.</li>
        <li>For inter-state: NOC from original RTO is mandatory.</li>
      </ul>
      <h2 id="step-by-step">Step-by-Step Process</h2>
      <p><strong>Step 1:</strong> Prepare Form 29/30 and get seller signatures.<br><strong>Step 2:</strong> Get insurance transferred to buyer.<br><strong>Step 3:</strong> Submit at RTO with fees (₹500 within state, ₹1,000 inter-state).<br><strong>Step 4:</strong> Vehicle inspection (if required).<br><strong>Step 5:</strong> RTO verification and new RC dispatch (15–30 days within state, 30–60 days inter-state).</p>
      <h2 id="fees-timeline">Fees & Timeline</h2>
      <p>Within Maharashtra: ₹500 govt fee + ₹1,500 service fee, 15–30 days. Inter-state: ₹1,000 + ₹3,000, 30–60 days. We handle filing, inspection coordination and follow-ups.</p>
      <h2 id="tips">Pro Tips</h2>
      <ul>
        <li>Transfer insurance first — RTO will reject without it.</li>
        <li>Don't delay beyond 14 days of sale — penalty applies.</li>
        <li>Use our doorstep collection — we verify documents before RTO submission to avoid rejection.</li>
      </ul>
    `,
    toc: [
      { id: "what-is-rc-transfer", label: "What Is RC Transfer?" },
      { id: "documents-required", label: "Documents Required" },
      { id: "step-by-step", label: "Step-by-Step Process" },
      { id: "fees-timeline", label: "Fees & Timeline" },
      { id: "tips", label: "Pro Tips" }
    ]
  },
  "puc-certificate-guide": {
    title: "PUC Certificate: Why It Matters & How to Stay Compliant",
    category: "Compliance",
    label: "Compliance",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80",
    alt: "PUC compliance",
    author: "Divya Patel",
    initials: "DP",
    role: "Customer Relations",
    date: "July 22, 2024",
    readTime: "5 min read",
    excerpt: "Avoid hefty fines — learn about PUC requirements, validity, and where to get tested.",
    content: `
      <h2 id="what-is-puc">What Is PUC?</h2>
      <p>Pollution Under Control certificate proves your vehicle's emissions are within legal limits. It's mandatory for all vehicles and checked during insurance claims and traffic stops.</p>
      <h2 id="validity">Validity</h2>
      <p>New vehicles: 1 year. After that, every 6 months (BS4) or 12 months (BS6). Keep digital and printed copy in vehicle.</p>
      <h2 id="penalties">Penalties</h2>
      <p>First offence: ₹10,000 fine under Motor Vehicles Act. Repeat offence: up to ₹10,000 + 6 months imprisonment. Plus, insurers can reject claims without valid PUC.</p>
      <h2 id="how-to-get">How to Get PUC</h2>
      <ul>
        <li>Visit any authorized emission testing center (petrol pump, RTO). No appointment needed.</li>
        <li>Carry RC copy. Test takes 5 minutes, costs ₹100–₹120.</li>
        <li>We send validity reminders and locate nearest center for you.</li>
      </ul>
      <h2 id="stay-compliant">How to Stay Compliant</h2>
      <p>Set calendar reminders, link PUC to insurance renewal date, and use our free PUC tracking — we alert you 7 days before expiry.</p>
    `,
    toc: [
      { id: "what-is-puc", label: "What Is PUC?" },
      { id: "validity", label: "Validity" },
      { id: "penalties", label: "Penalties" },
      { id: "how-to-get", label: "How to Get PUC" },
      { id: "stay-compliant", label: "Stay Compliant" }
    ]
  },
  "fitness-certificate-2024": {
    title: "Vehicle Fitness Certificate: New 2024 Rules & Requirements",
    category: "Regulations",
    label: "Regulations",
    image: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80",
    alt: "Fitness certificate guide",
    author: "Neha Rajput",
    initials: "NR",
    role: "Head of Operations",
    date: "July 10, 2024",
    readTime: "6 min read",
    excerpt: "Updated regulations now require fitness certificates for personal vehicles over 15 years old.",
    content: `
      <h2 id="what-is-fitness">What Is Fitness Certificate?</h2>
      <p>FC certifies your vehicle is roadworthy — brakes, lights, emissions and structure are inspected. Mandatory for commercial vehicles annually, and now for private vehicles older than 15 years (renewed every 5 years).</p>
      <h2 id="2024-rules">New 2024 Rules</h2>
      <ul>
        <li>Private vehicles >15 years must pass fitness test; failure → deregistration.</li>
        <li>Automatic fitness via automated testing stations (ATS) in many states.</li>
        <li>Green tax applicable on renewal for older vehicles.</li>
      </ul>
      <h2 id="documents-process">Documents & Process</h2>
      <p>RC, insurance, PUC, previous FC, tax receipt. We book ATS slot, handle form, coordinate inspection and deliver new FC in 7–15 days.</p>
      <h2 id="fees">Fees</h2>
      <p>Govt fee ₹1,000 + service ₹2,000. ATS test fee extra (~₹600). We handle everything doorstep.</p>
      <blockquote>"Don't wait till 15 years — get a pre-check at 14.5 years to fix issues early."</blockquote>
    `,
    toc: [
      { id: "what-is-fitness", label: "What Is Fitness?" },
      { id: "2024-rules", label: "New 2024 Rules" },
      { id: "documents-process", label: "Documents & Process" },
      { id: "fees", label: "Fees" }
    ]
  },
  "no-claim-bonus": {
    title: "How No-Claim Bonus Works & How to Maximize It",
    category: "Insurance",
    label: "Insurance",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    alt: "Steering wheel and dashboard",
    author: "Vikram Khanna",
    initials: "VK",
    role: "Founder, MotorSure",
    date: "July 28, 2024",
    readTime: "6 min read",
    excerpt: "No-Claim Bonus can save you up to 50% on premiums — learn how it works and how to protect it.",
    content: `
      <h2 id="what-is-ncb">What Is NCB?</h2>
      <p>NCB is a discount on own-damage premium for claim-free years: 20% after 1 year, 25% after 2, 35% after 3, 45% after 4, 50% after 5 years.</p>
      <h2 id="how-to-earn">How to Earn & Keep NCB</h2>
      <ul>
        <li>Don't claim for small damages (₹3,000–5,000) — preserve 35–50% discount worth ₹5,000–10,000.</li>
        <li>Renew within 90 days of expiry — beyond that NCB lapses.</li>
        <li>NCB is transferable — you can carry it to a new vehicle/insurer with NCB certificate.</li>
      </ul>
      <h2 id="ncb-protect">NCB Protect Add-On</h2>
      <p>Allows one claim per year without losing NCB. Costs ~5% extra premium. Ideal if you have 35%+ NCB.</p>
      <h2 id="maximize">How to Maximize</h2>
      <p>Combine NCB Protect + voluntary deductible + compare insurers — we help maximize savings while keeping coverage intact.</p>
    `,
    toc: [
      { id: "what-is-ncb", label: "What Is NCB?" },
      { id: "how-to-earn", label: "How to Earn & Keep" },
      { id: "ncb-protect", label: "NCB Protect Add-On" },
      { id: "maximize", label: "How to Maximize" }
    ]
  },
  "used-bike-insurance": {
    title: "Buying a Used Bike? Don't Skip These Insurance Steps",
    category: "Buying Guide",
    label: "Buying Guide",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=80",
    alt: "Motorcycle rider",
    author: "Arjun Singh",
    initials: "AS",
    role: "Claims Manager",
    date: "July 15, 2024",
    readTime: "5 min read",
    excerpt: "Checklist for used bike buyers — transfer, inspection and coverage must-dos.",
    content: `
      <h2 id="why-insurance-matters">Why Insurance Matters for Used Bikes</h2>
      <p>Insurance is tied to the vehicle, not just owner. Riding with seller's policy is illegal after 14 days and claim will be rejected.</p>
      <h2 id="checklist">Checklist Before Payment</h2>
      <ul>
        <li>Check policy status — active? Third-party or comprehensive? Expiry date?</li>
        <li>Ask for NCB certificate — seller can retain NCB, you start at 0% with new policy.</li>
        <li>Inspect bike — insurers may require inspection for lapsed or used policies.</li>
      </ul>
      <h2 id="transfer-process">Transfer Process</h2>
      <p>Step 1: Get RC transfer initiated. Step 2: Buy new policy in your name (we issue in 30 mins). Step 3: Submit Form 29/30 + new insurance to RTO for RC transfer. We bundle RC transfer + insurance.</p>
      <h2 id="pro-tips">Pro Tips</h2>
      <p>Don't buy third-party only to save ₹1,000 — comprehensive with zero dep protects your used bike's engine and parts. Get add-ons based on bike age.</p>
    `,
    toc: [
      { id: "why-insurance-matters", label: "Why It Matters" },
      { id: "checklist", label: "Checklist" },
      { id: "transfer-process", label: "Transfer Process" },
      { id: "pro-tips", label: "Pro Tips" }
    ]
  }
};

function getPostSlug() {
  const params = new URLSearchParams(window.location.search);
  let slug = params.get('post');
  if (!slug) {
    // fallback to sessionStorage (if user clicked card)
    try { slug = sessionStorage.getItem('blogPostSlug'); } catch(e) {}
  }
  if (!slug || !BLOG_POSTS[slug]) slug = 'complete-guide-motor-insurance';
  return slug;
}

function renderPost(slug) {
  const post = BLOG_POSTS[slug];
  if (!post) return;

  // Update document title and meta
  document.title = post.title + ' — MotorSure Blog';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', post.excerpt);

  // Hero image
  const heroImg = document.getElementById('article-hero-img');
  if (heroImg) { heroImg.src = post.image; heroImg.alt = post.alt; }

  // Badge
  const badge = document.getElementById('article-badge');
  if (badge) badge.textContent = post.category;

  // Title
  const titleEl = document.getElementById('article-title');
  if (titleEl) titleEl.textContent = post.title;

  // Meta
  const initialsEl = document.getElementById('article-author-initials');
  if (initialsEl) initialsEl.textContent = post.initials;
  const nameEl = document.getElementById('article-author-name');
  if (nameEl) nameEl.textContent = post.author;
  const roleEl = document.getElementById('article-author-role');
  if (roleEl) roleEl.textContent = post.role;
  const dateEl = document.getElementById('article-date');
  if (dateEl) dateEl.textContent = post.date;
  const readEl = document.getElementById('article-readtime');
  if (readEl) readEl.textContent = post.readTime;

  // Body
  const bodyEl = document.getElementById('article-body');
  if (bodyEl) bodyEl.innerHTML = post.content;

  // TOC
  const tocList = document.getElementById('toc-list');
  if (tocList && post.toc) {
    tocList.innerHTML = post.toc.map((item, idx) =>
      `<li><a href="#${item.id}" class="toc__link${idx===0?' active':''}">${item.label}</a></li>`
    ).join('');
  }

  // Author bio
  const bioInitials = document.getElementById('author-bio-initials');
  if (bioInitials) bioInitials.textContent = post.initials;
  const bioName = document.getElementById('author-bio-name');
  if (bioName) bioName.textContent = 'Written by ' + post.author;
  const bioRole = document.getElementById('author-bio-role');
  if (bioRole) bioRole.textContent = post.role + ' — ' + post.excerpt;

  // Scroll to top
  window.scrollTo(0,0);

  // Re-attach TOC scroll handler
  initTocScroll();
}

function initTocScroll() {
  const tocLinks = document.querySelectorAll('.toc__link');
  const headings = document.querySelectorAll('.article-body h2');
  if (!tocLinks.length || !headings.length) return;
  // remove old listeners by cloning? simple new listener (will stack but okay)
  window.addEventListener('scroll', () => {
    let current = '';
    headings.forEach(h => { if (window.scrollY >= h.offsetTop - 200) current = h.id; });
    tocLinks.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#' + current); });
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  const slug = getPostSlug();
  renderPost(slug);
  // Save for direct navigation fallback
  try { sessionStorage.setItem('blogPostSlug', slug); } catch(e) {}
});

// Also handle clicks on blog cards to store slug (for browsers with JS)
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href*="blog-details.html"]');
  if (a) {
    try {
      const url = new URL(a.href, window.location.origin);
      const slug = url.searchParams.get('post');
      if (slug) sessionStorage.setItem('blogPostSlug', slug);
    } catch(err) {}
  }
});
