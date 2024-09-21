const resList = [
  {
    type: "restaurant",
    data: {
      name: "KFC",
      description: "Famous for its fried chicken and variety of sides.",
      cuisines: ["Fast Food", "Burgers", "Snacks"],
      rating: 4.2,
      costForTwo: 40000,
      address: {
        street: "123 Galle Road",
        city: "Colombo",
        province: "Western",
        zip: "00300",
      },
      contact: {
        phone: "+94-11-123-4567",
        email: "colombo@kfc.lk",
      },
      hours: {
        monday: "10:00 AM - 11:00 PM",
        tuesday: "10:00 AM - 11:00 PM",
        wednesday: "10:00 AM - 11:00 PM",
        thursday: "10:00 AM - 11:00 PM",
        friday: "10:00 AM - 12:00 AM",
        saturday: "10:00 AM - 12:00 AM",
        sunday: "10:00 AM - 11:00 PM",
      },
      imageId:
        "e93c84b2a72f9aac8ca3799f61139878/783282f6131ef2258e5bcd87c46aa87e",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Peppermint Cafe",
      description: "Known for its variety of delicious dishes.",
      cuisines: ["Italian", "Pasta", "Salads"],
      rating: 4.0,
      costForTwo: 30000,
      address: {
        street: "456 Main Street",
        city: "Colombo",
        province: "Western",
        zip: "00301",
      },
      contact: {
        phone: "+94-11-654-3210",
        email: "contact@resat.lk",
      },
      hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 10:00 PM",
      },
      imageId:
        "1243e3844b6d15eb5e2f4fae9072d8be/783282f6131ef2258e5bcd87c46aa87e",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Street Burger",
      description: "Famous for its vibrant atmosphere and diverse menu.",
      cuisines: ["Asian", "Chinese", "Seafood"],
      rating: 4.5,
      costForTwo: 50000,
      address: {
        street: "789 Broadway",
        city: "Colombo",
        province: "Western",
        zip: "00302",
      },
      contact: {
        phone: "+94-11-789-4560",
        email: "info@reshash.lk",
      },
      hours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM",
      },
      imageId:
        "f3a319c28b9fbab49913f398ddb7eea6/445a4b2618e10f7db95d4f17a85b117d",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Mr.Burger",
      description: "A cozy spot for coffee and light meals.",
      cuisines: ["Coffee", "Sandwiches", "Desserts"],
      rating: 4.1,
      costForTwo: 20000,
      address: {
        street: "2020 Oak Avenue",
        city: "Colombo",
        province: "Western",
        zip: "00304",
      },
      contact: {
        phone: "+94-11-345-6789",
        email: "info@respercent.lk",
      },
      hours: {
        monday: "08:00 AM - 08:00 PM",
        tuesday: "08:00 AM - 08:00 PM",
        wednesday: "08:00 AM - 08:00 PM",
        thursday: "08:00 AM - 08:00 PM",
        friday: "08:00 AM - 09:00 PM",
        saturday: "08:00 AM - 09:00 PM",
        sunday: "08:00 AM - 08:00 PM",
      },
      imageId:
        "91537a121363b7ea69a21b3981180183/783282f6131ef2258e5bcd87c46aa87e",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Domino's Pizza",
      description: "A trendy place with a diverse menu.",
      cuisines: ["American", "BBQ", "Seafood"],
      rating: 4.4,
      costForTwo: 42000,
      address: {
        street: "3030 Maple Lane",
        city: "Colombo",
        province: "Western",
        zip: "00305",
      },
      contact: {
        phone: "+94-11-456-7890",
        email: "info@resuphat.lk",
      },
      hours: {
        monday: "10:00 AM - 10:00 PM",
        tuesday: "10:00 AM - 10:00 PM",
        wednesday: "10:00 AM - 10:00 PM",
        thursday: "10:00 AM - 10:00 PM",
        friday: "10:00 AM - 11:00 PM",
        saturday: "10:00 AM - 11:00 PM",
        sunday: "10:00 AM - 10:00 PM",
      },
      imageId:
        "4aa9ab804ca9d12b24011877cf18d87b/50446f64f31cbefe66558fc47f50a9d6",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Indulge Desserts",
      description: "Offers a wide range of gourmet dishes.",
      cuisines: ["French", "Italian", "European"],
      rating: 4.6,
      costForTwo: 55000,
      address: {
        street: "4040 Birch Street",
        city: "Colombo",
        province: "Western",
        zip: "00306",
      },
      contact: {
        phone: "+94-11-567-8901",
        email: "contact@resand.lk",
      },
      hours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM",
      },
      imageId:
        "cc61cac9b1287a9a559ce0e3419abb94/719c6bd2757b08684c0faae44d43159d",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "POPEYES",
      description: "Popular for its modern twist on classic dishes.",
      cuisines: ["Mexican", "Tacos", "Burgers"],
      rating: 4.3,
      costForTwo: 35000,
      address: {
        street: "1010 Elm Street",
        city: "Colombo",
        province: "Western",
        zip: "00303",
      },
      contact: {
        phone: "+94-11-234-5678",
        email: "contact@resdollars.lk",
      },
      hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 10:00 PM",
      },
      imageId:
        "372bab3aadbf248b7bc7418d20b8e50c/50446f64f31cbefe66558fc47f50a9d6",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Spizzerts",
      description: "Offers a wide range of gourmet dishes.",
      cuisines: ["French", "Italian", "European"],
      rating: 3.8,
      costForTwo: 55000,
      address: {
        street: "4040 Birch Street",
        city: "Colombo",
        province: "Western",
        zip: "01306",
      },
      contact: {
        phone: "+94-11-567-8901",
        email: "contact@resand.lk",
      },
      hours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM",
      },
      imageId:
        "ac4284a53afa70f82673959ccc431257/719c6bd2757b08684c0faae44d43159d",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Cake Villa",
      description: "A great spot for a family dinner.",
      cuisines: ["Indian", "Chinese", "Thai"],
      rating: 4.2,
      costForTwo: 34000,
      address: {
        street: "5050 Cedar Drive",
        city: "Colombo",
        province: "Western",
        zip: "00307",
      },
      contact: {
        phone: "+94-11-678-9012",
        email: "info@resstar.lk",
      },
      hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 10:00 PM",
      },
      imageId:
        "6934f6c46ce8785070fed7e55f5eab4a/3ac2b39ad528f8c8c5dc77c59abb683d",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Pilawoos",
      description: "Offers a wide range of gourmet dishes.",
      cuisines: ["French", "Italian", "European"],
      rating: 4.6,
      costForTwo: 55000,
      address: {
        street: "4040 Birch Street",
        city: "Colombo",
        province: "Western",
        zip: "10306",
      },
      contact: {
        phone: "+94-11-567-8901",
        email: "contact@resand.lk",
      },
      hours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM",
      },
      imageId:
        "6cb44a0438bfa1d2d8a3339f58fd2c4c/719c6bd2757b08684c0faae44d43159d",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "A Bite",
      description: "A great spot for a family dinner.",
      cuisines: ["Indian", "Chinese", "Thai"],
      rating: 4.2,
      costForTwo: 34000,
      address: {
        street: "5050 Cedar Drive",
        city: "Colombo",
        province: "Western",
        zip: "00333",
      },
      contact: {
        phone: "+94-11-678-9012",
        email: "info@resstar.lk",
      },
      hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 10:00 PM",
      },
      imageId:
        "e853c17f00ff859a152869fb0622fbc5/d24a30ada2fef6c54cef8739d94823b0",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Frutti Natural Ice Cream",
      description: "Offers a wide range of gourmet dishes.",
      cuisines: ["French", "Italian", "European"],
      rating: 4.8,
      costForTwo: 55000,
      address: {
        street: "4040 Birch Street",
        city: "Colombo",
        province: "Western",
        zip: "04306",
      },
      contact: {
        phone: "+94-11-567-8901",
        email: "contact@resand.lk",
      },
      hours: {
        monday: "12:00 PM - 11:00 PM",
        tuesday: "12:00 PM - 11:00 PM",
        wednesday: "12:00 PM - 11:00 PM",
        thursday: "12:00 PM - 11:00 PM",
        friday: "12:00 PM - 12:00 AM",
        saturday: "12:00 PM - 12:00 AM",
        sunday: "12:00 PM - 11:00 PM",
      },
      imageId:
        "e8b1b84964f80d30ef745c262fa11c9a/783282f6131ef2258e5bcd87c46aa87e",
    },
  },
  {
    type: "restaurant",
    data: {
      name: "Tea Avenue",
      description: "A great spot for a family dinner.",
      cuisines: ["Indian", "Chinese", "Thai"],
      rating: 3,
      costForTwo: 34000,
      address: {
        street: "5050 Cedar Drive",
        city: "Colombo",
        province: "Western",
        zip: "00355",
      },
      contact: {
        phone: "+94-11-678-9012",
        email: "info@resstar.lk",
      },
      hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 10:00 PM",
      },
      imageId:
        "b4b8274a231d862148ff657f20d775b8/cc592037c936600295e9961933037e19",
    },
  },
];

export default resList;
