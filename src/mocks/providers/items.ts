import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Biologia",
    "profilePic": "assets/materias/biologia.jpg",

  };


  constructor() {
    let items = [
      {
        "name": "Biologia",
        "profilePic": "assets/materias/biologia.jpg",
        "teachers":
        [{
          "name": "Darwin",
          "teacherImg": "assets/materias/darwin.jpg"
        },
        {
          "name": "Dawkins",
          "teacherImg": "assets/materias/dawkins.jpg"
        },
        {
          "name": "Wilson",
          "teacherImg":"assets/materias/wilson.jpg"
        }
      ]
      },
      {
        "name": "Filosofia",
        "profilePic": "assets/materias/filosofia.png",
        "teachers":
        [{
          "name": "Kant",
          "teacherImg": "assets/materias/kant.jpg"
        },
        {
          "name": "Dawkins",
          "teacherImg": "assets/materias/rousseau.jpg"
        },
        {
          "name": "Wilson",
          "teacherImg":"assets/materias/socrates.jpg"
        }
      ]

      },
      {
        "name": "Fisica",
        "profilePic": "assets/materias/fisica.jpg",
        "teachers":
        [{
          "name": "Einstein",
          "teacherImg": "assets/materias/einstein.jpg"
        },
        {
          "name": "Euler",
          "teacherImg": "assets/materias/euler.jpg"
        },
        {
          "name": "Newton",
          "teacherImg":"assets/materias/newton.jpg"
        }
      ]

      },
      {
        "name": "Geografia",
        "profilePic": "assets/materias/geografia.jpg",
        "teachers":
        [{
          "name": "Milton Santos",
          "teacherImg": "assets/materias/MiltonSantos.jpg"
        },
        {
          "name": "Ritter",
          "teacherImg": "assets/materias/Ritter.jpg"
        },
        {
          "name": "Humboldt",
          "teacherImg":"assets/materias/humboldt.jpg"
        }
      ]

      },
      {
        "name": "Historia",
        "profilePic": "assets/materias/historia.jpg",
        "teachers":
        [{
          "name": "Boris Fausto",
          "teacherImg": "assets/materias/boris_fausto.jpg"
        },
        {
          "name": "Churchill",
          "teacherImg": "assets/materias/winston-churchill.jpg"
        },
        {
          "name": "Hobsbawn",
          "teacherImg":"assets/materias/hobsbawn.jpg"
        }
      ]

      },
      {
        "name": "Matematica",
        "profilePic": "assets/materias/matematica.png",
        "teachers":
        [{
          "name": "Galois",
          "teacherImg": "assets/materias/galois.jpg"
        },
        {
          "name": "Fermat",
          "teacherImg": "assets/materias/fermat.png"
        },
        {
          "name": "Terence Tao",
          "teacherImg":"assets/materias/tao.jpg"
        }
      ]

      },
      {
        "name": "Portugues",
        "profilePic": "assets/materias/portugues.jpg",
        "teachers":
        [{
          "name": "Machado de Assis",
          "teacherImg": "assets/materias/machado.jpg"
        },
        {
          "name": "Paulo Freire",
          "teacherImg": "assets/materias/paulo_freire.jpg"
        }

      ]

      },
      {
        "name": "Quimica",
        "profilePic": "assets/materias/quimica.png",
        "teachers":
        [{
          "name": "Bohr",
          "teacherImg": "assets/materias/bohr.jpg"
        },
        {
          "name": "Dalton",
          "teacherImg": "assets/materias/dalton.jpg"
        },
        {
          "name": "Marie Curie",
          "teacherImg": "assets/materias/currie.png"
        }

      ]

      },
      {
        "name": "Redaçao",
        "profilePic": "assets/materias/redacao.png",
        "teachers":
        [{
          "name": "Clarice",
          "teacherImg": "assets/materias/clarice.jpg"
        }]

      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
