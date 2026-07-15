import corporateImg from "@/assets/practice/corporate-commercial.jpg.asset.json";
import realEstateImg from "@/assets/practice/real-estate-conveyancing.jpg.asset.json";
import litigationImg from "@/assets/practice/litigation-disputes.jpg.asset.json";
import employmentImg from "@/assets/practice/employment-labour.jpg.asset.json";
import familyImg from "@/assets/practice/family-succession.jpg.asset.json";
import bankingImg from "@/assets/practice/banking-finance.jpg.asset.json";
import publicImg from "@/assets/practice/public-constitutional.jpg.asset.json";
import ipImg from "@/assets/practice/intellectual-property.jpg.asset.json";
import taxImg from "@/assets/practice/tax-regulatory.jpg.asset.json";

export const PRACTICE_AREAS = [
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial Law",
    short: "Strategic counsel for businesses across formation, governance, and transactions.",
    long: "Advising on company formation, M&A, joint ventures, shareholder agreements, and ongoing corporate governance for businesses operating in Kenya and East Africa.",
    image: corporateImg.url,
  },
  {
    slug: "real-estate-conveyancing",
    title: "Real Estate & Conveyancing",
    short: "End-to-end property transactions, title diligence, and conveyancing.",
    long: "Property acquisitions and disposals, title verification, lease structuring, and developer advisory across residential and commercial real estate.",
    image: realEstateImg.url,
  },
  {
    slug: "litigation-disputes",
    title: "Litigation & Dispute Resolution",
    short: "Robust representation in court, arbitration, and mediation.",
    long: "Commercial litigation, civil disputes, arbitration and alternative dispute resolution before all levels of the Kenyan judiciary.",
    image: litigationImg.url,
  },
  {
    slug: "employment-labour",
    title: "Employment & Labour Law",
    short: "Workplace counsel for employers and employees alike.",
    long: "Contracts, policies, disciplinary processes, redundancy advisory, and representation before the Employment and Labour Relations Court.",
    image: employmentImg.url,
  },
  {
    slug: "family-succession",
    title: "Family Law & Succession",
    short: "Sensitive guidance through family matters and estate planning.",
    long: "Divorce, child custody, matrimonial property, wills, probate, and succession planning handled with discretion and care.",
    image: familyImg.url,
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    short: "Transaction support for lenders, borrowers, and financial institutions.",
    long: "Loan documentation, securities perfection, debt recovery, and regulatory advisory for banks, SACCOs, and microfinance institutions.",
    image: bankingImg.url,
  },
  {
    slug: "public-constitutional",
    title: "Public Law & Constitutional Law",
    short: "Constitutional petitions, judicial review, and public interest matters.",
    long: "Representing clients in constitutional petitions, judicial review applications, and matters touching on fundamental rights and public administration.",
    image: publicImg.url,
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    short: "Protecting trademarks, copyrights, and trade secrets.",
    long: "Trademark registration and enforcement, copyright advisory, licensing, and IP-related dispute resolution.",
    image: ipImg.url,
  },
  {
    slug: "tax-regulatory",
    title: "Tax & Regulatory Compliance",
    short: "Tax planning, KRA disputes, and regulatory advisory.",
    long: "Tax structuring, KRA audits and disputes, transfer pricing advisory, and broader regulatory compliance for businesses.",
    image: taxImg.url,
  },
];


export const TEAM = [
  {
    name: "Jeremy O. Ateng",
    title: "Managing Partner",
    bio: "Leads the firm's strategic direction and heads its commercial law and dispute resolution practice, advising businesses across Kenya and the wider East African market.",
    tags: ["Commercial Law", "Dispute Resolution"],
  },
  {
    name: "Perry T. Ayiera",
    title: "Partner",
    bio: "A seasoned advocate specialising in dispute resolution and civil litigation, with a strong track record before the Kenyan courts.",
    tags: ["Dispute Resolution", "Civil Litigation"],
  },
  {
    name: "Phillip Nyoro",
    title: "Head of Civil Litigation & Conveyancing",
    bio: "Leads the firm's civil litigation and conveyancing practice, guiding clients through property transactions and complex civil disputes with a client-first approach.",
    tags: ["Civil Litigation", "Conveyancing"],
  },
  {
    name: "Alex Marima",
    title: "Head of Criminal Litigation, Family Law & Succession",
    bio: "Heads the firm's criminal litigation and family and succession practice, combining strong courtroom advocacy with sensitive handling of family and estate matters.",
    tags: ["Criminal Litigation", "Family Law & Succession"],
  },
  {
    name: "Daniel Munga",
    title: "Associate",
    bio: "Supports clients on commercial litigation, conveyancing, and commercial transactions with a keen eye for detail.",
    tags: ["Commercial Litigation", "Conveyancing", "Commercial Transactions"],
  },
  {
    name: "Hassan Said Chaki",
    title: "Legal Assistant",
    bio: "Provides legal research and support across the firm's practice areas.",
    tags: ["Research", "Support"],
  },
];
