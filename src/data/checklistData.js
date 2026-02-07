export const specimenChecklist = {
  title: 'Specimen Collection Checklist - Non-Clinical',
  description: 'Use this checklist to ensure specimens are processed in a timely manner. Complete each item for every collection.',
  contactInfo: 'If you have questions, contact Customer Service at (800) 255-2159, Option 4 or salesdesk@redwoodtoxicology.com',
  items: [
    {
      id: 1,
      text: 'Write legibly using a blue or black ink pen',
      category: 'Form Preparation'
    },
    {
      id: 2,
      text: "Provide the donor's full name and/or unique donor ID",
      category: 'Donor Information'
    },
    {
      id: 3,
      text: 'Choose at least one test code',
      category: 'Test Selection',
      subItems: [
        'Verify code selected is appropriate for the specimen type (urine specimen with urine test code / oral specimen with oral test code)',
        'Only 1 panel is chosen',
        'If test code is manually added under "Other", verify that test code was entered - not "10 panel" and not "ETG"',
        'Clearly marked - not between check boxes',
        'Test code is not restricted'
      ]
    },
    {
      id: 4,
      text: 'Tightly seal the collection device/container',
      category: 'Specimen Handling'
    },
    {
      id: 5,
      text: 'Remove and place the security seal over the top of the collection device/container (ensuring that the account number is on the seal)',
      category: 'Specimen Handling'
    },
    {
      id: 6,
      text: 'Remove and place the Specimen ID label around the device (if applicable)',
      category: 'Specimen Handling'
    },
    {
      id: 7,
      text: "Include the collector's name and the collection date",
      category: 'Documentation'
    },
    {
      id: 8,
      text: 'Include the paper test requisition in the shipment',
      category: 'Shipping'
    },
    {
      id: 9,
      text: 'Include 5 or more specimens in your FedEx Pak to avoid extra fee',
      category: 'Shipping'
    }
  ]
};

export const formSections = {
  title: 'Non-Clinical Test Requisition Form Guide',
  description: 'Step-by-step guide for completing the Non-Clinical Test Requisition Form.',
  sections: [
    {
      number: 1,
      title: 'Provide Donor Information',
      description: "Enter the donor's first name, last name, and/or unique Donor ID. The donor's gender and date of birth are required. A Donor ID may be used instead of a name.",
      required: true,
      tips: ['Use blue or black ink only', 'No gel pens', 'Write legibly to prevent data entry errors']
    },
    {
      number: 2,
      title: 'Affix Security Seal and Label on Specimen',
      description: 'Ensure collection device or container is tightly sealed. Affix security seal across the lid. Instruct the donor to initial the seal. Place specimen ID label around the device.',
      required: true,
      tips: ['Do not cover scan codes from the security seal', 'Ensure account number is visible on the seal']
    },
    {
      number: 3,
      title: 'Obtain Donor Signature',
      description: "Get the donor's signature and date. The donor certifies they provided the specimen and it has not been adulterated.",
      required: true,
      tips: ['Use a ball point pen', 'Press firmly when signing']
    },
    {
      number: 4,
      title: 'Enter Collection Information and Provide Collector Signature',
      description: "Enter the collector's name, signature, and collection date. Collection time, observation status, and specimen temperature may also be tracked.",
      required: true,
      tips: ['Record any temperature discrepancies in collector remarks', 'Temperature should be 90-100F (32-38C)']
    },
    {
      number: 5,
      title: 'Choose Test Requests',
      description: 'Check the box next to the panel or test code to order. Verify codes are appropriate for the specimen type. Common panels include B35 (Urine 14 panel) and OF panels for oral fluid.',
      required: true,
      tips: [
        'Do not select an oral fluid code for a urine specimen',
        'Enter test code only in "Other" field, not drug or panel names',
        'Additional fees may apply for certain tests'
      ],
      commonTests: [
        { code: 'B35', name: 'Urine 14 Panel', includes: 'ALC, AMP, BUP, BZO, COC, CR, FEN, MTD, OPI, OXY, PCP, PH, SG, THC' },
        { code: '9539', name: 'OF 8 Panel (Screen Only)', includes: 'ALC, AMP, BAR, BZO, COC, MTD, OPI, THC' },
        { code: '9721', name: 'OF 9 Panel (Confirmed)', includes: 'AMP, BAR, BZO, COC, MTD, OPI, PCP, SC, THC' },
        { code: '5483', name: 'Tianeptine LC-MS/MS Screen with Confirmation, Urine', includes: 'Tianeptine' },
      ]
    }
  ]
};
