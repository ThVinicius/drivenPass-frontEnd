export function configRequest(data) {
  const url = '/signIn'

  const method = 'post'

  const submitToken = false

  const requests = [{ url, method, data }]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, navigate } = props

  const [data] = res

  global.token = data.token

  navigate('/home')
}

function failCase(props) {
  const { res, setSeeking } = props

  switch (res.statusText) {
    case 'Bad Request':
      const error = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      alert(error)
      break

    case 'Unauthorized':
      const message = 'Email ou senha incorreta'

      alert(message)
      break

    default:
      alert('Ocorreu um erro inesperado!\nTente mais tarde')
      break
  }

  setSeeking(false)
}
