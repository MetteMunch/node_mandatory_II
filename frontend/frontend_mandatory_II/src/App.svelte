<script>
    // TODO: Tjek ud hvorfor ikke svelte-spa-router
    import { Router, Link, Route } from 'svelte-routing';
    import Login from './pages/Login.svelte';
    import Signup from './pages/Signup.svelte';
    import Home from './pages/Home.svelte';
    import UserDashboard from "./pages/UserDashboard.svelte";
    import AdminDashboard from "./pages/AdminDashboard.svelte";

</script>

<Router>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/Opret'>Opret bruger</Link>
    </nav>
    <div>
        <Route path="/"><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/UserDashboard"><UserDashboard /></Route>
        <Route path="/AdminDashboard"><AdminDashboard /></Route>

    </div>

</Router>