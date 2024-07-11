import { toast } from 'sonner'
import { Button } from 'ui'

export default function ToasterDemo() {
    return <Button onPress={() => toast('You have been toasted')}>Toast</Button>
}
