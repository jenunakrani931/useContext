import React, { createContext, useState } from "react";
import staticData from "../List/dbList";
import Catedata from "../List/CateList";
const ContextData = createContext();
const ProviderData = ({ children }) => {
  const [data, setData] = useState(staticData);
  const [newData, setNewdata] = useState(data);
  const [category, setCategory] = useState(Catedata);
  const [search, setsearch] = useState("");
  const [selectedValue, setSelectedValue] = useState("sort by");
  const [selectedcategory, setselectedcategory] = useState("All categories");
  const [rangePrice, setRangePrice] = useState("Price");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showcategory, setShowCategory] = useState(false);
  const [error, setError] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortByshow, SetsortByshow] = useState(false);
  const [ActorModal, SetActorModal] = useState(false);
  const [PriceModalData, SetPriceModal] = useState(false);
  const [sortshow, setsortShow] = useState("white");
  const [actorshow, setactorshow] = useState("white");
  const [priceshow, setpriceshow] = useState("white");
  const [sortedList, setSortedList] = useState([]);
  const showHnadlr = () => SetsortByshow(true);
  const HideHnadlr = () => SetsortByshow(false);
  const showActorModal = () => SetActorModal(true);
  const HideActorModal = () => SetActorModal(false);
  const Showprice = () => SetPriceModal(true);
  const Hideprice = () => SetPriceModal(false);
  const handleClosecategory = () => {
    setShowCategory(false);
    setError("");
  };
  const clearfilter = () => {
    setData([...newData]);
    setselectedcategory("All categories");
    setSelectedValue("Sort by");
    setRangePrice("Price");
    setsortShow("white");
    setactorshow("white");
    setpriceshow("white");
  };
  const handleShowcategory = () => setShowCategory(true);
  const addData = (newData) => {
    setNewdata((prevData) => [newData, ...prevData]);
    setData((prevData) => [newData, ...prevData]);
  };
  const addCate = (NewData) => setCategory((OldData) => [NewData, ...OldData]);
  const onSortData = (selected) => {
    if (selected === "hightoLow") {
      data.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
    } else if (selected === "LowtoHigh") {
      data.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
    } else if (selected === "Featured") {
      return setData([...newData])
    } else if (selected === "Alphabetical") {
      data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    setData([...data]);
    setSelectedValue(selected);
    setsortShow("green");
  };
  const onSortActor = (selected) => {
    if (selected) {
      setactorshow("green");
    }
    let sortedData = [];
    if (selected === "All categories") {
      sortedData = [...data];
    } else {
      sortedData = newData.filter((item) => item.category === selected);
      setselectedcategory(selected);
    }
    setData([...sortedData]);
    setSortedList([...sortedData])
  };
  const priceInputHandler = (selectedRange) => {
    let sortedData = [];
    switch (selectedRange) {
      case "$0to$25":
        sortedData = newData.filter(
          (item) => item.price >= 0 && item.price <= 25
        );
        break;
      case "$25to$50":
        sortedData = newData.filter(
          (item) => item.price > 25 && item.price <= 50
        );
        break;
      case "$50to$75":
        sortedData = newData.filter(
          (item) => item.price > 50 && item.price <= 75
        );
        break;
      case "$75to$100":
        sortedData = newData.filter(
          (item) => item.price > 75 && item.price <= 100
        );
        break;
      case "$1000+":
        sortedData = newData.filter((item) => item.price >= 1000);
        break;
      case "Custom":
        sortedData = newData.filter(
          (item) =>
            item.price >= parseFloat(minPrice) &&
            item.price <= parseFloat(maxPrice)
        );
        break;
      default:
        return "not exist";
    }
    
    setpriceshow("green");
    setData([...sortedData]);
    setRangePrice(selectedRange);
  };
  console.log("sortedList",sortedList);
  const clearData = () => {
    if (!sortedList.length) {
      setData([...newData]);
    } else {
      setData([...sortedList]);
    }
    setMinPrice("");
    setMaxPrice("");
    setpriceshow("white");
  };
  const showAllData = () => {
    setData([...newData]);
    setselectedcategory("All category");
    setactorshow("white");
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filteredData = data.filter((searchData) => {
    if (search === "") {
      return searchData;
    } else if (
      searchData.name.toLowerCase().includes(search) ||
      searchData.category.toLowerCase().includes(search)
    ) {
      return searchData;
    }
    return false;
  });
  const totalItems = filteredData.length;
  // const currentData = filteredData.slice(startIndex, endIndex);
  return (
    <ContextData.Provider
      value={{
        data,
        category,
        actorshow,
        showAllData,
        priceInputHandler,
        sortByshow,
        ActorModal,
        search,
        PriceModalData,
        sortshow,
        priceshow,
        selectedValue,
        selectedcategory,
        show,
        showcategory,
        minPrice,
        maxPrice,
        handleShowcategory,
        handleClosecategory,
        setError,
        error,
        handleClose,
        handleShow,
        clearData,
        setMaxPrice,
        setMinPrice,
        SetPriceModal,
        Showprice,
        Hideprice,
        onSortData,
        onSortActor,
        setData,
        showHnadlr,
        HideHnadlr,
        showActorModal,
        HideActorModal,
        addData,
        clearfilter,
        addCate,
        SetsortByshow,
        setsearch,
        startIndex,
        endIndex,
        itemsPerPage,
        handlePageChange,
        rangePrice,
        setRangePrice,
        totalItems,
        filteredData,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
export { ContextData, ProviderData };

