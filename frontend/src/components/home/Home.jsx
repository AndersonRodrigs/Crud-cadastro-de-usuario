import Main from '../templates/Main'

export default function Home(props) {
  return (
    <Main
      icon="home"
      title="Início"
      subtitle="Segundo Projeto do capítulo de React"
    >
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a costrução de um cadastro desenvolvido em
        React!
      </p>
    </Main>
  )
}
