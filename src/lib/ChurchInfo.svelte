<script>
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";



  let churchList = [];
  let denominationList = [];


  onMount(async () => {
      churchList = await churchviewService.getChurches();
      denominationList = await churchviewService.getDenominations();
  });
</script>

<table class="table is-fullwidth">
  <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Denomination Name</th>
   
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
                {#each denominationList as denomination}
                {#if denomination._id == church.denominationid}
                  {denomination.title}
                  {/if}
                  {/each}
              </td>
          </tr>
      {/each}   
  </tbody>
</table>