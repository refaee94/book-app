export function getNewID() {

      var myDate = new Date();
      var varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();

      return varID;

}

