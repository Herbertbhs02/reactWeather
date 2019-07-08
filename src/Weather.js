import React from "react";

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                coord: {
                    lon: -75.93,
                    lat: 40.34
                },
                weather: [
                    {
                        id: 501,
                        main: "Rain",
                        description: "moderate rain",
                        icon: "10n"
                    },
                    {
                        id: 701,
                        main: "Mist",
                        description: "mist",
                        icon: "50n"
                    }
                ],
                base: "stations",
                main: {
                    temp: 294.27,
                    pressure: 1013,
                    humidity: 100,
                    temp_min: 293.15,
                    temp_max: 295.15
                },
                visibility: 16093,
                wind: {
                    speed: 1.5,
                    deg: 130
                },
                rain: {
                    "1h": 0.71
                },
                clouds: {
                    all: 90
                },
                dt: 1562577051,
                sys: {
                    type: 1,
                    id: 5642,
                    message: 0.014,
                    country: "US",
                    sunrise: 1562578872,
                    sunset: 1562632556
                },
                timezone: -14400,
                id: 5207728,
                name: "Reading",
                cod: 200
            },
            location: ""
        };
    }

    getweather = e => {
        e.preventDefault();
        this.setState({ location: this.state.loaction });
        const req = this.state.location;

        var url =
            "http://api.openweathermap.org/data/2.5/weather?q=" +
            req +
            "&APPID=ff365662c9c1a8add9e703a891c19fc7";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({ data: data });

                console.log(this.state.data);
            });
    };

    change = e => {
        this.setState({ location: e.target.value });
    };

    render() {
        let te = this.state.data.main.temp - 273;
        let fa = 1.8 * (this.state.data.main.temp - 273) + 32;
        let max = this.state.data.main.temp_max - 273;
        let min = this.state.data.main.temp_min - 273;
        return (
            <div>
                <h1>Weather Forecast</h1>

                <div>
                    <p>Location:{this.state.data.name}</p>
                    <p>
                        Temperature:{te.toFixed(1)} Celsius, {fa.toFixed(1)} Fahrenheit
          </p>
                    <p>
                        Max_temperature:{max.toFixed(1)}, Min_Temperature:{min.toFixed(1)}
                    </p>
                </div>

                <form onSubmit={this.getweather}>
                    <input
                        type="text"
                        placeholder="Location"
                        value={this.state.location}
                        onChange={this.change}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Weather;
