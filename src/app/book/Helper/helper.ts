export function getNewID() {

      const myDate = new Date();
      const varID = myDate.getHours() + "" + myDate.getMinutes() + "" + myDate.getSeconds() + "" + myDate.getMilliseconds();

      return varID;

}

