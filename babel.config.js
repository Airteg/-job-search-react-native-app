module.exports = function (api) {
  api.cache(true); // Зазвичай можна встановити true для покращення продуктивності
  return {
    presets: ["babel-preset-expo"], // це вже має включати підтримку JSX
    plugins: [
      ["module:react-native-dotenv"],
      // Тут можна додати будь-які інші плагіни, якщо це необхідно
    ],
  };
};
