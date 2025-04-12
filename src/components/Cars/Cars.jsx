import { Link, useParams } from "react-router-dom";
import { GiSettingsKnobs } from "react-icons/gi";
import { GoArrowLeft } from "react-icons/go";
import { useEffect, useState, useContext } from "react";
import { CarsList } from "./CarsList/CarsList";
import axios from "axios";
import { FilteredCarsContext } from "./CarsProvider/CarsProvider";
import { useCarsProps } from "./useCarsProps";
import { useTranslation } from "react-i18next";
import "./Cars.css";
import GetCategories from "../../api/category/category";
import GetBrands from "../../api/brand/brands";
import GetModel from "../../api/model/model";
import GetCars from "../../api/cars/get-cars.api";

export const Cars = () => {
  const { rentprice, BASE_URL } = useCarsProps();
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [selectedModels, setSelectedModels] = useState([]);
  const [selectModel, setSelectModels] = useState([]);

  const [FilterData, SetFilterData] = useState();

  const [price, setPrice] = useState();
  const [day, setDay] = useState();
  const { t } = useTranslation();

  const getCategory = GetCategories();
  const category = getCategory.data;

  const getBrands = GetBrands();
  const Brands = getBrands.data;

  const getModels = GetModel();
  const model = getModels.data;

  const getCars = GetCars();
  const Cars = getCars.data;

  const [CheckEmpty, setCheckEmpty] = useState();
  const [CheckStatus, setCheckStatus] = useState();
  let { id } = useParams();

  const handleOpen = () => {
    setOpen(!open);
  };

  const { filteredCars } = useContext(FilteredCarsContext);

  const handleBrand = async (e) => {
    const brandId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brandId]);
      try {
        const response = await axios.get(
          `${BASE_URL}/models?brand_id=${brandId}`
        );
        setSelectModels(response.data);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    } else {
      const updatedBrands = selectedBrands.filter((brand) => brand !== brandId);
      setSelectedBrands(updatedBrands);
      setSelectModels([]);
    }
  };

  const handleModel = (e) => {
    const modelId = e.target.value;
    setSelectedModels(modelId);
  };

  const handleCategory = (e) => {
    const categoryId = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      const updatedCategories = selectedCategories.filter(
        (category) => category !== categoryId
      );
      setSelectedCategories(updatedCategories);
    }
  };

  const handleChecked = (e) => {
    setChecked(!checked);
  };

  const handlePrice = (price, day) => {
    if (price !== undefined && day !== undefined) {
      console.log("Selected price:", price + "day: ", day);
      setPrice(price);
      setDay(day);
    }
  };

  useEffect(() => {
    setCheckStatus(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredData = Cars && Cars.data ? Cars.data : [];

    const categoryFilter = filteredData.filter((car) =>
      selectedCategories.includes(car.category.id)
    );

    const brandFilter = filteredData.filter((car) =>
      selectedBrands.includes(car.brand.id)
    );

    const modelFilter = filteredData.filter((car) =>
      selectedModels.includes(car.model.id)
    );

    const combinedFilter = filteredData.filter(
      (car) => brandFilter.includes(car) || categoryFilter.includes(car)
    );

    let totalPrice = [];

    if (price === 5000 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 5000);
    } else if (price === 5000 && day === 2) {
      totalPrice = filteredData.filter((car) => car.price_in_aed * 2 <= 5000);
    } else if (price === 1300 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 1300);
    } else if (price === 1800 && day === 3) {
      totalPrice = filteredData.filter((car) => car.three_days_price <= 1800);
    } else if (price === 5000 && day === "all") {
      totalPrice = filteredData.filter((car) => car.price_in_aed <= 5000);
    } else if (price === 0 && day === "no") {
      totalPrice = filteredData.filter((car) => car.deposit === 0);
    } else if (price === 5000 && day === 4) {
      totalPrice = filteredData.filter((car) => car.price_in_aed * 4 <= 5000);
    } else if (price === 1 && day === "ferrari") {
      totalPrice = filteredData.filter(
        (car) => car.location.id === "0fe47cb9-5bcc-4b04-8167-36a623c6aab9"
      );
    }

    if (combinedFilter.length === 0 || modelFilter === 0 || totalPrice === 0) {
      setCheckEmpty(true);
    } else {
      setCheckEmpty(false);
    }

    if (totalPrice.length > 0) {
      SetFilterData(totalPrice);
    } else if (modelFilter.length > 0) {
      SetFilterData(modelFilter);
    } else if (combinedFilter.length > 0) {
      SetFilterData(combinedFilter);
    } else {
      SetFilterData(filteredData);
    }

    setOpen(false);
    setCheckStatus(false);
  };

  useEffect(() => {
    SetFilterData(filteredCars);
  }, [filteredCars]);

  useEffect(() => {
    if (id) {
      const CarsData = Cars && Cars.data ? Cars.data : [];

      const brandFilter = CarsData.filter((item) => item.brand.id === id);
      const modelFilter = CarsData.filter((item) => item.location.id === id);

      const combinedFilter = [...brandFilter, ...modelFilter];
      if (combinedFilter.length === 0) {
        setCheckEmpty(true);
        setCheckStatus(false);
      } else {
        setCheckEmpty(false);
        setCheckStatus(false);
      }
      SetFilterData(combinedFilter);
    } else {
      console.log("false");
    }
  }, [Cars, id]);

  return (
    <section className="vehicle">
      <button className="vehicle-settings" onClick={handleOpen}>
        {open ? (
          <GoArrowLeft className="vehicle-settings-icon2" />
        ) : (
          <GiSettingsKnobs className="vehicle-settings-icon" />
        )}
      </button>
      <div className="container">
        <div className={open ? "vehicle-box-filter" : "vehicle-box"}>
          <div className="vehicle-div">
            <h3 className="vehicle-by">Filter By</h3>
            <h4 className="vehicle-offer">Offers</h4>

            <form className="vehicle-form" onSubmit={handleSubmit}>
              <div className="vehicle-form-box"></div>
              <div className="vehicle-form-box">
                {rentprice &&
                  rentprice.map((item, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        key={index}
                        className="vehicle-inp"
                        type="checkbox"
                        value={item.price && item.day}
                        onChange={() => handlePrice(item.price, item.day)}
                        onClick={handleChecked}
                      />
                      {item.name}
                    </label>
                  ))}
              </div>

              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Car type</h4>
                {category &&
                  category.data.map((item, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        className="vehicle-inp"
                        type="checkbox"
                        value={item.id}
                        onChange={handleCategory}
                        onClick={handleChecked}
                      />
                      {item.name_en}
                    </label>
                  ))}
              </div>

              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Brand</h4>
                {Brands &&
                  Brands.data.map((brand, index) => (
                    <label key={index} className="vehicle-label">
                      <input
                        className="vehicle-inp"
                        type="checkbox"
                        value={brand.id}
                        onChange={handleBrand}
                        onClick={handleChecked}
                      />
                      {brand.title}
                    </label>
                  ))}
              </div>
              <div className="vehicle-form-box">
                <h4 className="vehicle-offer">Model</h4>

                <select
                  className="vehicle-select"
                  value={selectModel ? selectModel.id : ""}
                  onChange={(e) => handleModel(e)}
                  onClick={handleChecked}
                >
                  <option value="">Select Model</option>
                  {selectModel && selectModel.data
                    ? selectModel.data.map((brand, index) => (
                        <option key={index} value={brand.id}>
                          {brand.name}
                        </option>
                      ))
                    : model &&
                      model.data.map((brand, index) => (
                        <option key={index} value={brand.id}>
                          {brand.name}
                        </option>
                      ))}
                </select>
              </div>
              <div className="vehicle-form-box">
                <div className="vehicle-bts">
                  <button className="vehicle-rest" type="reset">
                    Reset
                  </button>
                  <button className="vehicle-submit" type="submit">
                    Apply filter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={open ? "vehicle-main2" : "vehicle-main"}>
          <Link className="vehicle-link" to={"/cars"}>
            {t("home-category-main-title")} /{" "}
            <span>{t("home-category-card2-desc2")}</span>
          </Link>

          <ul className="vehicle-ul">
            {CheckStatus === true && Cars && Cars.data ? (
              Cars.data.map((item, index) => (
                <CarsList
                  key={index}
                  src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.car_images[0].image.src}`}
                  name={item.brand.title}
                  model={item.model.name}
                  slug={item.price_in_aed}
                  text={item.price_in_usd}
                  id={item.id}
                />
              ))
            ) : CheckEmpty === true ? (
              <span className="vehicle-no">
                Sizning so&apos;rovingiz bo&apos;yicha mashinalar topilmadi
              </span>
            ) : FilterData && FilterData.length > 0 ? (
              FilterData.map((item, index) => (
                <CarsList
                  key={index}
                  src={`https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.car_images[0].image.src}`}
                  name={item.brand.title}
                  model={item.model.name}
                  slug={item.price_in_aed}
                  text={item.price_in_usd}
                  id={item.id}
                />
              ))
            ) : null}
          </ul>
        </div>
      </div>
    </section>
  );
};
