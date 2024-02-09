import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Loader, Flex, Text, Title } from '@mantine/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image'

import styles from "@/styles/Result.module.css";
import axios from 'axios';

export default function Result() {
    const router = useRouter();
    const { query } = router.query;
    console.log(`the result page query is: ${query}`);

    const [forecast, setForecast] = useState<any[]>([]);
    const [currentForecast, setCurrentForecast] = useState<any>([]);
    const [date, setDate] = useState<string>()
    const [fiveDayForecast, setFiveDayForecast] = useState<any>([]);

    const API_KEY: string = '99c06acb3afacd06144d945e2f571da8';
    const FORECAST_URL: string = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${API_KEY}`;
    const CURRENT_FORECAST_URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&cnt=1&appid=${API_KEY}`;

    useEffect(() => {
        axios.get(FORECAST_URL)
            .then((response) => {
                const data = response.data;
                setForecast(data.list);

                const fiveDays = data.list.filter((item: any, index: number) => index % 8 === 0);
                setFiveDayForecast(fiveDays);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        console.log('length: ' + forecast.length);

        axios.get(CURRENT_FORECAST_URL)
            .then((response) => {
                const data = response.data;
                setCurrentForecast(data);
                console.log(data)
                const timeStamp: number = data.dt;
                const date = new Date(timeStamp * 1000);

                const options: DateTimeOptions = {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                };
                const formattedDateTime: string = date.toLocaleDateString('en-US', options);
                setDate(formattedDateTime)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [query]);

    console.log(currentForecast.name)

    return (
        <main className={`${styles.main}`}>
            <Header />
            {
                forecast.length >= 1 ? (
                    <Flex
                        direction='column'
                        style={{ position: 'relative', height: '100%' }}
                    >
                        <Flex
                            mih={50}
                            gap='15rem'
                            justify="center"
                            align="flex-start"
                            direction='row'
                            wrap='wrap'
                            px={50}
                            className={`${styles.sectionContainer}`}
                        >
                            <Flex
                                mih={50}
                                gap={30}
                                justify="center"
                                align="flex-start"
                                direction="column"
                                wrap="wrap"
                            >
                                <Flex
                                    mih={50}
                                    justify="center"
                                    align="flex-start"
                                    direction="column"
                                    wrap="wrap"
                                >
                                    <Text>{date}</Text>
                                    <Title order={1}>{currentForecast.name}, {currentForecast.sys.country}</Title>
                                </Flex>

                                <Flex
                                    direction='column'
                                    justify='center'
                                    align='flex-start'
                                >
                                    <Image src={`/icons/${currentForecast.weather[0].main}.svg`} width={70} height={70} alt='weather type icon' />
                                    <Title order={2} fw='500'>{currentForecast.weather[0].main}</Title>
                                    <Text>{currentForecast.weather[0].description}</Text>
                                </Flex>
                                <Flex
                                    mih={50}
                                    gap='sm'
                                    justify="center"
                                    align="flex-start"
                                    direction="column"
                                    wrap="wrap"
                                >
                                    <Title order={2} fw='500'>{Math.round(currentForecast.main.temp)}° Celsius</Title>
                                    <Flex
                                        mih={50}
                                        justify="center"
                                        align="flex-start"
                                        direction='column'
                                        wrap='wrap'
                                    >
                                        <Flex
                                            mih={50}
                                            gap='md'
                                            justify="center"
                                            align="flex-start"
                                            direction='row'
                                            wrap='wrap'
                                        >
                                            <Text size='sm'>Min: {Math.round(currentForecast.main.temp_min)}° Celsius</Text>
                                            <Text size='sm'>Max: {Math.round(currentForecast.main.temp_max)}° Celsius</Text>
                                        </Flex>

                                        <Flex
                                            mih={50}
                                            gap='sm'
                                            justify="center"
                                            align="center"
                                            direction='row'
                                            wrap='wrap'
                                        >
                                            <Text>Wind speed: {currentForecast.wind.speed} km/h</Text>
                                            <Image src='/icons/Atmosphere.svg' width={20} height={20} alt='wind icon' />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex
                                mih={50}
                                gap="lg"
                                justify="center"
                                align="flex-start"
                                direction="column"
                                wrap="wrap"
                            >
                                <Title order={2}>5 Day forecast</Title>
                                {
                                    fiveDayForecast && fiveDayForecast.map((day: any, index: number) => {
                                        const timeStamp: number = day.dt;
                                        const date = new Date(timeStamp * 1000);

                                        const options: DateTimeOptions = {
                                            weekday: 'short',
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        };
                                        const formattedDateTime: string = date.toLocaleDateString('en-US', options);

                                        return (
                                            <Flex
                                                key={index}
                                                direction='column'
                                                justify='center'
                                                align='flex-start'
                                                gap='0'
                                            >
                                                <Text size='lg' fw={500}>{formattedDateTime}</Text>
                                                <Flex
                                                    gap='sm'
                                                    wrap='wrap'
                                                >
                                                    <Flex
                                                        gap={5}
                                                    >
                                                        <Image src={`/icons/${day.weather[0].main}.svg`} width={20} height={20} alt='weather type icon' />
                                                        <Text>{day.weather[0].main} - {day.weather[0].description}</Text>
                                                    </Flex>
                                                    <Text>{Math.round(day.main.temp)}° Celsius</Text>
                                                    <Text>Wind speed: {day.wind.speed} km/h</Text>
                                                    <Image src='/icons/Atmosphere.svg' width={20} height={20} alt='wind icon' />
                                                </Flex>

                                            </Flex>
                                        )
                                    })
                                }
                            </Flex>
                        </Flex>

                        <Footer page='result' />
                    </Flex>
                ) : (
                    <div>
                        <Flex
                            mih={50}
                            justify="center"
                            align="center"
                            h='100vh'
                            mt='-10rem'
                            direction='column'
                        >
                            <Loader color='sunrise' size="xl" type="dots" />
                            <Text
                                size="sm"
                                variant="gradient"
                                gradient={{ from: 'rain.9', to: 'sunrise.4', deg: 172 }}
                            >Loading the weather in {query}...</Text>
                        </Flex>
                        <Footer page='home' />
                    </div>
                )
            }
        </main>
    )
}