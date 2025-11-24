<script>
   import { fetchGet, fetchRequestJson } from "../utils/fetch.js";

   let fullname = "";
   let username = "";
   let email = "";
   let password = "";
   let confirm = "";

   const url = "http://localhost:8080/auth/signup";

   async function signup() {
       if (password !== confirm) {
           //TODO: alle alerts skal være toast
           alert("Passwords must match");
           return;
       }


       const body = { fullname, username, email, password };

       const res = await fetchRequestJson(url, body, "POST");
       const data = await res.json();

       if (!res.ok) {
           //TODO: alle alerts skal være toast
           alert(data.message);
           return;
       }

       //TODO: alle alerts skal være toast
       alert("User created!");
       window.location.href = "/login";
   }

</script>

<div class="login-signup-box">
    <h1>Sign Up</h1>

    <input bind:value={fullname} placeholder="Dit fulde navn" />
    <input bind:value={username} placeholder="Brugernavn" />
    <input bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <input type="password" bind:value={confirm} placeholder="Gentag password" />

    <button on:click={signup} class="signup-button">Opret ny bruger</button>

    <p>Har du allerede en bruger?
        <a href="/login">Login her</a>
    </p>
</div>