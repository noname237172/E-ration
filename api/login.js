let users = {
  "1001": {
    password: "1234",
    name: "Ramesh",
    address: "Bangalore",
    family: [
      {name:"Ramesh", age:45, role:"Father"},
      {name:"Lakshmi", age:40, role:"Mother"},
      {name:"Rahul", age:15, role:"Son"},
      {name:"Anita", age:12, role:"Daughter"}
    ]
  },
  "1002": {
    password: "5678",
    name: "Suresh",
    address: "Mysore",
    family: [
      {name:"Suresh", age:50, role:"Father"},
      {name:"Meena", age:45, role:"Mother"},
      {name:"Kiran", age:20, role:"Son"}
    ]
  },
  "1003": {
    password: "1111",
    name: "Ravi",
    address: "Mangalore",
    family: [
      {name:"Ravi", age:48, role:"Father"},
      {name:"Geeta", age:42, role:"Mother"},
      {name:"Pooja", age:18, role:"Daughter"}
    ]
  },
  "1004": {
    password: "2222",
    name: "Arun",
    address: "Hubli",
    family: [
      {name:"Arun", age:55, role:"Father"},
      {name:"Shobha", age:50, role:"Mother"}
    ]
  },
  "1005": {
    password: "3333",
    name: "Mahesh",
    address: "Tumkur",
    family: [
      {name:"Mahesh", age:46, role:"Father"},
      {name:"Savita", age:41, role:"Mother"}
    ]
  },
  "1006": {
    password: "4444",
    name: "Raju",
    address: "Belgaum",
    family: [
      {name:"Raju", age:38, role:"Father"},
      {name:"Rekha", age:35, role:"Mother"}
    ]
  }
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { id, password } = req.body;

    if (users[id] && users[id].password === password) {
      return res.status(200).json({
        success: true,
        user: users[id]
      });
    } else {
      return res.status(200).json({ success: false });
    }
  }
}
