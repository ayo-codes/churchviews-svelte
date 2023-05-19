<script>
  import { onMount } from "svelte";
  import { churchviewService } from "../services/churchview-service";

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
          <tr>
              <td>
                  {denomination.title}
              </td>
          </tr>
      {/each}
  </tbody>
</table>