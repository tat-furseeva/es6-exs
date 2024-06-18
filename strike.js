const channelName = getChannelName(channel);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const getRandomBoolean = () => Math.random() >= 0.5;