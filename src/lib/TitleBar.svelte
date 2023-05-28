<script>
  import { user } from "../stores";
  export let title = '';
  export let subTitle = '';
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
      <i style="font-size: 48px; color: Dodgerblue;" class="fas fa-sharp fa-solid fa-church"></i> 
  </div>
  <div class="column">
      <div class="title is-4">{title}</div>
      {#if !$user.email}
      <div class="subtitle is-5">{subTitle}</div>
      {:else}
      <div class="subtitle is-5"></div>
      {/if}
  </div>
  <div class="column">
    <i style="font-size: 48px; color: Dodgerblue;" class="fas fa-sharp fa-solid fa-church"></i> 
      {#if $user.email}
  <div class="is-size-7">{$user.email}</div>
  {:else}
      <div class="is-size-7">ChurchViews-Svelte 1.0</div>
  {/if}
    </div>
</div>
