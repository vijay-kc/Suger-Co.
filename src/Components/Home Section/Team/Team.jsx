import styles from "./Team.module.css";
import teamImgOne from "../../../assets/teamImgOne.png";
import teamImgTwo from "../../../assets/teamImgTwo.png";
import teamImgThree from "../../../assets/teamImgThree.png";
import teamImgFour from "../../../assets/teamImgFour.png";

const Team = () => {
  const teamData = [
    {
      imageUrl: teamImgOne,
      name: "James Andresson",
      bio: "Director 1"
    },
    {
      imageUrl: teamImgTwo,
      name: "Angel Steven",
      bio: "Director 2"
    },
    {
      imageUrl: teamImgThree,
      name: "Joss Andresson",
      bio: "Designer"
    },
    {
      imageUrl: teamImgFour,
      name: "Lity Brown",
      bio: "Marketer"
    },
  ];

  return (
    <div className={styles.team} style={{ marginTop: "200px" }}>
      {" "}
      <h1 style={{ textAlign: "Center" }}>Popular Team Members</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {teamData.map((member, index) => (
          <div key={index} style={{ width: "200px", margin: "60px 50px" }}>
            <img
              src={member.imageUrl}
              alt={member.text}
              style={{ width: "100%", height: "auto" }}
            />
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <h3>{member.name}</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <p style={{ marginRight: "10px" }}>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
