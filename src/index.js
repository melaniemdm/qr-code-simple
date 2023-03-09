import './styles.module.css'
import QRCode from 'react-qr-code'
import React, { useState } from 'react'
export function EnterUrl() {
  const [url, setUrl] = useState('')

  function recupUrl() {
    const urlInput = document.querySelector('#input').value
    setUrl(urlInput)
  }
  return (
    <div className='container'>
      <div className='title'>Mettre l'url du site internet</div>
      <input placeholder=' http://' id='input' />
      <button onClick={() => recupUrl()}>Genere QR code</button>

      {QrCodeGenerate(url)}
    </div>
  )
}

function QrCodeGenerate(props) {
  if (props.url && props.url !== '') {
    return (
      <div className='containerQrCode'>
        <QRCode id='qrcode' value={decodeURIComponent(props.url)} />
      </div>
    )
  }
}
