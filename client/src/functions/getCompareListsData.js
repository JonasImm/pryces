import PropTypes from "prop-types";
import setSupermarketCompareData from "./setSupermarketCompareData";

function getCompareListsData({
  supermarkets,
  groceryList,
  setConnectionFail,
  setCompareListData,
}) {
  if (supermarkets && groceryList) {
    setConnectionFail(false);
    const listProducts = groceryList.products;
    const listProductIDs = listProducts.map((product) => product.productId);

    const supermarketCompareData = setSupermarketCompareData({
      supermarkets,
      listProductIDs,
      listProducts,
    });
    setCompareListData(supermarketCompareData);
  }
}

export default getCompareListsData;
getCompareListsData.propTypes = {
  supermarkets: PropTypes.array,
  groceryList: PropTypes.array,
  setConnectionFail: PropTypes.func,
  setCompareListData: PropTypes.func,
};
