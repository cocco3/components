export default function (props) {
  const { windowMaxHeight, windowMinHeight } = props

  const maxHeight = windowMaxHeight ? '100vh' : 'none'
  const minHeight = windowMinHeight ? '100vh' : '0'

  const outer = `
    display: flex;
    flex-direction: column;
    max-height: ${maxHeight};
    min-height: ${minHeight};
  `

  const inner = `
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    min-height: ${minHeight};
  `

  return {
    outer,
    inner
  }
}
