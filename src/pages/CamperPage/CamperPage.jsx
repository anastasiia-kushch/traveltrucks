import { useParams } from 'react-router-dom';
import CamperItemDetails from '../../components/CamperItemDetails/CamperItemDetails.jsx';
import campers from '../../mocked-data.json';

export default function CamperPage() {
  const { id } = useParams();
  const camper = campers.find((c) => c._id === id);

  return (
    <div>
      {camper ? <CamperItemDetails data={camper} /> : <p>Camper not found</p>}
    </div>
  );
}
