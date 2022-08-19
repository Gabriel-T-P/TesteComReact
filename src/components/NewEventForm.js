import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({ adicionarFrase }) {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [tipo, setTipo] = useState('poesia')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setTipo('poesia')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      tipo: tipo,
      id: Math.floor(Math.random() * 10000)
    }

    console.log(event)
    adicionarFrase(event)
    resetForm()
  }

  return (

    <form className="new-event-form" onSubmit={handleSubmit}>

      <label>
        <span>Título da frase:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>

      <label>
        <span>Data de criação da frase:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>

      <label>
        <span>Tipo de frase:</span>
        <select onChange={(e) => setTipo(e.target.value)}>
          <option value="poesia">Poesia</option>
          <option value="aleatório">Aleatório</option>
          <option value="engraçado">Engraçado</option>
        </select>
      </label>

      <button>Confirmar</button>

    </form>
  )
}
