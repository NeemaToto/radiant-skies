import { Autocomplete, Image } from "@mantine/core"
import { cities } from '@/data/cities';
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchBar({
    width = '',
    visible = ''
}) {

    const router = useRouter()

    const Icon = <Image h={15} c='blue' src='/icons/magnifyIcon.svg' onClick={() => handleSubmit()} />
    const [query, setQuery] = useState<string>('');

    function handleSubmit() {
        router.push({
            pathname: '/Result',
            query: { query }
        })
        console.log(`the handleSubmit query is: ${query}`)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <Autocomplete
            w={width}
            placeholder="Enter a city"
            rightSection={Icon}
            data={cities}
            limit={5}
            radius={25}
            value={query}
            onChange={setQuery}
            visibleFrom={visible}
            onKeyDown={handleKeyDown}
        />
    )
}