import { style } from './twitter'

// Skip "seconds".
const steps = style.steps.slice(1)

// Starts showing `1m` after 30 seconds.
steps[0] = {
	...steps[0],
	minTime: 30
}

export default {
	...style,
	steps
}