// import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import Hello from '../components/Hello.vue';
import HelloDecorator from '../components/HelloDecorator.vue'

storiesOf('Hello', module)
  .add('story', () => ({
    components: { Hello },
    template: '<hello name="foobar" :initialEnthusiasm="5">rounded</hello>'
  }));

storiesOf('HelloDecorator', module)
  .add('story', () => ({
    components: { HelloDecorator },
    template: '<hello-decorator name="foobar" :initialEnthusiasm="5">rounded</hello-decorator>'
  }));
