// Задача 1
type SuccessResponse<T> = {
  status: "success";
  data: { key: string; value: string };
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

function handleResponse<T>(response: ApiResponse<T>) {
  if (response.status === "success") {
    console.log(response.data);
  } else {
    console.log(response.message);
  }
}

// Задача 2
type Author = {
  name: string;
  email: string;
};

type Timestamp = {
  createdAt: string;
  updatedAt: string;
};

type Post = {
  title: string;
  content: string;
};

type BlogPost = Author & Timestamp & Post;

const post: BlogPost = {
  name: "Maksim",
  email: "Miroshnikov",
  createdAt: "30.11.2025",
  updatedAt: "30.11.2025",
  title: "TypeScript is easy?",
  content: "scientific",
};

// Задача 3
type Circle = {
  type: "circle";
  radius: number;
};

type Square = {
  type: "square";
  side: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
}

// Задача 4
function isString(value: any): value is string {
  return typeof value === "string";
}

function process(value: string | number): void {
  if (isString(value)) {
    console.log("Строка в верхнем регистре:", value.toUpperCase());
  } else {
    console.log("Число в квадрате:", value * value);
  }
}

// Задача 5
interface Movable {
  move(): void;
}

interface Drawable {
  draw(): void;
}

type MovableDrawable = Movable & Drawable;

class Robot implements MovableDrawable {
  move(): void {
    console.log("Робот идёт вперёд");
  }

  draw(): void {
    console.log("Рисуем робота на экране");
  }
}
