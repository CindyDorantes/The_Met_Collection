const GET_DEPS = 'get_departments';
const url = 'https://collectionapi.metmuseum.org/public/collection/v1/departments';
const initialState = [];

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEPS: {
      return action.payload;
    }
    default:
      return state;
  }
};

const depsArray = (data) => {
  const departments = [];
  data.departments.map((department) => (
    departments.push(
      {
        departmentId: department.departmentId,
        displayName: department.displayName,
        path: `/${department.displayName.toLowerCase().replace(/ /gi, '-')}`,
      },
    )
  ));
  return departments;
};

const getDepartments = () => (dispatch) => fetch(url)
  .then(async (response) => {
    const departmentData = await response.json();
    return departmentData;
  })
  .then((departmentData) => {
    dispatch({ type: GET_DEPS, payload: depsArray(departmentData) });
  });

export { getDepartments };
export default departmentReducer;
