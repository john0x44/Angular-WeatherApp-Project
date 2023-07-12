# Angular Weather App

This is a weather application built using Angular. It fetches weather data from the Open-Meteo API and displays it to the user. The app demonstrates the following concepts and implementation details:

## Application Structure

The application consists of the following components:

- `AppComponent`: The main component that serves as the entry point for the application. It handles the initialization and retrieval of weather data from the `WeatherService`.

## WeatherService

The `WeatherService` is responsible for fetching weather data from the Open-Meteo API using the Angular `HttpClient` module. It provides the following functionality:

- `getWeatherData()`: This method sends an HTTP GET request to the Open-Meteo API and retrieves the weather data. It returns an `Observable` of type `WeatherData`, which represents the weather information.

## WeatherData Model

The `WeatherData` model represents the structure of the weather data returned by the API. It defines the properties and their types to ensure type safety and facilitate data manipulation.

## Usage

To use the weather app:

1. Clone the repository or download the code.
2. Install the required dependencies using `npm install`.
3. Run the app using `ng serve`.
4. Open your browser and navigate to `http://localhost:4200` to see the weather app in action.

## Example

Here is a visual demonstration of the weather app:

![Weather App Screenshot](https://i.gyazo.com/5b3386ce6e0aa5ff362bd28467798d29.png)

## Conclusion

This weather app demonstrates how to build a simple Angular application that fetches and displays weather data. It showcases the usage of Angular components, services, HTTP requests, and data models. 
