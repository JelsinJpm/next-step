import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jelsin.nextStepApp',
  appName: 'Next Step',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      androidSplashResourceName: "splash", // Nombre del archivo de splash
      splashFullScreen: true,
      splashImmersive: true,
      // Añade las siguientes líneas para configurar el modo personalizado
      customSplashAssets: {
        ios: "resources/splash.png", // Ruta al archivo de splash para iOS
        android: "resources/assets/splash.png", // Ruta al archivo de splash para Android
        // Opcional, si deseas una pantalla de inicio oscura para el modo oscuro
        androidDarkMode: "resources/splash-dark.png" 
      }
    },
  },
};

export default config;
