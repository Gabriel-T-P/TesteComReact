import './Title.css'

export default function Title({ title, subtitle }) {
  // ou usando o props ao inves do descronstutor. export default function Title(props)

  return (
    <div className='title-block'>
      <h1 className="title">{title}</h1>
      <br />
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  )
}