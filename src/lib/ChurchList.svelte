<script>
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";
  import { goto } from "$app/navigation";

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
      <th> More Details </th>
   
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
              <td>  <a href="/churchlist/{church._id}" class="column">
                <i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)" /></td>
          </tr>
      {/each}   
  </tbody>
</table>

