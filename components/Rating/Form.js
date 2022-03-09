import React, {useState} from "react"
import Stars from './Stars'
import styles from '../../styles/Form.module.css'
export default function Form() {
  const [starSelection, setStarSelection] = useState(0)
  const [userComment, setUserComment] = useState("")
  const clickStar = (key) => {
    setStarSelection(key)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const url = "http://localhost:4000/add_rating"
    let data = {
      rating: starSelection,
      comment: userComment
    }
    console.log(data)
    async function postData(url, data) {
      console.log('about to submit to backend... data=',data)
      const response = await fetch(url, {
        headers: 'Accept',
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log('submitting')
      let result = response.json()
      getScore()
      return result; // parses JSON response into native JavaScript objects
    }
    postData(url, data)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.label}>How likely are you to reccomend this recipe to a friend or family?</label>
        <Stars starSelection={starSelection} click={clickStar} />
        <input type="hidden" value={starSelection}/>
      </div>
      <div className={styles.row}>
        <label className={styles.label} htmlFor="feedback">What feedback do you have for this recipe?</label>
        <textarea
          className={styles.input_area}
          id="feedback"
          name="feedback"
          spellCheck="false"
          onChange={evt => setUserComment(evt.target.value)}
          tabIndex="1"
          type="text"
          value={userComment}
        />
      </div>
      <div className={styles.row}>
        <button className={styles.button_cancel} type="button">
          <i className="fa fa-times"/>
          <span className={styles.button_label}>Cancel</span>
        </button>
        <button className={styles.button_save} type="submit">
          <i className="fa fa-save"/>
          <span className={styles.button_label}>Save</span>
        </button>
      </div>
    </form>
  )
}
