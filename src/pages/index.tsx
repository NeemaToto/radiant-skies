import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from './components/Header'
import Footer from './components/Footer'
import { Flex, Title, Text } from "@mantine/core";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Radiant Skies</title>
        <meta name="description" content="A Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Header />
        <Flex
          mih='20vw'
          gap="xl"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          mt={-80}
          style={{height: '65%'}}
        >
          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
          >
            <Title order={1} textWrap="balance" ta='center'>
              Welcome to Radiant Skies
            </Title>
            <Text size="md">A Web App where you can check the weather.</Text>
          </Flex>

          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
            mt={50}
          >
            <SearchBar width="23rem" />
            <Text
              size="sm"
              variant="gradient"
              gradient={{ from: 'sunrise.6', to: 'cloud.5', deg: 172 }}
            >
              Where would you like to check the weather?
            </Text>
          </Flex>
        </Flex>
        <Footer page="home"/>
      </main>
    </>
  )
}
