const patients = {
  data: [{'node': { 'id': '1', 'node_type':'PAT', 'name':'Jhondoe'}, 'first_name': 'Jhon', 'last_name': 'Doe'},
         {'node': { 'id': '2', 'node_type':'PAT', 'name':'Garystu'}, 'first_name': 'Gary', 'last_name': 'Stu'},
         {'node': { 'id': '3', 'node_type':'PAT', 'name':'Marysue'}, 'first_name': 'Mary', 'last_name': 'Sue'}]
};

const dropdownTablePatientInfo = {
  data:{ 'id': '1', 'first_name': 'Jhon', 'last_name': 'Doe', 'medical_record_number': '345tbg', 'birthdate': 'August-16th-1995',
    'phone_number': '3222222', 'attributed_provider': 'random', 'payer': 'random',
    'next_visit': { 'date': 'August 26, 2017', 'rendering': 'random text', 'location': 'right here', 'speciality': 'some esp', 'status': 'active'},
    'last_visit': { 'date': 'Sept 26, 2017', 'rendering': 'random text', 'location': 'not here', 'speciality': 'some esp 1', 'status': 'active'}}
  };

export const fixtures = {
  patients,
  dropdownTablePatientInfo
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
      case '/searchPatients':
        result = fixtures.patients;
        break;

      case '/searchPatientInfo':
        result = fixtures.dropdownTablePatientInfo;
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
