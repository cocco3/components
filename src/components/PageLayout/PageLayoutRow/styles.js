export default function (props) {
  const { grow } = props

  const flex = grow ? '1 1 auto' : '0 0 auto'

  const row = `
    display: flex;
    flex: ${flex};
    flex-direction: row;
    min-height: 0;
  `

  return {
    row
  }
}
