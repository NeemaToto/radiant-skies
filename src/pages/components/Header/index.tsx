import { Burger, Image, Title, Drawer, Box, Divider, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import SearchBar from '../SearchBar';
import Link from 'next/link'

export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

    return (
        <Box>
            <header className={classes.header}>
                <div className={classes.inner}>
                    <Link href='/' style={{ textDecoration: 'none' }}>
                        <Flex
                            mih={50}
                            gap="md"
                            justify="flex-start"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >
                            <Image h={50} src='/logo/logo.svg' />
                            <Title order={1} fw={400} size={20} className={classes.title}>Radiant <br /> Skies</Title>
                        </Flex>
                    </Link>
                    <SearchBar visible='sm' width='15rem' />
                    <Burger opened={drawerOpened} onClick={toggleDrawer} size="sm" hiddenFrom="sm" />
                </div>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size='xs'
                padding="md"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <Title>Search</Title>
                <Divider my="sm" />
                <SearchBar width='15rem' />
            </Drawer>
        </Box>
    );
}