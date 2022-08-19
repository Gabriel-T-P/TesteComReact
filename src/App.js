import { useState } from 'react';
import './App.css';
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {

  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState([]);

  const adicionarFrase = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })

    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return event.id !== id
      })
    })
  }

  return (
    <div className="App">
      <Title title='Minhas Frases' subtitle='as mais variadas frases usadas no dia a dia' />

      {!showModal && (
        <div>
          <button onClick={() => setShowModal(true)}>Adicionar frase</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Mostrar Frases</button>
        </div>
      )}

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Ocultar Frases</button>
        </div>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && (
        <Modal isSalesModal={true} >
          <NewEventForm adicionarFrase={adicionarFrase} />
        </Modal>
      )}

    </div>
  );
}

export default App;
