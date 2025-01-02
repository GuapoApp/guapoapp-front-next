import Router from 'next/router'

const goBackToDashboard = (e) => {
  e.preventDefault()
  Router.push('/profesional')
}

export { goBackToDashboard }
