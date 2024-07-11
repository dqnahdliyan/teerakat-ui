'use client'

import { ToggleButton } from 'ui'

export default function ToggleButtonDemo() {
    return <ToggleButton>{({ isSelected }) => <>{isSelected ? "I'm On" : "I'm Off"}</>}</ToggleButton>
}
