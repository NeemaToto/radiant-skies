import { Container, Group, ActionIcon, rem, Title, Image } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer({
    page = ''
}) {
    let display:any = 'block'; 

    if (page === 'result') {
        display = 'block';
    } else if (page === 'home') {
        display = 'absolute';
    }

    return (
        <div className={classes.position}>
            <div className={classes.footer} style={{ }}>
                <Container size='full' className={classes.inner}>
                    <Group preventGrowOverflow>
                        <Title order={1} fw={400} size={20} className={classes.title}>Radiant <br /> Skies</Title>
                    </Group>
                    <Group>
                        @ Neema Totonchi 2024
                    </Group>
                    <Group gap={10} className={classes.links} justify="flex-end" wrap="nowrap">
                        <ActionIcon
                            size="lg"
                            color='sunrise'
                            radius='xl'
                            variant="outline"
                            component="a"
                            href="https://github.com/NeemaToto/weather-app-2024.git"
                            target="_blank"
                        >
                            <Image style={{ width: rem(18), height: rem(18) }} src='/icons/github.svg' />
                        </ActionIcon>
                    </Group>
                </Container>
            </div>
        </div>
    )
}