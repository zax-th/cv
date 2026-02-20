<script>
  export let size = 60;
</script>

<svg 
  width={size} 
  height={size} 
  viewBox="0 0 100 100" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  class="logo"
>
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="50%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  
  <!-- Background circle -->
  <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" stroke="url(#logoGradient)" stroke-width="2"/>
  
  <!-- Decorative ring -->
  <circle cx="50" cy="50" r="40" stroke="url(#logoGradient)" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
  
  <!-- N letter -->
  <path 
    d="M28 70V30L50 55L72 30V70" 
    stroke="url(#logoGradient)" 
    stroke-width="5" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    fill="none"
  />
  
  <!-- W letter -->
  <path 
    d="M25 45L38 70L50 52L62 70L75 45" 
    stroke="url(#logoGradient)" 
    stroke-width="4" 
    stroke-linecap="round" 
    stroke-linejoin="round"
    fill="none"
    opacity="0.8"
  />
  
  <!-- Dot accent -->
  <circle cx="75" cy="28" r="4" fill="#06b6d4">
    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
  </circle>
</svg>

<style>
  .logo {
    display: inline-block;
    transition: transform 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.05);
  }
  
  .logo:hover circle:last-child {
    animation: pulse 1s ease-in-out infinite;
  }
</style>
