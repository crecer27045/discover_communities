const mocks = {
  auth: { POST: { AuthToken: "Bearer e123" } },
  profile: { GET: { Id: "1", Name: "Mihail", Email: "asd@test.com" } },
  creators: {
    GET: [
      {
        Id: "1",
        Title: "The Rubin report",
        Text:
          "Get exclusive content. Interact with Dave. Get exclusive content. Interact with Bridget. Verified Nobody. My tribe is tribeless. Captain of the Fence Riding Team. Fiddling while Rome burns. Find another hero.",
        Image: "/img/slider/Rubin-report.jpg",
        Link: "#"
      },
      {
        Id: "2",
        Title: "NGO-GO ZONE",
        Text:
          "Get exclusive content. Interact with Andy. Get exclusive content. Interact with Bridget. Verified Nobody. My tribe is tribeless. Captain of the Fence Riding Team. Fiddling while Rome burns. Find another hero.",
        Image: "/img/slider/NGO-GO_ZONE.jpg",
        Link: "#"
      },
      {
        Id: "3",
        Title: "Bridget Phetasy",
        Text:
          "Get exclusive content. Interact with Bridget. Get exclusive content. Interact with Bridget. Verified Nobody. My tribe is tribeless. Captain of the Fence Riding Team. Fiddling while Rome burns. Find another hero.",
        Image: "/img/slider/Bridget-Phetasy.jpg",
        Link: "#"
      },
      {
        Id: "4",
        Title: "Micheal Malice",
        Text:
          "Get exclusive content. Interact with Micheal. Get exclusive content. Interact with Bridget. Verified Nobody. My tribe is tribeless. Captain of the Fence Riding Team. Fiddling while Rome burns. Find another hero.",
        Image: "/img/slider/Micheal-Malice.jpg",
        Link: "#"
      },
      {
        Id: "5",
        Title: "Convention of States",
        Text:
          "Get exclusive content. Interact with Mark. Get exclusive content. Interact with Bridget. Verified Nobody. My tribe is tribeless. Captain of the Fence Riding Team. Fiddling while Rome burns. Find another hero.",
        Image: "/img/slider/Convention_of-States.jpg",
        Link: "#"
      }
    ]
  }
};

const API = ({ url, method }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(mocks[url][method || "GET"]);
        console.log(`Mocked '${url}' - ${method || "GET"}`);
        console.log("response: ", mocks[url][method || "GET"]);
      } catch (err) {
        reject(new Error(err));
      }
    }, 1000);
  });

export default API;
