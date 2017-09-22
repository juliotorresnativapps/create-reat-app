export const actions = {
  CHANGE_NODE: 'CHANGE_NODE'
};

export const actionCreators = {
  changeNode: (id) => ({
    type: actions.CHANGE_NODE,
    payload: id
  })
};
