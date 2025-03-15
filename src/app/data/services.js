// app/data/services.js
import { 
  faFileInvoice, 
  faCalculator, 
  faGlobe, 
  faFileInvoiceDollar, 
  faFileContract, 
  faBook
} from '@fortawesome/free-solid-svg-icons';

export const servicesData = [
  {
    title: "Auditing & Assurance",
    icon: faFileInvoice,
    slug: "auditing-assurance",
    description: "Comprehensive auditing services to ensure financial compliance and accuracy.",
    offerings: [
      "Statutory Audit",
      "Internal Audit"
    ]
  },
  {
    title: "Tax Planning & Advisory",
    icon: faCalculator,
    slug: "tax-planning-advisory",
    description: "Strategic tax planning solutions for optimal financial management.",
    offerings: [
      "Income-Tax Planning for Individuals",
      "Corporate Tax Planning",
      "Tax advisory for complex transactions",
      "Tax consultancy for Mergers and acquisitions"
    ]
  },
  {
    title: "International Taxation & Transfer Pricing",
    icon: faGlobe,
    slug: "international-taxation",
    description: "Expert guidance on international tax matters and transfer pricing compliance.",
    offerings: [
      "Transfer Pricing Study Report",
      "Transfer Pricing Audit",
      "County by Country Reporting",
      "Analysis of DTAA Treaties",
      "15 CA / CB Certifications"
    ]
  },
  {
    title: "Direct Tax & NRI Taxation",
    icon: faFileInvoiceDollar,
    slug: "direct-tax-nri",
    description: "Specialized tax services for individuals, businesses, and non-resident Indians.",
    offerings: [
      "Income-Tax Registration",
      "Income-Tax Returns for Individual, Trusts & Companies",
      "Tax Assessments and Appeals",
      "Tax Audit for Companies, Individuals & Charitable Trusts",
      "Income-Tax Certifications",
      "E-TDS Returns"
    ]
  },
  {
    title: "GST Advisory",
    icon: faFileContract,
    slug: "gst-advisory",
    description: "Complete GST compliance and advisory services for your business needs.",
    offerings: [
      "GST Registration",
      "GST Return Filing",
      "GST Audit",
      "GST Assessment and Appeals",
      "GST Advisory on Complex Transactions",
      "GST Refund Services"
    ]
  },
  {
    title: "Accounting & Bookkeeping",
    icon: faBook,
    slug: "accounting-bookkeeping",
    description: "Reliable accounting and bookkeeping services to keep your finances in order.",
    offerings: [
      "Preparation of Financial Statements as per Schedule III",
      "Finalization of Accounts",
      "Preparation of MIS",
      "Accounting for Companies & Individuals"
    ]
  }
];