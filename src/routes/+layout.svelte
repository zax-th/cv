<script>
  import "../app.css";
  import { onMount } from "svelte";

  onMount(async () => {
    // Dynamically import Lenis to avoid SSR issues
    const { default: Lenis } = await import("@studio-freight/lenis");

    const lenis = new Lenis({
      lerp: 0.08, // Adjust for smoothness (lower is smoother/slower)
      wheelMultiplier: 1,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  });
</script>

<slot />
