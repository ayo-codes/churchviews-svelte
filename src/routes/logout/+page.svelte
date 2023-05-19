<script>
  import { goto } from "$app/navigation";
  import { churchviewService } from "../../services/churchview-service.js";

  churchviewService.logout();
  goto("/");
</script>
