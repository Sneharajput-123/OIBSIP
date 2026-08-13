function convertTemperature() {

    // Get input value

    let temperature = document.getElementById("temperature").value;


    // Get selected units

    let fromUnit = document.getElementById("fromUnit").value;

    let toUnit = document.getElementById("toUnit").value;


    // Check empty input

    if (temperature === "") {

        document.getElementById("result").innerHTML =
        "Please enter a temperature";

        return;

    }


    // Convert string into number

    temperature = Number(temperature);


    // Same unit

    if (fromUnit === toUnit) {

        document.getElementById("result").innerHTML =

        temperature.toFixed(2);

        return;
    }


    let result;


    // Celsius conversions

    if (fromUnit === "celsius") {

        if (toUnit === "fahrenheit") {

            result = (temperature * 9 / 5) + 32;

        }

        else {

            result = temperature + 273.15;

        }

    }


    // Fahrenheit conversions

    else if (fromUnit === "fahrenheit") {

        if (toUnit === "celsius") {

            result = (temperature - 32) * 5 / 9;

        }

        else {

            result =

            (temperature - 32) * 5 / 9 + 273.15;

        }

    }


    // Kelvin conversions

    else {

        if (toUnit === "celsius") {

            result = temperature - 273.15;

        }

        else {

            result =

            (temperature - 273.15) * 9 / 5 + 32;

        }

    }


    // Show result

    document.getElementById("result").innerHTML =

    "Converted Temperature: " +

    result.toFixed(2);

}