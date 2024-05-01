import { currentUser, setCurrentUserData } from "../signals";

export const getUserData = () => {
  fetch('https://owsaka4efb.execute-api.ap-south-1.amazonaws.com/Testing/users/getUserData', {
      method: "POST",
      body: JSON.stringify({
        username: currentUser()
      })
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json(); // assuming the response is JSON
    })
    .then((data) => {
      console.log(data);
      setCurrentUserData(data.Item)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}