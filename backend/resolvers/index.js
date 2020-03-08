export default {
  Query: {
    region: (value, args, context) => {
      return {
        ...args,
      };
    },
  },
  Region: {
    stations: (value, args, context) => {
      return [{}];
    },
  },
  Station: {
    // name: () => {
    //   return 'yay';
    // },
    // location: () => {
    //   return {
    //     latitude: 47.0,
    //     longitude: 13.0,
    //   }
    // }
  },
};