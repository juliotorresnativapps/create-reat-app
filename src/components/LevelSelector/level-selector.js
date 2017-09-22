export const actions = {
  CHANGE_LEVEL: 'CHANGE_LEVEL'
};

export const actionCreators = {
  changeLevel: (id) => ({
    type: actions.CHANGE_LEVEL,
    payload: id
  })
};
