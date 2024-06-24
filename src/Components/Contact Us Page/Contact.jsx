import styles from "./Contact.module.css"; // Import CSS file for styling

const Contact = () => {
  // Contact information stored in an array of objects
  const contactInfo = [
    {
      title: "OUR ADDRESS:",
      address:
        "Sugar Co. Limited\n,\nMindspace, Off. Link Road,\nMalad (West), Mumbai, Maharashtra – 400 064",
    },
    {
      title: "Need Help!",
      items: [
        {
          customerCall: "Call us at Customer Care no. : ",
          customerCallNumber: "07969727777",
          customerEmail: "Email Us At:",
          customerEmailData: "customercare@sugarco.com",
          operationalTimings: "Operational Timings:",
          timings: " 08:00AM to 10:00PM",
        },
        {
          note: "Important: Grievance desk must be approached post contacting the “Customer Care” of Sugar Co. with a complaint number where desired resolution was not received.",
          redirect:
            "Any First time query would be redirected to Customer Care.",
          emailId: "Email ID",
          emailIdData: "Grievance.redressal@sugarco.com",
          operationalTiming: "Operational Timings: ",
          timings: "Mon-Fri: 10:00am to 5:00pm",
        },
      ],
    },
  ];

  return (
    <div className={styles.contactContainer}>
      {contactInfo.map((info, index) => (
        <div className={styles.contactInfo} key={index}>
          <h2>{info.title}</h2>

          {info.address && <p>{info.address}</p>}

          {info.items &&
            info.items.map((item, i) => (
              <div className={styles.contactItems} key={index.i}>
                <div>
                  <h3>{item.customerCall}</h3>
                  <p>{item.customerCallNumber}</p>
                </div>
                <div>
                  <p>{item.customerEmail}</p>
                  <p>{item.customerEmailData}</p>
                </div>
                <div>
                  <p>{item.operationalTimings}</p>
                  <p>{item.timings}</p>
                </div>
                <div>
                  <p>{item.note}</p>
                  <p>{item.redirect}</p>
                  <p>{item.emailId}</p>
                  <p>{item.emailIdData}</p>
                  <p>{item.operationalTiming}</p>
                  <p>{item.timings}</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Contact;
