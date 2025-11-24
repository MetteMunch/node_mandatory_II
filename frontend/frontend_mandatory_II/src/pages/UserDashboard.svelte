<script>
    import { loggedIn, role } from "../stores/user.js";

    import { onMount } from "svelte";

    onMount(() => {
        if (!$loggedIn) {
            window.location.href = "/login";
        }
        else if ($role !== "USER") {
            window.location.href = "/login";
        }
    });
</script>


<h1>Bruger side</h1>