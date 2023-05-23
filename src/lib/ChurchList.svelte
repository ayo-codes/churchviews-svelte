<script>
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";


  let churchList = [];

  onMount(async () => {
      churchList = await churchviewService.getChurches();
      denominationList = await churchviewService.getDenominations();
  });
</script>

<table class="table is-fullwidth">
  <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Denomination Id</th>
   
  </thead>
  <tbody>
      {#each churchList as church}
          <tr>
              <td>
                  {church.name}
              </td>
              <td>
                  {church.description}
              </td>
              <td>
                  {church.denominationid}
              </td>
          </tr>
      {/each}
  </tbody>
</table>
