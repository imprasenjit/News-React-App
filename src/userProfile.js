import { useEffect, useState } from "react";
import { getUserDetail } from "./api/hnapi";
import { mapTime } from "./getTime";
export default function UserProfile({ match }) {
  const [userDetail, setUserDetail] = useState({});
  useEffect(() => {
    getUserDetail(match.params.id).then((data) => setUserDetail(data));
  }, []);
  console.log(userDetail);
  return (
    <div className="App">
      <div className="container">
        <h2 className="header">User Profile</h2>
        {userDetail.id ? (
          <div>
            <div className="row">id : {userDetail.id}</div>
            <div className="row">
              Created {mapTime(userDetail.created)} Ago{" "}
            </div>
            <div className="row">karma {userDetail.karma}</div>{" "}
          </div>
        ) : (
          "geting user details please wait"
        )}
      </div>
    </div>
  );
}
