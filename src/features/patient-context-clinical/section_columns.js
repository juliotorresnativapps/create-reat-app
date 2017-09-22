export const COLUMNS = {
  APPOINTMENT: ['date', 'resource', 'location', 'specialty', 'status', 'source'],
  VITALS: ['date', 'time', 'blood_pressure', 'height', 'weight', 'BMI', 'glucose', 'pain', 'SpO2', 'provider', 'location', 'source'],
  LABS: ['date', 'description', 'provider', 'location', 'result', 'results', 'status', 'source'],
  ORDERS: ['date', 'description', 'provider', 'location', 'rendering', 'result_date', 'result', 'status', 'source'],
  PROBLEM_LIST: ['onset', 'description', 'chronic', 'resolved', 'provider', 'location', 'source'],
  DIAGNOSES: ['onset', 'description', 'chronic', 'severity', 'resolved', 'status', 'provider', 'location', 'source'],
  IMMUNIZATIONS: ['date_administered', 'description', 'sequence_number', 'rendering', 'location', 'status', 'source'],
  MEDICATIONS: ['start_date', 'stop_date', 'medication', 'dose', 'frequency', 'days_supplied', 'quantity', 'route',
    'comments', 'provider', 'location', 'status', 'source'],
  ALLERGIES: ['onset', 'description', 'reaction', 'resolved', 'provider', 'location', 'status', 'source'],
  SOCIAL_HISTORY: { 'alcoholAndTobacco': ['date', 'tobacco_status', 'tobacco_counseling', 'second_hand_smoke', 'alcohol_status', 'alcohol_treatment', 'alcohol_counseling', 'provider', 'location', 'source' ],
                    'fallsInjury': ['date', 'falls', 'fall_injury', 'fall_risk', 'provider', 'location', 'source' ],
                    'generalSocial': ['date', 'pregnant', 'transportation', 'provider', 'location', 'source' ],
                    'confidential': ['date', 'drug_use', 'drug_type', 'HIV_status', 'provider', 'location', 'source' ] }
};
