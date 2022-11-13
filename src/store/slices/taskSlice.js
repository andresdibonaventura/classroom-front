export const getTask = () => (dispatch) => {
    const URL = 'https://english-classroom.onrender.com/api/v1/task/me'
    return axios.get(URL, getConfig())
      .then(res => dispatch(setCartGlobal(res.data.task)))
      .catch(err => console.log(err.data))
  }
  
  export default getTask;
  