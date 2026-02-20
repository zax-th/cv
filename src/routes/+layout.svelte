<script>
  import "../app.css";
  import { onMount } from "svelte";

  onMount(async () => {
    // Dynamically import Lenis to avoid SSR issues
    const { default: Lenis } = await import("@studio-freight/lenis");

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
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
