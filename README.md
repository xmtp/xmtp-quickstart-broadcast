# How to Broadcast with XMTP

This tutorial will guide you on how to create a simple `Broadcast` that enables the user to broadcast messages to one or many specified Ethereum addresses.

## ![](video.gif)

sidebar_label: Broadcast
sidebar_position: 5

---

# Broadcast messages with XMTP

This tutorial will guide you on creating a simple **Broadcast** that enables the user to broadcast messages to one or many specified Ethereum addresses.

<div class=" rabbit  p-5 ">

📥 <b>Need a quick reference?</b> Check out this GitHub repo: <a href="https://github.com/fabriguespe/xmtp-broadcast">xmtp-broadcast</a>

</div>

## Considerations

Before diving into the code let's consider important aspects while integrating consent features. For example, before making an allow or block action you should synchronize the updated consent list in order to **prevent overwriting network** consent from another app. For more details head to these sections of our docs:

- [Understand user consent preferences](https://xmtp.org/docs/build/user-consent#understand-user-consent-preferences): This section provides a comprehensive understanding of how user consent preferences are set, including but not limited to, direct actions within the app, settings adjustments, and responses to prompts.
- [Use consent preferences to respect user intent](https://xmtp.org/docs/build/user-consent#use-consent-preferences-to-respect-user-intent): Your app should aim to handle consent preferences appropriately because they are an expression of user intent.
- [Synchronize user consent preferences](https://xmtp.org/docs/build/user-consent#synchronize-user-consent-preferences):All apps that use the user consent feature must adhere to the logic described in this section to keep the consent list on the network synchronized with local app user consent preferences, and vice versa.

## Tutorial

---

- [Import the XMTP client and ethers libraries](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Set up the `walletAddresses` array](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Rate limiting](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Check which addresses can receive messages](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Check if address has given consent to the sender](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Refresh the consent list](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Loop through wallet address array to broadcast](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

- [Popup UI](https://junk-range-possible-git-portableconsenttutorials-xmtp-labs.vercel.app/docs/tutorials/portable-consent/broadcast#tutorial)

:::caution Caution

**Always synchronize consent states:** Before updating consent preferences on the network, ensure you refresh the consent list with `refreshConsentList`. Update the network's consent list only in these scenarios:

- **User Denies Contact:** Set to `denied` if a user blocks or unsubscribes.
- **User Allows Contact:** Set to `allowed` if a user subscribes or enables notifications.
- **Legacy Preferences:** Align the network with any existing local preferences.
- **User Response:** Set to `allowed` if the user has engaged in conversation.

Neglecting these guidelines can result in consent state conflicts and compromise user privacy.

:::

## Conclusion

Consent has really evolved through the years. It started with email, then email marketing, and was the wild west until laws like GPDR stepped in. This is new chapter in the history of consent in a new era for privacy, portability, and ownership.
