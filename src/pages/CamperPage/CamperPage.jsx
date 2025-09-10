import { useParams } from "react-router-dom";
import CamperItemDetails from "../../components/CamperItemDetails/CamperItemDetails.jsx";
import { useSelector } from "react-redux";
import { selectCampers } from "../../redux/campers/selectors.js";

export default function CamperPage() {
  const { id } = useParams();
  const campers = useSelector(selectCampers);
  const camper = campers.find((c) => c._id === id);

  return (
    <div>
      {camper ? <CamperItemDetails data={camper} /> : <p>Camper not found</p>}
    </div>
  );
}
