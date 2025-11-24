<script>
    import {navigate} from "svelte-routing";
    import {fetchRequestJson} from "../utils/fetch.js";

    let fullname = "";
    let username = "";
    let email = "";
    let password = "";
    let confirm = "";

    // Vis fejlbeskeder på siden
    let error = "";
    let success = "";

    const url = "http://localhost:8080/auth/signup";

    async function signup() {

        error = "";
        success = "";

        if (password !== confirm) {
            //TODO: alle alerts skal være toast
            error = "Password matcher ikke, prøv igen!"
            return;
        }

        const body = {fullname, username, email, password};

        const res = await fetchRequestJson(url, body, "POST");
        const data = await res.json();

        if (!res.ok) {
            //TODO: alle alerts skal være toast
            error = data.message || "Kunne ikke oprette bruger.";
            return;
        }

        success = "Bruger oprettet! Du omdirigeres til login...";
        setTimeout(() => navigate("/login"), 1000);
    }

</script>

<div class="login-signup-box">
    <h1>Sign Up</h1>

    {#if error}
        <p style="color: red">{error}</p>
    {/if}

    <label for="fullname">Fulde navn</label>
    <input id="fullname" bind:value={fullname}/>

    <label for="username">Brugernavn</label>
    <input id="username" bind:value={username}/>

    <label for="email">Email</label>
    <input id="email" bind:value={email}/>

    <label for="password">Password</label>
    <input id="password" type="password" bind:value={password}/>

    <label for="confirm">Gentag password</label>
    <input id="confirm" type="password" bind:value={confirm}/>

    <button type="button" on:click={signup}>Opret bruger</button>

    <p>Har du allerede en bruger?
        <a href="/login">Login her</a>
    </p>
</div>
