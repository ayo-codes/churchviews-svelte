<script>
  // @ts-nocheck
  
      import { onMount } from "svelte";
      import { churchviewService } from "../services/churchview-service";
      import { user } from "../stores";
      import { goto } from "$app/navigation";
  

      let denominationEntered = "";
  
      let message = "Please add a denomination";


      // let user ="";
      // let userList =[];

  
      // onMount(async () => {
      //      userList = await churchviewService.getUsers();
      //  });
  
    async function createDenomination() {
      if (denominationEntered) {
        const denomination = {
          title : denominationEntered,
          userid : $user.id,
        };
        const success = await churchviewService.createDenomination(denomination);
        if(!success){
          message = "Denomination not added - error occurred";
          return;
        }
        message = `You've successfully added the denomination ${denominationEntered}`;
        denominationEntered=""
        goto("/denominationlist")

      } else {
        message = "Please enter a denomination into the denomination field";
      }
    }
  </script>
  
  <form on:submit|preventDefault={createDenomination}>
      <div class="field">
          <label class="label" for="denominationEntered">Enter Denomination</label>
          <input bind:value={denominationEntered} class="input" id="denominationEntered" name="denominationEntered" type="text" />
      </div>
      <!-- <div class="field">
          <div class="control">
              {#each paymentMethods as method}
                  <input bind:group={selectedMethod} class="radio" type="radio" value={method} /> {method}
              {/each}
          </div>
      </div>
      <div class="field">
          <div class="select">
              <select bind:value={selectedCandidate}>
                  {#each candidateList as candidate}
                      <option>{candidate.lastName},{candidate.firstName}</option>
                  {/each}
              </select>
          </div>
      </div> -->
      <div class="field">
          <div class="control">
              <button class="button is-link is-light">Add Denomination</button>
          </div>
      </div>
      <div class="box">
          {message}
      </div>
  </form>
  
  <!-- <div class ="select">
    <select bind:value= {user}> 
        {#each userList as user}
            <option>{user._id}</option>
        {/each}
      </select>
  </div> -->

  <!-- {$user.id} -->
