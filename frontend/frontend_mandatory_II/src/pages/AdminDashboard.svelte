<script>
    import { loggedIn, role } from "../stores/user.js";

    import { onMount } from "svelte";

    onMount(() => {
        if (!$loggedIn) {
            window.location.href = "/login";
        }
        else if ($role !== "ADMIN") {
            window.location.href = "/login";
        }
    });
</script>


<h1>Admin side</h1>