import ReactDOM from 'react-dom'
import './Modal.css'


export default function Modal({ children, isSalesModal }) {
  return ReactDOM.createPortal((

    <div className="modal-backdrop">
      <div className="modal" style={{
        borderColor: isSalesModal ? '#ff4500' : '#555'
      }} >

        {children}

      </div>
    </div >

  ), document.body)
}
