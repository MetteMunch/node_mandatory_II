<script>
    import { Link } from "svelte-routing";
</script>

<div class="layout">

    <!-- HEADER -->
    <header class="header">
        <div class="logo">LOGO</div>

        <nav class="nav">
            <Link to="/">HOME</Link>
            <Link to="/login">LOGIN</Link>
            <Link to="/signup">OPRET BRUGER</Link>
        </nav>
    </header>

    <!-- MAIN CONTENT -->
    <main class="main-content">
        <slot />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
        Footer med diverse oplysninger
    </footer>
</div>
