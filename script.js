$(document).ready(function () {
    // Get the timestamp
    var timestamp = new Date().getTime();

    // Get the public and private keys
    var public_key = "29760a1afbb9d289763d11b2bb2a66c8";
    var private_key = "30ce48eb635fe2b0cb5f9f51800e79ebe2c2fcd3";

    // Create the hash
    var hash = CryptoJS.MD5(timestamp + private_key + public_key).toString();

    // Make the API request
    $.ajax({
        url: "https://gateway.marvel.com:443/v1/public/characters?ts=" + timestamp + "&apikey=" + public_key + "&hash=" + hash,
        method: "GET",
        success: function (data) {
            // Get the results
            var results = data.data.results;

            // Loop through the results
            for (var i = 0; i < results.length; i++) {
                // Create a new superhero
                var superhero = new Superhero(results[i]);

                // Add the superhero to the list
                $(".container #results").append(superhero.render());
            }
        },
        error: function (error) {
            console.log(error);
        }
    });

    // Search for superheroes
    $("#search-button").click(function () {
        // Get the search query
        var query = $("#search").val();

        // Make the API request
        $.ajax({
            url: "https://gateway.marvel.com:443/v1/public/characters?ts=" + timestamp + "&apikey=" + public_key + "&hash=" + hash + "&name=" + query,
            method: "GET",
            success: function (data) {
                // Get the results
                var results = data.data.results;

                // Loop through the results
                for (var i = 0; i < results.length; i++) {
                    // Create a new superhero
                    var superhero = new Superhero(results[i]);

                    // Add the superhero to the list
                    $(".container #results").append(superhero.render());
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

// Superhero class
function Superhero(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.thumbnail = data.thumbnail.path + "." + data.thumbnail.extension;

    this.render = function () {
        return "<div class='col-md-4'>" +
            "<img src='" + this.thumbnail + "' alt='" + this.name + "'>" +
            "<h2>" + this.name + "</h2>" +
            "<p>" + this.description + "</p>" +
            "<button class='btn btn-success'>Add to favorites</button>" +
            "</div>";
    };
}

// $(document).ready(function () {
//     // Get the timestamp
//     var timestamp = new Date().getTime();

//     // Get the public and private keys
//     var public_key = "29760a1afbb9d289763d11b2bb2a66c8";
//     var private_key = "30ce48eb635fe2b0cb5f9f51800e79ebe2c2fcd3";

//     // Create the hash
//     function generateHash(message) {
//         var encoder = new TextEncoder();
//         var data = encoder.encode(message);
//         return window.crypto.subtle.digest("MD5", data);
//     }

//     function bytesToHex(bytes) {
//         return Array.prototype.map
//             .call(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0"))
//             .join("");
//     }

//     function fetchSuperheroes(query) {
//         // Clear previous search results
//         $(".container #results").empty();

//         // Make the API request only if query is not empty
//         if (query !== "") {
//             generateHash(timestamp + private_key + public_key)
//                 .then((hashBuffer) => {
//                     var hash = bytesToHex(hashBuffer);

//                     $.ajax({
//                         url:
//                             "https://gateway.marvel.com:443/v1/public/characters?ts=" +
//                             timestamp +
//                             "&apikey=" +
//                             public_key +
//                             "&hash=" +
//                             hash +
//                             "&name=" +
//                             query,
//                         method: "GET",
//                         success: function (data) {
//                             // Get the results
//                             var results = data.data.results;

//                             // Loop through the results
//                             for (var i = 0; i < results.length; i++) {
//                                 // Create a new superhero
//                                 var superhero = new Superhero(results[i]);

//                                 // Add the superhero to the list
//                                 $(".container #results").append(superhero.render());
//                             }
//                         },
//                         error: function (error) {
//                             console.log(error);
//                         },
//                     });
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         } else {
//             // Display a message to indicate that a search query is required
//             $(".container #results").html("<p>Please enter a search query.</p>");
//         }
//     }

//     // Initial fetch for all superheroes
//     fetchSuperheroes("");

//     // Search for superheroes
//     $("#search-button").click(function () {
//         // Get the search query
//         var query = $("#search").val();

//         // Make the API request
//         fetchSuperheroes(query);
//     });
// });

// // Superhero class
// function Superhero(data) {
//     this.id = data.id;
//     this.name = data.name;
//     this.description = data.description;
//     this.thumbnail = data.thumbnail.path + "." + data.thumbnail.extension;

//     this.render = function () {
//         return (
//             "<div class='col-md-4'>" +
//             "<img src='" +
//             this.thumbnail +
//             "' alt='" +
//             this.name +
//             "'>" +
//             "<h2>" +
//             this.name +
//             "</h2>" +
//             "<p>" +
//             this.description +
//             "</p>" +
//             "<button class='btn btn-success'>Add to favorites</button>" +
//             "</div>"
//         );
//     };
// }
