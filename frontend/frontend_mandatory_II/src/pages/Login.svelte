<script>
    import { onMount } from 'svelte';
    import { fetchGet, fetchRequestJson } from "../utils/fetch.js";

    let url = "http://localhost:8080/auth/login";
    // let body =

    // onMount(() => {
    //     const result = fetchRequestJson(url, )
    //     }
    //
    //
    //
    // )


</script>

<div class="login-signup-box">
    <h1>Login</h1>

    <form action="her kommer url der skal indsendes login data til fx /login" method="POST">

        <label for="username">Username</label><br>
        <input type="text" id="username" name="username" placeholder="Enter username" required>
        <br><br>

        <label for="password">Password</label><br>
        <input type="password" id="password" name="password" placeholder="Enter password" required>
        <br><br>

        <button type="submit">Login</button>
        <br><br>

        <p>Ikke bruger endnu?</p>
        <a href="signup.html" class="signup-button">Opret</a>

    </form>
</div>