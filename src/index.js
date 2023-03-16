import './style.css'
import React, { useState } from 'react'
import QRCode from 'react-qr-code'

export function EnterUrl(props) {
  // console.log("toto")
   const width = props.options.width ? props.options.width : '500px'
  const backgroundColor = props.options.backgroundColor ? props.options.backgroundColor: 'pink'
  const backgroundColorButton = props.options.backgroundColorButton
  ? props.options.backgroundColorButton : 'blue'
const colorTextButton = props.options.colorTextButton
 ? props.options.colorTextButton  : 'white'

  const [url, setUrl] = useState('')

  function recupUrl() {
    const urlInput = document.querySelector('#input').value
    setUrl(urlInput)
  }

  return (
   <div className='container' style={{ backgroundColor: backgroundColor }}>
   
       <div className='title'>Mettre l'url du site internet</div>
      <input placeholder=' http://' id='input' style={{ width: width }} /> 
     
      <button
        onClick={() => recupUrl()}
        style={{
          backgroundColor: backgroundColorButton,
          color: colorTextButton
        }}
      >
        Genere ton QR code
      </button>

      <QrCodeGenerate url={url} options={props.options} />
    </div>
  )
}

function QrCodeGenerate(props) {
 const marginTopQrCode = props.options?.marginTopQrCode
 ? props.options.marginTopQrCode : '50px'
  const heightQrCode = props.options?.heightQrCode
    ? props.options.heightQrCode : '150px'
  
  if (props.url && props.url !== '') {
    return (
      <div className='containerQrCode'>
        <QRCode
          id='qrcode'
          value={decodeURIComponent(props.url)}
          style={{ margintop: marginTopQrCode, height: heightQrCode }}
        />
      </div>
    )
  }
}
