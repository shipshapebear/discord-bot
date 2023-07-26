const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("g")
    .setDescription("Say something")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The member you want to play with")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("word").setDescription("What do you want to say?")
    ),

  async autocomplete(interaction) {
    const focusedOption = interaction.options.getFocused(true);
    let choices;

    console.log(focusedOption)
    // if (focusedOption.name === "word") {
    //   choices = ["tanga", "bobo", "braindead", "inutil", "ulaga", "salot"];
    // }

    // const filtered = choices.filter((choice) =>
    //   choice.startsWith(focusedOption.value)
    // );
    // await interaction.respond(
    //   filtered.map((choice) => ({ name: choice, value: choice }))
    // );
  },
  async execute(interaction) {
    const target = interaction.options.getUser("target");
    const word = interaction.options.getString("word");
    await interaction.reply(`${word} ${target} `);
  },
};
