const express = require("express");

// Swagger
const swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();

const port = 8000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

let courses = [
  {
    id: "11",
    name: "Learn ReactJS",
    price: 299,
  },
  {
    id: "22",
    name: "Learn AngularJS",
    price: 399,
  },
  {
    id: "33",
    name: "Learn VueJS",
    price: 499,
  },
];

app.get("/api/v1/courses", (req, res) => {
  res.status(200).json(courses);
});

app.get("/api/v1/lcoobject", (req, res) => {
  res.status(200).json({
    name: "Ankush",
    email: "ankush@gmail.com",
    number: "7018298756",
  });
});

app.get("/api/v1/lco", (req, res) => {
  res.send("Hello Message from LCO");
});

/* Assigment for swagger*/
const ankush = {
  id: 10,

  project: ["inhouseProject", "ClientProject"],

  report: [
    {
      grading: "A+",

      frontEnd: 90,

      backend: [
        {
          express: "A+",

          node: "A",
        },
      ],
      hobbies: ["criket", "watching TV"],
    },
  ],
};

app.get("/api/v1/ankush", (req, res) => {
  res.status(200).json(ankush);
});

app.listen(port, (req, res) => {
  console.log(`App listening on port ${port}`);
});
