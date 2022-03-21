import React, {useState} from 'react'
import InputText from './InputText'
import Action from './Action'
import styles from '../../styles/Form.module.css'
export default function FormIngredient() {
  const data = {
    formTitle: "Add an Ingredient",
    inputs: [
      {
        id: 1,
        autoCorrect: "on",
        label: "English Title",
        name: "title_en",
        required: true,
        spellCheck: true,
        tabIndex: 1
      },
      {
        id: 2,
        autoCorrect: "off",
        label: "Spanish Title",
        name: "title_es",
        required: false,
        spellCheck: true,
        tabIndex: 2
      },
      {
        id: 3,
        autoCorrect: "off",
        label: "Quantity",
        name: "quantity",
        required: false,
        spellCheck: false,
        tabIndex: 3
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
        tabIndex: 4
      }
    ]
  }
  const [titleEn, setTitleEn] = useState("")
  const [titleEs, setTitleEs] = useState("")
  const [quantity, setQuantity] = useState("0")
  const handleSubmit = (event) => {
    event.preventDefault()
    let payload = {
      titleEn: titleEn,
      titleEs: titleEs,
      quantity: quantity
    }
    console.log(payload)
  }
  return (
    <form aria-label={data.formTitle} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.title}>
        {data.formTitle}
      </div>
      <InputText
        data={data.inputs[0]}
        key={data.inputs[0].id}
        onChange={event => setTitleEn(event.target.value)}
        val={titleEn}
      />
      <InputText
        data={data.inputs[1]}
        key={data.inputs[1].id}
        onChange={event => setTitleEs(event.target.value)}
        val={titleEs} />
      <InputText
        data={data.inputs[2]}
        key={data.inputs[2].id}
        onChange={event => setQuantity(event.target.value)}
        val={quantity} />
      <Action data={data.actions} />
    </form>
  )
}
