const Event = require("../../models/event");
const User = require("../../models/user");
const events = async (eventIds) => {
    try {
      const events = await Event.find({ _id: { $in: eventIds } });
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  };
  
  const user = async (userId) => {
    try {
      const user = await User.findById(userId);
      return {
        ...user._doc,
        _id: user.id,
        createdEvents: events.bind(this, user._doc.createdEvents),
      };
    } catch (err) {
      throw err;
    }
  };

  const transformEvent = event => {
    return {
      ...event._doc,
      _id: event.id,
      date: new Date(event._doc.date),
      creator: user.bind(this, event.creator)
    };
  };

  exports.transformEvent=transformEvent;
  //exports.user=user;
  //exports.events=events;