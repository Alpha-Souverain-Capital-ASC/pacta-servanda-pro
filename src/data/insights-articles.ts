// P&A Advocates LLP — News & Insights
// Hardcoded article data. No CMS, no database. To add or update an article,
// edit this array. The Insights list page and article pages read from it directly.
//
// Rendering: bodies are Markdown. In Lovable, render with `react-markdown`
// (npm i react-markdown). Map over `insights` for the list page; match by
// `slug` for the article page.
//
// IMPORTANT — before publishing: these drafts are legally accurate to general
// Kenyan law but MUST be reviewed by Perry or Jeremy for current statutory
// figures (e.g. stamp duty rates, severance formulas) and firm sign-off.

export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;            // ISO date
  readingTime: string;
  excerpt: string;         // used on list cards
  metaDescription: string; // used in <meta name="description"> for SEO
  coverImage: string;      // replace placeholder with real asset
  body: string;            // Markdown
}

export const insights: InsightArticle[] = [
  {
    slug: "buying-land-property-mombasa-conveyancing-steps",
    title: "Buying Land or Property in Mombasa: The Conveyancing Steps That Protect You",
    category: "Real Estate & Conveyancing",
    author: "Jeremy O. Ateng",
    date: "2026-06-25",
    readingTime: "7 min read",
    excerpt:
      "Fraudulent titles and double sales cost buyers millions every year. Here is the conveyancing process that stands between you and a costly mistake.",
    metaDescription:
      "A step-by-step guide to buying land or property in Mombasa safely — official searches, due diligence, sale agreements, stamp duty and title transfer under Kenyan law.",
    coverImage: "https://paadvocatesllp.com/images/insights/buying-land-mombasa.jpg",
    body: `Land is one of the most valuable — and most contested — assets in Kenya. Fraudulent titles, double sales, and disputed ownership are common enough that no purchase should proceed on trust alone. Conveyancing is the legal process of transferring property from seller to buyer, and done properly, it is what protects your money.

## Start with an official search

Before a single shilling changes hands, conduct an official search at the relevant land registry. Under the Land Registration Act, 2012, the search confirms who the registered proprietor actually is and reveals any encumbrances — charges, cautions, restrictions, or court orders — sitting on the title. If the person selling to you is not the registered owner, stop there.

## Confirm the title is genuine

A search result is only the beginning. Registry records and the title document should match the seller's identity, and the ownership history should be traceable. Coastal land carries added complexity — historical trust land, adjudication issues, and overlapping claims are more frequent here than upcountry. This is exactly where local legal experience matters.

## Due diligence beyond the title

A clean title does not mean a clean deal. Before committing, you should confirm land rates are cleared with the Mombasa County Government, obtain rent clearance for leasehold property, and physically visit the land to check beacons, boundaries, and whether anyone is occupying it. For agricultural land, consent from the relevant Land Control Board is required before the transfer is valid.

## The sale agreement

Once due diligence checks out, advocates draft a sale agreement setting out the price, deposit (commonly 10%), the completion period, and the completion documents the seller must hand over. A well-drafted agreement protects you if the seller defaults — a verbal deal or a template downloaded online does not.

## Stamp duty and transfer

The buyer pays stamp duty on the transfer, assessed on the property's value by a government valuer. Rates differ between urban and rural land, so confirm the current applicable rate before budgeting. Your advocate then lodges the transfer documents, and once registered, the title is issued in your name.

## The bottom line

Every stage above is a point where a buyer acting alone can lose everything. Engaging an advocate before you pay a deposit — not after a problem appears — is the single most effective protection available to you.

---

*This article provides general information on Kenyan law and does not constitute legal advice. For advice on a specific transaction, speak to a qualified advocate.*`,
  },
  {
    slug: "terminating-employee-kenya-employment-act",
    title: "Terminating an Employee in Kenya: How to Do It Without Ending Up in Court",
    category: "Employment & Labour Law",
    author: "Perry T. Ayiera",
    date: "2026-06-11",
    readingTime: "6 min read",
    excerpt:
      "Get a dismissal wrong and the Employment and Labour Relations Court can order up to 12 months' pay in compensation. Here is how to get it right.",
    metaDescription:
      "How to lawfully terminate an employee in Kenya under the Employment Act 2007 — fair reason, fair procedure, notice, redundancy rules and unfair-dismissal risk.",
    coverImage: "https://paadvocatesllp.com/images/insights/terminating-employee-kenya.jpg",
    body: `Dismissing an employee is one of the most legally exposed decisions an employer makes. Get it wrong, and the Employment and Labour Relations Court can order compensation of up to twelve months' gross salary — or reinstatement. The good news is that the law is clear about what "getting it right" requires.

## You need a fair reason AND a fair procedure

Under the Employment Act, 2007, a termination is only fair if it satisfies two separate tests: there must be a valid reason, and there must be a fair process. Employers frequently have a genuine reason — misconduct, poor performance, or a redundancy — but lose in court because they skipped the procedure.

## Follow the procedural steps

Before terminating for misconduct or poor performance, the employer must notify the employee of the specific allegations, hold a hearing where the employee can respond, and allow them to be accompanied by a fellow employee or a union representative. Only after genuinely considering the employee's explanation should a decision be made. Skipping the hearing is the most common — and most expensive — mistake.

## Give proper notice

Notice periods are governed by the employment contract, subject to the statutory minimum. Where an employer chooses to pay in lieu of notice, that too must be handled correctly. Summary dismissal without notice is only lawful in cases of gross misconduct, and the bar for that is high.

## Redundancy is a different process

Terminating for operational reasons — redundancy — has its own rules. The employer must issue notice to both the affected employee and the labour office, apply fair and objective selection criteria, and pay severance in addition to other terminal dues. Treating a redundancy like an ordinary dismissal invites a claim.

## Settle the final dues

On exit, the employee is entitled to accrued salary, payment for untaken leave, any applicable severance, and — importantly — a certificate of service. The certificate is a legal right, not a courtesy, and withholding it is itself a breach.

## Getting it wrong

An employee who believes they were unfairly terminated can bring a claim in the Employment and Labour Relations Court. Remedies include compensation of up to twelve months' gross pay and, in some cases, reinstatement. A short conversation with an advocate before you act costs far less than defending a claim after.

---

*This article provides general information on Kenyan law and does not constitute legal advice. For advice on a specific situation, speak to a qualified advocate.*`,
  },
  {
    slug: "dying-without-a-will-kenya-intestate-succession",
    title: "What Happens to Your Property When You Die Without a Will in Kenya",
    category: "Family Law & Succession",
    author: "Perry T. Ayiera",
    date: "2026-05-28",
    readingTime: "7 min read",
    excerpt:
      "Die without a will and the law — not you — decides who inherits. Here is how intestate succession works in Kenya, and why the Coast has its own rules.",
    metaDescription:
      "How intestate succession works in Kenya when someone dies without a will — who inherits, letters of administration, and how Islamic succession applies on the Coast.",
    coverImage: "https://paadvocatesllp.com/images/insights/dying-without-a-will-kenya.jpg",
    body: `When someone dies without a valid will, they die "intestate" — and the law, not their wishes, decides how their property is shared. For many families the result is delay, disputes, and outcomes the deceased never intended. Understanding the rules is the first step to avoiding that.

## Intestate versus testate

If you leave a valid will, your estate is distributed according to it. If you do not, the Law of Succession Act determines who inherits and in what shares. You lose all say over the outcome — including the ability to provide for people the law would otherwise exclude.

## Who inherits under intestacy

The Act sets a clear order. A surviving spouse and children take priority, with the spouse typically holding a life interest in the bulk of the estate. Where there is no spouse or children, the estate passes to parents, then siblings, and onward through the family. Distribution is fixed by law — it does not follow verbal promises or family expectations.

## The grant of letters of administration

Before anyone can legally deal with the estate — sell property, access bank accounts, or transfer a title — the family must obtain a grant of letters of administration from the court. The process involves petitioning the court, publication in the Kenya Gazette, and confirmation of the grant after a statutory waiting period. Until the grant is confirmed, no one has authority to distribute the estate, however clear the family's intentions may be.

## Succession on the Coast: Islamic law

In Mombasa and across the Coast, this is where generic guidance falls short. The estates of Muslims are governed by Islamic law and administered through the Kadhi's Courts, which apply fixed shares (faraid) to heirs. If this applies to your family, the process and the distribution differ significantly from the Law of Succession Act — and getting the right forum from the outset saves considerable time.

## Why a will — and an advocate — protects your family

A properly drafted will lets you decide who inherits, appoint the people you trust to administer your estate, and reduce the risk of the disputes that so often follow an intestate death. Estate planning is not only for the wealthy; it is for anyone who wants to spare their family a difficult process at a difficult time.

---

*This article provides general information on Kenyan law and does not constitute legal advice. For advice on a specific estate, speak to a qualified advocate.*`,
  },
  {
    slug: "registering-a-company-in-kenya-founders-guide",
    title: "Registering a Company in Kenya: What Every Founder Should Know Before They Start",
    category: "Corporate & Commercial Law",
    author: "Jeremy O. Ateng",
    date: "2026-05-14",
    readingTime: "6 min read",
    excerpt:
      "Registration is the easy part. The choices you make while doing it — structure, shareholding, articles — are what protect or expose you later.",
    metaDescription:
      "A founder's guide to registering a company in Kenya under the Companies Act 2015 — choosing a structure, the registration steps, and the compliance that follows.",
    coverImage: "https://paadvocatesllp.com/images/insights/registering-company-kenya.jpg",
    body: `Registering a company in Kenya has never been faster — the process is largely online. But speed hides risk: the decisions founders make while registering, often without advice, are the ones that cause expensive problems years later. Here is what to get right from the start.

## Choose the right structure

Your options include operating as a sole proprietor, a partnership, a limited liability partnership, or a private limited company. Most businesses that intend to grow, raise capital, or limit the owners' personal liability should incorporate a private limited company. The structure you choose affects your liability, your tax position, and how easily you can bring in investors — so it is worth deciding deliberately, not by default.

## The registration steps

Under the Companies Act, 2015, registration is done through the Business Registration Service on the eCitizen platform. You reserve a company name, then submit the directors' and shareholders' details, a registered office address, the nominal share capital, and the company's articles of association. Once approved, a certificate of incorporation is issued and your company legally exists.

## Do not stop at the certificate

Incorporation is the beginning of compliance, not the end. Your company needs its own KRA PIN, and depending on your activity, registration for VAT and PAYE. You will also need to register with NSSF and SHIF, obtain a business permit from the Mombasa County Government, and secure any licences specific to your sector. Missing these exposes the company to penalties.

## The mistakes founders make

The most common and costly errors are structural. Founders adopt generic articles that do not fit how they actually run the business, allocate shares without thinking through control, or — most damaging of all — start a company with partners and no shareholders' agreement. A shareholders' agreement governs what happens when founders disagree, someone wants to exit, or new investment comes in. Putting one in place early is far cheaper than litigating its absence later.

## Get it structured right

Registering a company is straightforward; structuring it to protect the founders and support growth is not. A short advisory session before you file can save you from decisions that are difficult and expensive to unwind.

---

*This article provides general information on Kenyan law and does not constitute legal advice. For advice on your specific business, speak to a qualified advocate.*`,
  },
  {
    slug: "signing-commercial-lease-kenya-clauses",
    title: "Signing a Commercial Lease in Kenya: The Clauses That Can Cost You",
    category: "Corporate & Commercial Law",
    author: "Jeremy O. Ateng",
    date: "2026-04-30",
    readingTime: "6 min read",
    excerpt:
      "Most business tenants sign leases they have not fully read — and discover the expensive clauses only when it is too late. Know what to look for.",
    metaDescription:
      "What to check before signing a commercial lease in Kenya — controlled tenancies under Cap 301, rent escalation, repair obligations, subletting and registration.",
    coverImage: "https://paadvocatesllp.com/images/insights/commercial-lease-kenya.jpg",
    body: `A commercial lease is often a business's largest fixed commitment, yet many tenants sign one without reading it closely. The clauses that cause the most damage are rarely obvious on a first pass. Here is what to check before you commit.

## Is your tenancy "controlled"?

Kenyan law offers protection many tenants do not know they have. Under the Landlord and Tenant (Shops, Hotels and Catering Establishments) Act (Cap 301), certain tenancies — broadly, those for shops, hotels, and catering establishments that do not exceed five years or that can be terminated within five years — are "controlled tenancies." These carry statutory protection against arbitrary eviction and unjustified rent increases. Knowing whether your lease falls inside or outside this protection changes your whole negotiating position.

## Rent, escalation and service charge

Look beyond the headline rent. Escalation clauses dictate how much and how often rent rises, and an aggressive one can outpace your revenue. Service charge is another common trap — insist on transparency about what it covers and how it is calculated, or you may be funding costs you never agreed to.

## Repair and reinstatement obligations

Leases allocate responsibility for repairs and maintenance, and the wording matters. Equally important is the reinstatement clause: many tenants are surprised to learn they must return the premises to their original state at the end of the term, an obligation that can be costly if you have fitted the space out.

## Use, assignment and subletting

The permitted-use clause defines what you can actually do in the premises. And if your business grows or contracts, you will want to know whether you can assign the lease or sublet — many leases restrict this, leaving you locked in.

## Term, renewal and break clauses

Understand the length of your commitment, whether you have a right to renew, and whether there is a break clause allowing early exit. These provisions determine how much flexibility you retain if circumstances change.

## Deposit, stamp duty and registration

Confirm the deposit terms and how it is refunded. Be aware that leases attract stamp duty, and those above a certain term must be registered to be fully enforceable — an easily overlooked step with real consequences.

## Read it before you sign

A commercial lease is a long-term legal commitment written by the landlord's advocate to protect the landlord. Having your own advocate review it before signing is a modest cost against a multi-year liability.

---

*This article provides general information on Kenyan law and does not constitute legal advice. For advice on a specific lease, speak to a qualified advocate.*`,
  },
];

export default insights;
