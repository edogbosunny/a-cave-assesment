import Moment from 'moment';
import momentTZ from 'moment-timezone';
const MomentRange = require("moment-range");

const getRange = (date1, date2) => {
  let momentdata = MomentRange.extendMoment(Moment); /*add plugin to moment instance*/
  let
    range = momentdata().range(date1, date2), /*can handle leap year*/
    array = Array.from(range.by("days")); /*days, hours, years, etc.*/

  const data = array.map(m => {
    return m.format("YYYY-MM-DD")
  })
  return data;
}

const getAddedDate = (numberOfDays) => {
  return Moment().add(numberOfDays, 'days').format("YYYY-MM-DD");
}

const getTimeZone = (timezone) => {
  
  // console.log(Moment("2014-09-08T08:02:17-05:00").format("HH:MM"));
  var now = Moment.tz(timezone);
  let localOffset = now.utcOffset();
  now.tz("Africa/Lagos");
  var centralOffset = now.utcOffset();
  var diffInHours = localOffset - centralOffset;
  return diffInHours;


  // var jun = momentTZ("2014-06-01T12:00:00Z");
  // const a = jun.tz('Africa/Nairobi').format('Z');
  // console.log('---->', a);
}

export default { getRange, getAddedDate, getTimeZone };

