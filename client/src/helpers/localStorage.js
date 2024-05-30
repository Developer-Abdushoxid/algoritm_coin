export const getTokenStorage = () => {
  const token = JSON.parse(localStorage.getItem('token'))
  return token;
}

export const setTokenStorage = (token) => {
  localStorage.setItem('token', JSON.stringify(token))
}

export const removeItemStorage = () => {
  localStorage.removeItem('token')
}