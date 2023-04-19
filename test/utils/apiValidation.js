import color from "./consoleColor";

export default {
  async validation(response = "", statusCode = "", testMessage = "") {
    typeof response.status != "undefined" && response.status === statusCode
      ? color.log(`${testMessage}`, "success")
      : color.log(`${testMessage} `, "error");
    await expect(response.status).toBe(statusCode);
  },
};
