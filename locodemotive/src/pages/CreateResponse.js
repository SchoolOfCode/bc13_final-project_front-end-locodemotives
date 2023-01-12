import NewResponse from "../components/NewResponse/NewResponse";
import { useLocation } from "react-router-dom";

export default function CreateResponse({ userData }) {
  const location = useLocation();
  const { postData } = location.state;

  return (
    <NewResponse author_id={userData.user_id} post_id={postData.post_id} />
  );
}
