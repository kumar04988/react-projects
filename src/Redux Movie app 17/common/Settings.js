export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [

        // {
        //     breakpoint: 1304,
        //     settings: {
        //       slidesToShow: 4,
        //       slidesToScroll: 3,
        //       infinite: false,
        //       dots: false
        //     }
        //   },

        //   {
        //     breakpoint: 1500,
        //     settings: {
        //       slidesToShow: 6,
        //       slidesToScroll: 3,
        //       infinite: false,
        //       dots: false
        //     }
        //   },
          // {
          //   breakpoint: 1800,
          //   settings: {
          //     slidesToShow: 7,
          //     slidesToScroll: 3,
          //     infinite: false,
          //     dots: false
          //   }
          // },
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };