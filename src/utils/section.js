const sideBar = require("../../static/sidebar.json");

export const getSectionId = () => {
  const firstElement = sideBar[0];

  return firstElement.type === "category"
    ? firstElement.link.id
    : firstElement.id;
};
