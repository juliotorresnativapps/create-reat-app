const milliman = {
  data: []
};

const raf = {
  data: []
};

const compliance = { data: []};

const hcc_category = {
  data: [{ 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '1',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '2',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '3',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '4',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '5',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '6',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '7',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '8',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '9',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Diabetes w Ophtalmologic or unespecified manifestation', 'id': '10',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]}]
};

const complance_category = {
  data: [{ 'categories': 'Category 1', 'id': '1',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '2',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '3',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '4',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '5',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '6',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '7',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '8',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '9',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]},
        { 'categories': 'Category 1', 'id': '10',
        'data': [{'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'},
        {'diagnosis_(dx)_code': '110', 'dx_date': '4/12/2017' , 'dx_description': 'Diabetes mellitus due to underlying condition with diabetic cataract'}]}]
};

export const fixtures = {
  milliman,
  hcc_category,
  complance_category,
  compliance,
  raf
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
      case '/searchPatientMilliman':
        result = fixtures.milliman;
        break;

      case '/searchPatientCompliance':
        result = fixtures.complance;
        break;

      case '/searchPatientRAF':
        result = fixtures.raf;
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
