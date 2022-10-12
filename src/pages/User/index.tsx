import { SectionHeader, UserContainer } from "../../components";

function User() {
  return (
    <div>
      <SectionHeader
        title="User Details"
        btnName="+ Create New User"
        onCreate={() => {
          console.log("User");
        }}
      />
      <UserContainer />
    </div>
  );
}

export default User;
