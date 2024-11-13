

const Items =[
    {
    id: 1,
    title: "Coffe Cup Bowl",
    description: "Add a touch of elegance to your morning routine with this beautifully crafted ceramic green cup. With its rich, vibrant color and sleek design, this cup is perfect for sipping your favorite beverages in style. Whether you’re enjoying a hot cup of coffee, tea, or hot chocolate, this mug brings a refreshing and calming vibe to your drinkware collection. Featuring a smooth, glossy green glaze, this cup brings a modern yet timeless touch to your kitchen, office, or dining area. Its minimalist design complements a variety of home decor styles.",
    price: '$14.50' ,
    category: "cup",
    categoryId: "1",
    imgUrl: "https://png.pngtree.com/png-vector/20231116/ourmid/pngtree-green-ceramic-cup-isolated-png-image_10537324.png",
    },
    {
      
      id: 2,
      title: "Vase",
      description: "Elevate your living space with this beautifully crafted ceramic vase, designed to add a touch of elegance and sophistication to any room. With its sleek, modern silhouette and high-quality finish, this vase is perfect for displaying fresh flowers, dried arrangements, or simply as a statement piece on its own.",
       price: '$24.00' ,
       category: "vase",
       categoryId: "2",
       imgUrl: "https://pngimg.com/uploads/vase/vase_PNG119.png"
      },
      {
      
        id: 3,
        title: "Red Rounded Cup",
        description: "Featuring a smooth, glossy finish and a timeless design, this vase is the perfect addition to any modern or minimalist home. Whether displayed on a coffee table, shelf, or mantle, it effortlessly complements a wide range of decor styles. The clean, rounded shape and glossy white finish make this vase a sophisticated and versatile decor piece that fits seamlessly into any room. Crafted from high-quality ceramic, this vase is durable and made to last. Its sturdy construction ensures it will be a long-lasting centerpiece in your home.",
         price: '$21.12' ,
         category: "cup",
         categoryId: "1",
         imgUrl: "https://freepngimg.com/thumb/tea_cup/34783-4-tea-cup-transparent.png"
        },
        {
      
          id: 4,
          title: "Rounded white vase",
          description: "Featuring a smooth, glossy finish and a timeless design, this vase is the perfect addition to any modern or minimalist home. Whether displayed on a coffee table, shelf, or mantle, it effortlessly complements a wide range of decor styles. The clean, rounded shape and glossy white finish make this vase a sophisticated and versatile decor piece that fits seamlessly into any room. Crafted from high-quality ceramic, this vase is durable and made to last. Its sturdy construction ensures it will be a long-lasting centerpiece in your home.",
       
           price: '$34.30' ,
           category: "vase",
           categoryId: "2",
           imgUrl: "https://static.vecteezy.com/system/resources/previews/021/345/585/original/white-flower-vase-isolated-on-a-transparent-background-png.png"
          }
          
    
    ]
    
     // eslint-disable-next-line no-unused-vars
     export const promise = new Promise((resolve) => {
    setTimeout(() =>{
    resolve(Items);
    }, 2000)
    });

    export const  getItems = (id) => {
      return Items.find((item) => item.id == id)
    };

    export const  getCategory = (categoryId) => {
      return Items.find((item) => item.categoryId == categoryId)
    };