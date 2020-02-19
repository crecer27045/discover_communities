const mocks = {
  auth: { POST: { AuthToken: "Bearer e123" } },
  profile: { GET: { Id: "1", Name: "Mihail", Email: "asd@test.com" } }
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
