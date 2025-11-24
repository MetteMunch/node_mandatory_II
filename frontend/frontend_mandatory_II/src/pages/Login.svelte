<script>
    import { onMount } from 'svelte';
    onMount(() => {
        console.log("Login component mounted");
    });


    import { user, loggedIn, role } from "../stores/user.js";
    import { fetchRequestJson, fetchGet } from "../utils/fetch.js";
    import { navigate } from "svelte-routing";

    let username = "";
    let password = "";

    let url = "http://localhost:8080/auth/login";


    async function login() {
        const body = { username, password };
        console.log(username)
        console.log(password)

        const res = await fetchRequestJson(url, body, "POST");
        const data = await res.json();   // <- du får stadig JSON ud her

        if (!res.ok) {
            alert(data.message);
            return;
        }

        //session check fra backend
        const sessionData = await fetchGet("http://localhost:8080/session/me");
        console.log("SESSION DATA:", sessionData);

        if (!sessionData.loggedIn) {
            alert("Kunne ikke logge ind – prøv igen");
            return;
        }

        // opdater store fra backend
        user.set(sessionData.user);
        loggedIn.set(true);
        role.set(sessionData.user.role);
        console.log("user", user)
        console.log("LoggedIn", loggedIn)
        console.log("role", role)


        // redirect
        if (sessionData.user.role === "ADMIN") {
            navigate("/AdminDashboard");
        } else {
            navigate("/UserDashboard");
        }

    }
</script>

    <div class="login-signup-box">
        <h1>Login</h1>

        <label for="username">Brugernavn</label>
        <input id="username" bind:value={username} />

        <label for="password">Password</label>
        <input id="password" type="password" bind:value={password} />

<!--        <button type="button" on:click={login}>Login</button>-->
        <button type="button" on:click={e => {
          e.preventDefault();
          e.stopPropagation();
          console.log("button clicked");
          login();
        }}>Login</button>

        <p>Ikke bruger endnu?
            <a href="/signup" class="signup-button">Opret bruger</a>
        </p>
    </div>

