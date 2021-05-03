import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Michael",
      email: "admin@example.com",
      password: bcrypt.hashSync("password", 8),
      isAdmin: true,
    },
    {
      name: "Rhema",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
  ],
  products: [
    {
      productName: "Nike Runner",
      productCover: `https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/wntznda8eit234e6k4ns/air-vapormax-flyknit-3-big-kids-shoe-T461Dh.jpg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 790,
      numReviews: 10,
      brand: "Nike",
      category: "Shoe",
      description:
        "Run the streets in the Nike React Escape Run. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#34ebeb",
      navTintColor: "#34d0eb",
    },

    {
      productName: "React Escape",
      productCover: `https://media.gq-magazine.co.uk/photos/5ef0a48dfcb5fd13a37e5a3e/master/w_1920,c_limit/20200622-nike-02.jpg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 990,
      numReviews: 10,
      brand: "Nike",

      category: "Shoe",
      description:
        "Run the streets in the Nike React Escape Run. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#ffeedf",
      navTintColor: "#ffe4c3",
    },

    {
      productName: "Nike Met",
      productCover: `https://i.insider.com/5e38419b5bc79c4c7d4e1192?width=906&format=jpeg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 600,
      numReviews: 10,
      brand: "Nike",

      category: "Shoe",
      description:
        "Run the streets in the Nike met. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#ecf2f4",
      navTintColor: "#d7e3e7",
    },
    {
      productName: "Nike Met2",
      productCover: `https://footwearnews.com/wp-content/uploads/2019/07/nike-air-mag.jpg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 250,
      numReviews: 10,
      brand: "Nike",

      category: "Shoe",
      description:
        "Run the streets in the Nike met. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#abafb8",
      navTintColor: "#bec1d2",
    },
    {
      productName: "Reebok Basketball shoes",
      productCover: `https://cdn.runrepeat.com/i/reebok/26271/reebok-mens-shaq-attaq-black-azure-leather-black-azure-5eb6-main.jpg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 510,
      numReviews: 10,
      brand: "Nike",

      category: "Shoe",
      description:
        "Run the streets in the Reebok. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#abafb8",
      navTintColor: "#bec1d2",
    },
    {
      productName: "UnderAmour Ace 2.0",
      productCover: `https://dks.scene7.com/is/image/GolfGalaxy/19UARWHGHLGHTC20BFTW_Black_White?qlt=70&wid=600&fmt=pjpeg`,
      size: [
        { id: 1, label: "42" },
        { id: 2, label: "44" },
        { id: 3, label: "45" },
        { id: 4, label: "46" },
      ],
      rating: 4,
      price: 790,
      numReviews: 10,
      brand: "Nike",
      category: "Shoe",
      description:
        "Run the streets in the UnderAmour. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, quam.",
      backgroundColor: "#ff23",
      navTintColor: "#fed333",
    },
    {
      productName: "Black Printed Tshirt",
      productCover:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
      price: 19.49,
      numReviews: 15,
      brand: "Unknown",
      category: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.",
      backgroundColor: "#34ebeb",
      navTintColor: "#34d0eb",
      size: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
        { id: 3, label: "L" },
        { id: 4, label: "XL" },
      ],
      rating: 3,
    },
    {
      productName: "Black Printed Top (Women)",
      productCover:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=90",
      price: 19.49,
      numReviews: 15,
      brand: "Unknown",
      category: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.",
      backgroundColor: "#abafb8",
      navTintColor: "#bec1d2",
      size: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
        { id: 3, label: "L" },
        { id: 4, label: "XL" },
      ],
      rating: 3,
    },
    {
      productName: "White Solid Tshirt",
      productCover:
        "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
      price: 34.99,
      numReviews: 15,
      brand: "Unknown",
      category: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.",
      backgroundColor: "green",
      navTintColor: "#34d0eb",
      size: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
        { id: 3, label: "L" },
        { id: 4, label: "XL" },
      ],
      rating: 3,
    },
    {
      productName: "Black Solid Tshirt",
      productCover:
        "https://images.unsplash.com/photo-1512327428889-607eeb19efe8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
      price: 34.99,
      numReviews: 15,
      brand: "Unknown",
      category: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.",
      backgroundColor: "#ffeedf",
      navTintColor: "#ffe4c3",
      size: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
        { id: 3, label: "L" },
        { id: 4, label: "XL" },
      ],
      rating: 3,
    },
    {
      productName: "Red Top (Women)",
      productCover:
        "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
      price: 44.85,
      numReviews: 15,
      brand: "Unknown",
      category: "Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ornare urna. Duis egestas ligula quam, ut tincidunt ipsum blandit at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae justo congue, tempor urna vitae, placerat elit. Nulla nec consectetur dolor, in convallis erat. Fusce hendrerit id sem tristique congue. \n\nVestibulum mauris sapien, vulputate in lacus in, lacinia efficitur magna. Sed id massa ut magna eleifend lacinia et id tellus. Sed dignissim mollis lacus. Etiam laoreet ex eu sem euismod congue. In maximus porttitor imperdiet. Nulla eu dolor vehicula ligula mollis tristique ut in enim. Phasellus quis tempor velit. Vivamus sit amet orci ornare, pulvinar purus et, commodo magna. Nunc eu tortor vitae leo varius vehicula quis volutpat dolor.\n\nDonec interdum rutrum tellus, et rhoncus risus dignissim at. Aliquam sed imperdiet tortor, non aliquam sapien. Cras quis enim a elit fringilla vehicula. Aenean pulvinar ipsum a magna feugiat, a fermentum ante pellentesque. Mauris tincidunt placerat placerat. Quisque tincidunt enim sed metus fermentum maximus. Fusce eu tempus est.",
      backgroundColor: "#ff23",
      navTintColor: "#fed333",
      size: [
        { id: 1, label: "S" },
        { id: 2, label: "M" },
        { id: 3, label: "L" },
        { id: 4, label: "XL" },
      ],
      rating: 3,
    },
  ],
};
export default data;
