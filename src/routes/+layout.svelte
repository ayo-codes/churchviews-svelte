<script>
  import { beforeUpdate } from "svelte";
  import { churchviewService } from "../services/churchview-service";

  beforeUpdate(() => {
    churchviewService.reload();
  });
</script>

<div class="container">
  <slot />
</div>

