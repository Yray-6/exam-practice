type Question = {
  id: number;
  question: string;
  options: Options; // Use the Options type here
  correctOption: string; // You can also specify a type for the reference if needed
  comment?:string
};

type Options = {
  [key: string]: string; // This allows for extra options like E, F, G, etc.
};

 export const questions:Question[]= [
  {
    id: 1,
    question: "Why is it critical for Marketing/relationship management officers to maintain direct contact with customers through periodic visits after extending credit?",
    options: {
      A: "It will help the bank get more business from the customer.",
      B: "It will ensure that the customer believes that we care.",
      C: "It provides relevant, up-to-date and reliable informed on-going management of exposure quality and overall business condition of the obligor and relationship with the bank.",
      D: "None of the above.",
    },
    correctOption: "C",
    comment:"See Page 146 for reference"
  },
  {
    id: 2,
    question: "Where is this meeting most suitable to take place?",
    options: {
      A: "Ikoyi Club 1938.",
      B: "Place of worship of customer.",
      C: "Private residence of customer.",
      D: "Customer’s business location as well as bank premises.",
      E: "Any place will do.",
    },
    correctOption: "D",
     comment:"See Page 146 for reference"
  },
  {
    id: 3,
    question: "What determines the frequency of credit calls?",
    options: {
      A: "Risky obligor/large exposures.",
      B: "Less risky obligor/smaller exposure.",
      C: "Pressure of work (or lack of) on Relationship Manager.",
      D: "A & B.",
      E: "All of the above.",
    },
    correctOption: "D",
    comment:"See Page 146 for reference"
  },
  {
    id: 4,
    question: "Information gathered from credit calls is properly documented and circulated via:",
    options: {
      A: "Text message to Group Head and Credit Risk Management.",
      B: "Call memo to business head and CRM.",
      C: "Verbal report to business head and CRM.",
      D: "All of the above.",
    },
    correctOption: "B",
    comment:"See Page 146 for reference"
  },
  {
    id: 5,
    question: "Why is Bank and trade check an important component of the credit process?",
    options: {
      A: "To fulfill know your customer requirements.",
      B: "To satisfy customer service/operations units.",
      C: "It serves as an assessment of obligor and confirmation that business remains a going concern.",
      D: "All of the above.",
    },
    correctOption: "C",
    comment:"See Page 147 for reference"
  },
  {
    id: 6,
    question: "The ongoing administration of the quality and performance of loans depends on:",
    options: {
      A: "Periodic analysis of up-to-date financial information.",
      B: "The character, ability and willingness of customer to meet its obligations to the bank.",
      C: "All of the above.",
      D: "None of the above.",
    },
    correctOption: "A",
    comment:"See Page 147 for reference"
  },
  {
    id: 7,
    question: "What is the objective of collateral inspection?",
    options: {
      A: "To prevent against the incidence of double pledging by customer.",
      B: "To ensure that there are no shortfalls and gaps.",
      C: "To confirm the existence and adequacy of all collateral held as security.",
      D: "A & B exclusively.",
    },
    correctOption: "C",
    comment:"See Page 79 for reference"
  },
  {
    id: 8,
    question: "Under the CRG, RM must conduct and document site visits prior to disbursement of funds under:",
    options: {
      A: "Overdraft facility.",
      B: "Revolving credit facility.",
      C: "Import and export finance.",
      D: "Term loans.",
      E: "All of the above.",
    },
    correctOption: "D",
    comment:"See Page 79 for reference"
  },
  {
    id: 9,
    question: "Why must collateral held be revalued periodically?",
    options: {
      A: "To make sure that collateral has not gone bad.",
      B: "To ensure the safety of pledged security.",
      C: "To confirm the continuing appropriateness and adequacy of the forced sale value of collateral on the open market to cover the bank’s exposure.",
      D: "A & B.",
      E: "All of the above.",
    },
    correctOption: "C",
    comment:"See Page 79 for reference"
  },
  {
    id: 10,
    question: "Where obligations are secured by marketable securities prone to price fluctuations, what action ensures that exposure to the customer is always covered?",
    options: {
      A: "Make sure that you are in constant contact with the stock brokers.",
      B: "Constantly monitor the daily stock exchange position.",
      C: "Establish a predetermined 'stop loss' or 'sell point' under clear advice to the obligor.",
      D: "Sell at the slightest hint of price movement.",
    },
    correctOption: "C",
    comment:"See Page 79 for reference"
  },
  {
    id: 11,
    question: "Collateral valuation is usually conducted by:",
    options: {
      A: "RM and CRM.",
      B: "RM, CRM, and Professional appraisers.",
      C: "RM, CRM, and appropriate local govt. and law enforcement agencies.",
      D: "All of the above.",
    },
    correctOption: "B",
    comment:"See Page 79 for reference"
  },
  {
    id: 12,
    question: "All legal documentation in respect of approved credit exposure are kept in:",
    options: {
      A: "RM’s secured drawers.",
      B: "Filing cabinet in secretary’s custody.",
      C: "Fireproof safe cabinet in GH’s office.",
      D: "Bank vault or a location of equivalent security and safety.",
      E: "All of the above.",
    },
    correctOption: "D",
  },
  {
    id: 13,
    question: "What is the frequency of the conduct of physical verification of all credit documentation",
    options: {
      A: "Monthly",
      B: "Quarterly.",
      C: "Semi-Annually.",
      D: "Annually",
      E:"As the need arises."
    },
    correctOption: "D",
    comment:"See Page 147 for reference"
  },
  {
    id: 14,
    question: "How often does CRM and relevant approval authority review all outstanding credit transactions and commitments?",
    options: {
      A: "Monthly",
      B: "Quarterly.",
      C: "Semi-Annually.",
      D: "Annually",
      E:"As the need arises."
    },
    correctOption: "D",
  },
  {
    id: 15,
    question: "How often must credit files be reviewed?",
    options: {
      A: "If the need arises.",
      B: "Periodically.",
      C: "Monthly.",
      D: "Quarterly.",
      E: "All of the above.",
    },
    correctOption: "B",
  },
  {
    id: 16,
    question: "How often must obligor and facility exposure quality and performance grades be reviewed?",
    options: {
      A: "If the need arises.",
      B: "Quarterly",
      C: "Annually",
      D: "On a case by case basis",
    },
    correctOption: "C",
  },
  {
    id: 17,
    question: "What is the primary information source for decision-making on credits and customer relationships?",
    options: {
      A: "Credit files",
      B: "Direct customer contacts",
      C: "Bank & credit checks",
      D: "Newspapers and business journals",
      E: "All of the above",
    },
    correctOption: "A",
    comment:"See Page 148 for reference"
    
  },
  {
    id: 18,
    question: "Credit files must contain at a minimum:",
    options: {
      A: "Copies of international passport of obligor, driver’s licence",
      B: "Passport photograph and utility bill",
      C: "Lease agreements between him and his tenants",
      D: "Memoranda and correspondence with customer 148",
      E: "All of the above",
    },
    correctOption: "D",
    comment:"See Page 148 for reference"
  },
  {
    id: 19,
    question: "How often must credit files be reviewed?",
    options: {
      A: "If the need arises",
      B: "Periodically",
      C: "Monthly",
      D: "Quarterly",
      E: "All of the above",
    },
    correctOption: "B",
    comment:"See Page 148 for reference"
  },
  {
    id: 20,
    question: "How do you treat information of an unfavourable nature in the credit file e.g. a significant problem in the relationship?",
    options: {
      A: "Hide the information away from prying eyes and busy bodies",
      B: "Deliberately remove the information from the file so as not to implicate yourself.",
      C: "Permanently retain and mark the information",
      D: "File the information away in your personal “just in case” file folder.",
    },
    correctOption: "C",
    comment:"See Page 148 for reference"
  },
  {
    id: 21,
    question: "How many components are there to each customer credit file?",
    options: {
      A: "5",
      B: "4",
      C: "3",
      D: "2.",
      E: "1",
    },
    correctOption: "D",
    comment:"See Page 148 for reference"
  },
  {
    id: 22,
    question: "How often are these reports generated for unauthorized overdraft?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "A",
    comment:"See Page 208 for reference"
  },
  {
    id: 23,
    question: "How often are these reports generated for excess over approved limit?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "A",
     comment:"See Page 208 for reference"
  },
  {
    id: 24,
    question: "How often are these reports generated for expiring facilities?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "C",
    comment:"See Page 208 for reference"
  },
  {
    id: 25,
    question: "How often are these reports generated for expired facilities?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "B",
    comment:"See Page 208 for reference"
  },
  {
    id: 26,
    question: "How often are these reports generated for central liability?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "C",
    comment:"See Page 208 for reference"
  },
  {
    id: 27,
    question: "How often are these reports generated for maturing obligations?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "C",
    comment:"See Page 208 for reference"
  },
  {
    id: 28,
    question: "How often are these reports generated for review of security documentation?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "E",
     comment:"See Page 208 for reference"
  },
  {
    id: 29,
    question: "How often are these reports generated for portfolio review?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "D",
     comment:"See Page 208 for reference"
  },
  {
    id: 30,
    question: "How often are these reports generated for collateral review?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
      
    },
    correctOption: "E",
     comment:"See Page 208 for reference"
  },
  {
    id: 31,
    question: "How often are these reports generated for recovery status?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "C",
     comment:"See Page 208 for reference"
  },
  {
    id: 32,
    question: "How often are these reports generated for recoveries made?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "D",
     comment:"See Page 208 for reference"
  },
  {
    id: 33,
    question: "How often are these reports generated for reserves and write-offs?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "D",
     comment:"See Pag208 for reference"
  },
  {
    id: 34,
    question: "How often are these reports generated for account throughput reporting?",
    options: {
      A: "Daily",
      B: "Weekly",
      C: "Monthly",
      D: "Quarterly",
      E: "Annually",
    },
    correctOption: "D",
     comment:"See Page 208 for reference"
  },
  {
    id: 35,
    question: "Who are the recipients of Portfolio Review report?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "B",
      comment:"See Page 208 for reference"
  },
  {
    id: 36,
    question: "Who are the recipients of  Collateral Review report",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "B",
      comment:"See Page 208 for reference"
  },
  {
    id: 37,
    question: "Who are the recipients of recovery Status Report?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "B",
      comment:"See Page 208 for reference"
  },
  {
    id: 38,
    question: "Who are the recipients of recoveries made reports?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "B",
      comment:"See Page 208 for reference"
  },
  {
    id: 39,
    question: "Who are the recipients of account throughput reporting?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "C",
      comment:"See Page 208 for reference"
  },
  {
    id: 40,
    question: "Who are the recipients of reserves and write-offs report?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "D",
      comment:"See Page 208 for reference"
  },
  {
    id: 41,
    question: "Who are the recipients of review of security documentation?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "B",
      comment:"See Page 208 for reference"
  },
  {
    id: 42,
    question: "Who are the recipients of excess over approval limits?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "C",
      comment:"See Page 208 for reference"
  },
  {
    id: 43,
    question: "Who are the recipients of  unauthorized O/D reports?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "C",
      comment:"See Page 208 for reference"
  },
  {
    id: 44,
    question: "Who are the recipients of central liability report?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "A",
      comment:"See Page 208 for reference"
  },
  {
    id: 45,
    question: "Who are the recipients of maturing obligation report?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "A",
      comment:"See Page 208 for reference"
  },
  {
    id: 46,
    question: "Who are the recipients of  expiring and expired facilities generated?",
    options: {
      A: "Business Units",
      B: "MCC",
      C: "Business Units /MCC",
      D: "CAC",
    },
    correctOption: "A",
      comment:"See Page 208 for reference"
  },
  {
    id: 47,
    question: "On what basis does the bank extend credit facilities?",
    options: {
      A: "Sometimes based on customer’s ability to negotiate a good deal",
      B: "Based on forces of demand and supply in the market place",
      C: "Based sometimes on verbal commitments made to customer by executive management of the bank",
      D: "On the basis of legal commitments notified in writing to a customer once the terms and conditions contained therein have been satisfied",
      E: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 48,
    question: "Under what circumstances will an unadvised facility be appropriate?",
    options: {
      A: "To keep client’s account balance within the scope of cover provided by its collateral",
      B: "To keep borrower’s account within an approved credit limit",
      C: "To avoid penalty interest rates on excesses over previously approved facilities",
      D: "All of the above",
      E: "None of the above",
    },
    correctOption: "D",
  },
  {
    id: 49,
    question: "Which one of the under listed will not be suitably structured as a term loan?",
    options: {
      A: "Equipment finance",
      B: "New Technology capital loan",
      C: "Operating expenses",
      D: "Asset replacement",
      E: "Working capital loan",
    },
    correctOption: "C",
  },
  {
    id: 50,
    question: "On repayment, a customer may re-borrow under the same condition provided that:",
    options: {
      A: "The tenor of revolving credit does not exceed 3 years",
      B: "Customer’s business/trading cycle remains defined",
      C: "There is no material change to his financial position",
      D: "There must be management approval",
      E: "All of the above",
    },
    correctOption: "C",
  },
  {
    id: 51,
    question: "In the event that a temporary overdraft accommodation remains outstanding for a period longer than 30 days, what prudent step should be taken?",
    options: {
      A: "Account officer to intensify effort to recover",
      B: "RM to seek approval for renewal of facility",
      C: "Bank to consider referring the matter to EFCC",
      D: "Facility shall be classified as a past due loan",
      E: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 52,
    question: "Customers' request for withdrawal against uncleared effects or drafts will not be approved for one of the following reasons:",
    options: {
      A: "Drawings under DAUE/DAUD against company’s own cheque",
      B: "Drawings in excess of the approved DAUE/DAUD",
      C: "Cheques drawn on persons or organizations rated as “low risk” by the bank.",
      D: "A and B exclusively",
      E: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 53,
    question: "How many parties are there to a typical transaction involving the issuance of a bond by the bank?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
      E: "6",
    },
    correctOption: "D",
  },
  {
    id: 54,
    question: "In what instance(s) will a bond/guarantee be issued on a clean basis to a client?",
    options: {
      A: "Client is a major government contractor",
      B: "Customer has never defaulted on prior obligation to the bank",
      C: "Customer is a highly rated multinational company",
      D: "Bond includes a clause to make it effective only upon receipt of equivalent cash cover from the beneficiary",
      E: "All of the above",
    },
    correctOption: "C",
  },
  {
    id: 55,
    question: "Which of the following statement is true concerning the issuance of bonds/guarantees?",
    options: {
      A: "The maturity of the underlying contract must match the tenor of the bond/guarantee",
      B: "The maturity of the underlying contract must be less than the tenor of the bond/guarantee",
      C: "The maturity of underlying contract must exceed the tenor of the bond/guarantee",
      D: "None of the above",
    },
    correctOption: "C",
  },
  {
    id: 56,
    question: "Which of the following statement is false with regards to the issuance of bond/guarantees?",
    options: {
      A: "Access Bank’s obligation always contains a specific expiration date",
      B: "Issuance of guarantees to support offshore facilities is strongly encouraged in view of its profitability",
      C: "The bank’s undertaking is always limited to a specific amount",
      D: "None of the above",
    },
    correctOption: "B",
  },
  {
    id: 57,
    question: "What kind of risk is the bank exposed to on ALL commercial papers it intermediates?",
    options: {
      A: "Reputation risk",
      B: "Contingent lending risk",
      C: "Direct lending risks",
      D: "All of the above",
    },
    correctOption: "A",
  },
  {
    id: 58,
    question: "When the Bank does not guarantee the CPs it issues, what role does the bank play?",
    options: {
      A: "Managerial role",
      B: "Agency role",
      C: "Advisory role",
      D: "All of the above",
    },
    correctOption: "B",
  },
  {
    id: 59,
    question: "In a lease facility, what is the most important consideration?",
    options: {
      A: "Flexible pricing",
      B: "Ability of the bank to take effective and prompt possession of the asset in the event of default by the lessor",
      C: "Adequacy of insurance protection",
      D: "Nature of leased asset",
      E: "All of the above",
    },
    correctOption: "B",
  },
  {
    id: 60,
    question: "How many parties are there in a lease arrangement?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctOption: "A",
  },
  {
    id: 61,
    question: "What is the most important consideration for the bank when undertaking warehouse financing?",
    options: {
      A: "Appointment of a reputable warehousing agent",
      B: "Location of warehouse",
      C: "Nature of the warehoused goods",
      D: "Assumption of physical control of goods financed",
      E: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 62,
    question: "In general, warehouse financing should NOT be considered where:",
    options: {
      A: "The goods financed are fast moving consumer goods",
      B: "Maximum tenor is 12 months",
      C: "The forced sale value of goods is not adequate to cover the exposure at all times",
      D: "None of the above",
    },
    correctOption: "C",
  },
  {
    id: 63,
    question: "Under what condition will Access Bank take a lead role in loan syndication?",
    options: {
      A: "Where it is providing more than 50% of the total loan amount",
      B: "Where the obligor is its own direct client",
      C: "Where it (Access Bank) has the expertise and capacity to manage the syndication fully",
      D: "None of the above",
    },
    correctOption: "C",
  },
  {
    id: 64,
    question: "Unsecured credit to bank’s directors must be:",
    options: {
      A: "Approved by GMD/GDM",
      B: "Approved by MCC",
      C: "Approved by Board prior to drawdown",
      D: "Approved by Board prior to drawdown and mentioned at board meeting for ratification",
      E: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 65,
    question: "What is the maximum tenure that the Bank can allow for agricultural loans?",
    options: {
      A: "5 years",
      B: "6 years",
      C: "7 years",
      D: "8 years",
      E: "10 years",
    },
    correctOption: "D",
  },
  {
    id: 66,
    question: "Which one of the following consideration is not important in establishing the bank’s lending rate?",
    options: {
      A: "Desired profitability of target market segment",
      B: "Desired profitability per customer",
      C: "Lending rates of poor banks",
      D: "Collateral business opportunities",
      E: "None of the above",
    },
    correctOption: "E",
  },
  {
    id: 67,
    question: "What is the minimum requirement for all items pledged as security for credit facilities?",
    options: {
      A: "Perfected memorandum of deposit of title deeds",
      B: "Perfected legal mortgage in favour of Access Bank",
      C: "Perfected equitable mortgage in the name of Access Bank",
      D: "Any of the above",
    },
    correctOption: "B",
  },
  {
    id: 68,
    question: "What is the minimum collateral requirement for all credit extended to corporate obligors?",
    options: {
      A: "Duly executed and perfected board resolution of the borrower",
      B: "Duly executed and perfected personal guarantees of the chairman and at least 2 other directors of the board",
      C: "Charge on fixed and floating assets of the company (All assets debenture)",
      D: "Any of the above",
    },
    correctOption: "C",
  },
  {
    id: 69,
    question: "Which one(s) of the under listed is not accepted collateral based on the CPG?",
    options: {
      A: "Mortgage on landed property",
      B: "Liens on asset being financed",
      C: "Charge on personal chattels",
      D: "Letter of comfort",
      E: "Letter of hypothecation of stock",
    },
    correctOption: "D",
  },
  {
    id: 70,
    question: "What is the minimum percentage of expected forced sale value (EFSV) of loan acceptable to Access Bank?",
    options: {
      A: "100%",
      B: "110%",
      C: "120%",
      D: "150%",
      E: "None of the above",
    },
    correctOption: "C",
  },
  {
    id: 71,
    question: "Which one of the following landed property may be acceptable under the CPG?",
    options: {
      A: "Country Home in rural area",
      B: "Hall for religious assembly or worship",
      C: "Community Owned property",
      D: "Undeveloped land in prime location (e.g. Abuja, V/I or Lekki)",
      E: "None of the above",
    },
    correctOption: "D",
  },
  {
    id: 72,
    question: "The CPL requires that EFSV (expected force sale value) be determined by a professional estate valuer for facilities in excess of:",
    options: {
      A: "N100 million",
      B: "N200 million",
      C: "N1 billion",
      D: "N50 million",
    },
    correctOption: "D",
  },
  {
    id: 73,
    question: "In what type of account will cash deposited as collateral in respect of a credit be placed?",
    options: {
      A: "Call account",
      B: "Placement account",
      C: "Escrow account",
      D: "Collateral account",
      E: "Any of the above will do",
    },
    correctOption: "C",
  },
  {
    id: 74,
    question: "In what instance will Access Bank allow another bank to share/participate in its lien over cash collateral?",
    options: {
      A: "Where the second bank is well known to the directors of Access Bank",
      B: "Where the second bank is a subsidiary of Access Bank",
      C: "Where the account balance can conveniently accommodate such lien by the second bank",
      D: "Any of the above will be okay",
    },
    correctOption: "C",
  },
  {
    id: 75,
    question: "According to the CPG, acceptability of stocks & shares of companies as collateral shall be limited to:",
    options: {
      A: "Selected blue chip companies",
      B: "Selected high net worth companies",
      C: "Selected blue chip companies quoted on the NSE",
      D: "Selected and very profitable companies in chosen sections of the economy",
    },
    correctOption: "C",
  },
  {
    id: 76,
    question: "The assessed market value of such shares is based on the average value of such shares over a period of time. What is this period of time under the CPG?",
    options: {
      A: "7 days (1 week)",
      B: "30 days (1 month)",
      C: "180 days (6 months)",
      D: "360 days (12 months)",
    },
    correctOption: "D",
  },
  {
    id: 77,
    question: "What resource material will be most appropriate to find the average value of a share?",
    options: {
      A: "Newspaper Cutting / Clipping from the Guardian or ‘Business Time’",
      B: "Daily reports on Radio & TV",
      C: "Bank approved Stock broker",
      D: "Any of the above",
    },
    correctOption: "D",
  },
  {
    id: 78,
    question: "As a guideline, the CPG recommends that a minimum Shrinkage, or discount margin be applied on the MKT value of collateral shares. What is the recommended percentage?",
    options: {
      A: "Btw 20% and 40%",
      B: "Btw 25% and 45%",
      C: "Btw 30% and 50%",
      D: "Btw 35% and 50%",
      E: "Any of the above depending on which company.",
    },
    correctOption: "C",
  },
  {
    id: 79,
    question: "Under what Circumstance(s) will the personal, joint and several guarantees of Directors be acceptable as sole security for credit to a company?",
    options: {
      A: "Where the persons are high net worth individuals",
      B: "Where the individuals have first rate credit history",
      C: "Where the individuals have excellent track record and are upstanding members of the society",
      D: "Where the facility amount is justifiably negligible in comparison to the status of the guarantors",
      E: "None of the above",
    },
    correctOption: "E",
  },
  {
    id: 80,
    question: "Under the CPG, Corporate guarantees may not be acceptable under which one of the following instances?",
    options: {
      A: "Cross-Corporate guarantee of a subsidiary company for a Credit line approved for the company",
      B: "Corporate guarantee of a 3rd party company though not necessarily a subsidiary or sister company. Provided that there is commercial justification.",
      C: "Corporate guarantee of a subsidiary for its parent company.",
      D: "Corporate guarantee for employee credit under the employees’ loan scheme",
    },
    correctOption: "C",
  },
  {
    id: 81,
    question: "Which one of the under listed reasons will be the most compelling consideration for accepting a life assurance policy as collateral for credit?",
    options: {
      A: "The issuing company is properly registered under the insurance Act and is even approved by Access Bank as acceptable for underwriting policies.",
      B: "The Surrender Value of such policy is very easily ascertainable and adequate to ensure full recovery of facility.",
      C: "The obligor provides undertaking to ensure that policy is always in force i.e., premium payments are up to date throughout the life of the credit.",
      D: "The benefits of the policy to be duly assigned to Access Bank",
    },
    correctOption: "B",
  },
  {
    id: 82,
    question: "All assets and items pledged to the Bank as credit collateral must be appropriately covered by a valid insurance policy throughout the duration of the credit. Which one of the under listed is exempted?",
    options: {
      A: "Property / Real estate",
      B: "Guarantees",
      C: "Equipment",
      D: "Furniture & Fixture",
      E: "Inventory",
    },
    correctOption: "B",
  },
  {
    id: 83,
    question: "What time frame does the CPG prescribe for the completion of preliminary screening of all credit facility requests?",
    options: {
      A: "24hrs",
      B: "48hrs",
      C: "72hrs",
      D: "7 days",
    },
    correctOption: "A",
  },
  {
    id: 84,
    question: "What is the purpose of the preliminary credit screening?",
    options: {
      A: "It is a requirement of Access Bank CPG",
      B: "It is a fundamental of the law of credit",
      C: "To facilitate the early identification of unacceptable risk exposures",
      D: "To prevent customers from wasting our time.",
    },
    correctOption: "C",
  },
  {
    id: 85,
    question: "The CPG provides that all recommendation for denial of credit facility shall require the endorsement of?",
    options: {
      A: "Relationship Manager",
      B: "Group Head",
      C: "Executive Director",
      D: "GMD / GDMD",
    },
    correctOption: "B",
  },
  {
    id: 86,
    question: "What is the primary outcome of the credit analysis process?",
    options: {
      A: "An approval recommendation of facility",
      B: "A rejection recommendation of facility",
      C: "An approval / rejection recommendation of facility",
      D: "Determination of credit risk rating",
      E: "Determination of credit risk rating & an approval / rejection recommendation of facility",
    },
    correctOption: "E",
  },
  {
    id: 87,
    question: "Which one of the following components must be included in a full credit review?",
    options: {
      A: "Financial spreads",
      B: "Risk rating document",
      C: "Facility approval means",
      D: "Target MKT / Risk Acceptance criteria",
      E: "All of the above",
    },
    correctOption: "E",
  },
  {
    id: 88,
    question: "Which one of the following is an important consideration for renewal of approved facilities?",
    options: {
      A: "Continued Viability of biz / project",
      B: "Acct. turnover / revenue to the bank",
      C: "Status of collateral(s)",
      D: "Micro & economic considerations",
      E: "All of the above",
    },
    correctOption: "E",
  },
  {
    id: 89,
    question: "Why does the CPG direct that risk ratings be assigned to each facility?",
    options: {
      A: "To provide a uniform basis for comparing all facility proposals regardless of the nature, type or looks of the credit facility",
      B: "To indicate assessment of credit risk inherent in the facility and to overall acceptability of the credit exposure",
      C: "All of the above",
    },
    correctOption: "B",
  },
  {
    id: 90,
    question: "Under the CPG, how long does the credit analyst have to do his work upon receipt of the credit request and complete information required for detailed analysis?",
    options: {
      A: "12-24hrs",
      B: "24-36hrs",
      C: "36-48hrs",
      D: "48-72hrs",
    },
    correctOption: "D",
  },
  {
    id: 91,
    question: "How long does a customer have to accept a credit offer before it lapses?",
    options: {
      A: "Within 30 days of facility offer date",
      B: "Within 45 days of facility offer date",
      C: "Within 60 days of facility offer date",
      D: "Within 90 days of facility offer date",
    },
    correctOption: "A",
  },
  {
    id: 92,
    question: "How long does a customer have to meet all the conditions precedent to drawdown as contained in the facility offer letter?",
    options: {
      A: "Within 30 days of facility offer date",
      B: "Within 45 days",
      C: "Within 60 days",
      D: "Within 90 days",
    },
    correctOption: "D",
  },
  {
    id: 93,
    question: "What mode(s) of acceptance of facility offer is / are required by the CPG?",
    options: {
      A: "By Sms Text",
      B: "By Phone call",
      C: "In writing",
      D: "Any of the above will do.",
    },
    correctOption: "C",
  },
  {
    id: 94,
    question: "In the event that a single bank customer has multiple exposures and facilities with more than one Market facing unit, how many credit files should be maintained?",
    options: {
      A: "One credit file per exposure / facility",
      B: "One single credit file",
      C: "It depends",
    },
    correctOption: "B",
  },
  {
    id: 95,
    question: "Who is responsible for the establishment of the customer’s credit file?",
    options: {
      A: "The Customer",
      B: "The Relationship Manager",
      C: "Credit Administration",
      D: "B & C in partnership",
    },
    correctOption: "C",
  },
  {
    id: 96,
    question: "Whose responsibility shall it be to ensure complete and legally enforceable documentation of credit?",
    options: {
      A: "Relationship Manager in conjunction with Credit Admin.",
      B: "Credit Admin. & Customer",
      C: "Relationship Manager in conjunction with customers",
    },
    correctOption: "C",
  },
  {
    id: 97,
    question: "What time frame does the CPG stipulate for the completion of credit documentation?",
    options: {
      A: "30 days",
      B: "60 days",
      C: "90 days",
      D: "None",
    },
    correctOption: "D",
  },
  {
    id: 98,
    question: "The CPG stipulates the minimum number of years that must be remaining or subsisting on a lease on a property for it to be acceptable in security for a credit facility. What is this figure?",
    options: {
      A: "Less than 15 years",
      B: "More than 15 years",
      C: "15 years",
    },
    correctOption: "B",
  },
  {
    id: 99,
    question: "Deferral of any security document for facility under N1bn will require the approval of:",
    options: {
      A: "The Board of Director",
      B: "Board credit committee",
      C: "The GMD",
      D: "The GDMD",
    },
    correctOption: "D",
  },
  {
    id: 100,
    question: "The CPG provides for the preparation of a report on deferrals by CAD. How often must they do this?",
    options: {
      A: "Weekly",
      B: "Monthly",
      C: "Quarterly",
    },
    correctOption: "B",
  },
  {
    id: 101,
    question: "What may trigger the need for an Exposure Quality Review?",
    options: {
      A: "A change in relationship Management",
      B: "Identification of a decline in the quality of the facility",
      C: "Significant change in the indemnity of the customer.",
    },
    correctOption: "B",
  },
  {
    id: 102,
    question: "How often must the MCC Institute periodic reviews of exposure in the bank?",
    options: {
      A: "Weekly",
      B: "Quarterly",
      C: "Annually",
    },
    correctOption: "B",
  },
  {
    id: 103,
    question: "The overall responsibility of sustaining the quality of individual risk exposure is primarily that of:",
    options: {
      A: "Head, Credit Risk Management",
      B: "Group Head of Market facing biz unit",
      C: "Relationship Manager",
      D: "Executive Management",
      E: "MCC",
    },
    correctOption: "C",
  },
  {
    id: 104,
    question: "The CPG provides that the discovery of any declining risk exposure must be brought to the notice of the Chairman of Criticized Assets Committee within:",
    options: {
      A: "24hrs of the discovery",
      B: "48hrs of the discovery",
      C: "72hrs",
      D: "7 days",
    },
    correctOption: "D",
  },
  {
    id: 105,
    question: "Whose responsibility will it be to make this report to the chairman of the CAC?",
    options: {
      A: "Relationship management",
      B: "Group Head of Business unit",
      C: "ED of business unit",
      D: "Head, Credit Risk Management",
      E: "ED of business unit & Head, Credit Risk Management",
    },
    correctOption: "E",
  },
  {
    id: 106,
    question: "In the event that the collateral for a credit facility is a mortgage on landed property, which one of the following is a condition precedent to final approval of the credit request?",
    options: {
      A: "Governor’s consent",
      B: "Registration at land registry/Corporate Affairs Commission",
      C: "Receipt of certificate of good title from search",
      D: "All of the above.",
    },
    correctOption: "C",
  },
  {
    id: 107,
    question: "Whose responsibility is it under the CPG to develop and implement a collateral management plan in respect of each facility?",
    options: {
      A: "Legal department.",
      B: "Relationship Management",
      C: "Credit Risk Management",
    },
    correctOption: "C",
  },
  {
    id: 108,
    question: "In the event of non-compliance with collateralization conditions, whose responsibility is it to report to the Chairman, CAC?",
    options: {
      A: "Legal department",
      B: "Relationship Manager",
      C: "Credit Risk Management",
      D: "Customer",
    },
    correctOption: "C",
  },
  {
    id: 109,
    question: "What is the time frame within which the report will be made?",
    options: {
      A: "Within 24hrs",
      B: "Within 48hrs",
      C: "Within 72hrs",
      D: "Within 7 days",
    },
    correctOption: "D",
  },
  {
    id: 110,
    question: "Fill the blank space with the appropriate option. In the event of delinquency, a formal notice shall be made to the customer within ------- working days of default. A second notice shall be made after ------- working days of the first notice.",
    options: {
      A: "7 days --------14 days",
      B: "14 days -------- 28 days",
      C: "10 days ----------- 20 days",
    },
    correctOption: "C",
  },
  {
    id: 111,
    question: "The CPG provides that a credit watch list of non-performing / delinquent credits shall be prepared for circulation. How regularly must this report be guaranteed?",
    options: {
      A: "Weekly",
      B: "Monthly",
      C: "Quarterly",
      D: "Daily",
    },
    correctOption: "B",
  },
  {
    id: 112,
    question: "Under the CPG, the responsibility for delinquency Management shall be that of?",
    options: {
      A: "Legal department",
      B: "Credit Risk Management",
      C: "Relationship Management",
      D: "Remedial Assets unit",
    },
    correctOption: "D",
  },
  {
    id: 113,
    question: "Under the CPG, all non-performing / delinquent credits shall be classified as remedial assets after…",
    options: {
      A: "90 days",
      B: "180 days",
      C: "360 days",
    },
    correctOption: "C",
  },
  {
    id: 114,
    question: "Which one of the following is True? Credit facilities may be restructured:",
    options: {
      A: "At the request of the Obligor requiring a revision of the credit terms and condition",
      B: "By the RM on identification of need to restructure based on performance of the facility",
      C: "Both A & B",
    },
    correctOption: "C",
  },
  {
    id: 115,
    question: "How much loan loss provisioning must be made for outstanding credit facility not specifically provided for?",
    options: {
      A: "5%",
      B: "2%",
      C: "1%",
    },
    correctOption: "C",
  },
  {
    id: 116,
    question: "How much loan loss provisioning must be made in the bank’s books for credit exposures classified as ‘Substandard’?",
    options: {
      A: "10%",
      B: "20%",
      C: "30%",
    },
    correctOption: "A",
  },
  {
    id: 117,
    question: "Where a non-performing credit exposure has been classified as ‘doubtful’, how much loan loss provisioning must be made?",
    options: {
      A: "10%",
      B: "20%",
      C: "50%",
    },
    correctOption: "C",
  },
  {
    id: 118,
    question: "Where a credit exposure has been classified as ‘lost’, how much loan loss provision does the CPG stipulate?",
    options: {
      A: "100%",
      B: "75%",
      C: "50%",
    },
    correctOption: "A",
  },
  {
    id: 119,
    question: "Consideration of interest waivers and/or credit charge shall be limited only to credit exposure classified as:",
    options: {
      A: "Gone",
      B: "Doubtful",
      C: "Lost",
    },
    correctOption: "C",
  },
  {
    id: 120,
    question: "Discussions and negotiation in respect of repayment/waiver is the responsibility of:",
    options: {
      A: "Relationship Manager",
      B: "Credit Risk Management",
      C: "Remedial Asset Unit",
      D: "Executive Management",
    },
    correctOption: "C",
  },
  {
    id: 121,
    question: "Under what circumstance may the bank consider granting a new facility to a borrower who had previously enjoyed a waiver?",
    options: {
      A: "If it is shown that customer has turned a new leaf",
      B: "If customer brings biz to the bank",
      C: "Where the customer has fully settled the previously granted waivers",
      D: "It depends on the circumstances",
    },
    correctOption: "C",
  },
  {
    id: 122,
    question: "All waivers of interest and charges shall require the approval of...",
    options: {
      A: "The Board",
      B: "MCC",
      C: "GMD",
      D: "CBN",
    },
    correctOption: "C",
  },
  {
    id: 123,
    question: "Under what condition(s) will an exposure be recommended for write-off?",
    options: {
      A: "If continued contact with customer is impossible",
      B: "If recovery cost is expected to be higher than the outstanding debt",
      C: "If amount realized from realization of credit collateral sanity leaves a balance of the debt",
      D: "If it is reasonably determined that no further recovery on the facility is possible",
      E: "Any of the above",
    },
    correctOption: "E",
  },
  {
    id: 124,
    question: "Under the CPG, all credit facility write-offs require approval by..?",
    options: {
      A: "The MCC",
      B: "The Board of Directors",
      C: "The Central Bank",
      D: "The E.F.C.C.",
    },
    correctOption: "C",
  },
  {
    id: 125,
    question: "In case of erroneous interest or charges debited to a customer’s account, reversal may be approved by...",
    options: {
      A: "Group Head Operations",
      B: "ED Operations",
      C: "Head Credit Risk Management",
      D: "GMD",
    },
    correctOption: "D",
  },
  {
    id: 126,
    question: "Under the CPG, what is the primary reference document for creating & managing credit exposure?",
    options: {
      A: "Market Risk Policy",
      B: "Environmental & Social Risk Policy",
      C: "Country Risk Management Policy",
      D: "Enterprise Risk Management Framework",
      E: "None of the above",
    },
    correctOption: "E",
  },
  {
    id: 127,
    question: "Under the CPG, which of the following statement is True?",
    options: {
      A: "The CPG is intended only for personnel involved in the creation & management of credit exposure",
      B: "All business units/countries must fully comply with the provision of the CPG, whether or not their risks are specifically addressed by other policies.",
      C: "All of the above",
    },
    correctOption: "C",
  },
  {
    id: 128,
    question: "Under the CPG, the Africa regional office of the credit risk Group reports to...",
    options: {
      A: "The GMD",
      B: "The GDMD",
      C: "The ED for rest of Africa",
      D: "Head, Credit Risk Management in Head Office",
    },
    correctOption: "D",
  },
  {
    id: 129,
    question: "Which one of the following is not a function of the MCC?",
    options: {
      A: "Approve individual credit exposures in line with its approval limits",
      B: "Agree on portfolio plan/strategy for the bank",
      C: "Approve lending decisions & limit setting",
      D: "Review credit policy recommendation for Board approval",
    },
    correctOption: "C",
  },
  {
    id: 130,
    question: "Whose responsibility is it to ensure the integrity of the credit process and proper documentation of the credit decision?",
    options: {
      A: "Credit Risk Management",
      B: "Legal department",
      C: "Relationship Management",
      D: "Any of the above",
    },
    correctOption: "C",
  },
  {
    id: 131,
    question: "The policy document sets out a framework for",
    options: {
      A: "The consistent management of Credit Risk",
      B: "Identifying opportunities",
      C: "Accessing Risks",
      D: "Minimizing cost of credit",
    },
    correctOption: "A",
  },

  {
    id: 132,
    question: "The Enterprise Risk Management Framework represents the following except",
    options: {
      A: "A structured approach to identifying opportunities",
      B: "Assessing the risk inherent in these opportunities",
      C: "Monitoring and reporting of demand deposits",
      D: "Managing these risks proactively in a cost-effective manner",
    },
    correctOption: "C",
  },
  {
    id: 133,
    question: "The manual outlines the general policies and procedures’ framework for credit risk management in the bank and incorporates provisions for",
    options: {
      A: "Marketing and risk analysis",
      B: "Approval and administration of risk exposure",
      C: "Monitoring and reporting of risk exposure",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 134,
    question: "The credit risk management policy manual is designed for the following except",
    options: {
      A: "Structuralize credit policies for the bank, giving clients clear and consistent direction for the creation of risk exposure across all asset creating business units.",
      B: "Provide a comprehensive guide and framework in creating and managing risk assets.",
      C: "Provide a framework for the ongoing maintenance of the bank’s risk management policies and processes",
      D: "Prudent management of decline in credit quality.",
    },
    correctOption: "D",
  },
  {
    id: 135,
    question: "To ensure that the overall approach to creating and managing risk assets remains relevant and responsive to environmental changes, the risk management policies will",
    options: {
      A: "Be reviewed on an ongoing basis",
      B: "Be appraised every 5 years",
      C: "Undergo assessment every quarter",
      D: "Be evaluated every year",
      E: "All of the above",
    },
    correctOption: "A",
  },
  {
    id: 136,
    question: "The policy manual is intended for",
    options: {
      A: "Entry-level personnel",
      B: "Relationship Managers",
      C: "All personnel involved in the creation and management of credit exposure",
      D: "Management personnel involved in the creation and management of credit exposure",
      E: "All of the above",
    },
    correctOption: "E",
  },
  {
    id: 137,
    question: "Access Bank’s risk management policies comprise the following except",
    options: {
      A: "Policies",
      B: "Standards",
      C: "Procedures",
      D: "Structures",
    },
    correctOption: "D",
  },
  {
    id: 138,
    question: "Proposals for addition to or modification of policy statements and procedures or any section of this manual will be presented to",
    options: {
      A: "Head, Human Capital",
      B: "Management Credit Committee",
      C: "Board of Directors",
      D: "The Head, Credit Risk Management",
    },
    correctOption: "D",
  },
  {
    id: 139,
    question: "According to the Bank’s Risk Management Philosophy, the Bank 'considers risk management philosophy and culture as the set of shared beliefs, values, attitudes and ____________ characterizing how the Bank considers risk in everything it does, from strategy development and implementation to its day-to-day activities'.",
    options: {
      A: "Culture",
      B: "Psychology",
      C: "Practices",
      D: "Expectation",
    },
    correctOption: "C",
  },

  {
    id: 140,
    question: "The Bank’s Risk Management philosophy is that ________________ and ________________ risk attitude will ensure sustainable growth in shareholder value and reputation.",
    options: {
      A: "Aggressive and prudential",
      B: "Moderate and guarded",
      C: "Restrained and reasonable",
      D: "Extreme and temperate",
    },
    correctOption: "B",
  },
  {
    id: 141,
    question: "The following are all guiding principles for the Bank’s risk culture except: Management and staff shall:",
    options: {
      A: "Consider all forms of risk in decision-making",
      B: "Create and evaluate business-unit and Bank-wide risk profile to consider what is best for their individual business units/departments regardless of what is best for the Bank as a whole",
      C: "Adopt a portfolio view of risk in addition to understanding individual risk elements",
      D: "Retain ownership and accountability for risk and risk management at the business unit or other point of influence level",
    },
    correctOption: "B",
  },
  {
    id: 142,
    question: "The enterprise risk management is",
    options: {
      A: "Mandatory",
      B: "Optional",
      C: "Discretionary",
      D: "Fixed",
    },
    correctOption: "A",
  },
  {
    id: 143,
    question: "Risk management is the responsibility of",
    options: {
      A: "Management Credit Committee",
      B: "Risk Officers",
      C: "Relationship Managers",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 144,
    question: "________________ attention shall be paid to quantifiable and non-quantifiable risks",
    options: {
      A: "Different",
      B: "Equal",
      C: "Fastidious",
      D: "Particular",
    },
    correctOption: "B",
  },
  {
    id: 145,
    question: "Before granting credit to an individual or sole proprietorship you must do all the following except",
    options: {
      A: "Have a personal relationship with the client.",
      B: "Have a complete and accurate picture of their financial position.",
      C: "Independent check of their sources of income.",
      D: "Interviews and personal visits to their place of business.",
    },
    correctOption: "A",
  },
  {
    id: 146,
    question: "Individuals or business credit must be secured by all the following except",
    options: {
      A: "Tangible, marketable collateral that has a market value",
      B: "Collateral that are easy to check and easy to dispose of.",
      C: "Collateral that is in the possession of, or pledged to the Bank",
      D: "Relevant past history with the Bank",
    },
    correctOption: "D",
  },
  {
    id: 147,
    question: "Unsecured loans to individuals or organizations, other than to members of staff of the Bank, shall require",
    options: {
      A: "Tangible, marketable collateral that has a market value",
      B: "Collateral that are easy to check and easy to dispose of.",
      C: "Collateral that is in the possession of, or pledged to the Bank",
      D: "GMD/GDMD’s approval irrespective of the amount involved (in addition to other approvals that may be required).",
    },
    correctOption: "D",
  },
  {
    id: 148,
    question: "Which of the following is not a type of Credit Exposures?",
    options: {
      A: "Legal Commitments",
      B: "Term loan",
      C: "Unadvised Facility",
      D: "Advised Facility",
    },
    correctOption: "A",
  },
  {
    id: 149,
    question: "A credit extension made known to the borrower and to which the Bank is committed (As long as the borrower fulfills prior conditions) is………….",
    options: {
      A: "An unadvised facility",
      B: "An overdraft facility",
      C: "A known facility",
      D: "An advised facility",
    },
    correctOption: "D",
  },
  {
    id: 150,
    question: "Acceptance of an advised credit by a corporate client must be supported by a…………………., among other requirements of the facility terms.",
    options: {
      A: "Board Resolution",
      B: "Mandate",
      C: "Memo and Article",
      D: "All of the above",
    },
    correctOption: "A",
  },
  {
    id: 151,
    question: "The tenor of revolving credits must not exceed",
    options: {
      A: "1 year",
      B: "2 years",
      C: "3 years",
      D: "5 years",
    },
    correctOption: "C",
  },
  {
    id: 152,
    question: "To manage the Bank’s exposure effectively, an Account Officer may choose not to advise the full amount of the facility approved and available for a client. This may be done for one of the following reasons:",
    options: {
      A: "To restrict response to emergency needs for additional lines",
      B: "To give a client with a track record of overtrading or who is constantly exceeding the authorized limits free reign",
      C: "To enable an Account Officer distance himself from a new client before committing the Bank to the client extensively",
      D: "As a marketing tool",
    },
    correctOption: "D",
  },
  {
    id: 153,
    question: "An Overdraft (OD) is a line of credit that allows a customer to write a cheque for ............... the actual balance on the account with a finance charge on the excess.",
    options: {
      A: "exactly",
      B: "less than",
      C: "more than",
      D: "none of the above",
    },
    correctOption: "C",
  },
  {
    id: 154,
    question: "Ideally, the use of an OD should be restricted to:",
    options: {
      A: "Working capital requirements",
      B: "Bridge any funding gap",
      C: "Meeting urgent financing needs",
      D: "Any of the above",
    },
    correctOption: "A",
  },
  {
    id: 155,
    question: "It is imperative for an account officer to study the client’s business and satisfy himself as to:",
    options: {
      A: "The reasonableness of the overdraft amount required",
      B: "The usage of the facility matching the client’s business cycle",
      C: "The client’s profits being able to absorb the interest payable by carefully assessing its profitability",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 156,
    question: "For customers wishing to draw against confirmed drafts (DAU/D of DAUE), the facility shall be approved for:",
    options: {
      A: "Not more than 1 year",
      B: "The tenor the draft is in clearing",
      C: "30 years",
      D: "90 years",
    },
    correctOption: "B",
  },
  {
    id: 157,
    question: "The tenor of the Revolving Credit must not exceed ............. The facility should be made available only to clients in more stable industries and who have strong financial planning systems.",
    options: {
      A: "180 days",
      B: "Three years",
      C: "Five years",
      D: "60 days",
    },
    correctOption: "B",
  },
  {
    id: 158,
    question: "Warehouse financing is best suited where:",
    options: {
      A: "The items financed are fast-moving consumer goods",
      B: "Maximum tenor is 12 months",
      C: "Forced sale value of goods is adequate to cover exposure",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 159,
    question: "Where a warehouse financing facility is granted, which of the following is necessary?",
    options: {
      A: "Periodic stock taking is required to verify quantity",
      B: "Release from stock should be on a FIFO basis",
      C: "Bank takes physical control of the goods",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 160,
    question: "What is the maximum tenure of a time loan?",
    options: {
      A: "One year or less",
      B: "More than 1 year but less than 2 years",
      C: "Not more than 2 years",
      D: "More than 2 years but definitely not more than 3 years",
    },
    correctOption: "A",
  },
  {
    id: 161,
    question: "What is the maximum tenor of a term loan?",
    options: {
      A: "7 years",
      B: "8 years",
      C: "9 years",
      D: "10 years",
    },
    correctOption: "A",
  },
  {
    id: 162,
    question: "Where a financing request or risk is too large for one Bank, two or more Banks may jointly provide financing. The Bank shall be willing to participate in Syndications led by other Banks subject to:",
    options: {
      A: "The percentage contribution of the bank",
      B: "Syndicated facility being subject to the same high standards of credit analysis, documentation, etc.",
      C: "Adequate security",
      D: "All of the above",
    },
    correctOption: "B",
  },
  {
    id: 163,
    question: "Under what condition will the Bank assume lead roles in syndication?",
    options: {
      A: "Where the customer is well known to it",
      B: "Where the Bank is providing more than 50% of funds",
      C: "Where the Bank has the expertise and capacity to manage the syndication fully",
      D: "All of the above",
    },
    correctOption: "C",
  },
  {
    id: 164,
    question: "Policy Loans: These are exceptional or unsecured credit extensions to certain companies and/or individuals having special relationships with the Bank, some of which are already subject to certain restrictions by law except:",
    options: {
      A: "Unsecured credit to Bank Directors",
      B: "To companies where Bank Directors are also directors",
      C: "Corporate guarantees",
      D: "All of the above",
    },
    correctOption: "E",
  }
  , {
    id: 165,
    question: "Agricultural loans are one of the most complex and high-risk loans the Bank can grant. What factors should be considered during the appraisal of proposals?",
    options: {
      A: "Vulnerability to weather, pest, disease, etc.",
      B: "Specialized skills are required for appraisal",
      C: "Long maturing period of certain agricultural products",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 166,
    question: "The Bank may extend credit for specific agricultural ventures provided that:",
    options: {
      A: "It is for the production of maize, rice, & Soya beans",
      B: "It is for animal husbandry including poultry & fish farming",
      C: "It is for production of cash crops like rubber, cocoa, tea, etc.",
      D: "The Bank receives acceptable guarantees from public, private sources external to the project",
    },
    correctOption: "D",
  },
  {
    id: 167,
    question: "Due to the long maturity period of tree crops and environmental hazards, what is the maximum tenor that the Bank may consider for an Agricultural loan?",
    options: {
      A: "5 years",
      B: "6 years",
      C: "7 years",
      D: "8 years",
    },
    correctOption: "D",
  },
  {
    id: 168,
    question: "Advance Payment, Bid Bonds, and Guarantees should contain all of the following elements except:",
    options: {
      A: "The Bank's undertaking must contain a specific expiration date",
      B: "The Bank's undertaking must be limited to a stated amount",
      C: "The Bank’s obligation to pay must arise upon the fulfillment of certain specified conditions",
      D: "The Bank may not charge a fee for its issuance",
    },
    correctOption: "E",
  },
  {
    id: 169,
    question: "What is the maximum tenor for placements with approved banks?",
    options: {
      A: "30 days",
      B: "60 days",
      C: "90 days",
      D: "360 days",
    },
    correctOption: "D",
  },
  {
    id: 170,
    question: "What is the nature of the limit that the CPG imposes on the bank concerning takings from other banks?",
    options: {
      A: "None",
      B: "Very strict",
      C: "Very liberal",
      D: "Conservative",
    },
    correctOption: "A",
  },
  {
    id: 171,
    question: "Access Bank policy is not to finance Armament and Gambling loans in any form. What exceptions, if any, exist in the CPG?",
    options: {
      A: "MCC approval is sufficient",
      B: "Board Credit Committee may approve",
      C: "GMD/GDMD may approve",
      D: "The Board of Directors must approve",
    },
    correctOption: "D",
  },
  {
    id: 172,
    question: "One Obligor Concept. Section 20 (1a) of the Banks and Other Financial Institutions Decree (BOFID) 1991 states that a Bank shall not grant more than 2 of its shareholders’ funds unimpaired by losses to a company, its subsidiaries and associates.",
    options: {
      A: "35%",
      B: "25%",
      C: "20%",
      D: "15%",
    },
    correctOption: "C",
  },
  {
    id: 173,
    question: "The concept of one obligor is taken further to include any company belonging to a group whose management are linked by virtue of their related ownership structure and in particular, where the fortune of one entity can readily pass to the other.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 174,
    question: "It shall be the responsibility of the Relationship Manager to determine whether or not related company obligations shall be aggregated.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 175,
    question: "As a guide, the term ‘One-obligor’ to a borrower including: All subsidiaries owned at least 50%; such interest to be an aggregate of both direct and indirect shareholdings.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 176,
    question: "Any less than 50% owned affiliate where the borrower exercises management control. Also where, in the opinion of the lending officer, the commercial fortunes of the affiliate are strongly influenced by the borrower.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 177,
    question: "Any obligor related to the borrower as a result of guarantees, endorsements, or other similar arrangements in favor of the Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 178,
    question: "All obligor under common ownership or control of a corporation or individual.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 179,
    question: "What is the current approval limit for Ex. Directors?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "A",
  },
  {
    id: 180,
    question: "What is the current approval limit for Group Deputy Managing Director?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "B",
  },
  {
    id: 181,
    question: "What is the current approval limit for Group Managing Director?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "C",
  },
  {
    id: 182,
    question: "What is the current approval limit for Management Credit Committee?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "D",
  },
  {
    id: 183,
    question: "What is the current approval limit for Board Credit Committee?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "E",
  },
  {
    id: 184,
    question: "What is the current approval limit for Board of Directors?",
    options: {
      A: "75mm",
      B: "150mm",
      C: "200mm",
      D: "500mm",
      E: "6bn",
      F: "above 6bn",
    },
    correctOption: "F",
  },
  {
    id: 185,
    question: "There is no limit to the amount of credit which may be approved by the Board of Directors provided the credit conforms to the CPG and statutory lending limit.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 186,
    question: "The Management Credit Committee is responsible for reviewing and approving all credits that are above the level of the Managing Director, including one-obligor commitments that exceed N15 million but lower than N20 million.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 187,
    question: "The Management Credit Committee shall meet at least once a month.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 188,
    question: "For an MCC meeting to be valid, the Chairman or the Vice Chairman must be present to preside over the meeting. Where either is not available, they may delegate any member of the Committee to serve as Chairman. The Chairman or Vice Chairman, the Secretary, and at least 2 other members shall form a quorum.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 189,
    question: "In the absence of the Group Managing Director, the GDMD automatically assumes the leading limit of the Group Managing Director.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 190,
    question: "Recommendation and approval of facilities shall be by a minimum of Credit Officers, at least one of which must have the authority to approve the recommended amount.",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctOption: "B",
  },
  {
    id: 191,
    question: "The bank’s pricing strategy shall be based on the following except:",
    options: {
      A: "Cost of funds",
      B: "Cost of administering and servicing the relationship",
      C: "Risk and return preference",
      D: "Customers ability to pay",
    },
    correctOption: "D",
  },
  {
    id: 192,
    question: "Which of the following is not a consideration in ascertaining the margins to be applied in estimating lending rate?",
    options: {
      A: "Desired profitability of target market segment",
      B: "Desired profitability per customer",
      C: "Lending rates of peer banks",
      D: "Size of the customer",
    },
    correctOption: "D",
  },
  {
    id: 193,
    question: "What is the purpose of risk management policies?",
    options: {
      A: "To support the Bank’s business strategies",
      B: "To ensure the achievement of the bank’s overall corporate goals and objectives",
      C: "All of the above",
      D: "None of the above",
    },
    correctOption: "D",
  },
  {
    id: 194,
    question: "Risk management policies may play a role in ensuring optimal customer satisfaction while maintaining a sound risk asset portfolio.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 195,
    question: "Which one of the following does not form a critical part of the Bank’s risk management policy?",
    options: {
      A: "Management policies",
      B: "Performance standards",
      C: "Procedures",
      D: "None of the above",
    },
    correctOption: "D",
  },
  {
    id: 196,
    question: "The risk management policies and procedures of the bank are articulated mainly by:",
    options: {
      A: "The Board of Directors",
      B: "Management credit committee",
      C: "Credit Risk Management",
      D: "Relationship Management",
    },
    correctOption: "D",
  },
  {
    id: 197,
    question: "According to the CPG, the credit Risk Group of the bank is presently made up of how many divisions?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "5",
    },
    correctOption: "A",
  },
  {
    id: 198,
    question: "Where will all issues regarding credit risk management emanating from or covering the bank's branches in other countries other than Nigeria be treated?",
    options: {
      A: "Head office",
      B: "Country office",
      C: "Africa regional office",
      D: "Appropriate regional office",
    },
    correctOption: "A",
  },
  {
    id: 199,
    question: "Credit Risk Management at head Office is responsible for setting overall policies on all issues relating to credit risk management in every country where Access Bank is represented.",
    options: {
      A: "True",
      B: "False",
      C: "Not in all cases",
    },
    correctOption: "A",
  },
  {
    id: 200,
    question: "The Banks representative in other countries may institute their own independent credit risk management policies.",
    options: {
      A: "Yes",
      B: "No",
      C: "It depends on circumstances",
    },
    correctOption: "A",
  },
  {
    id: 201,
    question: "Any local policy in any of the Bank’s representative offices which turns out to be at variance with Head office policies.",
    options: {
      A: "Must be expunged from the books",
      B: "Will be considered to be null and void",
      C: "Must be approved at the same level as the Head office policies",
      D: "It depends",
    },
    correctOption: "C",
  },
  {
    id: 202,
    question: "Under what circumstance will the country office be permitted to institute their own local credit risk policies?",
    options: {
      A: "For issues not specifically addressed in Head office policies",
      B: "They may institute local policies adapted to their peculiarities",
      C: "Where Head office delegates to them the development of certain policies",
      D: "All of the above",
    },
    correctOption: "D",
  },
  {
    id: 203,
    question: "According to the CPG, such local policies of the country office would not be endorsed by Head office credit risk management, but must be approved by GDMD or GMD.",
    options: {
      A: "True",
      B: "False",
      C: "It depends",
    },
    correctOption: "B",
  },
  {
    id: 204,
    question: "Whose responsibility is it to ensure that the provisions of the CPG remain relevant and adequate?",
    options: {
      A: "The Board of Directors",
      B: "Executive management",
      C: "Management credit committee",
      D: "Head, credit risk group",
      E: "All personnel who are involved in the credit process",
    },
    correctOption: "E",
  },
  {
    id: 205,
    question: "An approval may be given by a designee other than the primary authority for such approval.",
    options: {
      A: "True",
      B: "False",
      C: "It is possible",
    },
    correctOption: "A",
  },
  {
    id: 206,
    question: "Where authority to approve is delegated, such designation can be in writing.",
    options: {
      A: "True",
      B: "False",
      C: "It depends",
    },
    correctOption: "B",
  },
  {
    id: 207,
    question: "Examples of credit products that shall qualify as term loans include the following except:",
    options: {
      A: "Equipment financing",
      B: "Raw material financing",
      C: "Asset replacement",
      D: "New technology capital loan",
    },
    correctOption: "B",
  },
  {
    id: 208,
    question: "This manual will guide you in managing loans.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 209,
    question: "It covers the marketing, analysis, processing, approval, and reporting of loans.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 210,
    question: "The manual also reviews the different types of products offered by the Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 211,
    question: "If you follow this guide, you will have the confidence of knowing that you are using proven methods that will result in high-quality loans that are efficiently managed.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 212,
    question: "The Board of Trustees of the Bank has approved these policies for use in Banking.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
      comment:"it's BOD"
  },
  {
    id: 213,
    question: "This guide eliminates the need for personal judgment in Banking.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 214,
    question: "As an Account Officer or Relationship Manager, you must know all aspects of the CPG.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 215,
    question: "You may not keep up to date with Banking laws, Central Bank credit guidelines, and market trends.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 216,
    question: "If the CPG differs from regulations then the marketer will decide the approach the Bank will use. He will also resolve other conflicts that may arise from time to time.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 217,
    question: "Any deviations from these policies must always be explained and justified in writing.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 218,
    question: "The Bank may need to change these policies and procedures as laws, market conditions, and the Bank’s strategy change.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 219,
    question: "This guide may be altered or even withdrawn as the need arises. The change in the above cases must be communicated to all concerned parties.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 220,
    question: "You must initiate changes to the CPG where you spot areas for improvement.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 221,
    question: "The Board of Trustees will approve all changes to the CPG.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 222,
    question: "This is a confidential document. You must not reveal or discuss its contents with non-Bank staff without approval from a senior officer. You must return this guide to the Credit Administration Department if you leave the Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 223,
    question: "Most of the topics in this guide are based on a few principles.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 224,
    question: "Understanding these principles will give you a better understanding of credit policy.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 225,
    question: "They will help you with day-to-day credit decision-making, especially when you come across new situations.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 226,
    question: "Before reading this manual we strongly oppose that you learn these principles and become increasingly aware of them in your day-to-day work.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 227,
    question: "This will not only sharpen your skills but also enhance your career.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 228,
    question: "Individuals and companies place their funds with us trusting our integrity in managing these funds.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 229,
    question: "This integrity must flow through everything the Bank does.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 230,
    question: "Any break in the chain of integrity, no matter how small and no matter where; will eventually lead to the decline of the Bank – if it is not checked.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 231,
    question: "The Bank will not take any action that may compromise its integrity.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 232,
    question: "It is easy to forget the importance of integrity. In credit functions you are far removed from the depositors who have entrusted their money to you.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 233,
    question: "As the funds you lend come from so many sources you often feel no specific responsibility.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 234,
    question: "As a Banker you must make a conscious effort to continuously strengthen your integrity.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 235,
    question: "The name Access Bank is a constant reminder of this need.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 236,
    question: "Two examples of the application of the integrity principle are, avoiding conflicts of interest (for instance loans to the Bank’s auditors) and not complying with Government regulations.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 237,
    question: "The Bank’s main activity is to manage risk.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 238,
    question: "Risk, simply defined, is the variability of possible outcomes.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 239,
    question: "For every transaction you must learn to identify and minimize all the potential risks in that transaction. One method is to think through the transaction step by step.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 240,
    question: "For every risk the Bank takes we must have a matching return for taking that risk.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 241,
    question: "All too often we take the interest and fees we charge as fixed and simply apply our efforts to structuring a credit.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 242,
    question: "In many instances the return on the credit is far too low for the risk of lending. For instance, a 10% profit margin on a loan is a small compensation for losing the whole loan.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 243,
    question: "It would take the profit of 10 loans just to break even. In this situation our success rate must be over 90% of all loans.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 244,
    question: "In special cases we might decide to have an exposure to a company at a low return with the expectation of getting other business/accounts, which will improve the profitability of the name.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 245,
    question: "From experience a bad loan takes more than ten times as much management effort as a good loan.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 246,
    question: "For every good loan, the opportunity cost in lost income from other activity is very high. Good loans are a major drag on the Bank’s efficiency.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 247,
    question: "A loan is a very complex transaction. As so many things can go wrong, we must take great care at every stage of the loan process.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 248,
    question: "A simple mistake can jeopardize the whole loan.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 249,
    question: "We must be accurate and diverse.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 250,
    question: "An element of accuracy is being specific on all aspects of the transaction. Nothing must be ambiguous or left to interpretation.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 251,
    question: "A guiding principle of credit is that all information should be independently verified.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 252,
    question: "This may involve an outside expert or a member of staff.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 253,
    question: "Independently verified information helps to reduce risk considerably.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 254,
    question: "An important aspect of independent verification is the separation controls. For instance, the person who prepares a credit should not be the one who approves it.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 255,
    question: "This is a very wide principle that occurs in several diverse forms.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 256,
    question: "The principle is not simply that certain items should be matched but that we need to understand corresponding items.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 257,
    question: "We need to know what should be matched with what and in some cases what should be deliberately mismatched.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 258,
    question: "A key principle of credit policy is that the Bank will always comply with all Government regulations.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 259,
    question: "The Bank operates under a license.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 260,
    question: "By not complying we not only breach our contract with the authorities we also risk losing our license or incurring penalties.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 261,
    question: "Also if we assume that Government regulations are in the best interest of the country, then we work against this interest when we break them.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 262,
    question: "If we break regulations and this information reaches the market, our reputation will be diminished.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 263,
    question: "The fall in reputation could result in lost business and reduced profit. Considering all the negative results of breaking regulations, we are much better off complying with them.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 264,
    question: "A loan is a contract between two (or more) parties where one party agrees to give the other party funds (or other similar items) based on agreed terms.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 265,
    question: "These terms should include when and how the funds will be given as well as when and how the funds will be paid.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 266,
    question: "Loans and advances form the bulk of a Commercial Bank’s total asset base.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 267,
    question: "The net income from loans is the bulk of the Bank’s total earnings.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 268,
    question: "Loans represent the Bank’s single largest exposure to jeopardy.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 269,
    question: "Due to these reasons the quality of the Bank’s loan portfolio is critical to the failure of the Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 270,
    question: "If you follow the CPG guidelines the Bank will have a well-managed, low quality loan portfolio.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
    comment:"because the bank will have a gud quality loan portfolio"
  },
  {
    id: 271,
    question: "Such a loan portfolio will give the Bank a competitive advantage in the Banking industry.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 272,
    question: " An OD fluctuates regularly and even moves into credit periodically as business cycle is completed.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 273,
    question: "Though theoretically repayable on demand, an OD may in practice, run from year to year without being called in.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
    comment:"OD may also be revolving"
  },
  {
    id: 274,
    question: "The company’s ability to complete its asset conversion cycle, its profitability, relationships and exposures to other Banks are key considerations in fixing an initial overdraft limit for a client. The extent of utilization of the facility and turnover recorded on the client’s account are principal issues to be considered when the facility is due for renewal; assuming the quality of the underlying credit still meets the CPG minimum rating.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 275,
    question: "An OD does not have to meet the Bank’s legal and internal documentation guidelines.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 276,
    question: "For an OD line formal notice to the customer is not required if the line is to be cancelled, frozen or the account closed. Unilateral decision, if not properly communicated, may expose the Bank to litigation. For account closure (unless due to fraud, or bad debt) good relationship management dictates that notice should be given to enable the customer to make alternative arrangements with another Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 277,
    question: "A customer may never be allowed to overdraw its account with us.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 278,
    question: "Adequate security shall be taken for temporary overdrafts (temps) not supported by confirm drafts, which should not exceed 20 working days.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 279,
    question: "Request for longer tenors for temps not supported by confirm drafts, shall be documented as proper in a FAM and FSR.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 280,
    question: "All temps shall be approved by officers who have authority to do so while clean accommodations should require one-up approval.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 281,
    question: "Any temporary accommodation that remains outstanding after 20 days shall be classified as a Past Due Loan.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 282,
    question: "Good clients with substantial turnover, strong management can be offered direct credit (instant credit) for cheques lodged into their accounts for clearing.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 283,
    question: "Financial Institutions are often given direct credit if they carry a risk rating of 2 or 3.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 284,
    question: "Banker’s Acceptance (BA) can be sold to a third party usually at a discount. By accepting the bill (signing accepted on the bill) the accepting institution guarantees payment of the bill.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 285,
    question: "BA is usually revolving and available for periods up to 9 months.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 286,
    question: "Usually, the line is available on standby to fund any type of transaction.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 287,
    question: "Rollover of BAs is dependent on prompt liquidation of the earlier draw down. It is often discouraged that a standby OD line be put in place for the customer.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 288,
    question: "We cannot sell Bankers’ Acceptances when we need more liquidity so we have to be extremely careful with BAs.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 289,
    question: "For a Revolving Credit, the customer may re-borrow sums as needed up to the limit of the facility. It is usually given to finance a company’s permanent working capital and is evergreen for the period of the total facility.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 290,
    question: "Commercial Paper (CP) are secured short-term promissory notes (usually between 30-180 days) of corporate bodies, issued directly to the investing public sometimes through an issuing house. We will only issue Commercial Paper on behalf of companies whose risk ratings are not lower than 2 and where this classification is not due to strong collateral.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 291,
    question: "Although CPs are issued unsecured and carry no direct credit exposure for the Bank, the Bank’s reputation is put on the line each time we issue a CP.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 292,
    question: "Access Bank can buy or fund the purchase of a capital asset at a client’s request and hire or lease it to them at an agreed rental.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 293,
    question: "The title of the asset resides with the client until the last installment is paid and the client exercises its option to purchase the asset at the pre-determined price stated in the lease agreement.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 294,
    question: "Access Bank will finance leases for a wide range of equipment in normal use such as textile machinery, computers, industrial machines, telecommunications equipment, aircraft, ships and boats, motor vehicles, etc.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 295,
    question: "Loans supported by unaudited statements are encouraged and will not require one-up approval.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 296,
    question: "The credit management cycle in Access Bank has 5 distinct phases.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 297,
    question: "The type of customer selected to be approached for banking services would depend on whether the company falls within the Bank’s target market and that the company falls within our risk acceptance criteria.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 298,
    question: "Credit Analysis and Packaging does not include collecting information, analyzing the industry, the client and their financing need, judgment on ability to repay, negotiating or structuring appropriate facilities that meet the customer’s needs while falling within our credit guidelines and obtaining necessary approvals for such credit request.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 299,
    question: "Developing the association with our clients and monitoring their business is unnecessary, not only to ensure repayment but also to explore new business opportunities and keep our competitive edge.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 300,
    question: "Credit Administration and Control are the step by step procedures a credit follows from initial contact to final repayment. They are necessary to keep our quality and consistently high.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 301,
    question: "Establishment of a target market and a client focus form the basis of strategically strong business and credit relationships.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 302,
    question: "We intend to meet all the finance needs of all customers.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 303,
    question: "The target markets are the industries a particular credit team concentrates its marketing efforts on.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 304,
    question: "Client focus identifies the specific customers outside that target market for whom we wish to be the primary Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 305,
    question: "Lending to these customers will be dependent on their meeting our Risk Acceptance Criteria.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 306,
    question: "Building a profitable, high quality credit portfolio should not be the key aim of every Account Officer.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 307,
    question: "A good Account Officer is not one that aims at winning and retaining any client at all costs but the one that learns to say ‘no’ not just to low quality credit proposals but also those credit requests that do not fit into our corporate strategy.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },

  {
    id: 308,
    question: "You must know clearly its target market both at the industry level and the client level.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 309,
    question: "You must clearly see how your marketing goals fit into the Bank’s strategy.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 310,
    question: "Ensure portfolio risks are minimized by avoiding excessive loan concentration in any industry, region, or product.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 312,
    question: "The Bank, according to the guide, will play across the entire chain of its customers' business.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 313,
    question: "The guide is designed to be a holistic framework for creating and managing risk assets.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 314,
    question: "According to the guide, there may be clients of the Bank who will have several units responsible for approving all credit extensions related to the client.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 315,
    question: "The authority to extend or approve credit is granted to individual credit officers based upon their grades, portfolio, and length of stay in the organization.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 316,
    question: "Credit approval officers are recommended by service members of risk and business management for approval by shareholders at general meetings.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 317,
    question: "The level of authority required to approve credit will increase as amounts and transaction risks increase and as risk rating worsens.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  }, {
    id: 318,
    question: "The risk asset portfolio of the bank shall be deliberately managed to ensure concentration of risk to choice industries, market sectors, and individual customers to ensure portfolio liquidity.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 319,
    question: "Credit risk is described as the potential that a bank borrower or customer party will fail to meet obligation in accordance with agreed terms.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 320,
    question: "Direct lending risk is that actual customer obligation and contingent obligations will not be repaid on time.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 321,
    question: "Direct lending risk exists only at the commencement of the credit extension.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 322,
    question: "Contingent lending risk is the risk that potential customer obligation will become actual obligation and will not be repaid on time.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 323,
    question: "In underwriting and distribution activities, in the event of a commitment to purchase a security or other debt instrument from an issuer or seller, there is a risk of inability to sell the instrument within a predetermined distribution period to an investor or purchaser.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 324,
    question: "Pre-settlement risk is the risk of default on a contractual obligation before settlement of the contract by a counterparty in a transaction.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 325,
    question: "Clearing risk may occur when funds are transferred on a customer’s instructions to transfer or to order the transfer of funds before the bank receives reimbursement or the customer’s account is funded.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 326,
    question: "Equity risk occurs when the bank invests in, holds, or receives equity, equity-like securities, or other junior securities in non-affiliated entities.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 327,
    question: "Price risk is the risk that market conditions may change for an individual instrument or for all securities of the same general class.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  }
  , {
    id: 328,
    question: "Liquidity risk is the risk that the bank may be unable to meet its financial commitments to customers or markets when due.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 329,
    question: "Fiduciary risk occurs when the bank is charged with the responsibilities of acting as a trustee for third parties, i.e., in the event that a trust agreement is not in place clearly outlining the duties and responsibilities of the bank, and when the bank may be exposed to potential or real conflict of interest.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 330,
    question: "Disclosure risk is the risk that there is disclosure of information that the bank knows or should have known to be incorrect.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 331,
    question: "Country risk is the risk that an event in a country will impair the value of the Bank’s assets or will adversely affect the ability of obligations within that country to honor their obligations to the Bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 332,
    question: "The Bank’s credit risk Management framework is made up of -------------- distinct modules for the proactive creation and deliberate management of credit risk exposures in the Bank.",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctOption: "C",
  },
  {
    id: 333,
    question: "In line with the bank’s planning cycle, risk portfolio plans shall be developed and approved at the overall bank level only.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 334,
    question: "In the unlikely event of a decline in the quality of assets, prompt identification and management of such delinquency may likely reduce credit loss to the bank.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 335,
    question: "Is it right to state that in the absence of approved credit programs, transactions for individual customers or customer relationships will be treated as individual/business credit?",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 336,
    question: "As a result of their peculiar nature, all exposures to a customer or a group approved as individual/business credits must be aggregated and managed by credit risk management.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  }
  , {
    id: 337,
    question: "The Board Credit committee is comprised of 6 non-executive directors, the Group Managing Director, the Group Deputy Managing Director, and a few executive directors.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 338,
    question: "The Board Credit Committee shall meet not more than once quarterly.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 339,
    question: "For an MCC meeting to be valid, the CPG provides that such a meeting must be presided over by the GMD or GDMD only.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 340,
    question: "It is not always necessary for members of MCC to attend meetings; approvals can also be obtained by circulation of credit memos for the benefit of the absenting members.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 341,
    question: "The Criticized Assets Committee shall be convened normally every month to review all qualifying assets and take decisions on remedial actions and/or provisioning.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 342,
    question: "Facilities shall be regarded as diligent where normal repayment of principal and/or interest is in arrears for less than 360 days.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 343,
    question: "The decision to transfer non-performing facilities to the Remedial Assets Management Unit must be taken at the Management Credit Committee (MCC) meeting under the chairmanship of the GMD.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 344,
    question: "Is it right to state that credit approval is always required for the establishment of a credit facility.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 345,
    question: "Risk rating limits are the only mechanism to control the Bank’s portfolio of credit exposures.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 346,
    question: "Risk rating limits are established by the Head of Credit Risk Management and approved by the Criticized Assets Committee.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  }
  , {
    id: 347,
    question: "Is it right to state that Risk rating limits, no matter how appropriate, are subject to legal launching limits?",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 348,
    question: "Risk rating limits shall be established for the following classes of borrowers except:",
    options: {
      A: "Banks",
      B: "Corporation",
      C: "Govt. owned or controlled entities",
      D: "Individuals",
    },
    correctOption: "D",
  },
  {
    id: 349,
    question: "For purposes of applying Risk rating limits which of the following is true: the obligor risk rating that must be used for",
    options: {
      A: "For corporations, the obligor risk rating of the parent company",
      B: "For bank syndicated loans, the risk rating of the lead bank",
      C: "For other entities, the risk rating as determined in accordance with the Risk Rating Policy.",
      D: "All of the above. Pg75",
    },
    correctOption: "D",
  },
  {
    id: 350,
    question: "Exposure against Risk rating limits is measured as the outstanding and unusual commitments (OSUC) to a given relationship.",
    options: {
      A: "True pg75",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 351,
    question: "For purposes of measuring exposure against risk rating limits, OSUC may be considered gross of reductions resulting from sales of assets and risk mitigation efforts.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 352,
    question: "For purposes of measuring exposures against Risk Rating Limits tenor buckets, contractual principal repayments may not be taken into consideration.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 353,
    question: "All cash, immaterial and personal Risk Rating Limits captions require approval from the GMD and Head of Credit Risk Management.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
    comment:""
  },
  {
    id: 354,
    question: "All risk rating limits exceptions will be reported quarterly to the Management Credit Committee.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 355,
    question: "On an annual basis, the Head of Credit & Risk Management will review all risk rating limit exceptions including exceptions that have aged past their originally established and approved resolution period.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 356,
    question: "A proposal or marketing letter does not require credit approval as long as it does not obligate the bank in any way.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  }
  ,
  {
    id: 357,
    question: "Is it right to state that it is the responsibility of the Head of Credit Risk Management to ensure that actual OSUC stays within the Risk Rating Limit?",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 358,
    question: "When establishing total facilities for a relationship, total facilities must include the seller risk in a securitization transaction, i.e. a minimum of 5% of the notional amount.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 359,
    question: "The level of authority required for approval is a function of the facilities amount.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 360,
    question: "All credit requests that are above the limit of the Executive Director for Rest of Africa must be approved at the next higher appropriate level - GDMD/GMD/MCC/BCC/BOARD.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 361,
    question: "All extensions of credit or individual / Business credit transactions shall require investment of at least 5 bank officers whose positions involve responsibility for credit creation.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 362,
    question: "Is it right to state that the sign-off by at least one officer from Credit Risk Management with exposure endorsement authority is not always a condition for approval of credit?",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 363,
    question: "If total facilities exceed the Risk Rating Limit, is it alright to determine that the level and purpose of the facilities are reasonable, and that there is an effective process to ensure that actual OSUC remains within the Risk Rating Limit?",
    options: {
      A: "Yes ",
      B: "No",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 364,
    question: "Is it right to state that the purpose and other terms and conditions may not be specified in the original approval of total facilities?",
    options: {
      A: "Yes",
      B: "No",
      C: "Maybe",
    },
    correctOption: "A",
  },
  {
    id: 365,
    question: "Is it always in all situations that careful consideration must be given to the adequacy of collateral for additional exposure?",
    options: {
      A: "Yes",
      B: "No",
      C: "Maybe",
    },
    correctOption: "B",
  },
  {
    id: 366,
    question: "Availments under approved credit facilities shall be through availment note approval by an officer in Credit Risk Management.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
    },
    correctOption: "B",
  }
,{
  id: 367,
  question: "When the amount of a credit facility is reduced or cancelled or the tenor is reduced, the RM should, if he deems it necessary, advise the Credit Risk Management in writing.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 368,
  question: "Which of the following statements is **not** correct?",
  options: {
    A: "All credit facilities must be reviewed once every 12 months",
    B: "The periodic reviews may be temporarily extended for up to 30 days with approval of the Business ED and Head of Credit Risk Management",
    C: "Extension beyond 30 days, up to 60 days must be approved by GDMD",
    D: "Extension beyond 60 days must be approved by MCC",
  },
  correctOption: "D",
},
{
  id: 369,
  question: "The use of unaudited financial statements for credit approval requests is generally discouraged but may suffice.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 370,
  question: "When an established credit facility undergoes a material change in terms, the total facility must be re-approved. Who determines materiality?",
  options: {
    A: "RM",
    B: "Head, Credit Risk Management",
    C: "MCC",
    D: "BCC",
  },
  correctOption: "B",
},
{
  id: 371,
  question: "In the course of reallocation of approved facilities, who has the responsibility for material changes?",
  options: {
    A: "RM",
    B: "Business Group Head",
    C: "Business ED",
    D: "Head, Credit Risk Management",
  },
  correctOption: "D",
},
{
  id: 372,
  question: "The release of collateral, guarantees, or support for any type of credit transaction must be approved by the responsible Business ED.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 373,
  question: "In best efforts undertaking, although the Bank does not assume a legal commitment to fund any distribution shortfall, there is a risk in the form of franchise damage associated with a failed undertaking.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 374,
  question: "Is it right to state that in the distribution of an underwritten position through assignment, the bank remains obligated in the event that the participants fail to fund?",
  options: {
    A: "Yes",
    B: "No",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 375,
  question: "Under the CPG, each underwriting and distribution must have a defined distribution period that cannot exceed how many days?",
  options: {
    A: "30",
    B: "60",
    C: "90",
    D: "120",
  },
  correctOption: "C",
}
,{
  id: 376,
  question: "An offer letter is a firm commitment by the bank to lend to customers.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 377,
  question: "The following are examples of credit products that can qualify as term loans **except**:",
  options: {
    A: "Equipment financing",
    B: "Operating expenses",
    C: "Asset replacement",
    D: "Working capital loan",
  },
  correctOption: "B",
},
{
  id: 378,
  question: "Revolving credits are short-term facilities with predefined cycles that relate to the customer’s objectives and plans.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 379,
  question: "Qualification for revolving credit facilities shall be limited to customers with established businesses in emerging markets.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 380,
  question: "Where a temporary overdraft accommodation remains outstanding for longer than 30 days, it shall be classified as a past due loan.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 381,
  question: "Drawings under DAUE/DAUD are strictly against third-party cheques or bank drafts and sometimes, depending on the customer or circumstances, on the company’s own cheques.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 382,
  question: "No drawings in excess of the approved DAUD/DAUE limits are allowed, however, we may seek one-up approval to accommodate the customer.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 383,
  question: "Customers may be allowed a DAUD/DAUE where cheques are drawn on persons or organizations that are considered and/or rated as ‘No Risk’ by the bank.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 384,
  question: "Occasionally, we may allow DAUD/DAUE to be cleared after the applicable clearing period has lapsed.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
}
,{
  id: 385,
  question: "Where a Bond / Guarantee to be issued is not cash backed, it is sufficient if it includes a claim to make it (bond / guarantee) effective only upon receipt of an equivalent cash amount from the beneficiary.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 386,
  question: "From your knowledge of issuance of bonds and guarantees, is it right to state that in some cases, the bonds may be issued on a clean basis?",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 387,
  question: "In the issuance of a bond/guarantee, it is sufficient that the maturity of the underlying contract matches the tenor of the bond/guarantee.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 388,
  question: "The bank’s obligation in a bond could be limited to a specific amount, but this is not always necessary.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 389,
  question: "Issuance of guarantee/bonds must be reviewed by the Head of Credit Risk Management for adequate wording to protect the interest of the bank.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 390,
  question: "On expiration, the bond or guarantee need not be returned to the bank before the cash collateral is released.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 391,
  question: "The issuance of guarantees to support offshore facilities is highly desirable and encouraged as long as the account officer obtains approval at the next higher level than is required under the Guide.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 392,
  question: "The Bank may guarantee a commercial paper issuance. Typically, CPs have tenors between 45 days and 270 days.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 393,
  question: "In general, warehouse financing should only be considered where the goods financed are slow-moving consumer goods.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 394,
  question: "In warehouse financing, it is always necessary that the bank takes physical control of the goods; sometimes it is sufficient if a reportable warehousing agent is appointed.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
}
,{
  id: 395,
  question: "Normally, the maximum tenor for a warehouse financing facility is 12 months; however, depending on the nature of the goods financed, it may be granted for a longer tenor.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 396,
  question: "Generally, goods financed under warehouse financing are valued on a LIFO basis.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 397,
  question: "Periodic stock taking is desirable to verify the quantity and quality of goods financed.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 398,
  question: "The FSV of the goods ought to be adequate to cover the bank’s exposure at the commencement of the facility.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 399,
  question: "The appointment of acceptable warehousing agents will be approved by MCC based on the recommendation of the relationship manager.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 400,
  question: "Under the CPG, the bank will only participate in loan syndication if it (Access Bank) is leading.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 401,
  question: "In view of the nature of syndicated loans, such facilities may not be subject to the same high standards required under the policy.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 402,
  question: "Unsecured credit extensions may be made to bank directors, to companies where bank directors are also directors, or companies owned or controlled by close associates or relatives of directors of the bank.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 403,
  question: "Loans in this category must be approved by the Board prior to drawdown & ratified at the next Board meeting.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 404,
  question: "Irrespective of the loan amount, unsecured credit extensions must be approved by the GMD ultimately.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
}
,
{
  id: 405,
  question: "Though armaments and gambling are undesirable lines of business, the Board of directors may, from time to time, approve credit extension to these sectors.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 406,
  question: "Credit fees and services charges are periodically reviewed by credit Risk Management to ensure competitiveness in the marketplace.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 407,
  question: "Is it right to state that a perfected legal mortgage in the name of the bank is the minimum requirement for all items pledged as security for credit facilities?",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 408,
  question: "All credit extensions to corporate obligations must be secured by an all-assets debenture.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 409,
  question: "Is it right to state that life assurance policies and personal guarantees cannot be used to exclusively secure a facility?",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 410,
  question: "All assets and items pledged to the bank as credit collateral ought to be appropriately covered by a valid insurance policy.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 411,
  question: "Is it right to state that the CPG requirements for insurance do not cover guarantees & negative pledges?",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 412,
  question: "Estimates of forced sale value of the collateral item(s) should be adequate to ensure full recovery of the bank’s principal credit exposure at least.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 413,
  question: "Preliminary screening of credit requests should be completed, ideally within 48 hrs of receipt of a credit facility request.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 414,
  question: "In the event that the outcome of the preliminary credit screening of a request concludes that such facility does not meet acceptance criteria, the relationship Manager may make a passionate appeal to the Group head for a review.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
}
,{
  id: 415,
  question: "In the event that a simple bank customer has multiple exposures and facilities, a single credit file may not be sufficient to maintain information on all the credit dealings with the bank.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 416,
  question: "Waivers of any pre-availment condition included in the credit approval may not require approval in writing at the appropriate approval credit authority level as long as their Head credit risk Management’s concurrence is obtained.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 417,
  question: "Availment and drawdown on approved credit facility should be subject to confirmation by the legal department that all pre-availment conditions are completed.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 418,
  question: "Exposure management entails on an ongoing basis prompt and timely identification of decline in quality/performance of a credit exposure.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 421,
  question: "According to the credit policy guide, it is the responsibility of the relationship manager to monitor the performance of credit facilities.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 422,
  question: "Whose responsibility is it to review credit facility performance?",
  options: {
    A: "Account Officer",
    B: "Relationship Manager",
    C: "Credit Risk Manager",
  },
  correctOption: "B",
},
{
  id: 423,
  question: "Whose duty is it to confirm status and adequacy of collateral and legal documentation?",
  options: {
    A: "Relationship Manager",
    B: "Legal officer",
    C: "Credit Risk Manager",
  },
  correctOption: "A",
},
{
  id: 424,
  question: "Whose duty is it to evaluate the impact of industry and market factors on the customer and customer’s financial position?",
  options: {
    A: "Credit Admin.",
    B: "Account officer",
    C: "Relationship ManageR",
  },
  correctOption: "C",
},
{
  id: 425,
  question: "Exposure Management entails restructuring exposures as may be required.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 426,
  question: "How often must the MCC institute a review of exposures?",
  options: {
    A: "Annually",
    B: "Quarterly",
    C: "Monthly",
  },
  correctOption: "B",
}
,{
  id: 427,
  question: "The overall responsibility of sustaining the quality of credit risk exposures is certainly that of credit risk management.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 428,
  question: "…………… will be responsible for the overall credit quality review of all outstanding risk exposures.",
  options: {
    A: "Credit Risk Management",
    B: "Relationship Manager",
    C: "Credit Admin",
  },
  correctOption: "B",
},
{
  id: 429,
  question: "Relationship management will periodically report all temporary overdrafts and excesses over approved limits for appropriate action.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 430,
  question: "Decline in the quality of Risk exposure is to be brought to the attention of the GMD and GDMD immediately.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 431,
  question: "Management of credit collateral is the sole responsibility of relationship management.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 432,
  question: "The cost of conducting searches is borne by the obligor whether or not we obtained prior consent to incur such expenditure.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 433,
  question: "In the event that the collateral for a credit facility is a mortgage on landed property, which one of the following shall be a condition precedent to final approval?",
  options: {
    A: "Receipt of governor’s consent",
    B: "Receipt of certificate of occupancy",
    C: "Receipt of certificate of good title",
    D: "All of the above",
  },
  correctOption: "C",
},
{
  id: 434,
  question: "What is the purpose of the collateral management plan?",
  options: {
    A: "To ensure that periodic inspections are carried out to ensure the existence of collateral security.",
    B: "To indicate predetermined intervals for review of credit collateral",
    C: "To indicate the quality of Risk exposure.",
  },
  correctOption: "B",
},
{
  id: 435,
  question: "A collateral management plan is required for each approved facility.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 436,
  question: "What is the purpose of the periodic inspection of collateral security?",
  options: {
    A: "To ensure the existence and adequacy of the security",
    B: "Confirm existence of security agreement",
    C: "Verify the existence of adequate insurance protection",
    D: "All of the above",
  },
  correctOption: "D",
}
,{
  id: 437,
  question: "Who is responsible for the implementation of the collateral management plan?",
  options: {
    A: "Credit Risk Management",
    B: "Relationship management",
    C: "Legal department",
    D: "Administrative department",
  },
  correctOption: "A",
},
{
  id: 438,
  question: "Delinquency in credit quality and performance can be as a result of a downgrade in credit Risk Rating.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 439,
  question: "Relationship management shall maintain a watch list of the delinquent facilities for circulation to the CAC on a regular basis.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 440,
  question: "A formal delinquency notice shall be made to the customer within 7 working days of default to demand payment.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 441,
  question: "A second delinquency notice is usually made after 14 working days of the first notice in the event of non-performance.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 442,
  question: "Credit facilities may be classified as remedial Accounts after 360 days.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 443,
  question: "Interest accruals on non-performance exposures may be suspended in accordance with the bank’s credit loss provision policy.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 444,
  question: "Who develops the plan of delinquency management?",
  options: {
    A: "Credit Risk Management",
    B: "Legal Department",
    C: "Relationship Management",
  },
  correctOption: "A",
},
{
  id: 445,
  question: "The responsibility for delinquency management shall be referred to the legal department.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 446,
  question: "Where a proposed plan to restructure an existing credit exposure is presented, detailed credit risk analysis of the proposed credit structure may not be required.",
  options: {
    A: "True correct",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
}
,{
  id: 447,
  question: "As part of on-going exposure management, a credit facility may be restructured at the request of the obligor.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 448,
  question: "As soon as a credit facility is identified as delinquent, adequate loan loss provision ought to be made in accordance with the bank’s credit policy.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 449,
  question: "Consideration of waivers of interest and/or credit charge shall be limited to credit exposures classified as very doubtful.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 450,
  question: "Most waivers of interest and charges require approval of the GMD or GDMD.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 451,
  question: "Under which of the following circumstances will a non-performing exposure be recommended for write-off?",
  options: {
    A: "Continued contact with customer is impossible",
    B: "Recovery cost is expected to be higher than the outstanding debt",
    C: "Amount realized from sale of collateral leaves a balance of the debt",
    D: "All of the above",
  },
  correctOption: "D",
},
{
  id: 452,
  question: "According to the CPG, all write-offs require approval by the board of Directors and the Central bank of Nigeria.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 453,
  question: "In cases of erroneous interest or charges debited to a customer’s account, credit Risk Management is authorized to approve reasonable waivers of such erroneous charges or interests.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 454,
  question: "Under the CPG, the authority to approve credit shall be exclusively exercised by the bank’s credit risk management function.",
  options: {
    A: "True",
    B: "False pg63 gmd on delegation of bod",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 455,
  question: "According to the CPG, certain obligors and facilities may be assigned a risk rating in accordance with an approval Risk Rating process.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 456,
  question: "The bank’s portfolio Management process provides for backend definition of target risk stratification and on an ongoing basis, tracks the actual composition of the risk asset portfolio against the desired structure.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe"
  },
  correctOption: "B",
}
,
{
  id: 457,
  question: "Under the CPG there will be various standards across the bank for the origination, documentation and maintenance of extensions of credit.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 458,
  question: "According to the CPG, for obligors to whom we have extended credit, there will be several approvals across the bank towards problem recognition, the classification of problem exposure and remedial action.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 459,
  question: "Credit portfolio risk limits may be proposed by Credit Management and approved by the Management Credit Committee.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 460,
  question: "In order to ensure transparency of risks taken, it is the responsibility of Relationship Management to accurately, completely and in a timely fashion, report the comprehensive set of credit risk data into the independent risk reporting system.",
  options: {
    A: "True",
    B: "False ",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 461,
  question: "Settlement risk occurs when there is a simultaneous exchange of value with a counterparty for the same value date and verification that payment is received is not made until after the bank has paid/delivered on the obligation.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 462,
  question: "While considering settlement risk, there is also a risk that the counterparty does not deliver at all, resulting in exposure of the bank to direct lending risk.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 463,
  question: "Clearing risk is the risk that the bank may be reimbursed on another value date for payments made on behalf of customers.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 464,
  question: "Documentation risk is the risk that documentary evidence on which the bank depends to enforce rights under contracts or transactions will always be complete, covered and enforceable.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 465,
  question: "Legal and regulatory risks may occur when the Bank is subject to a change in exposure resulting from legal or criminal sanctions or litigations.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
}
,{
  id: 466,
  question: "Liquidity risk is that the bank will be able to meet all of its financial commitments to customers and markets when due.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 467,
  question: "Under the CPG, it is the responsibility of Management and the Board of Directors to ensure the integrity of the credit process and proper documentation of credit decisions.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 468,
  question: "The level of authority required to approve credit will decrease as amounts and transaction risks decrease and as risk ratings improve.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 469,
  question: "The CPG proposes a system of multiple standards for the measurement of credit risk in order to ensure consistency across business, stability in methodologies, and transparency of risk.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 470,
  question: "Contingent lending risks may occur in products ranging from letters of credit to guarantees to unusual commitments.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 471,
  question: "Direct lending risk exists for the entire life of a transaction.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 472,
  question: "Contingent lending risk exists for the entire life of the transaction.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 473,
  question: "Country risk events may include political events.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 474,
  question: "Tentative action shall be taken on a reactive basis to minimize the bank’s loss on a non-performing asset.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 475,
  question: "Under the CPG, approval credit product programs shall demonstrate that the behavior of the portfolio will not be predictable.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
}
,{
  id: 476,
  question: "Individual credits are applicable in respect of facility requests and credit approvals for customers that do not fit into credit product programmes and product offerings.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 477,
  question: "Individual/business credits are suitable for which, if any, of the under listed?",
  options: {
    A: "Where customer characteristics are unique",
    B: "Facility request is for a large, complex transaction that may present significant risk such that in-depth and detailed evaluation of the customer is required.",
    C: "Transaction will result in multiple facilities",
    D: "Any of the above",
  },
  correctOption: "D",
},
{
  id: 478,
  question: "Is it right to state that some credit activities in the Retail Banking business unit may be categorized as individual/business credits?",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 479,
  question: "The board credit committee is the highest credit approval body in the bank and is responsible for the approval of credit beyond the authorized approval limits.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 480,
  question: "The Board credit committee is headed by the GMD and by the GDMD in his absence.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 481,
  question: "The criticized assets committee is headed by GDMD and is convened once every month to review all qualifying assets and take decisions on remedial action and/or provisionary.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 482,
  question: "Loans that show little or no movement during their tenor or which fail to be liquidated on due date are to be regarded as delinquent.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 483,
  question: "The decision to transfer a non-performing facility to the remedial asset management unit is normally taken at Management credit committee meetings.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 484,
  question: "In some instances where it is determined that the probability of turnaround of a facility performing is remote, such a facility may be immediately classified as lost.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
}
,
{
  id: 485,
  question: "Under which of the underlisted instances will a facility be classified as lost?",
  options: {
    A: "At the death or disappearance of an obligor pg38",
    B: "Bankruptcy or going concern problems",
    C: "Unforeseen circumstances that have significant impact on the business.",
    D: "Any of the above",
  },
  correctOption: "A",
}
,
{
  id: 486,
  question: "Generally, recovery action may be instigated at any point in time in the life of a credit exposure.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 487,
  question: "In the event of delinquency, it is expected that the required approach to resolve lost credits shall be generic in every instance in compliance with the CPG.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 488,
  question: "In the event of recovery, the bank’s entitlement shall be limited to the full amount of principal and interest unpaid to date of recovery.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 489,
  question: "Where sale proceeds from realizing a collateral security fall short of the bank’s entitlement, the difference may be forgiven the customer.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 490,
  question: "The relationship manager is responsible for bringing industry, product, and other specialists (e.g., Legal, Tax) when required.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 491,
  question: "Risk management policies are approved by the Board Credit committee to enable informed decision-making and approval, and establish/maintain an appropriate environment for risk management.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "B",
},
{
  id: 492,
  question: "Compliance with the CPG shall be monitored on an ongoing basis by credit risk management and reported on a quarterly basis to the MCC.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 493,
  question: "Regardless of Risk Rating Limits, Legal Lending Limits will always prevail.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 494,
  question: "Exposure against Risk Rating Limits may be measured as the outstanding and unusual commitments (OSUC) to a relationship.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
},
{
  id: 495,
  question: "OSUC may not include settlement and clearing exposure, or the underwritten position of a credit under listing transaction unless the position becomes aged beyond the extension period.",
  options: {
    A: "True",
    B: "False",
    C: "Maybe",
  },
  correctOption: "A",
}
,
{
  id: 496,
  question: "What levels of approvals does a Cash Exception require?",
  options: {
    A: "Line ED",
    B: "H Risk",
    C: "MCC",
    D:"BCC"
  },
  correctOption: "A",
},
{
  id: 497,
  question: "What levels of approvals does an Immaterial Exception require?",
  options: {
    A: "Line ED",
    B: "H Risk",
    C: "MCC",
    D:"BCC"

  },
  correctOption: "A",
  
},
{
  id: 498,
  question: "What levels of approvals does a Passive Exception require?",
  options: {
    A: "Line ED",
    B: "H Risk",
    C: "MCC",
    D:"BCC"

  },
  correctOption: "A",
},
{
  id: 499,
  question: "What levels of approvals does Long-term Conditioning require?",
  options: {
    A: "Line ED",
    B: "H Risk",
    C: "MCC",
    D:"BCC"

  },
  correctOption: "C",
},


  {
    id: 500,
    question: "An approved Risk Rating Limit exception does not need to be re-approved during the annual review process.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 501,
    question: "This manual will guide you in managing loans.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 502,
    question: "It covers the marketing, analysis, processing, approval and reporting of loans.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 503,
    question: "The manual also reviews the different types of products offered by the Bank.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 504,
    question: "If you follow this guide, you will have the confidence of knowing that you are using proven methods that will result in high quality loans that are efficiently managed.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 505,
    question: "The Board of Trustees of the Bank has approved these policies for use in Banking.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 506,
    question: "This guide eliminates the need for personal judgment in Banking.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 507,
    question: "As an Account Officer or Relationship Manager, you must know all aspects of the CPG.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 508,
    question: "You may not keep up to date with Banking laws, Central Bank credit guidelines and market trends.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 509,
    question: "If the CPG differs from regulations then the marketer will decide the approach the Bank will use. He will also resolve other conflicts that may arise from time to time.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 510,
    question: "Any deviations from these policies must always be explained and justified in writing.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 511,
    question: "The Bank may need to change these policies and procedures as laws, market conditions and the Bank’s strategy change.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 512,
    question: "This guide may be altered or even withdrawn as the need arises. The change in the above cases must be communicated to all concerned parties.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 513,
    question: "You must initiate changes to the CPG where you spot areas for improvement.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 514,
    question: "The Board of Trustees will approve all changes to the CPG.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 515,
    question: "This is a confidential document. You must not reveal or discuss its contents with non-Bank staff without approval from a senior officer. You must return this guide to the Credit Administration Department if you leave the Bank.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 516,
    question: "Most of the topics in this guide are based on a few principles.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
   {
    id: 517,
    question: "Understanding these principles will give you a better understanding of credit policy.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 518,
    question: "They will help you with day-to-day credit decision-making, especially when you come across new situations.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 519,
    question: "Before reading this manual we strongly oppose that you learn these principles and become increasingly aware of them in your day-to-day work.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 520,
    question: "This will not only sharpen your skills but also enhance your career.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 521,
    question: "Individuals and companies place their funds with us trusting our integrity in managing these funds.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 522,
    question: "This integrity must flow through everything the Bank does.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 523,
    question: "Any break in the chain of integrity, no matter how small and no matter where, will eventually lead to the decline of the Bank – if it is not checked.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 524,
    question: "The Bank will not take any action that may compromise its integrity.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  },
  {
    id: 525,
    question: "It is easy to forget the importance of integrity. In credit functions you are far removed from the depositors who have entrusted their money to you.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 526,
    question: "As the funds you lend come from so many sources you often feel no specific responsibility.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "B",
  },
  {
    id: 527,
    question: "As a Banker you must make a conscious effort to continuously strengthen your integrity.",
    options: {
      A: "True",
      B: "False",
    },
    correctOption: "A",
  }
,
{
  id: 528,
  question: "The name Access Bank is a constant reminder of this need.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 529,
  question: "Two examples of the application of the integrity principle are avoiding conflicts of interest (for instance loans to the Bank’s auditors) and not complying with Government regulations.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 530,
  question: "The Bank’s main activity is to manage risk.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 531,
  question: "Risk, simply defined, is the variability of possible outcomes.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 532,
  question: "For every transaction you must learn to identify and minimize all the potential risks in that transaction. One method is to think through the transaction step by step.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 533,
  question: "For every risk the Bank takes we must have a matching return for taking that risk.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 534,
  question: "All too often we take the interest and fees we charge as fixed and simply apply our efforts to structuring a credit.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 535,
  question: "In many instances the return on the credit is far too low for the risk of lending. For instance, a 10% profit margin on a loan is a small compensation for losing the whole loan.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 536,
  question: "It would take the profit of 10 loans just to break even. In this situation our success rate must be over 90% of all loans.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 537,
  question: "However, in special cases we might decide to have an exposure to a company at a low return with the expectation of getting other business/accounts, which will improve the profitability of the name.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 538,
  question: "From experience a bad loan takes more than ten times as much management effort as a good loan.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 539,
  question: "For every good loan, the opportunity cost in lost income from other activity is very high. Good loans are a major drag on the Bank’s efficiency.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 540,
  question: "A loan is a very complex transaction. As so many things can go wrong, we must take great care at every stage of the loan process.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 541,
  question: "A simple mistake can jeopardize the whole loan.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 542,
  question: "We must be accurate and diverse.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
}
,{
  id: 543,
  question: "An element of accuracy is being specific on all aspects of the transaction. Nothing must be ambiguous or left to interpretation.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 544,
  question: "A guiding principle of credit is that all information should be independently verified.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 545,
  question: "This may involve an outside expert or a member of staff.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 546,
  question: "Independently verified information helps to reduce risk considerably.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 547,
  question: "An important aspect of independent verification is the separation controls. For instance, the person who prepares a credit should not be the one who approves it.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 548,
  question: "This is a very wide principle that occurs in several diverse forms.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 549,
  question: "The principle is not simply that certain items should be matched but that we need to understand corresponding items.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 550,
  question: "We need to know what should be matched with what and in some cases what should be deliberately mismatched.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 551,
  question: "A key principle of credit policy is that the Bank will always comply with all Government regulations.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 552,
  question: "The Bank operates under a license.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 553,
  question: "By not complying we not only breach our contract with the authorities we also risk losing our license or incurring penalties.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 554,
  question: "Also if we assume that Government regulations are in the best interest of the country, then we work against this interest when we break them.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 555,
  question: "If we break regulations and this information reaches the market, our reputation will be diminished.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 556,
  question: "The fall in reputation could result in lost business and reduced profit. Considering all the negative results of breaking regulations, we are much better off complying with them.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 557,
  question: "A loan is a contract between two (or more) parties where one party agrees to give the other party funds (or other similar items) based on agreed terms.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
}
,
{
  id: 558,
  question: "These terms should include when and how the funds will be given as well as when and how the funds will be paid.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 559,
  question: "Loans and advances form the bulk of a Commercial Bank’s total asset base.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 560,
  question: "Consequently, the net income from loans is the bulk of the Bank’s total earnings.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 561,
  question: "Also, loans represent the Bank’s single largest exposure to jeopardy.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 562,
  question: "Due to these reasons the quality of the Bank’s loan portfolio is critical to the failure of the Bank.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 563,
  question: "If you follow the CPG guidelines the Bank will have a well-managed, low quality loan portfolio.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 564,
  question: "Such a loan portfolio will give the Bank a competitive advantage in the Banking industry.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 565,
  question: "An OD fluctuates regularly and even moves into credit periodically as the business cycle is completed.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 566,
  question: "Though theoretically repayable on demand, an OD may in practice, run from year to year without being called in.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 567,
  question: "The company’s ability to complete its asset conversion cycle, its profitability, relationships and exposures to other Banks are key considerations in fixing an initial overdraft limit for a client. The extent of utilizations of the facility and turnover recorded on the client’s account are principal issues to be considered when the facility is due for renewal; assuming the quality of the underlying credit still meets the CPG minimum rating.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 568,
  question: "An OD does not have to meet the Bank’s legal and internal documentation guidelines.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 569,
  question: "For an OD line formal notice to the customer is not required if the line is to be cancelled, frozen or the account closed. Unilateral decision, if not properly communicated, may expose the Bank to litigation. For account closure (unless due to fraud, or bad debt) good relationship management dictates that notice should be given to enable the customer make alternative arrangement with another Bank.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 570,
  question: "A customer may never be allowed to overdraw its account with us.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 571,
  question: "Adequate security shall be taken for temporary overdrafts(temps) not supported by confirm drafts, which should not exceed 20 working days.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 572,
  question: "Request for longer tenors for temps not supported by confirm drafts, shall be documented as proper in a FAM and FSR.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
}
,{
  id: 573,
  question: "All temps shall be approved by officers who have authority to do so while clean accommodations should require one-up approval.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 574,
  question: "Any temporary accommodation that remains outstanding after 20 days shall be classified as a Past Due Loan.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 575,
  question: "Good clients with substantial turnover, strong management can be offered direct credit (instant credit) for cheques lodged into their accounts for clearing.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 576,
  question: "Financial Institutions are often given direct credit if they carry a risk rating of 2 or 3.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 577,
  question: "Banker’s Acceptance (BA) can be sold to a third party usually at a discount. By accepting the bill (signing accepted on the bill) the accepting institution guarantees payment of the bill.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 578,
  question: "BA is usually revolving and available for periods up to 9 months.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 579,
  question: "Usually, the line is available on standby to fund any type of transaction.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 580,
  question: "Rollover of BAs is dependent on prompt liquidation of the earlier draw down. It is often discouraged that a standby OD line be put in place for the customer.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 581,
  question: "We cannot sell Bankers’ Acceptances when we need more liquidity so we have to be extremely careful with BAs.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 582,
  question: "For a Revolving Credit, the customer may re-borrow sums as needed up to the limit of the facility. It is usually given to finance a company’s permanent working capital and is ever-green for the period of the total facility.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 583,
  question: "Commercial Paper (CP) are secured short-term promissory notes (usually between 30-180 days) of corporate bodies, issued directly to the investing public sometimes through an issuing house. We will only issue Commercial Paper on behalf of companies whose risk ratings are not lower than 2 and where this classification is not due to strong collateral.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 584,
  question: "Although CPs are issued unsecured and carry no direct credit exposure for the Bank, the Bank’s reputation is put on the line each time we issue a CP.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 585,
  question: "Access Bank can buy or fund the purchase of a capital asset at a client’s request and hire or lease it to them at an agreed rental.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 586,
  question: "The title of the asset resides with the client until the last installment is paid and the client exercises its option to purchase the asset at the pre-determined price stated in the lease agreement.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
}
,
{
  id: 587,
  question: "Access Bank will finance leases for a wide range of equipment in normal use such as textile machinery, computers, industrial machines, telecommunications equipment, aircraft, ship and boats, motor vehicles, etc.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 588,
  question: "Loans supported by unaudited statements are encouraged and will not require one-up approval.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 589,
  question: "The credit management cycle in Access Bank has 5 distinct phases.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 590,
  question: "Credit Marketing, Credit Analysis and Packaging, Relationship Management, Credit Administration and Control and Credit Audit or Review are the 5 distinct phases in the Credit Management Cycle in Access Bank.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 591,
  question: "The incorporation of prospective customers is basically the function of the Credit Analysis and Packaging Section of the Credit Management Cycle.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 592,
  question: "The type of customer selected to be approached for banking services would depend on whether the company falls within the Bank’s target market and that the company falls within our risk acceptance criteria.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 593,
  question: "Credit Analysis and Packaging does not include collecting information, analyzing the industry, the client and their financing need, judgment on ability to repay, negotiating or structuring appropriate facilities that meet the customer’s needs while falling within our credit guidelines and obtaining necessary approvals for such credit request.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 594,
  question: "Developing the association with our clients and monitoring their business is unnecessary, not only to ensure repayment but also to explore new business opportunities and keep our competitive edge.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 595,
  question: "Credit Administration and Control are the step by step procedures a credit follows from initial contact to final repayment. They are necessary to keep our quality and consistently high.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 596,
  question: "Credit Audit or Review does not ascertain the value of the loan on the Bank’s books and compliance with credit policies and procedures.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 597,
  question: "It also provides evaluation of the Credit Administration function.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 598,
  question: "Establishment of a target market and a client focus form the basis of strategically strong business and credit relationships.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 599,
  question: "We intend to meet all the finance needs of all customers.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 600,
  question: "The target markets are the industries a particular credit team concentrates its marketing efforts on.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
}
,{
  id: 601,
  question: "Client focus identifies the specific customers outside that target market for whom we wish to be the primary Bank.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 602,
  question: "Lending to these customers will be dependent on their meeting our Risk Acceptance criteria.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 603,
  question: "Building a profitable, high quality credit portfolio should not be the key aim of every Account Officer.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 604,
  question: "A good Account Officer is not one that aims at winning and retaining any client at all costs but the one that learns to say ‘no’ not just to low quality credit proposals but also those credit requests do not fit into our corporate strategy.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 605,
  question: "You must know clearly its target market to both at the industry level and the client level.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 606,
  question: "You must clearly see how your marketing goals fit into the Bank’s strategy.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 607,
  question: "Ensure portfolio risks are minimised by avoiding excessive loan concentration in any industry, region or product.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 608,
  question: "Risk management policies shall be approved by the Board of Directors to enable informed decision making and approval, and establish/maintain an appropriate environment for risk management in the bank.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 609,
  question: "All Access Bank employees involved in the creation and management of risk exposures shall comply at all times with the risk management policies, and procedures as approved.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 610,
  question: "Compliance shall be monitored on an ongoing basis by the bank’s Internal Audit Unit and reported on a quarterly basis to the Board of Directors.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 611,
  question: "The risk management unit shall have specific and overall responsibility for ensuring compliance with the Risk management Policies.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 612,
  question: "The Legal Unit shall have specific and overall responsibility for ensuring compliance with the Risk Management Policies.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 613,
  question: "The following constitute the pillars of Access Bank’s credit policies and procedures: (Select the inappropriate item)",
  options: {
    A: "Credit Approval Policy",
    B: "Risk Rating Limits Policy",
    C: "Credit Official Policy",
    D: "Specific Risk Policy",
    E: "Credit Program Policy",
    F: "Credit Analysis Policy",
    G: "Annual Review Policy",
  },
  correctOption: "C",
}
,{
  id: 614,
  question: "Following is a statements regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Risk Rating Limits Policy – Every extension of credit must be approved in line with the approval requirements stated in this policy. Credit Risk Management must sign off on all extension of credits for the credit approval to be valid.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 615,
  question: "Following is a statements regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Credit Approval Policy – Access Bank shall utilize Risk Rating Limits to maintain a diversified portfolio of risk assets.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 616,
  question: "Following is a statement regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Specific Risk Policy – Certain extensions of credit have incremental or unique approval and risk management requirements or may be prohibited altogether.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 617,
  question: "Following is a statement regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Credit Program Policy – Credit programs will be used to document business specific credit approval or risk management requirements, and are approved identically to extensions of credit.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "A",
},
{
  id: 618,
  question: "Following is a statement regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Annual Review Policy – There will be consistent credit analysis standards across Access Bank for the approval of credit facilities.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
},
{
  id: 619,
  question: "Following is a statement regarding the pillars of Access Banks credit policy. Identify whether the statements are true or False: Credit Analysis Policy – All credit files must be maintained and reviewed at least once every 12 months.",
  options: {
    A: "True",
    B: "False",
  },
  correctOption: "B",
}
,{
  id: 620,
  question: "Under-listed are the rules Governing the Extension of Credit. One of the items is missing, fill in the blank: I. Credit Approval II. Risk Rating Limits III. One Obligor Concept IV. ____",
  options: {
    A: "empty",
    B: "Risk Rating Limits",
    C: "Credit Approval",
     D:"One Obligor Concept"
  },
  correctOption: "Approval Authorities",
},

{
  id: 625,
  question: "Risk Rating Limits, shall always prevail over Legal Lending Limits set by the Regulators.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 626,
  question: "Section 20 (1a) of the Bank and Other Financial Institutions Act (BOFIA) 1991 as amended states that a Bank shall not grant more than 50% of its shareholders’ funds unimpaired by losses to a company, its subsidiaries and associates.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,
{
  id: 627,
  question: "Section 20 (1a) of the Bank and Other Financial Institutions Act (BOFIA) 1991 as amended states that a Bank shall not grant more than 20% of its shareholders’ funds unimpaired by losses to a company, its subsidiaries and associates.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 628,
  question: "What concept describes the BOFIA requirement that a Bank shall not grant more than 20% of its shareholders’ funds unimpaired by losses to a company, its subsidiaries and associates?",
  options: {
    A: "One Obligor Limit",
    B: "Credit Policy",
    C: "Prudential Guidelines",
    D: "Credit Strategy"
  },
  correctOption: "A"
},
{
  id: 629,
  question: "At Access Bank, the concept of one obligor is extended to include any company belonging to a group whose management are strongly linked by virtue of their related ownership structure and in particular, where the business fortune of one entity affects the other. Thus credits extended to any member of the group shall be aggregated to determine total facilities to the group, as well as the appropriate level of approval of such facilities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 630,
  question: "With regards to the one obligor limit, it shall be the responsibility of the Board of Directors to determine whether related company obligations shall be aggregated, and the basis for their decision shall be documented.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 631,
  question: "Listed is the guide to determining the 'One Obligor.' Is there any item listed that is inappropriate and should be excluded?",
  options: {
    A: "All subsidiaries owned at least 80%; such interest being an aggregate of both direct and indirect shareholdings",
    B: "Any less than 50% owned affiliate where the borrower exercises management control and where, in the opinion of the credit approval officers, the commercial fortunes of the affiliate are strongly influenced by the borrower",
    C: "Any obligor related to the borrower as a result of guarantees, endorsements, or other similar arrangements in favor of the bank",
    D: "All obligors under common ownership or control of a corporation or individual."
  },
  correctOption: "A"
},
{
  id: 632,
  question: "For the purposes of applying Risk Rating Limits, the obligor risk rating that is used must be: I. For corporations, the obligor risk rating of the parent company II. For banks, the risk rating of the lead bank. III. For other entity types, the risk rating as determined in accordance.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 633,
  question: "At Access Bank, exposure against Risk Rating Limits is measured as the Outstandings and Unused Commitments ('OSUC') to a given relationship.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 634,
  question: "Outstandings and Unused Commitments (OSUC) are the sum of all Outstandings (including Direct and Contingent Exposure) against Total Facilities, as well as the unused portion of any Committed Facility included in Total Facilities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 635,
  question: "Which of the under-listed statements is correct? I. Outstandings and Unused Commitments (OSUC) do not include settlement and clearing exposure or the Underwritten Position of a credit underwriting transaction unless the position becomes aged beyond the Extension Period. II. Outstandings and Unused Commitments (OSUC) include settlement and clearing exposure or the Underwritten Position of a credit underwriting transaction unless the position becomes aged beyond the Extension Period.",
  options: {
    A: "Statement I is correct",
    B: "Statement II is correct",
    C: "Both statements are correct",
    D: "Neither statement is correct"
  },
  correctOption: "A"
}
,
{
  id: 636,
  question: "Which of the under-listed statements is incorrect?",
  options: {
    A: "Risk Rating Limit Exceptions are discouraged and must be approved in advance at the appropriate level.",
    B: "Risk Rating Limit Exceptions are encouraged but must be approved in advance at the appropriate level."
  },
  correctOption: "B"
},
{
  id: 637,
  question: "Approver for a Risk Rating Limit Exception is determined by the RRLE type.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 638,
  question: "List 3 types of Risk Rating Limit Exceptions.",
  options: {
    A: "Cash Exceptions",
    B: "'Immaterial' Exceptions",
    C: "Passive Exceptions"
  },
  correctOption: "ABC"
},
{
  id: 639,
  question: "Limit exceptions, defined as overages up to 10% of Risk Rating Limit, is a material exception.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 640,
  question: "Passive exceptions may be caused by:",
  options: {
    A: "A valuation change on an existing transaction",
    B: "An upgrade in the risk rating of the obligor",
    C: "An Underwritten Position"
  },
  correctOption: "A"
},
{
  id: 641,
  question: "Passive exceptions need not be pre-approved, instead, they are flagged as part of the regular reporting process, and must be reviewed and their associated action plan must be approved as soon as possible after they occur, (but no later than the next quarterly review of Risk Rating Exceptions).",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 642,
  question: "Passive exceptions must be pre-approved, and need not be flagged as part of the regular reporting process, nor reviewed. Whilst their associated action plan also need not be approved as soon as possible (can be later than the next quarterly review of Risk Rating Exceptions).",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 643,
  question: "Cash, Immaterial and Passive Risk Rating Limit Exceptions (RRLEs) require approval from Line ED and Head of Credit Risk Management (or their designees).",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 644,
  question: "All other RRLEs require approval by MCC.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 645,
  question: "Cash, Immaterial and Passive Risk Rating Limit Exceptions (RRLEs) require approval by MCC.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 646,
  question: "All other RRLEs require approval from Line ED and Head of Credit Risk Management (or their designees) by MCC.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 647,
  question: "During the annual review, all Risk Rating Limit Exceptions must be noted on the Facility Approval Memo.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}

,
{
  id: 648,
  question: "Under-listed are the steps in the credit approval process. Select the inappropriate item in the group.",
  options: {
    A: "Step 1: Visit Customer's Site",
    B: "Step 2: Establish Total Facilities",
    C: "Step 3: Determine the Required Approvals and Approval Levels"
  },
  correctOption: "A"
},
{
  id: 649,
  question: "A proposal or marketing letter requires credit approval even though it expressly disclaims any commitment or any undertaking to provide a commitment or other services, and does not obligate Access Bank in any way.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 650,
  question: "Marketing letters will be jointly approved by the business head or ED and the Head of Credit Risk Management.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 651,
  question: "Marketing letters must be jointly approved by the MCC and the Managing Director.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 652,
  question: "When establishing Total Facilities for a relationship, Total Facilities must include the under listed. Select the inappropriate item:",
  options: {
    A: " All existing and proposed Direct, Contingent, including those offered under approved Credit Programs. Facilities extended to all related entities including the parent entity and its majority owned or effectively controlled entities.",
    B: " It should also include credit facilities to affiliates (up to 20% but less than 50% owned) where the borrower effectively controls or provides support to the affiliate; or where there is a material economic relationship in either direction, as determined by the credit approvers.",
    C: " The borrower's business description",
    D: " Existing and proposed credit facilities for which the obligor provides credit enhancement (e.g. guarantees), and that credit enhancement is one of the primary sources of repayment or one of the principal considerations in the approval of the facility.",
    E: " The seller risk in a securitization transaction, defined, for these purposes, as a minimum of 5% of the notional amount. (The Head of Credit Risk Management or Designee can approve an exception to this requirement.) The seller risk must be shown as a Committed Facility.",
    F: "Issuer risk in certain securities held in available for sale portfolios, unless the security is defined as an ‘Eligible AFS Security’.",
    G: " Aged Inventory beyond the Extension Period, as described in the section on Credit Underwriting."
  },
  correctOption: "C"
},
{
  id: 653,
  question: "The level of authority required for approval is a function of the Total Facilities amount.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 654,
  question: "The level of authority required for approval can be found on the Credit Facility Approval Grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 655,
  question: "All extensions of credit in the bank need not be approved in compliance with the Credit Risk Management Policy Guide.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 656,
  question: "Extensions of credit facilities in the regions need not have the concurrence of the Head of Credit in the Regional Office but require the approval of an officer of the bank with a covering credit approval limit.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,
{
  id: 657,
  question: "Which of the under-listed statements is correct?",
  options: {
    A: "No credit exposure shall be created on the judgment or at the discretion of a single bank officer acting independently. All extensions of credit or Individual /Business Credit transactions shall require involvement of a minimum of one (1) bank officer whose positions involve responsibility for credit creation.",
    B: "No credit exposure shall be created on the judgment or at the discretion of a single bank officer acting independently. All extensions of credit or Individual /Business Credit transactions shall require involvement of a minimum of five (5) bank officers whose positions involve responsibility for credit creation.",
    C: "No credit exposure shall be created on the judgment or at the discretion of a single bank officer acting independently. All extensions of credit or Individual /Business Credit transactions shall require involvement of a minimum of three (3) bank officers whose positions involve responsibility for credit creation."
  },
  correctOption: "C"
},
{
  id: 658,
  question: "The Approval Authority shall be in line with delegated credit approval authority limits at the Board Credit Committee, Management Credit Committee (MCC) or designated bank officers.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 659,
  question: "An obligor shall represent all related parties that are associated/belong to the same group of companies whose management are strongly linked or share the same ownership. Exposures to any such obligor shall be aggregated to determine the level of Access Bank’s exposure to the company or group of companies.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 660,
  question: "Which of the under-listed statements is correct?",
  options: {
    A: "By definition and for the purpose of credit creation at Access Bank, a group of companies shall exist where one or more of the shareholders of the company has up to 20% holding in another company. In determining the appropriate approval authority level, the aggregate of all exposures to the individual customer or group shall be adopted.",
    B: "By definition and for the purpose of credit creation at Access Bank, a group of companies shall exist where one or more of the shareholders of the company has up to 20% holding in another company. In determining the appropriate approval authority level, the aggregate of all exposures to the individual customer or group shall be adopted.",
    C: "By definition and for the purpose of credit creation at Access Bank, a group of companies shall exist where one or more of the shareholders of the company has up to 20% holding in another company. In determining the appropriate approval authority level, the aggregate of all exposures to the individual customer or group shall be adopted."
  },
  correctOption: "B"
},
{
  id: 661,
  question: "Under-listed is the individual levels for credit approval within the bank. One of the items is missing. Fill in the blank:",
  options: {
    A: "Group Managing Director/CEO",
    B: "",
    C: "Respective Executive Directors of Market Facing Business Units jointly with the Executive Director Risk & Management Control (or the Head of Credit Risk Management as his/her alternate) Other designated officers."
  },
  correctOption: "Group Deputy Managing Director"
},
{
  id: 662,
  question: "Credit approval authority shall be approved by the Group Managing Director/CEO based on delegation by the Board of Directors, on the recommendation of Business EDs and Head of Credit Risk Management.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,{
  id: 663,
  question: "The Management Credit Committee (MCC) shall consider facility proposals in excess of the highest individual credit authority limit. Facility proposals that exceed the approval authority of the MCC shall be approved by The Board Credit Committee on behalf of the Board of Directors.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 664,
  question: "All appointments and designations for credit risk approval, as well as corresponding credit limits, must be reviewed and re-approved by the Head of Credit Risk Management at least twice a year.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 665,
  question: "Each customer-facing business unit need not maintain up to date records of credit approval authority delegated to approving officers.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 666,
  question: "Credit programs shall be primarily defined to accommodate credit offerings where there are business opportunities that such will address for groups or groups of customers with homogenous business fundamentals and/or profiles such that their financial needs are better met through a common approach.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 667,
  question: "Approvals under credit programs need not be within approved global exposure and maximum individual exposure limits and shall be exercised within the market facing business units, subject to approval limits as may be set by the bank for each product program.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}

,
{
  id: 669,
  question: "To provide flexibility in managing valued customer relationships, especially for specific Institutional banking customers that satisfy at the minimum, the criteria for the best risk rating, the bank shall approve ‘guidance limits’. These shall be pre-approved exposure limits which shall immediately upon approval be advised to the customer, but available to allow for quick response to temporary emergency needs for accommodation / enhancement of facilities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 670,
  question: "Unusual risk policies approved by MCC is limited to, the following: Exposures to director related accounts, Exposures to politically exposed entities, Exposures to gambling entities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 671,
  question: "All unusual/special risks shall require approval at Management Credit Committee / Board Credit Committee or Board of Directors subject to applicable limits.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 672,
  question: "Any increases to Total Facilities, whether caused by new facilities or increases to existing facilities, must be approved, based on the new Total Facilities amount, as per the Credit Facility Approval Grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 673,
  question: "Availments under approved credit facilities shall be through drawdown memorandum approved by an officer in Credit Risk Management only.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 674,
  question: "Availments under approved credit facilities shall be through drawdown memorandum approved by an officer in Credit Risk Management and an officer in Legal Department, who will verify that all conditions precedent to drawdown have been met.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 675,
  question: "Drawdown on facilities classified 'substandard' shall be through drawdown memorandum approved by an officer in Credit Risk Management and an officer in Legal Department, who will verify that all conditions precedent to drawdown have been met.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 676,
  question: "Drawdown of facilities classified ‘doubtful’ and worse need not be approved by the Head of Credit Risk Management at a minimum.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 677,
  question: "When an established credit facility undergoes a material change in terms, tenor or conditions (with materiality determined by the Head of Credit Risk Management), Total Facilities must be re-approved, in accordance with the Credit Facility Approval Authority Limits.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 678,
  question: "When the amount of a credit facility is reduced or cancelled, or the tenor is shortened, the Relationship Manager / Originating Officer must promptly advise the applicable credit administration area, in writing, that the credit systems be updated to reflect the changes.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,
{
  id: 679,
  question: "Four officers from the business unit may approve any reallocation or sub allocation from an approved facility, where the obligor, Exposure Type (Direct, Contingent) and tenor are pre-established, in order to establish or increase another facility under the following conditions: The facility is for the same obligor. The risk rating of the new or increased facility is equal or better. The Exposure Type is equal or better. The tenor is equal or shorter.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 680,
  question: "If a reallocation or sub-allocation is for a related obligor of equivalent or better risk rating within the same client relationship, and the last three conditions are met, then two business credit officers may approve reallocations sub-allocations, one of who must be the responsible business Group Head.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 681,
  question: "Upon confirmation of full repayment of the credit facility and liquidation of the bank’s exposure, all collateral, guarantee or support for any type of credit transaction shall be released to the customer in accordance with agreed terms and conditions. After the corresponding commitment or exposure is cancelled or repaid, approval must be obtained from a credit officer with a covering limit, not to exceed the responsible business Executive Director and Head of Credit Risk Management after verification of cancellation or repayment.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 682,
  question: "The release of collateral, guarantees or support for any type of credit transaction requires the following approvals: Before the corresponding commitment is cancelled or repaid, the Managing director must determine if the release of the collateral, guarantee or support constitutes a material change in the risk of the transaction. If so, then the transaction must be re-approved, based on the Credit Facility Approval Grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 683,
  question: "Requests to waive or amend the provisions contained in existing credit agreements must be considered carefully, as they may be a critical component of problem identification and remedial management activities. Such requests must be approved by the responsible business ED and in accordance with the Credit Approval Grid, but not to exceed the Group MD/CEO limit for credits. Any waiver or amendments for facilities above that must be approved by GDMD/GMD.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 684,
  question: "Amendments to credit agreements, such as the lengthening of tenor, increasing facility amount, or material relaxation of collateral structure, do not require full credit approval of Total Facilities, in accordance with the Credit Approval Grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 685,
  question: "Under no circumstance can the periodic review be temporarily extended.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 686,
  question: "All credit facilities must be reviewed once every 12 months.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 687,
  question: "All credit facilities must be reviewed once every 12 months. However the periodic review may be temporarily extended for up to 60 days with approval of the Business ED and the Head of Credit Risk Management. Extensions beyond 60 days, up to 90 days, must be approved by the GDMD (or designee). Extensions beyond 90 days must be approved by the GMD/CEO (or designee).",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,{
  id: 688,
  question: "In cases where there has been a review extension, the annual review date may then be reset, as one year from the approved extension date.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 689,
  question: "Under no circumstance are unaudited financial statements acceptable in the annual review process.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 690,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Hold Position is the amount that Access Bank intends to retain.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 691,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Underwritten Position is the amount Access Bank commits to purchase and distribute to investors.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 692,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Total Position is the sum of Access Bank’s Hold and Underwritten Positions.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 693,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Total Position is the amount that Access Bank intends to retain.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 694,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Hold Position is the amount Access Bank commits to purchase and distribute to investors.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 695,
  question: "When Access Bank underwrites and distributes any loans or debt instrument, the Underwritten Position is the sum of Access Bank’s Hold and Underwritten Positions.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 696,
  question: "All Credit Programs for Credit Underwriting must be approved in line with the Credit Approval Authority grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 697,
  question: "Credit underwriting and distribution requires the approval of individuals with highly specialized market skills and specific product expertise.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 698,
  question: "The level of approval in credit underwriting does not depend upon the amount and facility risk rating.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 699,
  question: "One-off transactions (i.e., those done outside a Credit Program) also require approval in line with the Credit Approval Authority grid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 700,
  question: "The Hold Position is subject to credit approval in accordance with the Credit Facility Approval Authority Grid. This Hold Position amount must be aggregated with other credit exposures for the relationship, and need not be included in Total Facilities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,
{
  id: 701,
  question: "Each Credit Program must have an approval process for the Underwritten Position that specifies approval levels as a function of the size of the underwriting. But the Underwritten Position, during its defined distribution period, need not be captured by the market risk / issuer risk reporting and limit framework.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 702,
  question: "Each Credit Program must have an approval process for the Total Position that specifies approval levels as a function of the size of the Total Position.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 703,
  question: "In Best Efforts Undertakings, Access Bank agrees to use its best efforts to place loans or securities with investors.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 704,
  question: "Although distribution efforts are similar to an underwriting, a Best Efforts undertaking also entails a legal commitment to fund any distribution shortfall. However, there is risk here in the franchise damage associated with a failed undertaking.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 705,
  question: "Best Efforts Undertakings should either have a specific approval process, documented as part of a Credit Program, or the total amount of the undertaking must be approved pursuant to credit underwriting requirements.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 706,
  question: "In Assignments and Participations, the distribution of Underwritten Position is normally accomplished by assignments, in which an investor assumes his pro rata share of a transaction on a full risk basis, with no recourse or future funding risk to the underwriter.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 707,
  question: "Unfunded participations entail counterparty funding risk, in that, should the participant fail to fund, Access Bank is not obligated. Therefore, any unfunded portion of a transaction sold by participation does not require credit approval as an increase to the issuer hold position.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 708,
  question: "With regards to Documentation Requirements, Underwriting commitment need not follow Commitment Letter standards.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 709,
  question: "Each underwriting and distribution must have a Defined Distribution Period that cannot exceed 180 days, unless otherwise specified in advance as part of the original transaction approval.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 710,
  question: "The distribution period begins for loans when the issuer accepts Access Bank’s commitment, either verbally or in writing. And for securities, on the date the price is set.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 711,
  question: "The distribution is completed when another party contractually assumes Access Bank’s commitment or purchases the asset.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 712,
  question: "Even though another party contractually assumes Access Bank’s commitment or purchases the asset, the distribution is incomplete.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 713,
  question: "If an Underwritten Position is not completely sold within the Defined Distribution Period (usually 90 days), the amount remaining is considered Aged Inventory and must be marked to market.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,
{
  id: 714,
  question: "Once an underwriting becomes Aged Inventory, a memorandum, specifying the Extension Period (usually an additional 90 days), and describing an action plan or alternate strategy and the Mark to market methodology, must be prepared by Investment Banking Division.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 715,
  question: "The process to approve the Aged Inventory memorandum must be documented as part of the Credit Program. Required approvers must include a Business ED and the Head of Credit Risk Management.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 716,
  question: "All Aged Inventory positions must be reported at least monthly to the GMD, GDMD, and responsible business Executive Director. The process for reporting Aged Inventory must be included within the Credit Program.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 717,
  question: "Access Bank is committed to conducting business in an environmentally and socially responsible manner, but need not take cognizance of the Equator Principles.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 718,
  question: "All credit relationships are subject to reviews on at least an annual basis in the form of an ‘Abbreviated’, a ‘Nominal’ or a ‘Full’ Credit Review.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 719,
  question: "At any time, a credit approval authority or the Head of Credit Risk Management may determine that a more frequent review cycle is more appropriate for a particular relationship, geography, industry, or business.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 720,
  question: "An Abbreviated Annual Review is allowable each year for the following: -Select the inappropriate item:",
  options: {
    A: "Relationships with Total Facilities of N5MM or less; when it's within the business unit’s defined target market, adheres to the approved Risk Acceptance Criteria, and facilities extended are part of an approved Credit Program; and there are no classified facilities.",
    B: "Relationships where all facilities are cash collateralized",
    C: "Any relationships with classified (“substandard” and worse) facilities or has been adversely noted at a CAC review in the review period."
  },
  correctOption: "C"
},
{
  id: 721,
  question: "Facilities below N5MM will only be approved under a Credit Program. Countries may establish local limits, which must be endorsed by the Regional Head of Credit Risk Management and approved by the Head of Credit Risk Management at the Head Office.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 722,
  question: "A Full Credit Review is required every year for all other relationships not meeting the standards above, as well as for any industry, region, country or business where it is determined in a Portfolio Review that abbreviated Annual Reviews will not be permitted.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,{
  id: 723,
  question: "Any relationships with classified (“substandard” and worse) facilities; or has been adversely noted at a CAC review in the review period.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 724,
  question: "Credits Below N6 Bn must be approved by the Board Credit Committee.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 725,
  question: "A Full Credit Review must include the standard Credit Analysis criteria.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},
{
  id: 726,
  question: "The Approval requirement for a Full Credit Review is not the same as that required by the Credit Facility Approval Grid. However, where there are no increases to Total Facilities and no overall material changes in tenor, credit terms, security/support, or the credit risk profile of the obligor, this fact should be clearly stated in the Facility Approval Memorandum for consideration by the Approval authority in deciding whether to fast track approval or not. Additional approvals may be required for relationships with adversely classified facilities.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 727,
  question: "At a minimum, an Abbreviated Credit Review must include the under-listed: Select the inappropriate item:",
  options: {
    A: " A brief ‘Summary of Risk Trends’, which focuses on the main changes in the risk profile since the last Abbreviated or Full Credit Review.",
    B: " A review/verification of credit facilities to ensure they are appropriate to the obligor’s needs and are correctly reflected on the FAM and in the credit reporting systems.",
    C: " An explanation for changes in credit facilities and terms, if any.",
    D: " Re-affirmation that collateral, documentation and related security arrangements are in full effect.",
    E: " Updated risk rating information, and a review of all Obligor Risk Ratings and Facility Risk Ratings in the credit reporting systems to ensure they are current and accurate.",
    F: " Applicable, any Risk Rating Limit Exceptions, and the related action plan.",
    G: " None"
  },
  correctOption: "G"
},
{
  id: 728,
  question: "Credit Analysis and Review Issues must be communicated to Unit Head / Group Heads by mail.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,{
  id: 730,
  question: "In spite of the terms and conditions contained in the offer letter being satisfied, an Offer Letter is not a commitment by the Bank to lend to a customer.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,

  // Question 732
  {
    id: 732,
    question: "A credit facility made known to the customer in writing through an Offer Letter is an advised facility. Customer’s acceptance of an advised facility must be supported by a Board Resolution, whilst acceptance of an unadvised facility doesn’t require a board resolution as the facility is unadvised.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "B"
  },

  // Question 733
  {
    id: 733,
    question: "Which of the items listed below is inappropriate in the group of statements?",
    options: {
      A: "Term/Time loans are facilities in respect of which there is a clearly defined tenor and repayment schedule. A time loan is usually for tenors of one year or less, while a term loan is for tenors longer than one year. Maturities beyond 7 years are generally discouraged.",
      B: "Term/Time loans are normally given to finance specific transactions, capital projects, expansion programs, etc. Repayment of term loans shall be tied to the cash generated from such projects.",
      C: "Term loans shall not be given to finance operating expenses.",
      D: "Term Loans are for the purpose of Spontaneous financing."
    },
    correctOption: "D"
  },

  // Question 734
  {
    id: 734,
    question: "Examples of credit products that qualify as Term Loans include the Under-listed. Select the inappropriate item.",
    options: {
      A: "Equipment Financing",
      B: "New Technology Capital Loan",
      C: "Working Capital Loan",
      D: "Trading Asset Loan",
      E: "Asset Replacement"
    },
    correctOption: "D"
  },

  // Question 735
  {
    id: 735,
    question: "Revolving credits are long term/tenured facilities with predefined cycles that relate to the customer’s business/trading cycle.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "B"
  },

  // Question 736
  {
    id: 736,
    question: "The tenor of revolving credit must not exceed 3 years.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "A"
  },

  // Question 737
  {
    id: 737,
    question: "Qualification for revolving credit facilities shall be limited to customers with established businesses in stable industries and will include product lines as listed below, select the inappropriate item:",
    options: {
      A: "Contractor Project Finance",
      B: "Distributor Finance",
      C: "Import Finance/Commercial Paper (CP)",
      D: "Custom Duty payment",
      E: "Letter of Credit Financing (LCs)",
      F: "Suppliers Financing",
      G: "Note/Bill discounting",
      H: "None"
    },
    correctOption: "H"
  },

  // Question 738
  {
    id: 738,
    question: "Temporary Overdraft accommodation shall be approved for not more than an aggregate period of 60 days. A temporary overdraft that remains outstanding for longer than 90 days shall be classified as a Past Due Loan.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "B"
  },

  // Question 739
  {
    id: 739,
    question: "This manual will guide you in managing loans.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "A"
  },

  // Question 740
  {
    id: 740,
    question: "It covers the marketing, analysis, processing, approval and reporting of loans.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "A"
  },

  // Question 741
  {
    id: 741,
    question: "The manual also reviews the different types of products offered by the Bank.",
    options: {
      A: "True",
      B: "False"
    },
    correctOption: "B"
  }
,
{
  id: 742,
  question: "If you follow this guide, you will have the confidence of knowing that you are using proven methods that will result in high quality loans that are efficiently managed.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 743,
  question: "The Board of Trustees of the Bank has approved these policies for use in Banking.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 744,
  question: "This guide eliminates the need for personal judgment in Banking.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 745,
  question: "As an Account Officer or Relationship Manager, you must know all aspects of the CPG.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 746,
  question: "You may not keep up to date with Banking laws, Central Bank credit guidelines and market trends.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 747,
  question: "If the CPG differs from regulations then the marketer will decide the approach the Bank will use. He will also resolve other conflicts that may arise from time to time.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 748,
  question: "Any deviations from these policies must always be explained and justified in writing.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 749,
  question: "The Bank may need to change these policies and procedures as laws, market conditions and the Bank’s strategy change.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 750,
  question: "This guide may be altered or even withdrawn as the need arises. The change in the above cases must be communicated to all concerned parties.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 751,
  question: "You must initiate changes to the CPG where you spot areas for improvement.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 752,
  question: "The Board of Trustees will approve all changes to the CPG.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 753,
  question: "This is a confidential document. You must not reveal or discuss its contents with non-Bank staff without approval from a senior officer. You must return this guide to the Credit Administration Department if you leave the Bank.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 754,
  question: "Most of the topics in this guide are based on a few principles.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 755,
  question: "Understanding these principles will give you a better understanding of credit policy.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 756,
  question: "They will help you with day-to-day credit decision-making, especially when you come across new situations.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,
{
  id: 757,
  question: "Before reading this manual we strongly oppose that you learn these principles and become increasingly aware of them in your day-to-day work.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 758,
  question: "This will not only sharpen your skills but also enhance your career.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 759,
  question: "Individual and companies place their funds with us trusting our integrity in managing these funds.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 760,
  question: "This integrity must flow through everything the Bank does.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 761,
  question: "Any break in the chain of integrity, no matter how small and no matter where; will eventually lead to the decline of the Bank – if it is not checked.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 762,
  question: "The Bank will not take any action that may compromise its integrity.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 763,
  question: "It is easy to forget the importance of integrity. In credit functions you are far removed from the depositors who have entrusted their money to you.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 764,
  question: "As the funds you lend come from so many sources you often feel no specific responsibility.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 765,
  question: "As a Banker you must make a conscious effort to continuously strengthen your integrity.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 766,
  question: "The name Access Bank is a constant reminder of this need.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 767,
  question: "Two examples of the application of the integrity principle are, avoiding conflicts of interest (for instance loans to the Bank’s auditors) and not complying with Government regulations.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 768,
  question: "The Bank’s main activity is to manage risk.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 769,
  question: "Risk, simply defined, is the variability of possible outcomes.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 770,
  question: "For every transaction you must learn to identify and minimize all the potential risks in that transaction. One method is to think through the transaction step by step.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 771,
  question: "For every risk the Bank takes we must have a matching return for taking that risk.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,
{
  id: 772,
  question: "All too often we take the interest and fees we charge as fixed and simply apply our efforts to structuring a credit.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 773,
  question: "In many instances the return on the credit is far too low for the risk of lending. For instance, a 10% profit margin on a loan is a small compensation for losing the whole loan.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 774,
  question: "It would take the profit of 10 loans just to break even. In this situation our success rate must be over 90% of all loans.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 775,
  question: "However, in special cases we might decide to have an exposure to a company at a low return with the expectation of getting other business/accounts, which will improve the profitability of the name.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 776,
  question: "From experience a bad loan takes more than ten times as much management effort as a good loan.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 777,
  question: "For every good loan, the opportunity cost in lost income from other activity is very high. Good loans are a major drag on the Bank’s efficiency.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 778,
  question: "A loan is a very complex transaction. As so many things can go wrong, we must take great care at every stage of the loan process.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 779,
  question: "A simple mistake can jeopardize the whole loan.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 780,
  question: "We must be accurate and diverse.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 781,
  question: "An element of accuracy is being specific on all aspects of the transaction. Nothing must be ambiguous or left to interpretation.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 782,
  question: "A guiding principle of credit is that all information should be independently verified.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 783,
  question: "This may involve an outside expert or a member of staff.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 784,
  question: "Independently verified information helps to reduce risk considerably.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 785,
  question: "An important aspect of independent verification is the separation controls. For instance, the person who prepares a credit should not be the one who approves it.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 786,
  question: "This is a very wide principle that occurs in several diverse forms.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 787,
  question: "The principle is not simply that certain items should be matched but that we need to understand corresponding items.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,{
  id: 788,
  question: "We need to know what should be matched with what and in some cases what should be deliberately mismatched.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 789,
  question: "A key principle of credit policy is that the Bank will always comply with all Government regulations.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 790,
  question: "The Bank operates under a license.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 791,
  question: "By not complying we not only breach our contract with the authorities we also risk losing our license or incurring penalties.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 792,
  question: "Also if we assume that Government regulations are in the best interest of the country, then we work against this interest when we break them.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 793,
  question: "If we break regulations and this information reaches the market, our reputation will be diminished.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 794,
  question: "The fall in reputation could result in lost business and reduced profit. Considering all the negative results of breaking regulations, we are much better off complying with them.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 795,
  question: "A loan is a contract between two (or more) parties where one party agrees to give the other party funds (or other similar items) based on agreed terms.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 796,
  question: "These terms should include when and how the funds will be given as well as when and how the funds will be paid.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 797,
  question: "Loans and advances form the bulk of a Commercial Bank’s total asset base.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 798,
  question: "Consequently, the net income from loans is the bulk of the Bank’s total earnings.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 799,
  question: "Also, loans represent the Bank’s single largest exposure to jeopardy.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 800,
  question: "Due to these reasons the quality of the Bank’s loan portfolio is critical to the failure of the Bank.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 801,
  question: "If you follow the CPG guidelines the Bank will have a well-managed, low quality loan portfolio.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,
{
  id: 802,
  question: "Such a loan portfolio will give the Bank a competitive advantage in the Banking industry.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 803,
  question: "An OD fluctuates regularly and even moves into credit periodically as the business cycle is completed.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 804,
  question: "Though theoretically repayable on demand, an OD may in practice, run from year to year without being called in.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 805,
  question: "The company’s ability to complete its asset conversion cycle, its profitability, relationships and exposures to other Banks are key considerations in fixing an initial overdraft limit for a client. The extent of utilization of the facility and turnover recorded on the client’s account are principal issues to be considered when the facility is due for renewal; assuming the quality of the underlying credit still meets the CPG minimum rating.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 806,
  question: "An OD does not have to meet the Bank’s legal and internal documentation guidelines.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 807,
  question: "For an OD line formal notice to the customer is not required if the line is to be cancelled, frozen or the account closed. Unilateral decision, if not properly communicated, may expose the Bank to litigation. For account closure (unless due to fraud, or bad debt) good relationship management dictates that notice should be given to enable the customer make alternative arrangements with another Bank.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 808,
  question: "A customer may never be allowed to overdraw its account with us.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 809,
  question: "Adequate security shall be taken for temporary overdrafts (temps) not supported by confirm drafts, which should not exceed 20 working days.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 810,
  question: "Request for longer tenors for temps not supported by confirm drafts shall be documented as proper in a FAM and FSR.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 811,
  question: "All temps shall be approved by officers who have authority to do so while clean accommodations should require one-up approval.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 812,
  question: "Any temporary accommodation that remains outstanding after 20 days shall be classified as a Past Due Loan.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 813,
  question: "Good clients with substantial turnover, strong management can be offered direct credit (instant credit) for cheques lodged into their accounts for clearing.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 814,
  question: "Financial Institutions are often given direct credit if they carry a risk rating of 2 or 3.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
}
,
{
  id: 815,
  question: "Banker’s Acceptance (BA) can be sold to a third party usually at a discount. By accepting the bill (signing accepted on the bill) the accepting institution guarantees payment of the bill.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 816,
  question: "BA is usually revolving and available for periods up to 9 months.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 817,
  question: "Usually, the line is available on standby to fund any type of transaction.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 818,
  question: "Rollover of BAs is dependent on prompt liquidation of the earlier draw down. It is often discouraged that a standby OD line be put in place for the customer.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 819,
  question: "We cannot sell Bankers’ Acceptances when we need more liquidity so we have to be extremely careful with BAs.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 820,
  question: "For a Revolving Credit, the customer may re-borrow sums as needed up to the limit of the facility. It is usually given to finance a company’s permanent working capital and is evergreen for the period of the total facility.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 821,
  question: "Commercial Papers (CP) are secured short-term promissory notes (usually between 30-180 days) of corporate bodies, issued directly to the investing public sometimes through an issuing house. We will only issue Commercial Paper on behalf of companies whose risk ratings are not lower than 2 and where this classification is not due to strong collateral.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 822,
  question: "Although CPs are issued unsecured and carry no direct credit exposure for the Bank, the Bank’s reputation is put on the line each time we issue a CP.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 823,
  question: "Access Bank can buy or fund the purchase of a capital asset at a client’s request and hire or lease it to them at an agreed rental.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 824,
  question: "The title of the asset resides with the client until the last installment is paid and the client exercises its option to purchase the asset at the pre-determined price stated in the lease agreement.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 825,
  question: "Access Bank will finance leases for a wide range of equipment in normal use such as textile machinery, computers, industrial machines, telecommunications equipment, aircraft, ship and boats, motor vehicles, etc.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 826,
  question: "Loans supported by unaudited statements are encouraged and will not require one-up approval.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 827,
  question: "The credit management cycle in Access Bank has 5 distinct phases.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,{
  id: 828,
  question: "Credit Marketing, Credit Analysis and Packaging, Relationship Management, Credit Administration and Control and Credit Audit or Review are the 5 distinct phases in the Credit Management Cycle in Access Bank.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 829,
  question: "The incorporation of prospective customers is basically the function of the Credit Analysis and Packaging Section of the Credit Management Cycle.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 830,
  question: "The type of customer selected to be approached for banking services would depend on whether the company falls within the Bank’s target market and that the company falls within our risk acceptance criteria.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 831,
  question: "Credit Analysis and Packaging does not include collecting information, analyzing the industry, the client and their financing need, judgment on ability to repay, negotiating or structuring appropriate facilities that meet the customer’s needs while falling within our credit guidelines and obtaining necessary approvals for such credit request.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 832,
  question: "Developing the association with our clients and monitoring their business is unnecessary, not only to ensure repayment but also to explore new business opportunities and keep our competitive edge.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 833,
  question: "Credit Administration and Control are the step by step procedures a credit follows from initial contact to final repayment. They are necessary to keep our quality and consistently high.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 834,
  question: "Credit Audit or Review does not ascertain the value of the loan on the Bank’s books and compliance with credit policies and procedures.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 835,
  question: "It also provides evaluation of the Credit Administration function.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 836,
  question: "Establishment of a target market and a client focus form the basis of strategically strong business and credit relationships.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 837,
  question: "We intend to meet all the finance needs of all customers.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 838,
  question: "The target markets are the industries a particular credit team concentrates its marketing efforts on.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
},

{
  id: 839,
  question: "Client focus identifies the specific customers outside that target market for whom we wish to be the primary Bank.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},

{
  id: 840,
  question: "Lending to these customers will be dependent on their meeting our Risk Acceptance criteria.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "A"
}
,{
  id: 841,
  question: "Building a profitable, high quality credit portfolio should not be the key aim of every Account Officer.",
  options: {
    A: "True",
    B: "False"
  },
  correctOption: "B"
},
{
  id: 842,
  question: "The policy is derived from",
  options: {
    A: "Leading international banks",
    B: "The Bank’s Enterprise Risk Management Frameworks",
    C: "The Central Bank of Nigeria",
    D: "The Nigerian Deposit Insurance Corporation",
  },
  correctOption: "B",
},



];



