<template>
  <div class="ui grid"> 

  <div class="sixteen wide column">
    <div class="ui header">
        <h1 >Semantic component E-commerce website sandbox</h1>
    </div>
  </div>


  <div class="ui breadcrumb">
      <a class="section">Home</a>
      <span class="divider">/</span>
      <a class="section">JC Penny Database</a>
      <span class="divider">/</span>
      <div class="active section">Womens clothes</div>
      <span class="divider">/</span>
      <div class="active section">Jeans</div>
  </div>


   
    <div class="ui grid">
    <div class="three wide column">
    <div class="ui vertical menu">

    <div class="item">  
    <div class="ui input">
      <input type="text" placeholder="Search...">
    </div>
  </div>
  <div class="item">
    Home
    <div class="menu">
      <a class="active item">Search</a>
      <a class="item">Add</a>
      <a class="item">Remove</a>
    </div>
  </div>
  <a class="item">
    <i class="grid layout icon"></i> Browse
  </a>
  <a class="item">
    Messages
  </a>
  <div class="ui dropdown item">
    More
    <i class="dropdown icon"></i>
    <div class="menu">
      <a class="item"><i class="edit icon"></i> Edit Profile</a>
      <a class="item"><i class="globe icon"></i> Choose Language</a>
      <a class="item"><i class="settings icon"></i> Account Settings</a>
    </div>
  </div>
    </div> 
    </div>

<div class="thirteen wide column">
<div class="ui four cards">
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="4"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="2"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="3"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="4"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="3"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="3"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="4"></div>
    </div>
  </div>
  <div class="card">
    <div class="image">
      <img src="https://semantic-ui.com/images/wireframe/image.png">
    </div>
    <div class="extra">
      Rating:
      <div class="ui star rating" data-rating="4"></div>
    </div>
  </div>
  </div>
</div>
</div>
</div>  
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },

  // to use semantic components
  // they must be bound to the "mounted" lifecycle hook
  mounted() {
    $('.skills-list')
      .dropdown();
    ;
  }
}
</script>

<!-- with single file components like this, make sure to set the
style language to whatever stylesheet language you're using (in this case scss) -->
<style lang="scss" scoped>
// we can import global styles
@import '../styles/main';

</style>
