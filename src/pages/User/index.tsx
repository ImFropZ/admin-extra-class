import { SectionHeader } from "../../components";

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
    </>
  );
}

export default User;
