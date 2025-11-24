<script>
    import { user, loggedIn, role } from "../stores/user.js";
    import { navigate } from "svelte-routing";

    import { fetchRequestJson } from "../utils/fetch.js";


    $: if ($loggedIn === false) {
            navigate("/login");
        }

    $: if ($loggedIn && $role !== "USER") {
        navigate("/AdminDashboard");
    }

    let url = "http://localhost:8080/session/logout"

    async function logout() {
        await fetchRequestJson(url,{},"POST");
        user.set(null);
        loggedIn.set(false);
        role.set(null);
        navigate("/login");
    }
</script>


<h1>Bruger Dashboard</h1>

<button type="button" on:click={logout}>Log ud</button>