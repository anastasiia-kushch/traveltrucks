import { useState, useEffect } from "react";
import CamperItem from "../CamperItem/CamperItem.jsx";
import css from "./CamperList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectLoading,
  selectError,
} from "../../redux/campers/selectors.js";
import Filters from "../Filters/Filters.jsx";
import { getCampers } from "../../redux/campers/operations.js";
import Loader from "../Loader/Loader.jsx";

export default function CamperList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  const [visibleCampers, setVisibleCampers] = useState(4);
  const [filteredCampers, setFilteredCampers] = useState([]);

  // useEffect(() => {
  //   dispatch(getCampers());
  // }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers);
  }, []);

  const handleSearch = (query) => {
    setFilteredCampers([]);
    const { location, vehicleType, filters } = query;
    const filtered = campers.filter((camper) => {
      const locationMatch = location
        ? camper.location.toLowerCase().includes(location.toLowerCase())
        : true;

      let typeMatch = true;
      if (vehicleType) {
        typeMatch = camper.vehicleType === vehicleType;
      }

      let equipmentMatch = true;
      if (filters) {
        equipmentMatch = Object.entries(filters).every(([key, value]) => {
          if (!value) return true;
          return camper[key] === true;
        });
      }

      return locationMatch && typeMatch && equipmentMatch;
    });
    setFilteredCampers(filtered);
    setVisibleCampers(4);
  };

  const handleLoadMore = () => {
    setVisibleCampers((prevCount) => prevCount + 4);
  };

  if (isError) {
    return <div>Error loading campers...</div>;
  }

  return (
    <div className={css.mainCont}>
      {isLoading && <Loader />}
      <Filters onSubmit={handleSearch} />
      <div className={css.cont}>
        <ul className={css.listCont}>
          {filteredCampers.slice(0, visibleCampers).map((camper) => (
            <li key={camper._id}>
              <CamperItem data={camper} />
            </li>
          ))}
        </ul>
        {visibleCampers < filteredCampers.length && (
          <button className={css.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
