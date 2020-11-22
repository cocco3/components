export default function (props) {
  const { grow } = props

  const flex = grow ? '1 1 0%' : '0 0 auto'

  const column = `
    flex: ${flex};
    height: auto;
    min-width: 0;
  `

  return {
    column
  }
}
