const appointments = {
  data: [{ 'date': '8/24/2017', 'id': '1', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '2', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '3', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '4', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '5', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '6', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '7', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '8', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '9', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '10', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '11', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' },
  { 'date': '8/24/2017', 'id': '12', 'resource': 'Smith, Jhon MD', 'location': 'The eye Center', 'specialty': 'Ophtalmologist', 'status': 'Kept', 'source': 'EHR NextGen' }]
};

const vitals = {
  data: [{
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  },
  {
    'date': '8/24/2017', 'time': '8:32 AM', 'blood_pressure': '120/80', 'height': '62"', 'weight': '185 lbs.', 'BMI': '24.4', 'glucose': '4.5', 'pain': '9/10',
    'SpO2': '94%', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen'
  }]
};

const labs = {
  data: [{ 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Creatinine', 'provider': 'Johnson, Jane', 'location': 'Associates of Internal Medicine', 'result': '8/24/2017', 'results': '2mg/dL', 'status': 'Signed off', 'source': 'EHR NextGen' }]
};

const orders = {
  data: [{ 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date': '8/23/2017', 'description': 'Referral for CT', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'rendering': 'Johnson, Jane', 'result_date': '8/24/2017', 'result': 'Eval and treat', 'status': 'Ordered', 'source': 'EHR NextGen' }]
};

const problem_list = {
  data: [{ 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' }]
};

const diagnoses = {
  data: [{ 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Hypertension', 'chronic': 'Acute', 'severity': 'Lethal', 'resolved': '4/12/2016', 'status': 'Resolved', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'source': 'EHR NextGen' }]
};

const immunizations = {
  data: [{ 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' },
  { 'date_administered': '8/23/2017', 'description': 'Zoster', 'sequence_number': '1', 'rendering': 'Johnson, Jane', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen' }]
};

const medications = {
  data: [{
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  },
  {
    'start_date': '8/23/2017', 'stop_date': '9/23/2017', 'medication': 'Vyvanse', 'dose': '70 mg', 'frequency': 'Once daily', 'days_supplied': '30 days', 'quantity': '30', 'route': 'Ophtalmic',
    'comments': 'Take with vit C', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Ordered', 'source': 'EHR NextGen'
  }]
};

const allergies = {
  data: [{ 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' },
  { 'onset': '8/23/2017', 'description': 'Peanut', 'reaction': 'hives', 'resolved': '4/12/2016', 'provider': 'Smith, Jhon MD', 'location': 'The Eye Center', 'status': 'Resolved', 'source': 'EHR NextGen' }]
};

const dropdownTablePatientInfo = {
  data: {
    'id': '1', 'first_name': 'Jhon', 'last_name': 'Doe', 'medical_record_number': '345tbg', 'birthdate': 'August-16th-1995',
    'phone_number': '3222222', 'attributed_provider': 'random', 'payer': 'random', 'node_type': 'PAT',
    'next_visit': { 'date': 'August 26, 2017', 'rendering': 'random text', 'location': 'right here', 'speciality': 'some esp', 'status': 'active' },
    'last_visit': { 'date': 'Sept 26, 2017', 'rendering': 'random text', 'location': 'not here', 'speciality': 'some esp 1', 'status': 'active' }
  }
};

const alcoholAndTobacco = {
  data:[{'date': '8/22/2017' , 'tobacco_status': 'non smoker' , 'tobacco_counseling': '', 'second_hand_smoke': 'yes', 'alcohol_status': 'Social drinker', 'alcohol_treatment': '', 'alcohol_counseling': '', 'provider': 'Smith, Jhon', 'location': 'The Eye center', 'source': 'EHR NEXTGEN'},
            {'date': '8/22/2017' , 'tobacco_status': 'non smoker' , 'tobacco_counseling': '', 'second_hand_smoke': 'yes', 'alcohol_status': 'Social drinker', 'alcohol_treatment': '', 'alcohol_counseling': '', 'provider': 'Smith, Jhon', 'location': 'The Eye center', 'source': 'EHR NEXTGEN'},
            {'date': '8/22/2017' , 'tobacco_status': 'non smoker' , 'tobacco_counseling': '', 'second_hand_smoke': 'yes', 'alcohol_status': 'Social drinker', 'alcohol_treatment': '', 'alcohol_counseling': '', 'provider': 'Smith, Jhon', 'location': 'The Eye center', 'source': 'EHR NEXTGEN'}]
};

const fallsInjury = {
  data:[{'date': '8/22/2017' , 'falls': '3' , 'fall_injury': '1' , 'fall_risk': 'yes' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' },
  {'date': '8/22/2017' , 'falls': '3' , 'fall_injury': '1' , 'fall_risk': 'yes' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' },
  {'date': '8/22/2017' , 'falls': '3' , 'fall_injury': '1' , 'fall_risk': 'yes' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' }]
};

const generalSocial = {
  data:[{'date': '8/22/2017' , 'pregnant': 'yes' , 'transportation': 'requires transportation' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen'},
  {'date': '8/22/2017' , 'pregnant': 'yes' , 'transportation': 'requires transportation' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen'},
  {'date': '8/22/2017' , 'pregnant': 'yes' , 'transportation': 'requires transportation' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen'}]
};

const confidential = {
  data:[{'date': '8/22/2017' , 'drug_use': 'Yes' , 'drug_type': 'Methamphetamine' , 'HIV_status': 'Positive' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' },
  {'date': '8/22/2017' , 'drug_use': 'Yes' , 'drug_type': 'Methamphetamine' , 'HIV_status': 'Positive' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' },
  {'date': '8/22/2017' , 'drug_use': 'Yes' , 'drug_type': 'Methamphetamine' , 'HIV_status': 'Positive' , 'provider': 'Smith, Jhon' , 'location': 'The Eye Center' , 'source': 'EHR NextGen' }]
};

export const fixtures = {
  appointments,
  dropdownTablePatientInfo,
  vitals,
  labs,
  orders,
  problem_list,
  diagnoses,
  immunizations,
  medications,
  allergies,
  alcoholAndTobacco,
  fallsInjury,
  generalSocial,
  confidential
};

export default {
  get: (url) => {
    let result;

    switch (url) {
      case '/users':
        result = fixtures.users;
        break;

      case '/organizations':
        result = fixtures.organizations;
        break;
    }
    return Promise.resolve(result);
  },

  post: (url, body) => {
    let result;

    switch (url) {
      case '/searchPatientAppointment':
        result = fixtures.appointments;
        break;

      case '/searchPatientVitals':
        result = fixtures.vitals;
        break;

      case '/searchPatientAllergies':
        result = fixtures.allergies;
        break;

      case '/searchPatientProblemList':
        result = fixtures.problem_list;
        break;

      case '/searchPatientMedications':
        result = fixtures.medications;
        break;

      case '/searchPatientImmunizations':
        result = fixtures.immunizations;
        break;

      case '/searchPatientDiagnoses':
        result = fixtures.diagnoses;
        break;

      case '/searchPatientInfo':
        result = fixtures.dropdownTablePatientInfo;
        break;

      case '/searchPatientLabs':
        result = fixtures.labs;
        break;

      case '/searchPatientAlcoholAndTobacco':
        result = fixtures.alcoholAndTobacco;
        break;

      case '/searchPatientFallsInjury':
        result = fixtures.fallsInjury;
        break;

      case '/searchPatientGeneralSocial':
        result = fixtures.generalSocial;
        break;

      case '/searchPatientConfidential':
        result = fixtures.confidential;
        break;

      case '/searchPatientOrders':
        result = fixtures.orders;
        break;

      case '/affilliations':
        result = fixtures.affilliations;
        break;

      case '/users':
        result = { data: body };
        break;
    }

    return Promise.resolve(result);
  },

  put: (url, body) => {
    let result;

    switch (url) {
      case '/users':
        result = { data: body };
        break;
    }

    return Promise.resolve(result);
  },

  delete: (url, body) => {
    let result;

    switch (url) {
      case '/users':
        result = {};
        break;
    }

    return Promise.resolve(result);
  }
};
