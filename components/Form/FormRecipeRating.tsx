import React, {useState} from 'react'
import Stars from './Stars'
import InputArea from './InputArea'
import Action from './Action'
import styles from '../../styles/Form.module.css'
export default function FormRecipeRating() {
  const data = {
    formTitle: "Rate this Recipe",
    stars: {
      id: 1,
      label: "How likely are you to reccomend this recipe to a friend or family?",
      name: "rating",
      numStars: 10,
      required: true,
      tabIndex: 1
    },
    inputs: [
      {
        id: 2,
        autoCorrect: "on",
        label: "What feedback do you have for this recipe?",
        name: "feedback",
        required: false,
        spellCheck: true,
        tabIndex: 2
      }
    ],
    actions: [
      {
        id: 91,
        url: "/comida/list",
        label: "Cancel"
      },
      {
        id: 92,
        label: "Save",
        tabIndex: 3
      }
    ]
  }
  const [feedback, setFeedback] = useState('')
  const [starSelection, setStarSelection] = useState(0)
  const handleSubmit = (event) => {
    event.preventDefault()
    let payload = {
      rating: starSelection,
      feedback: feedback
    }
    console.log(payload)
  }
  return (
    <form aria-label={data.formTitle} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.title}>
        {data.formTitle}
      </div>
      <Stars
        data={data.stars}
        key={data.stars.id}
        onClick={(key) => setStarSelection(key)}
        val={starSelection}
      />
      <InputArea
        data={data.inputs[0]}
        key={data.inputs[0].id}
        onChange={event => setFeedback(event.target.value)}
        val={feedback}
      />
      <Action data={data.actions} />
    </form>
  )
}
