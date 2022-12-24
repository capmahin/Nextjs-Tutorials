import axios from "axios";

export default async function (req, res) {
  try {
    if (req.method !== "GET") {
      throw new Error("Must be a GET Request");
    }
    const { sizeOfData: id } = req.query;
    if (!id) {
      throw new Error("sizeOfData has to be provided!");
    }
    const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;
    const response = await axios.get(url);
    const data = response.data;
    const filteredData = data.map((each) => {
      const { id, name } = each;
      return {
        id,
        name,
      };
    });
    return res.status(200).json({
      data: filteredData,
      message: "OK",
    });
  } catch (err) {
    console.error(err);
    return res.status(400).json({
      data: [],
      message: err.message,
    });
  }
}
