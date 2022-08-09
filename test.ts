let universalId: number | string = "2";
universalId = 5;

function printId(id: number | string) {
  if (typeof id == "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function helloUser(user: string | string[]) {
  if (Array.isArray(user)) {
    const filterUser = user.filter((user) => user.toLowerCase() === "vitya");
    filterUser.length !== 0 ? console.log("Vitya") : console.log("not found");
  } else {
    if (user.toLowerCase() === "andrey") {
      console.log("Andrey");
    } else {
      console.log("Not found");
    }
  }
}

helloUser(["Andrey", "artem", "tymur"]);
