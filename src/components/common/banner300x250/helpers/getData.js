import axios from "axios";

export async function getData(url, saveData) {
  await axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      console.log(response);
      saveData(response.data);
    })
    .catch((error) => {
      console.log(error);
      console.log(
        "Niestety CORS policy odrzuca zapytanie i wydaje mi sie ze to lezy po stronie serwera"
      );
      saveData({
        offers: [
          {
            name: "Red dress M",
            price: "89",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer1.jpg",
          },
          {
            name: "Twisted",
            price: "990",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer2.jpg",
          },
          {
            name: "Circle Pendant White Gold-plated",
            price: "79",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer3.jpg",
          },
          {
            name: "Women",
            price: "4000",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer4.jpg",
          },
          {
            name: "T-shirt",
            price: "100",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer5.jpg",
          },
          {
            name: "Adidas Neo W56-234",
            price: "129",
            currency: "PLN",
            imgURL: "//rekrutacjartb.pl/developer/images/offer6.jpg",
          },
        ],
      });
    });
}
