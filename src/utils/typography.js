import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.baseFontSize = '20px'
const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm