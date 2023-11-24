import React from "react";
import { Broadcast } from "./Broadcast";

const InboxPage = () => {
  const styles = {
    homePageWrapper: {
      textAlign: "center",
      marginTop: "2rem",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <Broadcast
      env="production"
      walletAddresses={[
        "0x93E2fc3e99dFb1238eB9e0eF2580EFC5809C7204",
        "0xdf9A8d961A55e75E1FAEc72037f89251f84ADCc3",
      ]}
      placeholderMessage="Enter a broadcast message here"
      onMessageSuccess={(message) =>
        console.log("Message sent" + message.content)
      }
    />
  );
};

export default InboxPage;
