<script setup lang="ts">
  import { ref } from 'vue'

  import HelloWorld from './components/HelloWorld.vue'
  import HelloWorldTutorial from './tutorials/hello_world.vue'
  import DeclarativeRendering from './tutorials/declarative_rendering.vue'
  import AttributeBindings from './tutorials/attribute_bindings.vue'
  import EventListeners from './tutorials/event_listeners.vue'
  import FormBindings from './tutorials/form_bindings.vue'
  import ConditionalRendering from './tutorials/conditional_rendering.vue'
  import ListRendering from './tutorials/list_rendering.vue'
  import ComputedProperty from './tutorials/computed_property.vue'
  import LifecycleTemplateRefs from './tutorials/lifecycle_template_refs.vue'
  import Watchers from './tutorials/watchers.vue'
  import Emits from './tutorials/emits.vue'
  import Slots from './tutorials/slots.vue'

  // 13 - Emits
  const childArg = ref('No child msg yet')
  // 14 - Slots
  const msg = ref('from parent')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <h1>---Tutorials---</h1>
  <HelloWorldTutorial />
  <DeclarativeRendering />
  <AttributeBindings />
  <EventListeners />
  <FormBindings />
  <ConditionalRendering />
  <ListRendering />
  <ComputedProperty />
  <LifecycleTemplateRefs />
  <Watchers />
  <div>
    <Emits @res="(arg) => childArg = arg"/>
    <p>{{ childArg }}</p>
  </div>
  <Slots>Message: {{ msg }}</Slots>
</template>

<style scoped>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
