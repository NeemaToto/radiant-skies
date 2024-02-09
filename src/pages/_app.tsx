import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from 'next/font/google'
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const raleway = Raleway({ subsets: ['latin'] })

console.log(raleway)

const theme = createTheme({
  primaryColor: 'rain',
  fontFamily: raleway.style.fontFamily,
  colors: {
    rain: [
      "#e2f7ff",
      "#cceaff",
      "#9ad1ff",
      "#64b8ff",
      "#3aa2fe",
      "#1f95fe",
      "#098eff",
      "#007be4",
      "#006dcd",
      "#005eb5"
    ],
    sunrise: [
      "#fff8e1",
      "#ffefcc",
      "#ffdd9b",
      "#ffca64",
      "#ffba38",
      "#ffb01b",
      "#ffab09",
      "#e39500",
      "#ca8500",
      "#af7100"
    ],
    cloud: [
      "#e8f2ff",
      "#d0e0ff",
      "#9ebefc",
      "#6899fb",
      "#3f7afa",
      "#2767fa",
      "#1b5dfc",
      "#0e4ee1",
      "#0045c9",
      "#003bb1"
    ]
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} >
      <Component {...pageProps} />
    </MantineProvider>
  )
}
