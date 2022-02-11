import React, { useState } from 'react'
import Gallery from './Gallery'
import styles from '../../styles/Form.module.css'
export default function Form() {
  let [activeRover, setActiveRover] = useState('curiosity')
  let [activeCamera, setActiveCamera] = useState('navcam')
  let [activeDate, setActiveDate] = useState(1)
  let [apiData, setApiData] = useState({photos: []})
  let [apiUrl, setApiUrl] = useState('')
  async function getNasaImages(event) {
    event.preventDefault()
    console.log('getNasaImages')
    const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
    const paramApiKey = '/photos?api_key=V1jkRLsofRa97feRRNvnth7rcrejMGHEewHNKOVg'
    let paramCamera = '&camera=' + activeCamera
    let paramSol = '&sol=' + activeDate
    let finalUrl = baseUrl + activeRover + paramApiKey + paramCamera + paramSol
    setApiUrl(finalUrl)
    const res = await fetch(finalUrl, {
      method: 'GET'
    })
    setApiData(await res.json())
  }
  function updateDate(event) {
    setActiveDate(event.target.value)
  }
  return (
    <section>
      <div className="content_wrap_outside">
        <div className="content_wrap_inside_pad">
          <h1>
            <img alt="NASA" src="/image/nasa.png" />
            Mars Exploration Rovers
          </h1>
          <form className={styles.form} onSubmit={getNasaImages}>
            <div className={styles.row}>
              <label className={styles.label}>
                <i className="fas fa-truck-monster"></i> Choose a Rover
              </label>
              <div className={activeRover === 'curiosity' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveRover('curiosity')}>
                Curiosity
              </div>
              <div className={activeRover === 'opportunity' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveRover('opportunity')}>
                Opportunity
              </div>
              <div className={activeRover === 'spirit' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveRover('spirit')}>
                Spirit
              </div>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>
                <i className="fas fa-camera"></i> Choose a Camera
              </label>
              <div className={activeCamera === 'fhaz' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('fhaz')}>
                FHAZ
              </div>
              <div className={activeCamera === 'rhaz' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('rhaz')}>
                RHAZ
              </div>
              <div className={activeCamera === 'mast' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('mast')}>
                MAST
              </div>
              <div className={activeCamera === 'chemcam' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('chemcam')}>
                CHEMCAM
              </div>
              <div className={activeCamera === 'mahli' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('mahli')}>
                MAHLI
              </div>
              <div className={activeCamera === 'mardi' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('mardi')}>
                MARDI
              </div>
              <div className={activeCamera === 'navcam' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('navcam')}>
                NAVCAM
              </div>
              <div className={activeCamera === 'pancam' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('pancam')}>
                PANCAM
              </div>
              <div className={activeCamera === 'minites' ? styles.button_selected_option : styles.button_select_option} onClick={() => setActiveCamera('minites')}>
                MINITES
              </div>
            </div>
            <div className={styles.row}>
              <label className={styles.label}>
                <i className="far fa-calendar-alt"></i> Choose a Martian Sol
              </label>
              <input className={styles.input_date} onChange={updateDate} type="text" value={activeDate} />
            </div>
            <div className={styles.row}>
              <button className={styles.button_select_option} type="submit">
                <i className="fas fa-rocket"></i>
                <span className={styles.button_text}>Load Images</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Gallery data={apiData} />
    </section>
  )
}
