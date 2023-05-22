<script>
  // @ts-nocheck
  
      import { onMount } from "svelte";
      import { churchviewService } from "../services/churchview-service";
	import Coordinates from "./Coordinates.svelte";
  
      let name = "";
      let description ="";
      let denominationList = [];
      let selectedDenomination= "";
      let selectedProvince="";
      let provinceOptions = ["Connacht" , "Leinster" ,"Munster" , "Ulster"];
      let latitude = 53.2344043;
      let longitude = -6.284883;
      let message = "Please add church";
  
      onMount(async () => {
          denominationList = await churchviewService.getDenominations();
      });
  
    async function addChurch() {
      if (name && description && selectedDenomination && selectedProvince) {
        const denominationDetails = selectedDenomination.split(",");
        console.log(denominationDetails);
        const denomiNation = denominationList.find((denomination) => denomination._id == denominationDetails[1]);

        console.log (denomiNation);

        const church = {
                name: name,
                description: description,
                longitude: longitude,
                latitude: latitude,
                province: selectedProvince,

            };
       

            console.log (church)
            const success = await churchviewService.createChurch(denomiNation._id, church);
            if (!success) {
                message = "Church not added - some error occurred";
                return;
                  } message = `Thanks! for contributing to the churchViews app`
                } else {
        message = "Please select fill in all the details";
      }
    }
  
  </script>
  
  <form on:submit|preventDefault={addChurch}>
      <div class="field">
          <label class="label" for="name">Enter Church Name</label>
          <input bind:value={name} class="input" id="name" name="name" type="text" />
      </div>
      <div class="field">
        <label class="label" for="description">Enter a brief description </label>
        <textarea bind:value={description} class="textarea" id="description" name="description" type="text" />
    </div>
      <div class="field">
          <div class="control">
              {#each provinceOptions as province}
                  <input bind:group={selectedProvince} class="radio" type="radio" value={province} /> {province}
              {/each}
          </div>
      </div>
      <div class="field">
          <div class="select">
              <select bind:value={selectedDenomination}>
                  {#each denominationList as denomination}
                      <option>{denomination.title},{denomination._id}</option>
                  {/each}
              </select>
          </div>
      </div>
      <Coordinates bind:latitude bind:longitude />
      <div class="field">
          <div class="control">
              <button class="button is-link is-light">Add Church</button>
          </div>
      </div>
      <div class="box">
          {message}
      </div>
      
  </form>
