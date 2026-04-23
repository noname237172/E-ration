// keep users outside so both login + signup use same data
let users = {

  "1001": {
    password: "1234",
    rationId: "KA0120241001",
    head: "Lakshmi",
    address: "Bangalore",
    family: [
      {name:"Lakshmi", role:"Head", age:40},
      {name:"Ramesh", role:"Husband", age:45},
      {name:"Rahul", role:"Son", age:15},
      {name:"Anita", role:"Daughter", age:12}
    ]
  },

  "1002": {
    password: "5678",
    rationId: "KA0220241002",
    head: "Sita",
    address: "Mysore",
    family: [
      {name:"Sita", role:"Head", age:38},
      {name:"Ravi", role:"Husband", age:42},
      {name:"Meena", role:"Daughter", age:18}
    ]
  },

  "1003": {
    password: "1111",
    rationId: "KA0320241003",
    head: "Asha",
    address: "Tumkur",
    family: [
      {name:"Asha", role:"Head", age:35},
      {name:"Kiran", role:"Husband", age:39}
    ]
  },

  "1004": {
    password: "2222",
    rationId: "KA0420241004",
    head: "Geeta",
    address: "Mandya",
    family: [
      {name:"Geeta", role:"Head", age:42},
      {name:"Raju", role:"Husband", age:48},
      {name:"Sonu", role:"Son", age:20}
    ]
  },

  "1005": {
    password: "3333",
    rationId: "KA0520241005",
    head: "Radha",
    address: "Hubli",
    family: [
      {name:"Radha", role:"Head", age:37},
      {name:"Mahesh", role:"Husband", age:41}
    ]
  },

  "1006": {
    password: "4444",
    rationId: "KA0620241006",
    head: "Nisha",
    address: "Mangalore",
    family: [
      {name:"Nisha", role:"Head", age:30},
      {name:"Ajay", role:"Husband", age:34},
      {name:"Pooja", role:"Daughter", age:10}
    ]
  }
};

export default function handler(req, res) {

  // LOGIN
  if(req.method === "POST") {
    const { id, password } = req.body;

    if (users[id] && users[id].password === password) {
      return res.status(200).json({ success: true, user: users[id] });
    } else {
      return res.status(200).json({ success: false });
    }
  }

  // SIGNUP
  if(req.method === "PUT") {
    const { id, password } = req.body;

    if(users[id]){
      return res.json({ success:false, msg:"User already exists" });
    }

    users[id] = {
      password: password,
      rationId: "KA" + id,
      head: "New User",
      address: "Update Address",
      family: []
    };

    return res.json({ success:true });
  }
}