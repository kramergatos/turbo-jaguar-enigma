export default (req, res) => {
  res.status(200).json({
    ingredients: [
      {
        id: 1,
        title: {
          en: "Apple",
          es: "Manzana"
        },
        image: "apple.jpeg",
        quantity: "4"
      },
      {
        id: 2,
        title: {
          en: "Blueberry",
          es: "Arándano"
        },
        image: "blueberry.jpeg",
        quantity: "6"
      },
      {
        id: 3,
        title: {
          en: "Blackberry",
          es: "Mora"
        },
        image: "blackberry.jpeg",
        quantity: "1"
      },
      {
        id: 4,
        title: {
          en: "Watermelon",
          es: "Sandía"
        },
        image: "watermelon.jpeg",
        quantity: "1"
      },
      {
        id: 5,
        title: {
          en: "Garlic",
          es: "Ajo"
        },
        image: "garlic.jpeg",
        quantity: "1"
      },
      {
        id: 6,
        title: {
          en: "Orange",
          es: "Naranja"
        },
        image: "orange.jpeg",
        quantity: "1"
      },
      {
        id: 7,
        title: {
          en: "Strawberry",
          es: "Fresa"
        },
        image: "strawberry.jpeg",
        quantity: "1"
      },
    ]
  })
}
