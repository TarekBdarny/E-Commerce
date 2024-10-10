export const test = async (req, res) => {
  const { targetCountry } = req.body;
  try {
    const api =
      "      https://v6.exchangerate-api.com/v6/5324248606cd6c884199d19f/latest/USD";
    const response = await fetch(api);
    const data = await response.json();
    res.send(data);
    console.log(3 * data.conversion_rates["EUR"]);
  } catch (error) {
    console.log(error);
  }
};
