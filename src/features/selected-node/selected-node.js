export const actions = {
  SELECT_NODE: 'SELECT_NODE'
};

const defaultState = {
  originNode: {},
  selectedNode: {'Name':'', 'ID': '', 'Type': ''}
};

export const actionCreators = {
  selectNode: (node) => ({
    type: actions.SELECT_NODE,
    payload: node
  }),
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case actions.SELECT_NODE: {
      return {
        ...state,
        selectedNode: action.payload
      };
    }

    default: return state;
  }
}

export const NAME = 'selected-node';
