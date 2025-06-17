<script lang="ts">
	import '../app.css';
    import "inter-ui/inter-latin.css";
    import StatusBar from '$components/StatusBar.svelte';
	
	let { children } = $props();
</script>

<StatusBar />
{@render children()}
