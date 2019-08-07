<script>
import { Card } from 'iview'

export default {
  name: 'Card',
  extends: Card,
  props: {
    bordered: {
      type: Boolean,
      default: false
    },
    'dis-hover': {
      type: Boolean,
      default: true
    }
  }
}
</script>
