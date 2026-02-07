/**
 * Drug Detection Resource Guide Database
 * Comprehensive drug reference data extracted from a Drug Detection Resource Guide PDF.
 * Contains detection times, metabolites, scheduling, and other reference information.
 */

export const drugCategories = [
  'All', 'Opiates/Opioids', 'Synthetic Opioids', 'Stimulants', 'Benzodiazepines',
  'Barbiturates', 'Muscle Relaxants', 'Tricyclic Antidepressants', 'Neuropathics',
  'SSRIs', 'Sedatives/Hypnotics', 'Hallucinogens', 'Cannabis', 'Other'
];

export const drugDatabase = [
  // ─────────────────────────────────────────────
  // Opiates/Opioids
  // ─────────────────────────────────────────────
  {
    id: 1,
    name: 'Codeine',
    category: 'Opiates/Opioids',
    commonNames: ['Tylenol #3', 'Tuzistra XR'],
    streetNames: ['Schoolboy', 'coties', 'cough syrup', "T-three's", 'purple drank'],
    deaSchedule: 'Schedule II/III/V',
    routeOfAdmin: 'Oral, intrarectal, intramuscular, subcutaneous',
    metabolitesUrine: ['Codeine', 'morphine', 'norcodeine'],
    metabolitesOralFluid: ['Codeine', 'morphine', 'norcodeine'],
    detectionTimeUrine: '1-2 days',
    detectionTimeOralFluid: '7-12 hours',
    addictionWithdrawal: 'Moderate-to-low risk of dependence'
  },
  {
    id: 2,
    name: 'Heroin',
    category: 'Opiates/Opioids',
    commonNames: [],
    streetNames: ['Big H', 'black tar', 'chiva', 'hell dust', 'horse', 'negra', 'smack', 'thunder'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Smoked, IV, intranasal',
    metabolitesUrine: ['6-acetylmorphine', 'morphine', 'codeine'],
    metabolitesOralFluid: ['6-acetylmorphine', 'morphine', 'heroin'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '8-24 hours',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 3,
    name: 'Hydrocodone',
    category: 'Opiates/Opioids',
    commonNames: ['Lorcet', 'Lortab', 'Hycodan', 'Norco', 'Vicodin', 'Zohydro ER'],
    streetNames: ['357s', 'bananas', 'dro', 'hydro', 'tabs', 'vics'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV',
    metabolitesUrine: ['Hydrocodone', 'hydromorphone'],
    metabolitesOralFluid: ['Hydrocodone', 'norhydrocodone', 'hydromorphone'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 4,
    name: 'Hydromorphone',
    category: 'Opiates/Opioids',
    commonNames: ['Dilaudid', 'Exalgo', 'Palladone'],
    streetNames: ['D', 'dillies', 'dust', 'footballs', 'juice', 'smack'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, IM, subcutaneous, rectal, intranasal',
    metabolitesUrine: ['Hydromorphone'],
    metabolitesOralFluid: ['Hydromorphone'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 5,
    name: 'Morphine',
    category: 'Opiates/Opioids',
    commonNames: ['Avinza', 'Embeda', 'Kadian', 'MS-Contin', 'Roxanol'],
    streetNames: ['Dreamer', 'emsel', 'mister blue', 'morpho', 'morf'],
    deaSchedule: 'Schedule II/III',
    routeOfAdmin: 'IV, oral, IM, smoked',
    metabolitesUrine: ['Morphine'],
    metabolitesOralFluid: ['Morphine'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '24 hours',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 6,
    name: 'Oxycodone',
    category: 'Opiates/Opioids',
    commonNames: ['OxyContin', 'Oxaydo', 'Xtampza ER', 'Xartemis XR'],
    streetNames: ['Hillbilly heroin', 'kicker', 'OC', 'ox', 'roxy', 'perc', 'oxy'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, intranasal, inhalation',
    metabolitesUrine: ['Oxycodone', 'oxymorphone', 'noroxycodone'],
    metabolitesOralFluid: ['Oxycodone', 'oxymorphone', 'noroxycodone'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 7,
    name: 'Oxymorphone',
    category: 'Opiates/Opioids',
    commonNames: ['Opana ER', 'Opana IR', 'Numorphan'],
    streetNames: ['Blue heaven', 'blues', 'Mrs. O', 'pink lady', 'pink O', 'stop signs'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, IM, subcutaneous, rectal, intranasal',
    metabolitesUrine: ['Oxymorphone'],
    metabolitesOralFluid: ['Oxymorphone'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Synthetic Opioids
  // ─────────────────────────────────────────────
  {
    id: 8,
    name: 'Buprenorphine',
    category: 'Synthetic Opioids',
    commonNames: ['Suboxone', 'Subutex', 'Sublocade', 'Belbuca', 'Butrans'],
    streetNames: [],
    deaSchedule: 'Schedule III',
    routeOfAdmin: 'Oral, transdermal, intranasal',
    metabolitesUrine: ['Buprenorphine', 'norbuprenorphine'],
    metabolitesOralFluid: ['Buprenorphine', 'norbuprenorphine'],
    detectionTimeUrine: '4-8 days',
    detectionTimeOralFluid: '1-5 days',
    addictionWithdrawal: 'Less severe withdrawal than other opioids'
  },
  {
    id: 9,
    name: 'Fentanyl',
    category: 'Synthetic Opioids',
    commonNames: ['Duragesic', 'Actiq', 'Sublimaze', 'Fentora'],
    streetNames: ['Apache', 'china girl', 'dance fever', 'goodfellas', 'jackpot', 'murder 8'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, epidural, IV, sublingual, skin patch',
    metabolitesUrine: ['Fentanyl', 'norfentanyl'],
    metabolitesOralFluid: ['Fentanyl', 'norfentanyl'],
    detectionTimeUrine: '26 days (longer for dependent users)',
    detectionTimeOralFluid: '1-3 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 10,
    name: 'Meperidine',
    category: 'Synthetic Opioids',
    commonNames: ['Demerol', 'Mepergan'],
    streetNames: ['Demmies', 'pain killer'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Meperidine', 'normeperidine'],
    metabolitesOralFluid: ['Meperidine', 'normeperidine'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 11,
    name: 'Methadone',
    category: 'Synthetic Opioids',
    commonNames: ['Dolophine', 'Methadose'],
    streetNames: ['Amidone', 'chocolate chip cookies', 'fizzies', 'wafer'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, sublingual',
    metabolitesUrine: ['Methadone', 'EDDP'],
    metabolitesOralFluid: ['Methadone', 'EDDP'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-24 hours',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 12,
    name: 'Pentazocine',
    category: 'Synthetic Opioids',
    commonNames: ['Talwin', 'Talacen'],
    streetNames: ['Ts and blues'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Pentazocine'],
    metabolitesOralFluid: ['Pentazocine'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 13,
    name: 'Propoxyphene',
    category: 'Synthetic Opioids',
    commonNames: ['Darvocet', 'Darvon'],
    streetNames: ['Pain killer'],
    deaSchedule: 'Schedule IV (no longer available in US)',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Propoxyphene', 'norpropoxyphene'],
    metabolitesOralFluid: ['Propoxyphene', 'norpropoxyphene'],
    detectionTimeUrine: '1-2 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence; product withdrawn from US market'
  },
  {
    id: 14,
    name: 'Tapentadol',
    category: 'Synthetic Opioids',
    commonNames: ['Nucynta', 'Nucynta ER'],
    streetNames: [],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Tapentadol'],
    metabolitesOralFluid: ['Tapentadol'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 15,
    name: 'Tramadol',
    category: 'Synthetic Opioids',
    commonNames: ['Ultram', 'Conzip', 'Ultracet'],
    streetNames: ['Trammie', 'ultra'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM, intrarectal',
    metabolitesUrine: ['Tramadol', 'O-desmethyltramadol', 'nortramadol'],
    metabolitesOralFluid: ['Tramadol', 'O-desmethyltramadol', 'nortramadol'],
    detectionTimeUrine: '3-5 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Stimulants
  // ─────────────────────────────────────────────
  {
    id: 16,
    name: 'Amphetamine',
    category: 'Stimulants',
    commonNames: ['Adderall', 'Dexedrine'],
    streetNames: ['Bennies', 'black beauties', 'crank', 'ice', 'speed', 'uppers'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, intranasal, smoked',
    metabolitesUrine: ['Amphetamine'],
    metabolitesOralFluid: ['Amphetamine'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 17,
    name: 'Methamphetamine',
    category: 'Stimulants',
    commonNames: ['Desoxyn'],
    streetNames: ['Crystal', 'glass', 'ice', 'meth', 'crank', 'speed', 'shabu'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, IV, intranasal, smoked',
    metabolitesUrine: ['Amphetamine', 'methamphetamine'],
    metabolitesOralFluid: ['Amphetamine', 'methamphetamine'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-3 days',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 18,
    name: 'Methylphenidate',
    category: 'Stimulants',
    commonNames: ['Ritalin', 'Concerta'],
    streetNames: ['Coke junior', 'kiddy coke', 'skippy', 'vitamin R', 'study buddies'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Oral, intranasal',
    metabolitesUrine: ['Ritalinic acid', 'methylphenidate'],
    metabolitesOralFluid: ['Methylphenidate'],
    detectionTimeUrine: '2-4 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 19,
    name: 'Nicotine',
    category: 'Stimulants',
    commonNames: ['Nicorette', 'Nicoderm'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Smoked, oral, transdermal, intranasal',
    metabolitesUrine: ['Cotinine'],
    metabolitesOralFluid: ['Cotinine'],
    detectionTimeUrine: '2-4 days',
    detectionTimeOralFluid: '2-4 days',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 20,
    name: 'Cathinones ("Bath Salts")',
    category: 'Stimulants',
    commonNames: [],
    streetNames: ['Bliss', 'cloud nine', 'ivory wave', 'vanilla sky'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Oral, intranasal, IV, smoked',
    metabolitesUrine: ['Cathinone metabolites (varies by compound)'],
    metabolitesOralFluid: ['Cathinone metabolites (varies by compound)'],
    detectionTimeUrine: '2-3 days',
    detectionTimeOralFluid: '24 hours',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 21,
    name: 'Cocaine',
    category: 'Stimulants',
    commonNames: [],
    streetNames: ['Blow', 'coca', 'coke', 'crack', 'flake', 'snow'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Intranasal, smoked, IV, oral',
    metabolitesUrine: ['Benzoylecgonine'],
    metabolitesOralFluid: ['Cocaine', 'benzoylecgonine'],
    detectionTimeUrine: 'Single use 12 hours; chronic use 36-72 hours',
    detectionTimeOralFluid: 'Single use 1-2+ days; chronic use 1-6+ days',
    addictionWithdrawal: 'High potential for dependence'
  },
  {
    id: 22,
    name: 'MDMA',
    category: 'Stimulants',
    commonNames: ['Ecstasy'],
    streetNames: ['Adam', 'clarity', 'hug drug', 'XTC'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Oral, intranasal',
    metabolitesUrine: ['MDMA', 'MDA'],
    metabolitesOralFluid: ['MDMA', 'MDA'],
    detectionTimeUrine: '1-2 days',
    detectionTimeOralFluid: '24 hours',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 23,
    name: 'MDA',
    category: 'Stimulants',
    commonNames: [],
    streetNames: ['MDA', 'love drug'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Oral, intranasal',
    metabolitesUrine: ['MDA'],
    metabolitesOralFluid: ['MDA'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Benzodiazepines
  // ─────────────────────────────────────────────
  {
    id: 24,
    name: 'Alprazolam',
    category: 'Benzodiazepines',
    commonNames: ['Xanax'],
    streetNames: ['Bar', 'football', 'hulk', 'xanies', 'z-bars', 'benzos'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Alpha-hydroxyalprazolam', 'alprazolam'],
    metabolitesOralFluid: ['Alprazolam', 'alpha-hydroxyalprazolam'],
    detectionTimeUrine: '2-7 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 25,
    name: 'Chlordiazepoxide',
    category: 'Benzodiazepines',
    commonNames: ['Librium'],
    streetNames: ['Downers', 'tranqs', 'bennies', 'blue bombs'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Nordiazepam', 'oxazepam'],
    metabolitesOralFluid: ['Chlordiazepoxide'],
    detectionTimeUrine: '1-7 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 26,
    name: 'Clonazepam',
    category: 'Benzodiazepines',
    commonNames: ['Klonopin'],
    streetNames: ['K', 'k-pin', 'super valium'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['7-aminoclonazepam'],
    metabolitesOralFluid: ['Clonazepam', '7-aminoclonazepam'],
    detectionTimeUrine: '3-14 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 27,
    name: 'Clorazepate',
    category: 'Benzodiazepines',
    commonNames: ['Tranxene'],
    streetNames: ['Benzos', 'footballs', 'tranks'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Nordiazepam', 'oxazepam'],
    metabolitesOralFluid: ['Nordiazepam'],
    detectionTimeUrine: '1-7 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 28,
    name: 'Flurazepam',
    category: 'Benzodiazepines',
    commonNames: ['Dalmane'],
    streetNames: [],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Desalkylflurazepam', '2-hydroxyethylflurazepam'],
    metabolitesOralFluid: ['Flurazepam'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 29,
    name: 'Lorazepam',
    category: 'Benzodiazepines',
    commonNames: ['Ativan'],
    streetNames: ['Goofballs', 'heavenly blues', 'stupefy'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Lorazepam glucuronide'],
    metabolitesOralFluid: ['Lorazepam'],
    detectionTimeUrine: '2-5 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 30,
    name: 'Midazolam',
    category: 'Benzodiazepines',
    commonNames: ['Versed', 'Dormicum'],
    streetNames: [],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM, intranasal',
    metabolitesUrine: ['Alpha-hydroxymidazolam', 'midazolam'],
    metabolitesOralFluid: ['Midazolam'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 31,
    name: 'Oxazepam',
    category: 'Benzodiazepines',
    commonNames: ['Serax'],
    streetNames: [],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Oxazepam glucuronide'],
    metabolitesOralFluid: ['Oxazepam'],
    detectionTimeUrine: '1-3 days (4-6 weeks with chronic use)',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 32,
    name: 'Temazepam',
    category: 'Benzodiazepines',
    commonNames: ['Restoril'],
    streetNames: ['Beans', 'green devils', 'mazzies', 'tammies'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Oxazepam', 'temazepam glucuronide'],
    metabolitesOralFluid: ['Temazepam'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Barbiturates
  // ─────────────────────────────────────────────
  {
    id: 33,
    name: 'Amobarbital',
    category: 'Barbiturates',
    commonNames: ['Amytal'],
    streetNames: ['Blues', 'blue angel', 'blue devil'],
    deaSchedule: 'Schedule II/III',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Amobarbital', 'hydroxyamobarbital'],
    metabolitesOralFluid: ['Amobarbital'],
    detectionTimeUrine: '5-6 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 34,
    name: 'Butabarbital',
    category: 'Barbiturates',
    commonNames: ['Butisol'],
    streetNames: ['Barbs', 'goof balls', 'yellow jackets'],
    deaSchedule: 'Schedule III',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Butabarbital'],
    metabolitesOralFluid: ['Butabarbital'],
    detectionTimeUrine: '1 day - 3 weeks',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 35,
    name: 'Butalbital',
    category: 'Barbiturates',
    commonNames: ['Fiorinal', 'Fioricet'],
    streetNames: [],
    deaSchedule: 'Schedule III',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Butalbital'],
    metabolitesOralFluid: ['Butalbital'],
    detectionTimeUrine: '1-6 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 36,
    name: 'Pentobarbital',
    category: 'Barbiturates',
    commonNames: ['Nembutal'],
    streetNames: [],
    deaSchedule: 'Schedule II/III',
    routeOfAdmin: 'Oral, IV, IM, rectal',
    metabolitesUrine: ['Pentobarbital'],
    metabolitesOralFluid: ['Pentobarbital'],
    detectionTimeUrine: '3-10 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 37,
    name: 'Phenobarbital',
    category: 'Barbiturates',
    commonNames: ['Luminal', 'Solfoton'],
    streetNames: [],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, IV, IM',
    metabolitesUrine: ['Phenobarbital', 'p-hydroxyphenobarbital'],
    metabolitesOralFluid: ['Phenobarbital'],
    detectionTimeUrine: '1 day - 4 weeks',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 38,
    name: 'Secobarbital',
    category: 'Barbiturates',
    commonNames: ['Seconal'],
    streetNames: [],
    deaSchedule: 'Schedule II/III',
    routeOfAdmin: 'Oral, IV, IM, rectal',
    metabolitesUrine: ['Secobarbital'],
    metabolitesOralFluid: ['Secobarbital'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'High risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Muscle Relaxants
  // ─────────────────────────────────────────────
  {
    id: 39,
    name: 'Carisoprodol',
    category: 'Muscle Relaxants',
    commonNames: ['Soma'],
    streetNames: ['Dance', 'DS', 'soma coma'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Carisoprodol', 'meprobamate'],
    metabolitesOralFluid: ['Carisoprodol', 'meprobamate'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 40,
    name: 'Meprobamate',
    category: 'Muscle Relaxants',
    commonNames: ['Miltown', 'Equanil'],
    streetNames: ['Bambs'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Meprobamate', 'hydroxymeprobamate'],
    metabolitesOralFluid: ['Meprobamate'],
    detectionTimeUrine: '2-5 days',
    detectionTimeOralFluid: '2-3 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Tricyclic Antidepressants
  // ─────────────────────────────────────────────
  {
    id: 41,
    name: 'Amitriptyline',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Elavil', 'Endep'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral, IM',
    metabolitesUrine: ['Amitriptyline', 'nortriptyline'],
    metabolitesOralFluid: ['Amitriptyline', 'nortriptyline'],
    detectionTimeUrine: '2-14 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 42,
    name: 'Desipramine',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Norpramin'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Desipramine', '2-hydroxydesipramine'],
    metabolitesOralFluid: ['Desipramine'],
    detectionTimeUrine: '3-15 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 43,
    name: 'Doxepin',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Sinequan', 'Silenor'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Doxepin', 'nordoxepin'],
    metabolitesOralFluid: ['Doxepin', 'nordoxepin'],
    detectionTimeUrine: '2-8 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 44,
    name: 'Imipramine',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Tofranil'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral, IM',
    metabolitesUrine: ['Imipramine', 'desipramine'],
    metabolitesOralFluid: ['Imipramine', 'desipramine'],
    detectionTimeUrine: '1-6 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 45,
    name: 'Maprotiline',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Deprilept'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Maprotiline', 'desmethylmaprotiline'],
    metabolitesOralFluid: ['Maprotiline'],
    detectionTimeUrine: '7-10 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 46,
    name: 'Nortriptyline',
    category: 'Tricyclic Antidepressants',
    commonNames: ['Pamelor'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Nortriptyline', '10-hydroxynortriptyline'],
    metabolitesOralFluid: ['Nortriptyline'],
    detectionTimeUrine: '4-21+ days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },

  // ─────────────────────────────────────────────
  // Neuropathics
  // ─────────────────────────────────────────────
  {
    id: 47,
    name: 'Gabapentin',
    category: 'Neuropathics',
    commonNames: ['Neurontin', 'Gralise'],
    streetNames: ['Johnnies', 'gabbies'],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Gabapentin'],
    metabolitesOralFluid: ['Gabapentin'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  },
  {
    id: 48,
    name: 'Pregabalin',
    category: 'Neuropathics',
    commonNames: ['Lyrica'],
    streetNames: ['Lycia'],
    deaSchedule: 'Schedule V',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Pregabalin'],
    metabolitesOralFluid: ['Pregabalin'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // SSRIs
  // ─────────────────────────────────────────────
  {
    id: 49,
    name: 'Fluoxetine',
    category: 'SSRIs',
    commonNames: ['Prozac', 'Sarafem'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Fluoxetine', 'norfluoxetine'],
    metabolitesOralFluid: [],
    detectionTimeUrine: '>5 days',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },
  {
    id: 50,
    name: 'Sertraline',
    category: 'SSRIs',
    commonNames: ['Zoloft'],
    streetNames: [],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Sertraline', 'norsertraline'],
    metabolitesOralFluid: [],
    detectionTimeUrine: '>25 days',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'Low risk; discontinuation syndrome possible'
  },

  // ─────────────────────────────────────────────
  // Sedatives/Hypnotics
  // ─────────────────────────────────────────────
  {
    id: 51,
    name: 'Methaqualone',
    category: 'Sedatives/Hypnotics',
    commonNames: ['Quaalude'],
    streetNames: ['Ludes'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Methaqualone', 'hydroxymethaqualone'],
    metabolitesOralFluid: [],
    detectionTimeUrine: '2-4 days',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'High risk of dependence'
  },
  {
    id: 52,
    name: 'Zaleplon',
    category: 'Sedatives/Hypnotics',
    commonNames: ['Sonata'],
    streetNames: ['Downers', 'sleepeasy'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['5-oxo-zaleplon', 'desethylzaleplon'],
    metabolitesOralFluid: [],
    detectionTimeUrine: 'No data available',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  },
  {
    id: 53,
    name: 'Zolpidem',
    category: 'Sedatives/Hypnotics',
    commonNames: ['Ambien'],
    streetNames: ['No-Gos', 'zombie pills', 'tic-tacs'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral, sublingual',
    metabolitesUrine: ['Zolpidem', 'zolpidem carboxylic acid'],
    metabolitesOralFluid: ['Zolpidem'],
    detectionTimeUrine: '1-2 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  },
  {
    id: 54,
    name: 'Zopiclone',
    category: 'Sedatives/Hypnotics',
    commonNames: ['Imovane', 'Lunesta'],
    streetNames: ['Zimmers', 'zimmies', 'zoppies'],
    deaSchedule: 'Schedule IV',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Zopiclone', 'N-desmethylzopiclone'],
    metabolitesOralFluid: ['Zopiclone'],
    detectionTimeUrine: '1-4 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Hallucinogens
  // ─────────────────────────────────────────────
  {
    id: 55,
    name: 'PCP',
    category: 'Hallucinogens',
    commonNames: [],
    streetNames: ['Angel dust', 'hog', 'peace pills', 'embalming fluid'],
    deaSchedule: 'Schedule II',
    routeOfAdmin: 'Smoked, oral, intranasal, IV',
    metabolitesUrine: ['PCP'],
    metabolitesOralFluid: ['PCP'],
    detectionTimeUrine: '2-30 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate-to-high risk of dependence'
  },
  {
    id: 56,
    name: 'LSD',
    category: 'Hallucinogens',
    commonNames: [],
    streetNames: ['Acid', 'dots', 'mellow yellow', 'window pane'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Oral, sublingual',
    metabolitesUrine: ['LSD', '2-oxo-3-hydroxy-LSD'],
    metabolitesOralFluid: ['LSD'],
    detectionTimeUrine: '1.5-5 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low risk of dependence; tolerance develops rapidly'
  },

  // ─────────────────────────────────────────────
  // Cannabis
  // ─────────────────────────────────────────────
  {
    id: 57,
    name: 'Marijuana (THC)',
    category: 'Cannabis',
    commonNames: ['Dronabinol', 'Marinol', 'Epidiolex'],
    streetNames: ['Pot', 'weed', 'ganja', 'chronic', 'Mary Jane'],
    deaSchedule: 'Schedule I/II/III/V (varies by form)',
    routeOfAdmin: 'Smoked, oral, vaporized',
    metabolitesUrine: ['THC-COOH (11-nor-9-carboxy-THC)'],
    metabolitesOralFluid: ['THC (delta-9-tetrahydrocannabinol)'],
    detectionTimeUrine: 'Single use 3 days; moderate use 5-7 days; daily use 10-15 days; chronic use >30 days',
    detectionTimeOralFluid: '24+ hours',
    addictionWithdrawal: 'Moderate risk of dependence with chronic use'
  },
  {
    id: 58,
    name: 'Synthetic Cannabinoids',
    category: 'Cannabis',
    commonNames: ['K2', 'Spice'],
    streetNames: ['Spice', 'blaze', 'demon', 'black magic'],
    deaSchedule: 'Schedule I',
    routeOfAdmin: 'Smoked, oral, vaporized',
    metabolitesUrine: ['Varies by compound (JWH-018, JWH-073 metabolites, etc.)'],
    metabolitesOralFluid: ['Varies by compound'],
    detectionTimeUrine: '1-3 days',
    detectionTimeOralFluid: '12-48 hours',
    addictionWithdrawal: 'High risk of dependence'
  },

  // ─────────────────────────────────────────────
  // Other
  // ─────────────────────────────────────────────
  {
    id: 59,
    name: 'Alcohol',
    category: 'Other',
    commonNames: [],
    streetNames: ['Beer', 'booze', 'moonshine'],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Ethyl glucuronide (EtG)', 'ethyl sulfate (EtS)'],
    metabolitesOralFluid: ['Ethanol'],
    detectionTimeUrine: '1-2 days (EtG/EtS up to 80 hours)',
    detectionTimeOralFluid: '6-24 hours',
    addictionWithdrawal: 'High risk of dependence; withdrawal can be life-threatening'
  },
  {
    id: 60,
    name: 'Dextromethorphan',
    category: 'Other',
    commonNames: ['Robitussin', 'Delsym'],
    streetNames: ['DXM', 'robo', 'tussin'],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral',
    metabolitesUrine: ['Dextromethorphan', 'dextrorphan'],
    metabolitesOralFluid: [],
    detectionTimeUrine: '24 hours',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'Low-to-moderate risk of dependence at high doses'
  },
  {
    id: 61,
    name: 'Ketamine',
    category: 'Other',
    commonNames: ['Ketalar', 'Spravato'],
    streetNames: ['Cat valium', 'special k', 'vitamin k'],
    deaSchedule: 'Schedule III',
    routeOfAdmin: 'IV, IM, oral, intranasal',
    metabolitesUrine: ['Ketamine', 'norketamine'],
    metabolitesOralFluid: ['Ketamine', 'norketamine'],
    detectionTimeUrine: '3-5 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Moderate risk of dependence'
  },
  {
    id: 62,
    name: 'Kratom',
    category: 'Other',
    commonNames: ['Mitragyna speciosa'],
    streetNames: ['Biak', 'kakuam', 'thang'],
    deaSchedule: 'Nonscheduled',
    routeOfAdmin: 'Oral (brewed tea, capsules, powder)',
    metabolitesUrine: ['Mitragynine', '7-hydroxymitragynine'],
    metabolitesOralFluid: [],
    detectionTimeUrine: 'Up to 7 days',
    detectionTimeOralFluid: 'No data available',
    addictionWithdrawal: 'Moderate risk of dependence with regular use'
  },
  {
    id: 63,
    name: 'Piperazines',
    category: 'Other',
    commonNames: [],
    streetNames: ['Bath salts', 'veiled as ecstasy'],
    deaSchedule: 'Schedule I (BZP)',
    routeOfAdmin: 'Oral, intranasal',
    metabolitesUrine: ['BZP', 'TFMPP', 'hydroxylated metabolites'],
    metabolitesOralFluid: ['BZP', 'TFMPP'],
    detectionTimeUrine: '2-3 days',
    detectionTimeOralFluid: '1-2 days',
    addictionWithdrawal: 'Low-to-moderate risk of dependence'
  }
];
