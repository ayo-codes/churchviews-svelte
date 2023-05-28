<script>
  import { beforeUpdate } from "svelte";
  import Header from "$lib/Header.svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import ChurchMap from "$lib/ChurchMap.svelte";
  import { churchviewService } from "../../services/churchview-service";

  // beforeUpdate (() =>  {
  //   churchviewService.checkPageRefresh();
  // });
</script>

<Header>
  <MainNavigator />
</Header>

<ChurchMap />


