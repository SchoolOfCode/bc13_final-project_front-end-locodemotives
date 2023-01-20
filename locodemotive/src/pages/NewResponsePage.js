import NewResponse from "../components/NewResponse/NewResponse";
import { useLocation } from "react-router-dom";

export default function NewResponsePage({ userData }) {
  const location = useLocation(); // React router DOM function that gets current page
  const { postData } = location.state; // Looks at React state for that page's component, passed through the custom link function

  return (
    <NewResponse author_id={userData.user_id} post_id={postData.post_id} />
  );
}
