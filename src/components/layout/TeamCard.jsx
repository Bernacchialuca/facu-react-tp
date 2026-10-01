import './TeamCard.css'

function TeamCard({ nombre, rol, email }) {
  const iniciales = nombre
    .split(' ')
    .map((parte) => parte[0])
    .join('')

  return (
    <article className="team-card">
      <span className="team-card__avatar" aria-hidden="true">
        {iniciales}
      </span>
      <div>
        <h4 className="team-card__nombre">{nombre}</h4>
        <p className="team-card__rol">{rol}</p>
        <a className="team-card__email" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </article>
  )
}

export default TeamCard
