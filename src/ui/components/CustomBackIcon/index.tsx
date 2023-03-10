import { useState } from 'react'
import { Link } from 'react-router-dom'
import { backArrow } from '@Asset/images'

const CustomBackIcon = ({
  linkTo,
  popup,
  state
}: {
  linkTo: string | number
  state?: any
  popup?: {
    prompt: string
    yesText: string
    noText: string
  } | null
}) => {
  const [showPopup, setShowPopup] = useState(false)

  function handlePopupClose() {
    setShowPopup(false)
  }

  if (!popup) {
    return (
      <div className="back-image">
        {/* @ts-ignore */}
        <Link to={linkTo} state={state}>
          <img style={{ marginLeft: '1rem' }} src={backArrow} alt="back" />
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="back-image">
        <img
          // style={{ marginLeft: '1rem' }}
          src={backArrow}
          alt="back"
          onClick={() => setShowPopup(true)}
        />
      </div>
      {showPopup && (
        <div className="popup">
          <p> {popup.prompt}</p>
          <div>
            {/* @ts-ignore */}
            <Link to={linkTo}>
              <button className="close">{popup.yesText}</button>
            </Link>
          </div>

          <div>
            <button className="stay" onClick={handlePopupClose}>
              {popup.noText}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomBackIcon
