export default {
  container: {
    // flexDirection: ["row","row-reverse","column","column-reverse"],
    // justifyContent: ["flex-start","flex-end","center","space-between","space-around"],
    // alignItems: ["flex-start","flex-end","center","stretch","baseline"],
    // flexWrap: ["nowrap","wrap","wrap-reverse"],
    // alignContent: ["flex-start","flex-end","center","stretch","space-between","space-around"]
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bigButton: {
    // alignSelf: ["auto","flex-start","flex-end","center","baseline","stretch"],
    // flexGrow: _.range(0,6),
    // order: _.range(-10,11)
    fontSize: 20,
    margin: 10,
    alignSelf: 'auto',
  },

  containerResults: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultTitle: {
    marginLeft: 30,
    marginRight: 30,
  },

  containerPre: {
    backgroundColor: '#ddd',
    padding: 20,
  },
};
