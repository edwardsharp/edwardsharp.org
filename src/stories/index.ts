import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Hello from '../components/Hello.vue';

storiesOf('Hello')
  .add('story as a template', () => '<hello :name="zork" :initialEnthusiasm="5">story as a function template</hello>')
  .add('story as a component', () => ({
    components: { Hello },
    template: '<hello :name="foobar" :initialEnthusiasm="5">rounded</hello>'
  }));
  