<template>
  <div class="container">
    <div class="template-container">
      <template-card v-for="template in templates" :key="template.templateName" :imageUrl="template.imageUrl"
        :templateName="template.templateName" :lastUpdate="template.lastUpdate"></template-card>
    </div>
    <div class="add">+</div>
  </div>
</template>

<script>
import TemplateCard from "../components/TemplateCard.vue"
export default {
  components: {
    TemplateCard
  },
  data() {
    return {
      templates: [
        {
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII=",
          templateName: "lorem",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII=",
          templateName: "loremx",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII=",
          templateName: "loremy",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII=",
          templateName: "loremz",
          lastUpdate: "xx/xx/xxxx"
        },
        {
          imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAANlBMVEXMzMzPz8+UlJSSkpKampqWlpadnZ3Ly8uioqLGxsaZmZm/v7+goKC6urqtra2wsLC7u7uoqKjZ4D4ZAAADmElEQVR4nO3XiY7jNhBFUe4UtVr//7N5Rcpu9zIYDBLETnAPZmTTImWzVCyxnQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMA/xjtXq/f2tqpRP06MD3uPT03/+Oz5Ik8fevf1Tf+W0fT+caU309aS5rTuzX7sVE595Ndyerelkha1lv7qt1JSc9ern0pSzOpaVgudmmNA+Rgg9yuoQ93XeU7Tzeva3e1lE/61FnIOMYZ4KBYpTDp6e/FHyGH3zp8hx831prr4Sc3Fb8EaW9AZ8XNYNSA/BgSbqXXNZz+v7vqOGG/qqm8L17g300LYa9v0Czdfr1DMVyhy0sxynnXK78E+dTVnm6gvOekQSr+GYrc+D7BrKWdymPJsp28h5GNpy1EtFOsi7bWz/lHr99dbcnj3HIo9THNsfolTsVCc4Zxz81uckk30FuKioctY/j0UZ5jSGJCyevgl5EW97HTO7SowI+Pes1iMUCitc2yfQqG5rzq1x6PoRdm+W0jOcFiSWPZPezivcnmFYvSIW+rRVWhcXzJLtOOolwrL2lpb6m9+1ivcQ3HoFn8KheZ+aK4ltqKZaDEcNnUFbNaA6lrUOrjSfIRiHQOUGanXjKzyc4ZiJcVqx7ZO69QzxMrG+y4Qp/XwJRQKwBJT01xK1t1XKLbQm/OVRiHv98drD0UfUFrUAEsX5cJiUWh20Ao7VC3nqlBoKWrBvHbWP7qHYvq6QJTlqpGHbm2fmTVDb865r4vNYjeMUMzWI9wH9Cpq/47rcdOWM6Tqx1e8patsqsYV5Xie9TubrfB+86cw68mpsuDrHLee3E2T+TkUNutVj9qmo2WV3fxsl1UIlQ5WiP8Doah6mKrWW8HYnTut7nvLaruzqhp51RMm3Pyec3FjvXwPhctjQLIy0weo2PZks7WUbrWOrMhTM6+c8y+0vnS1Beqbnjn0huZaLRRa76c9GpJvUenRHwX9nrvvoWjXgN1CkRQUe46OOuEm1Qn7GiXH3L8snm+YGs12gTH1jbdak35mPsbnCs6qrbTXRHoobKPdtC2PybpuMT5CMatW2gAtizEg68mT67iMBW4rtsdMu9Wh8K6h8L62+rzlac1ffzZ9HPzjcG8+vWpfaW/tf+09Hs2nXiqbzU5Wf/m35vfnvm15frcH+pt7pHfcYgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4H/oL2Dscf3xb+ecAAAAASUVORK5CYII=",
          templateName: "lorema",
          lastUpdate: "xx/xx/xxxx"
        }
      ]
    }
  },
}

</script>
<style lang="scss" scoped>
.template-container {
  margin-top: 9vh;
  width: 100vw;
  padding: 0 6% 0 6%;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-row-gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
}
</style>
