import { SectionHeader, UserContainer } from "../../components";
import classes from "./user.module.css";

function User() {
  return (
    <>
      <SectionHeader
        title="User Details"
        btnName="+ Create New User"
        onCreate={() => {
          console.log("User");
        }}
      />
      <div className={classes.wrapper}>
        {Array.from(Array(11), (v, k) => {
          return <UserContainer key={k} />;
        })}
      </div>
    </>
  );
}

export default User;
