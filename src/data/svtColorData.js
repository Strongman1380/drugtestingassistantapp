export const svtParameters = [
  {
    id: 'oxpcc',
    name: 'OX/PCC (Oxidants/PCC)',
    description: 'Tests for the presence of oxidizing adulterants such as bleach, hydrogen peroxide, or pyridinium chlorochromate (PCC).',
    colors: [
      { label: 'Negative', color: '#F5F5F0', textColor: '#333', value: 'negative', result: 'Normal', detail: 'No oxidants detected' },
      { label: 'Low (+)', color: '#A8D5A2', textColor: '#333', value: 'low', result: 'Abnormal', detail: 'Low level of oxidants detected - specimen may be adulterated' },
      { label: 'High (+++)', color: '#1A3A6B', textColor: '#fff', value: 'high', result: 'Abnormal', detail: 'High level of oxidants detected - specimen is likely adulterated' },
    ]
  },
  {
    id: 'creatinine',
    name: 'CRE (Creatinine)',
    description: 'Measures creatinine concentration to detect dilution or substitution of a urine specimen. Normal creatinine is 20-400 mg/dL.',
    colors: [
      { label: '0 mg/dL', color: '#D4C5A0', textColor: '#333', value: '0', result: 'Abnormal', detail: 'No creatinine detected (0 mg/dL) - specimen may be substituted (not human urine)' },
      { label: '10 mg/dL', color: '#E8C8A0', textColor: '#333', value: '10', result: 'Abnormal', detail: 'Very low creatinine (10 mg/dL) - specimen is dilute, possible water-loading' },
      { label: '20 mg/dL', color: '#D4A0B0', textColor: '#333', value: '20', result: 'Normal', detail: 'Low-normal creatinine (20 mg/dL) - at the lower limit of normal range' },
      { label: '50 mg/dL', color: '#C070A0', textColor: '#fff', value: '50', result: 'Normal', detail: 'Normal creatinine (50 mg/dL) - within expected range' },
      { label: '100 mg/dL', color: '#8B3070', textColor: '#fff', value: '100', result: 'Normal', detail: 'Normal creatinine (100 mg/dL) - within expected range' },
      { label: '200 mg/dL', color: '#5C1050', textColor: '#fff', value: '200', result: 'Normal', detail: 'Normal creatinine (200 mg/dL) - within expected range' },
    ]
  },
  {
    id: 'specificGravity',
    name: 'S.G. (Specific Gravity)',
    description: 'Measures the density of urine compared to water. Normal range is 1.003-1.030. Values outside this range may indicate dilution or adulteration.',
    colors: [
      { label: '1.000', color: '#1A4A7A', textColor: '#fff', value: '1.000', result: 'Abnormal', detail: 'Very low specific gravity (1.000) - consistent with water, specimen may be substituted' },
      { label: '1.003', color: '#2A7A6A', textColor: '#fff', value: '1.003', result: 'Normal', detail: 'Low-normal specific gravity (1.003) - dilute but within normal range' },
      { label: '1.005', color: '#3A9A6A', textColor: '#fff', value: '1.005', result: 'Normal', detail: 'Normal specific gravity (1.005)' },
      { label: '1.010', color: '#5AAA5A', textColor: '#fff', value: '1.010', result: 'Normal', detail: 'Normal specific gravity (1.010)' },
      { label: '1.015', color: '#7ABA4A', textColor: '#fff', value: '1.015', result: 'Normal', detail: 'Normal specific gravity (1.015)' },
      { label: '1.020', color: '#9ACA3A', textColor: '#333', value: '1.020', result: 'Normal', detail: 'Normal specific gravity (1.020)' },
      { label: '1.025', color: '#BADA2A', textColor: '#333', value: '1.025', result: 'Normal', detail: 'Normal specific gravity (1.025)' },
      { label: '1.030', color: '#DACA1A', textColor: '#333', value: '1.030', result: 'Normal', detail: 'High-normal specific gravity (1.030)' },
      { label: '>=1.035', color: '#C4A010', textColor: '#333', value: '1.035', result: 'Abnormal', detail: 'High specific gravity (>=1.035) - may indicate specimen contamination' },
    ]
  },
  {
    id: 'ph',
    name: 'pH',
    description: 'Measures acidity/alkalinity of the urine. Normal urine pH is 4.0-9.0. Extreme values may indicate adulteration with acids or bases.',
    colors: [
      { label: 'pH 2', color: '#D4443A', textColor: '#fff', value: '2', result: 'Abnormal', detail: 'Extremely acidic (pH 2) - specimen is likely adulterated with acid' },
      { label: 'pH 3', color: '#E88070', textColor: '#333', value: '3', result: 'Abnormal', detail: 'Very acidic (pH 3) - specimen is likely adulterated' },
      { label: 'pH 4', color: '#E8A060', textColor: '#333', value: '4', result: 'Normal', detail: 'Acidic but within normal range (pH 4)' },
      { label: 'pH 5', color: '#E8B050', textColor: '#333', value: '5', result: 'Normal', detail: 'Mildly acidic, within normal range (pH 5)' },
      { label: 'pH 6', color: '#D4A040', textColor: '#333', value: '6', result: 'Normal', detail: 'Slightly acidic, typical urine pH (pH 6)' },
      { label: 'pH 7', color: '#C09040', textColor: '#333', value: '7', result: 'Normal', detail: 'Neutral pH (pH 7) - within normal range' },
      { label: 'pH 8', color: '#A08040', textColor: '#fff', value: '8', result: 'Normal', detail: 'Slightly alkaline, within normal range (pH 8)' },
      { label: 'pH 9', color: '#806030', textColor: '#fff', value: '9', result: 'Normal', detail: 'Alkaline but within normal range (pH 9)' },
      { label: 'pH 10', color: '#7050A0', textColor: '#fff', value: '10', result: 'Abnormal', detail: 'Very alkaline (pH 10) - specimen may be adulterated with a base' },
      { label: 'pH 11', color: '#5A3090', textColor: '#fff', value: '11', result: 'Abnormal', detail: 'Extremely alkaline (pH 11) - specimen is likely adulterated' },
      { label: 'pH 12', color: '#3A1070', textColor: '#fff', value: '12', result: 'Abnormal', detail: 'Extremely alkaline (pH 12) - specimen is adulterated' },
    ]
  }
];

export const svtInterpretationGuide = {
  normal: {
    title: 'Normal',
    description: 'All specimen validity parameters are within normal ranges. The specimen appears to be a valid, unadulterated urine sample.',
    action: 'Proceed with standard drug testing procedures.',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800',
    borderColor: 'border-green-500',
  },
  abnormal: {
    title: 'Abnormal',
    description: 'One or more specimen validity parameters are outside normal ranges. The specimen may have been adulterated, diluted, or substituted.',
    action: 'Flag the specimen. Consider requesting a new collection under direct observation. Send specimen for further laboratory testing.',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800',
    borderColor: 'border-red-500',
  },
  mixed: {
    title: 'Review Needed',
    description: 'Some parameters are normal while others may need attention. Review each parameter individually.',
    action: 'Consult with your supervisor or Redwood Toxicology at (800) 255-2159 for guidance.',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800',
    borderColor: 'border-yellow-500',
  }
};
