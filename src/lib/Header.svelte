<script>
  import TitleBar from './TitleBar.svelte';
  import WelcomeNavigator from './WelcomeNavigator.svelte';
</script>

<div class="columns is-vcentered">
  <div class="column is-half">
      <TitleBar title={'ChurchViews'} subTitle={'Sign up or Log in'} />
  </div>
  <div class="column is-half">
    <slot>
      <WelcomeNavigator />    <!-- makes welcome Navigator the default if none is specified -->
    </slot>
      
  </div>
</div>
