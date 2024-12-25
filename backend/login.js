import AxiosInstance from "./AxiosIntance"


async function login_for_visitor() {
    if (password.trim() == "" || password.trim() == "") {
      failed_to_login();
    }
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/login", data);

      if (response.status == 200) {
        // router.push("/(tabs)");
        const data = response.data;
        // const keys = [
        //   "contact_id",
        //   "visitor_id",
        //   "lname",
        //   "fname",
        //   "username",
        //   "email",
        //   "position_id",
        // ];
        // await AsyncStorage.multiRemove(keys);
        // console.log(data);
        // await AsyncStorage.setItem("visitor_id", String(data.data.visitor_id));
        // await AsyncStorage.setItem("lname", data.data.lname);
        // await AsyncStorage.setItem("fname", data.data.fname);
        // await AsyncStorage.setItem("username", data.data.username);
        // await AsyncStorage.setItem("email", data.data.email);
        // await AsyncStorage.setItem(
        //   "position_id",
        //   String(data.data.position_id)
        // );
      }
    } catch (e) {
      failed_to_login();
    }
  }

  async function login_for_contact() {
    if (password.trim() == "" || password.trim() == "") {
      failed_to_login();
    }
    AxiosInstance();
    const data = {
      email: email,
      password: password,
    };

    try {
      AxiosInstance();
      const response = await axios.post("/api/contact_login", data);
      console.log(response.data);
      if (response.status == 200) {
        const data = response.data;
        // router.push("/(tabs)");  
        // const keys = [
        //   "contact_id",
        //   "visitor_id",
        //   "lname",
        //   "fname",
        //   "username",
        //   "email",
        //   "position_id",
        // ];
        // await AsyncStorage.multiRemove(keys);
        // await AsyncStorage.setItem("contact_id", String(data.data.contact_id));
        // await AsyncStorage.setItem("lname", data.data.lname);
        // await AsyncStorage.setItem("fname", data.data.fname);
        // await AsyncStorage.setItem("username", data.data.username);
        // await AsyncStorage.setItem("email", data.data.email);
        // await AsyncStorage.setItem(
        //   "position_id",
        //   String(data.data.position_id)
        // );
      }
    } catch (e) {
      failed_to_login();
    }
  }


export default validateLogin