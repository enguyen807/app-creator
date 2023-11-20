import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(far);

config.styleDefault = "fa-regular";

setup((app) => {
  app.component("font-awesome-icon", FontAwesomeIcon)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
