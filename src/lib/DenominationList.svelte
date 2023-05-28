<script>
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";
  import { user } from "../stores";

  let denominationList = [];
  onMount(async () =>{
    denominationList = await churchviewService.getDenominations();
  });
</script>

<table class="table is-fullwidth">
  <thead>
      <th> Denomination Name</th>

  </thead>
  <tbody>
      {#each denominationList as denomination}
      {#if denomination.userid == $user.id }
          <tr>
              <td>
                  {denomination.title}
              </td>
          </tr>
          {/if}
      {/each}
  </tbody>
</table>