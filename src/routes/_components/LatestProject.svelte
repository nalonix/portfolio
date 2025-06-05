<script lang="ts">
  export let url: string;
  export let label: string = "View Latest Project";
</script>

<style lang="postcss">
  /* Define the custom property and keyframes within the component's style */
  @property --border-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: '<angle>';
  }

  @keyframes border-animation {
    to {
      --border-angle: 360deg;
    }
  }

  .animated-border-button {
    @apply relative block w-fit rounded-full p-px overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300;
    background: linear-gradient(
        45deg,
        theme(colors.white) 0%,
        theme(colors.white) 100%
      )
      padding-box,
      conic-gradient(
          from var(--border-angle),
          theme(colors.slate.200) 0%,
          theme(colors.indigo.500) 10%,
          theme(colors.indigo.300) 20%,
          theme(colors.indigo.500) 30%,
          theme(colors.slate.200) 100%
        )
        border-box;
    border: 1px solid transparent; /* Required for border-box gradient to work */
    animation: border-animation 4s linear infinite;
  }

  .button-content {
    @apply flex items-center justify-center gap-1 relative z-[1] bg-neutral-100/90 rounded-full py-2 px-6 w-full;
  }

  .button-label {
    @apply bg-gradient-to-b from-neutral-950 to-neutral-950/50 bg-clip-text text-sm text-transparent group-hover:scale-105 transition transform-gpu;
  }
</style>

<a href="{url}" rel="noopener noreferrer" class="group animated-border-button">
  <span class="button-content">
    <span class="button-label">
      {label}
    </span>
  </span>
</a>