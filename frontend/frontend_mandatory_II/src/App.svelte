<script>
    // TODO: Tjek ud hvorfor ikke svelte-spa-router
    import { Router, Link, Route } from 'svelte-routing';
    import { fetchGet} from "./utils/fetch.js";
    import { user, loggedIn, role } from "./stores/user.js";
    import Login from './pages/Login.svelte';
    import Signup from './pages/Signup.svelte';
    import Home from './pages/Home.svelte';
    import UserDashboard from "./pages/UserDashboard.svelte";
    import AdminDashboard from "./pages/AdminDashboard.svelte";

    //Denne kører når appen starter / loader eller ved refresh
    //Hvis ikke vi har den her, så vil brugeren blive smidt ud ved hver refresh
    fetchGet("http://localhost:8080/session/me").then(data => {
        if (data.loggedIn) {
            user.set(data.user);
            loggedIn.set(true);
            role.set(data.user.role);
        }
    });

</script>

<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Signup'>Opret bruger</Link>
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/UserDashboard"><UserDashboard /></Route>
        <Route path="/AdminDashboard"><AdminDashboard /></Route>

    </div>

</Router>