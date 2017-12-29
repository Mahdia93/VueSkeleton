<template>
  <div class="ui grid">
    <div class="sixteen wide column">      
      <h1>{{ msg }}</h1>
      <p>{{ msg1 }}</p>

      <h2>Todo</h2>
      <ul>
        <li>Add class component plugin</li>
        <li>Typescript</li>
        <li>Unit testing</li>
        <li>Vuex</li>
      </ul>

      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>        
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Congratulations! You got your dev environment working!'
    },
    {
       msg1: 'If this is your first time working with Vue, welcome aboard. Dig around and explore. Their documentation is pretty good too, so if you get lost, check out some of the links below.'
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- with single file components like this, make sure to set the
style language to whatever stylesheet language you're using (in this case scss) -->
<style lang="scss" scoped>
// we can import global styles
@import '../styles/main';

h1, h2 {
  // accessing our colors array (colors.scss)  
  color: map-get($colors, h1);
  font-weight: normal;
}

a {
  color: map-get($colors , online);
}
</style>
