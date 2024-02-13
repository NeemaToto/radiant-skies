interface DateTimeOptions {
    weekday?: 'short';
    year?: 'numeric'; 
    month?: 'short';
    day?: 'numeric'; 
    hour?: 'numeric';
    minute?: 'numeric'; 
    hour12?: boolean; 
}

interface CurrentForecastData {
    dt: number
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }
    name: string
    sys: {
        country: string
    }
    weather: {
        description: string
        main: string
    }
    wind: {
        speed: number
    }
}

interface FiveDayForecast {
    map(arg0: (day: any, index: number) => React.JSX.Element): React.ReactNode;
    dt: number
    main: {
        temp: number
        temp_min: number
        temp_max: number
    }
    weather: {
        description: string
        main: string
    }
    wind: {
        speed: number
    }
}